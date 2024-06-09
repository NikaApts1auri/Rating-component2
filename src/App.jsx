
import './App.css'
import Rate from './components/Rate'
import { useState } from 'react';
import Result from './components/Result';

function App() { 
  const [submit,setSubmit]=useState(false);
  const [rate,setRate] = useState();
   
  return (
    <>
  
     {submit ? (<Result/>)  :(<Rate setSubmit={setSubmit } />)}

    </>
  )
}

export default App
