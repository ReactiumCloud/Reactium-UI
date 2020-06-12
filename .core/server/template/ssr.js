import serialize from 'serialize-javascript';

module.exports = {
    version: '%TEMPLATE_VERSION%',
    template: (content, helmet, store, req, res) => {
        return `<!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
            <head>
                ${req.headTags}
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                ${req.headerScripts}
                ${req.appBindings}

                <script>
                    window.ssr = true;
                    window.defines = ${serialize(defines)};
                    window.INITIAL_STATE = ${serialize(store.getState())};
                    window.restAPI = '/api';
                    window.actiniumAppId = '${actiniumAppId}';
                    ${req.appGlobals}
                </script>
                ${req.scripts}
                ${req.appAfterScripts}
            </body>
        </html>`;
    },
};
