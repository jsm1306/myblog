import './App.css';
const myFunction = ()=> {
 const myStr="Hello";
 const a=2.5;
 const myLink="https://www.google.com";
 return (
 <div className="App">
 <div className="content">
 <h1>Hello World</h1>
 <h1>{myStr}</h1>
 <h1>{a}</h1>
<a href = {myLink}> MyLink </a>
 </div>
 </div>
 );
}
export default myFunction;