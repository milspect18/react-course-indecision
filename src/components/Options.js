import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options:</h3>
            <button
                className='button button--link'
                onClick={props.deleteOptions}
            >
                Remove All
            </button>
        </div>
        {
            props.options.length === 0 &&
            <p className='widget__message'>Please add an option to get started!</p>
        }
        {
            // Build an array of Option components from our state array
            props.options.map((option, idx) => (
                <Option
                    key={idx}
                    optionText={option}
                    onRemove={props.deleteOption}
                    count={idx + 1}
                />
            ))
        }
    </div>
);

export default Options;
