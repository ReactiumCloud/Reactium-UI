module.exports = {
    header: {
        name: 'Reactium',
        title: 'Style Guide',
        logo: '/assets/images/atomic-reactor-logo.svg',
        version: '2.1.2',
    },
    overview: require('appdir/toolkit/overview').default,
    themes: [
        {
            name: 'Default',
            css: '/assets/style/style.css',
            selected: true,
        },
    ],
    sidebar: {
        closed: false,
        position: 'left',
    },
    toolbar: {
        buttons: [
            {
                icon: 'Dna',
                name: 'filter-all',
                label: 'All Elements',
            },
            {
                icon: 'Atom',
                name: 'filter-atom',
                label: 'Atoms',
            },
            {
                icon: 'Molecule',
                name: 'filter-molecule',
                label: 'Molecules',
            },
            {
                icon: 'Organism',
                name: 'filter-organism',
                label: 'Organisms',
            },
            {
                icon: 'Catalyst',
                name: 'filter-catalyst',
                label: 'Catalyst',
            },
            {
                icon: 'Page',
                name: 'filter-page',
                label: 'Pages',
            },
            {
                icon: 'Template',
                name: 'filter-template',
                label: 'Templates',
            },
            {
                name: 'spacer',
            },
            {
                icon: 'Settings',
                name: 'toggle-settings',
                cls: 'toggle',
            },
        ],
    },
    menu: {
        global: {
            label: 'Global',
            route: '/toolkit/global',
            elements: {
                theming: {
                    type: 'organism',
                    label: 'Theming',
                    route: '/toolkit/global/theming',
                    dna: '/toolkit/global/Theming',
                    component: require('appdir/toolkit/global/Theming').default,
                    readme: require('appdir/toolkit/global/Theming/readme')
                        .default,
                    hideCode: true,
                    hideDna: true,
                    hideDocs: false,
                },
                colors: {
                    type: 'atom',
                    label: 'Colors',
                    hideCode: true,
                    route: '/toolkit/global/colors',
                    dna: '/toolkit/global/Colors',
                    component: require('appdir/toolkit/global/Colors').default,
                    readme: require('appdir/toolkit/global/Colors/readme')
                        .default,
                },
                grid: {
                    type: 'atom',
                    label: 'Responsive Grid',
                    route: '/toolkit/global/grid',
                    dna: '/toolkit/global/Grid',
                    hideCode: true,
                    hideDna: true,
                    hideDocs: true,
                    component: require('appdir/toolkit/global/Grid').default,
                    readme: require('appdir/toolkit/global/Grid/readme')
                        .default,
                },
                spacing: {
                    type: 'atom',
                    label: 'Spacing',
                    route: '/toolkit/global/spacing',
                    dna: '/toolkit/global/Spacing',
                    hideCode: true,
                    hideDna: true,
                    hideDocs: true,
                    component: require('appdir/toolkit/global/Spacing').default,
                    readme: require('appdir/toolkit/global/Spacing/readme')
                        .default,
                },
            },
        },
        typography: {
            label: 'Typography',
            route: '/toolkit/typography',
            elements: {
                fonts: {
                    type: 'atom',
                    label: 'Fonts',
                    route: '/toolkit/typography/fonts',
                    dna: '/toolkit/typography/Fonts',
                    hideDna: true,
                    hideCode: true,
                    hideDocs: true,
                    component: require('appdir/toolkit/typography/Fonts')
                        .default,
                    readme: require('appdir/toolkit/typography/Fonts/readme')
                        .default,
                },
                headings: {
                    type: 'atom',
                    label: 'Headings',
                    route: '/toolkit/typography/headings',
                    dna: '/toolkit/typography/Headings',
                    hideCode: true,
                    component: require('appdir/toolkit/typography/Headings')
                        .default,
                    readme: require('appdir/toolkit/typography/Headings/readme')
                        .default,
                },
                paragraph: {
                    type: 'atom',
                    label: 'Paragraph',
                    route: '/toolkit/typography/paragraph',
                    dna: '/toolkit/typography/Paragraph',
                    component: require('appdir/toolkit/typography/Paragraph')
                        .default,
                    readme: require('appdir/toolkit/typography/Paragraph/readme')
                        .default,
                },
                'text-link': {
                    type: 'atom',
                    label: 'Text Link',
                    route: '/toolkit/typography/text-link',
                    dna: '/toolkit/typography/TextLink',
                    hideDna: true,
                    hideCode: true,
                    component: require('appdir/toolkit/typography/TextLink')
                        .default,
                    readme: require('appdir/toolkit/typography/TextLink/readme')
                        .default,
                },
                'text-strong': {
                    type: 'atom',
                    label: 'Strong Text',
                    route: '/toolkit/typography/text-strong',
                    dna: '/toolkit/typography/TextStrong',
                    component: require('appdir/toolkit/typography/TextStrong')
                        .default,
                    readme: require('appdir/toolkit/typography/TextStrong/readme')
                        .default,
                },
                'text-italic': {
                    type: 'atom',
                    label: 'Italic Text',
                    route: '/toolkit/typography/text-italic',
                    dna: '/toolkit/typography/TextItalic',
                    component: require('appdir/toolkit/typography/TextItalic')
                        .default,
                    readme: require('appdir/toolkit/typography/TextItalic/readme')
                        .default,
                },
                'text-underline': {
                    type: 'atom',
                    label: 'Underlined Text',
                    route: '/toolkit/typography/text-underline',
                    dna: '/toolkit/typography/TextUnderline',
                    component: require('appdir/toolkit/typography/TextUnderline')
                        .default,
                    readme: require('appdir/toolkit/typography/TextUnderline/readme')
                        .default,
                },
                'text-strike': {
                    type: 'atom',
                    label: 'Strikethrough Text',
                    route: '/toolkit/typography/text-strike',
                    dna: '/toolkit/typography/TextStrike',
                    component: require('appdir/toolkit/typography/TextStrike')
                        .default,
                    readme: require('appdir/toolkit/typography/TextStrike/readme')
                        .default,
                },
                'text-super': {
                    type: 'atom',
                    label: 'Superscript',
                    route: '/toolkit/typography/text-super',
                    dna: '/toolkit/typography/TextSuper',
                    component: require('appdir/toolkit/typography/TextSuper')
                        .default,
                    readme: require('appdir/toolkit/typography/TextSuper/readme')
                        .default,
                },
                'text-sub': {
                    type: 'atom',
                    label: 'Subscript',
                    route: '/toolkit/typography/text-sub',
                    dna: '/toolkit/typography/TextSub',
                    component: require('appdir/toolkit/typography/TextSub')
                        .default,
                    readme: require('appdir/toolkit/typography/TextSub/readme')
                        .default,
                },
                'text-small': {
                    type: 'atom',
                    label: 'Small Text',
                    route: '/toolkit/typography/text-small',
                    dna: '/toolkit/typography/TextSmall',
                    component: require('appdir/toolkit/typography/TextSmall')
                        .default,
                    readme: require('appdir/toolkit/typography/TextSmall/readme')
                        .default,
                },
                blockquote: {
                    type: 'atom',
                    label: 'Blockquote',
                    route: '/toolkit/typography/blockquote',
                    dna: '/toolkit/typography/Blockquote',
                    component: require('appdir/toolkit/typography/Blockquote')
                        .default,
                    readme: require('appdir/toolkit/typography/Blockquote/readme')
                        .default,
                },
                'list-unordered': {
                    type: 'atom',
                    label: 'Unordered List',
                    route: '/toolkit/typography/list-unordered',
                    dna: '/toolkit/typography/ListUnordered',
                    component: require('appdir/toolkit/typography/ListUnordered')
                        .default,
                    readme: require('appdir/toolkit/typography/ListUnordered/readme')
                        .default,
                },
                'list-ordered': {
                    type: 'atom',
                    label: 'Ordered List',
                    route: '/toolkit/typography/list-ordered',
                    dna: '/toolkit/typography/ListOrdered',
                    component: require('appdir/toolkit/typography/ListOrdered')
                        .default,
                    readme: require('appdir/toolkit/typography/ListOrdered/readme')
                        .default,
                },
                'text-align': {
                    type: 'atom',
                    label: 'Text Align',
                    hideCode: true,
                    hideDna: true,
                    hideDocs: true,
                    route: '/toolkit/typography/text-align',
                    dna: '/toolkit/typography/TextAlign',
                    component: require('appdir/toolkit/typography/TextAlign')
                        .default,
                    readme: require('appdir/toolkit/typography/TextAlign/readme')
                        .default,
                },
            },
        },
        buttons: {
            label: 'Buttons',
            route: '/toolkit/buttons/button-overview',
            elements: {
                'button-overview': {
                    type: 'organism',
                    label: 'Overview',
                    route: '/toolkit/buttons/button-overview',
                    dna: '/toolkit/buttons/ButtonOverview',
                    hideCode: true,
                    component: require('appdir/toolkit/buttons/ButtonOverview')
                        .default,
                },
                'button-state': {
                    type: 'atom',
                    label: 'Button States',
                    route: '/toolkit/buttons/button-state',
                    dna: '/toolkit/buttons/ButtonState',
                    hideDna: true,
                    hideCode: true,
                    component: require('appdir/toolkit/buttons/ButtonState')
                        .default,
                    readme: require('appdir/toolkit/buttons/ButtonState/readme')
                        .default,
                },
                'button-size': {
                    type: 'atom',
                    label: 'Button Sizing',
                    route: '/toolkit/buttons/button-size',
                    dna: '/toolkit/buttons/ButtonSize',
                    hideDna: true,
                    hideCode: true,
                    component: require('appdir/toolkit/buttons/ButtonSize')
                        .default,
                    readme: require('appdir/toolkit/buttons/ButtonSize/readme')
                        .default,
                },
                'button-block': {
                    type: 'atom',
                    label: 'Button Block',
                    route: '/toolkit/buttons/button-block',
                    dna: '/toolkit/buttons/ButtonBlock',
                    hideDna: true,
                    component: require('appdir/toolkit/buttons/ButtonBlock')
                        .default,
                    readme: require('appdir/toolkit/buttons/ButtonBlock/readme')
                        .default,
                },
            },
        },
        form: {
            label: 'Form Elements',
            route: '/toolkit/form',
            elements: {
                'input-group-molecule': {
                    type: 'molecule',
                    label: 'Input Group',
                    route: '/toolkit/form/input-group-molecule',
                    dna: '/toolkit/form/InputGroupMolecule',
                    component: require('appdir/toolkit/form/InputGroupMolecule')
                        .default,
                    readme: require('appdir/toolkit/form/InputGroupMolecule/readme')
                        .default,
                    hideCode: true,
                },
                textfield: {
                    type: 'atom',
                    label: 'Text Field',
                    route: '/toolkit/form/textfield',
                    dna: '/toolkit/form/Textfield',
                    component: require('appdir/toolkit/form/Textfield').default,
                    readme: require('appdir/toolkit/form/Textfield/readme')
                        .default,
                },
                textarea: {
                    type: 'atom',
                    label: 'Text Area',
                    route: '/toolkit/form/textarea',
                    dna: '/toolkit/form/Textarea',
                    component: require('appdir/toolkit/form/Textarea').default,
                    readme: require('appdir/toolkit/form/Textarea/readme')
                        .default,
                },
                select: {
                    type: 'atom',
                    label: 'Select',
                    route: '/toolkit/form/select',
                    dna: '/toolkit/form/Select',
                    component: require('appdir/toolkit/form/Select').default,
                    readme: require('appdir/toolkit/form/Select/readme')
                        .default,
                },
            },
        },
        components: {
            label: 'Components',
            route: '/toolkit/components',
            hideEmpty: false,
            elements: {
                'data-table-molecule': {
                    type: 'molecule',
                    label: 'Data Table',
                    route: '/toolkit/components/data-table-molecule',
                    dna: '/toolkit/components/DataTableMolecule',
                    component: require('appdir/toolkit/components/DataTableMolecule')
                        .default,
                    readme: require('appdir/toolkit/components/DataTableMolecule/readme')
                        .default,
                    hideCode: true,
                },
                'dropdown-molecule': {
                    type: 'molecule',
                    label: 'Dropdown',
                    route: '/toolkit/components/dropdown-molecule',
                    dna: '/toolkit/components/DropdownMolecule',
                    component: require('appdir/toolkit/components/DropdownMolecule')
                        .default,
                    readme: require('appdir/toolkit/components/DropdownMolecule/readme')
                        .default,
                    hideCode: true,
                },
                'radio-atom': {
                    type: 'atom',
                    label: 'Radio',
                    route: '/toolkit/components/radio-atom',
                    dna: '/toolkit/components/RadioAtom',
                    component: require('appdir/toolkit/components/RadioAtom')
                        .default,
                    readme: require('appdir/toolkit/components/RadioAtom/readme')
                        .default,
                    hideCode: true,
                },
                'checkbox-atom': {
                    type: 'atom',
                    label: 'Checkbox',
                    route: '/toolkit/components/checkbox-atom',
                    dna: '/toolkit/components/CheckboxAtom',
                    component: require('appdir/toolkit/components/CheckboxAtom')
                        .default,
                    readme: require('appdir/toolkit/components/CheckboxAtom/readme')
                        .default,
                    hideCode: true,
                },
                'toggle-molecule': {
                    type: 'molecule',
                    label: 'Toggle',
                    route: '/toolkit/components/toggle-molecule',
                    dna: '/toolkit/components/ToggleMolecule',
                    component: require('appdir/toolkit/components/ToggleMolecule')
                        .default,
                    readme: require('appdir/toolkit/components/ToggleMolecule/readme')
                        .default,
                    hideCode: true,
                },
                'button-atom': {
                    type: 'atom',
                    label: 'Button',
                    route: '/toolkit/components/button-atom',
                    dna: '/toolkit/components/ButtonAtom',
                    component: require('appdir/toolkit/components/ButtonAtom')
                        .default,
                    readme: require('appdir/toolkit/components/ButtonAtom/readme')
                        .default,
                    hideCode: true,
                },
                'collapsible-molecule': {
                    type: 'molecule',
                    label: 'Collapsible',
                    route: '/toolkit/components/collapsible-molecule',
                    dna: '/toolkit/components/CollapsibleMolecule',
                    component: require('appdir/toolkit/components/CollapsibleMolecule')
                        .default,
                    readme: require('appdir/toolkit/components/CollapsibleMolecule/readme')
                        .default,
                    hideCode: true,
                },
            },
        },
        pages: {
            label: 'Pages',
            route: '#',
            hideEmpty: true,
            elements: {},
        },
        icons: {
            label: 'Icons',
            route: '/toolkit/icons',
            hideEmpty: true,
            elements: {
                'feather-icons': {
                    type: 'atom',
                    label: 'Feather Icons',
                    route: '/toolkit/icons/feather-icons',
                    dna: '/toolkit/icons/Feather',
                    component: require('appdir/toolkit/icons/Feather').default,
                    readme: require('appdir/toolkit/icons/Feather/readme')
                        .default,
                },
                'linear-icons': {
                    type: 'atom',
                    label: 'Linear Icons',
                    route: '/toolkit/icons/linear-icons',
                    dna: '/toolkit/icons/Linear',
                    component: require('appdir/toolkit/icons/Linear').default,
                    readme: require('appdir/toolkit/icons/Linear/readme')
                        .default,
                },
            },
        },
    },
};
