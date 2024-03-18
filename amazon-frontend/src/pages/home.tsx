"use client"
import React from 'react'
import { Button } from '@mui/material'
import { redirect, useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter();
  const auth = () => localStorage.getItem("auth") || '';

  if(auth()) redirect("/lander");

  return (
    <>
      <Button onClick={() => router.push("login")}>Login</Button>
      <Button onClick={() => router.push("signup")}>Sign Up</Button>
    </>
  )
}

export default LandingPage