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
    },
    multilineColor:{
        color:'white'
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
        <Grid style={{backgroundColor:"#4caf50", marginTop: -20}}>
            <h2>ADD NEW TRANSACTION</h2>
            <form onSubmit={handleSubmit} className={classes.root}>
                <TextField InputProps={{
                    className: classes.multilineColor
                    }} id="standard-basic" label="Text" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                <TextField InputProps={{
                    className: classes.multilineColor
                    }} id="standard-basic" label="Amount(-ve/+ve expense)" type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                <br/>
                <Button variant="contained" color="secondary" type="submit">Add Transaction</Button>
            </form>
        </Grid>
    );
}

export default AddNew;
