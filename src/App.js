import './App.css';
import data from './data.js';


const App = () => {
  return (
    <div className='fram-container'>
      <ul className='comments-container'>
      {data.map((eachObj) => {
        return (
        <Fram key = {eachObj.id} data = {eachObj}/>
        )
      })}
     </ul>
    </div>  
  );
};

const Fram = (props) => {
  const {email,name,body} = props.data;
  return(
    <li>
      <div className='mail-name-card'>
        <h3 className='email'>{email}</h3>
        <h3 className='name'>{name}</h3>
      </div>
      <p className='desc'>{body}</p>
    </li>
  );
}
export default App;
