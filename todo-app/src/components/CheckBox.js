import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'


const CheckBox = ({completed, onClick}) => (
    <Checkbox variant="contained" color="primary" checked={completed} onChange={onClick} />
);

export default CheckBox;