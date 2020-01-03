import React from 'react';

let input;

const CheckListForm = ({pId, onSubmit}) => (
    <form
        onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()){
                return;
            }
            onSubmit({pId} ,input.value.trim());
            input.value = '';
        }}
    >
        <input
            ref={node => {
                input = node;
            }}
        />
        <button type="submit">＋</button>
    </form>
);

export default CheckListForm;