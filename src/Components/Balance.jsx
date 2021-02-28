import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';

const Balance = () => {
    const amount = useSelector(state => state.amount)
    const total = amount.reduce((acc, item)=> (acc += item), 0)

    return (
        <Grid  >
            <h3>YOUR BALANCE</h3>
            <div style={{fontSize: 30, fontWeight:"bold"}} >Rs.  {total}</div> 
        </Grid>
    );
}

export default Balance;
