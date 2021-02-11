import { Button, Grid, makeStyles } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteText } from '../Redux/action';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        margin: 10,
        '& > *':{
            padding: 10
        }
    },
    
}));

const History = () => {
    const classes = useStyles();
    const data = useSelector(state => state.expText)
    console.log(data)
    const dispatch = useDispatch()
    
    const handleDelete =(id)=> {
        dispatch(deleteText(id))
    }
    return (
        <Grid style={{backgroundColor:"#4dabf5", marginTop: -20, height:"280px"}}>
        <h2>HISTORY</h2>
        {
            data.map((item) => (
                <div key={item.id} className={classes.root}>
                    <div style={{color: "white", fontSize:"20px"}} >{item.text}</div>
                    <Button variant="contained" color="secondary" onClick={()=> handleDelete(item.id)}>delete</Button>
                </div>
            ))
        }
        </Grid>
    );
}

export default History;
