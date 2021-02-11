import React from 'react';
import { useSelector } from 'react-redux';
import {Grid} from '@material-ui/core';

const Display = () => {

    const amount = useSelector(state => state.amount)
    const income = amount.filter(item => item > 0).reduce((acc,item)=> (acc+=item),0)
    const expense = amount.filter(item => item < 0).reduce((acc,item)=> (acc+=item),0)*-1

    return (
        <Grid style={{display:"flex", justifyContent:"center", backgroundColor:"#ffc400"}}>
            <Grid style={{padding: 10}}>
                <h4>INCOME</h4>
                <div style={{color:"white", fontSize: 30, fontWeight:"bold"}} >{income}</div>
            </Grid>
            <Grid style={{padding: 10}}>
                <h4>EXPENSE</h4>
                <div style={{color:"white", fontSize: 30, fontWeight:"bold"}} >{expense}</div>
            </Grid>
        </Grid>
    );
}

export default Display;
