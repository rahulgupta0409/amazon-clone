"use client"
import React from 'react'
import { Button } from '@mui/material'
import { redirect, useRouter } from 'next/navigation'

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
    <div>HomePage
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default HomePage