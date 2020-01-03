import React from 'react'


const CheckBox = ({onClick, content}) => (
    <button type="button" onClick={onClick}>
        {content}
    </button>
);

export default CheckBox;