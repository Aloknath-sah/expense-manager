import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import { addNewText } from '../Redux/action';
import {useDispatch} from 'react-redux';
import { Button, Grid, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *':{
            margin: 10,
            
        }
    }
}));

const AddNew = () => {
    const classes = useStyles();
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch()

    const handleSubmit=(e)=> {
        e.preventDefault()
        let payload ={
            id: uuid(),
            text: text,
            amount: amount
        }
        dispatch(addNewText(payload))
    }

    return (
        <Grid>
            <h2>ADD NEW TRANSACTION</h2>
            <div style={{width:"25%", margin:"auto"}} >
                <hr/>
            </div>
            <form onSubmit={handleSubmit} className={classes.root}>
                <div >
                    <TextField style={{width:"25%", margin:"auto"}} label="Text" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
                <div>
                    <TextField style={{width:"25%", margin:"auto"}} label="Amount(-ve/+ve expense)" type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </div>
                <br/>
                <Button style={{width:"25%", margin:"auto"}} variant="contained" color="primary" type="submit">Add Transaction</Button>
            </form>
        </Grid>
    );
}

export default AddNew;
