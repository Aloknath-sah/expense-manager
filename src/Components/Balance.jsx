import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';

const Balance = () => {
    const amount = useSelector(state => state.amount)
    const total = amount.reduce((acc, item)=> (acc += item), 0)

    return (
        <Grid style={{backgroundColor:"#ffa733", marginTop: -20}} >
            <h3>BALANCE</h3>
            <div style={{color:"white", fontSize: 30, fontWeight:"bold"}} >Rs.  {total}</div> 
        </Grid>
    );
}

export default Balance;
