import { useState } from 'react'

const Home = () => {
    const [name,setName]=useState('Ramu');
    const [age,setAge]=useState('25');
    const handleClick = () => {
    console.log("Hello Everyone");
    setAge('35');
    setName("Raju");
    }
    return (
    <div className="home">
    <h2> Home Page</h2>
    <p> Name: {name}, Age: {age} </p>
    <button onClick={()=>handleClick()}>Click
   me</button>
    </div>
    );
   }
   export default Home;