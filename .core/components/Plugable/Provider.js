import React, { Component, Fragment } from 'react';
import PlugableContext from './Context';
import deps from 'dependencies';
import op from 'object-path';

/**
 * -----------------------------------------------------------------------------
 * React Component: PlugableProvider
 * -----------------------------------------------------------------------------
 */
export default class PlugableProvider extends Component {
    static defaultProps = {
        filter: _ => true,
        mapper: _ => _,
        sort: (a, b) => {
            const aOrder = op.get(a, 'order', 0);
            const bOrder = op.get(b, 'order', 0);

            return aOrder - bOrder;
        },
    };

    render() {
        const { filter, sort, mapper } = this.props;
        const context = {
            plugins: Object.values(deps().plugins),
            filter: filter,
            sort: sort,
            mapper: mapper,
        };

        return (
            <PlugableContext.Provider value={context}>
                {this.props.children}
            </PlugableContext.Provider>
        );
    }
}
