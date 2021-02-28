import './App.css';
import Balance from './Components/Balance'
import Display from './Components/Display'
import History from './Components/History'
import AddNew from './Components/AddNew'
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid className="App">
      <h1 style={{ padding: 10, marginTop: -10}} >EXPENSE MANAGER</h1>
      <Balance/>
      <Display/>
      <History/>
      <AddNew/>
    </Grid>
  );
}

export default App;
