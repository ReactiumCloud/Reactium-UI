import _ from 'underscore';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import Button from 'components/common-ui/Button';
import { Feather } from 'components/common-ui/Icon';

const noop = () => {};

let Pagination = (
    {
        arrows,
        className,
        color,
        namespace,
        numbers,
        onClick,
        onNextClick,
        onPrevClick,
        page,
        pages,
        size,
    },
    ref,
) => {
    const renderNumbers = () => {
        let pgs = _.range(1, pages + 1);
        let idx = pgs.indexOf(page) - Math.floor(numbers / 2);
        idx = Math.max(0, idx);

        let sel = Array.from(pgs).splice(idx, numbers);

        if (sel.length < numbers) {
            const diff = numbers - sel.length;
            idx -= diff;
            idx = Math.max(0, idx);

            sel = Array.from(pgs).splice(idx, numbers);
        }

        return sel.map(n => (
            <Button
                key={`${namespace}-button-${n}`}
                onClick={e => onClick(e, n)}
                color={color}
                size={size}
                readOnly={Boolean(page === n)}
                className={cn({
                    'px-xs-8': true,
                    active: page === n,
                })}>
                {n}
            </Button>
        ));
    };

    const renderCurrent = () => {
        const style = { minWidth: 50 };

        if (arrows) {
            style.paddingLeft = 2;
            style.paddingRight = 2;
        }

        return (
            <Button style={style} color={color} size={size} readOnly>
                {page}
                <span className='lowercase mx-xs-8'>of</span>
                {pages}
            </Button>
        );
    };

    const render = () =>
        pages < 2 ? null : (
            <div
                ref={ref}
                className={cn({
                    [namespace]: !!namespace,
                    [className]: !!className,
                })}>
                <div className='btn-group'>
                    {arrows && (
                        <Button
                            color={color}
                            size={size}
                            onClick={onPrevClick}
                            className='px-xs-4'>
                            <Feather.ChevronLeft width={14} height={14} />
                        </Button>
                    )}
                    {numbers < 2 && renderCurrent()}
                    {numbers > 1 && renderNumbers()}
                    {arrows && (
                        <Button
                            color={color}
                            size={size}
                            onClick={onNextClick}
                            className='px-xs-4'>
                            <Feather.ChevronRight width={14} height={14} />
                        </Button>
                    )}
                </div>
            </div>
        );

    return render();
};

Pagination = forwardRef(Pagination);

Pagination.COLOR = Button.ENUMS.COLOR;

Pagination.propTypes = {
    arrows: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    namespace: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    numbers: PropTypes.number,
    onClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onPrevClick: PropTypes.func,
    page: PropTypes.number,
    pages: PropTypes.number,
};

Pagination.defaultProps = {
    arrows: true,
    className: null,
    color: Button.ENUMS.COLOR.CLEAR,
    namespace: 'ar-pagination',
    numbers: 0,
    onClick: noop,
    onNextClick: noop,
    onPrevClick: noop,
    page: 0,
    pages: 0,
    size: Button.ENUMS.SIZE.XS,
};

export default Pagination;
