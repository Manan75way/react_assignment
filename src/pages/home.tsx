import React from 'react'
import { useGetAllUserQuery } from '../services/api'


const Home = () => {

const {isLoading,isError,isSuccess,data,error} = useGetAllUserQuery("");
console.log(isLoading,isError,isSuccess,data,error);


const handleClick = async()=>{
  
  
}

  return (
    <div>
      Home page
      <button onClick={handleClick}>Get all user</button>
    </div>
  )
}

export default Home
