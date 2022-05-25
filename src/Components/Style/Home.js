import like from './assets/like.jpg'
import dislike from './assets/dislike.jpg'
import home from './assets/home.jpg'
import './Home.css'
import {useState} from 'react'


  const Home=()=>
  {

   const[name,setName]=useState('Annie');
   const[age,setAge]=useState(25);
  const handleClick=()=>
  {
   setName('Ashifa');
   setAge('20');
  }
  return (
    <div className="app">Home
      <div className='hi'>
        <h1>welome to home page </h1>
        <h2>{name} is {age}years old</h2>
        </div>

        <button className="button"onClick={handleClick}>Click me</button>
        <div className='app-img'>
      <img src={home} alt="" className="home" />
      <div className="btn">
      <img src={like} alt="" className="like" />
         
      </div>
      <div className='btn1'>
      <img src={dislike} alt="" className="dislike" />
            
      </div>
   </div>

    </div>
  )
}

export default Home