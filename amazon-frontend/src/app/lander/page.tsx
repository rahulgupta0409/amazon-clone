"use client"
import React from 'react'
import { Button } from '@mui/material'
import { redirect, useRouter } from 'next/navigation'
import Cards from '../card/page'
import Navbar from '@/components/navigator/navbar/page'
import './lander.scss'

const HomePage = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try{
    await localStorage.removeItem("auth");
    console.log("hello")
    router.push('/');
  }catch(error:any){
    console.log('error', error)
  }
}
  return (
    <div>
      <Navbar/>
      HomePage
      <span className="span-container">
      <Cards/>
      <Cards/>
      </span>
      
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default HomePage