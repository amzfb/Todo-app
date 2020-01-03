import React from 'react';
import CheckBox from './CheckBox';

const CheckListChildren = ({id, text, completed, onCheckClick}) => (
    <li>
        <CheckBox onClick={() => onCheckClick(id)} content={completed ? '✅' : '☐'} /> {text}
    </li>
     
);

export default CheckListChildren;