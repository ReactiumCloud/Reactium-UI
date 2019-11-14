const tree = require('directory-tree');
const path = require('path');
const fs = require('fs-extra');
const _ = require('underscore');
const op = require('object-path');
const prettier = require('prettier');
const moment = require('moment');
const chalk = require('chalk');
const diff = require('fast-diff');
const hb = require('handlebars');

const flattenRegistry = (registry = { children: [] }, manifest = []) =>
    registry.children.reduce((manifest, item) => {
        if ('children' in item) {
            return flattenRegistry(item, manifest);
        }
        if ('path' in item) {
            manifest.push(item);
        }
        return manifest;
    }, manifest);

const sources = (sourcePath, searchParams) =>
    flattenRegistry(tree(sourcePath, searchParams));

const find = (searches = [], sourceMappings = [], searchParams) => {
    let mappings = searches.reduce((mappings, { name, type }) => {
        mappings[name] = {
            type,
            imports: [],
            originals: {},
        };
        return mappings;
    }, {});

    sourceMappings.forEach(sourceMapping => {
        mappings = sources(sourceMapping.from)
            .map(file => file.path)
            .reduce((mappings, file) => {
                searches.forEach(({ name, pattern, ignore }) => {
                    if (pattern.test(file) && (!ignore || !ignore.test(file))) {
                        const normalized = file
                            .replace(/\\/g, '/')
                            .replace(sourceMapping.from, sourceMapping.to)
                            .replace(/.jsx?$/, '');

                        mappings[name].originals[normalized] = file;
                        mappings[name].imports.push(normalized);
                    }
                });

                return mappings;
            }, mappings);
    });

    return mappings;
};

module.exports = function({
    manifestFilePath,
    manifestConfig,
    manifestTemplateFilePath,
    manifestProcessor,
}) {
    const patterns = op.get(manifestConfig, 'patterns', []);
    const sourceMappings = op.get(manifestConfig, 'sourceMappings', []);
    const searchParams = op.get(manifestConfig, 'searchParams', {
        extensions: /\.jsx?$/,
        exclude: [/.ds_store/i, /.core\/.cli\//i, /.cli\//i],
    });

    const manifest = find(patterns, sourceMappings, searchParams);

    const template = hb.compile(
        fs.readFileSync(manifestTemplateFilePath, 'utf-8'),
    );

    let fileContents = template(
        manifestProcessor({
            manifest,
            contexts: manifestConfig.contexts,
            manifestConfig,
        }),
    );

    if (/.jsx?$/.test(manifestFilePath)) {
        fileContents = prettier.format(fileContents, {
            parser: 'babel',
            trailingComma: 'all',
            singleQuote: true,
            tabWidth: 4,
            useTabs: false,
        });
    }

    const manifestHasChanged = () => {
        const prevFileContents = fs.readFileSync(manifestFilePath, 'utf-8');
        const changes = diff(prevFileContents, fileContents).filter(
            ([code, change]) => code !== 0,
        );
        return changes.length > 0;
    };

    // Write Manifest only if it does not exist or has changed
    if (!fs.existsSync(manifestFilePath) || manifestHasChanged()) {
        console.log(
            `[${moment().format('HH:mm:ss')}] Writing  '${chalk.cyan(
                manifestFilePath,
            )}'...`,
        );
        const dir = path.dirname(manifestFilePath);
        fs.ensureDirSync(dir);
        fs.writeFileSync(manifestFilePath, fileContents);
    }
};
