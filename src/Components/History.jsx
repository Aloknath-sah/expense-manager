import { Button, Grid, makeStyles } from '@material-ui/core';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteText } from '../Redux/action';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent:"center",
        margin: 10,
        width: "25%",
        margin:"auto",
        backgroundColor:"#eeeeee",
        '& > *':{
            padding: 10,
            flex: 1
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
        <Grid>
        <h2>HISTORY</h2>
        <div style={{width:"25%", margin:"auto"}} >
            <hr/>
        </div>
        {
            data.map((item) => (
                <div key={item.id} className={classes.root}>
                    <div style={{fontSize:"20px"}} >{item.text}</div>
                    <DeleteIcon onClick={()=> handleDelete(item.id)}/>
                </div>
            ))
        }
        </Grid>
    );
}

export default History;
