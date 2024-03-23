"use client";
import React, { FormEvent } from "react";
import { baseUrlUserMicroservice } from "@/constants/url";
import { useRouter } from "next/navigation";
import { Button, FormControl, Input, TextField } from "@mui/material";

const SignupPage = () => {
  const router = useRouter();

  const signup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const phone = formData.get("phone");
    const usertype = formData.get("usertype");
    const password = formData.get("password");

    try {
      await fetch(`${baseUrlUserMicroservice}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstname,
          lastname,
          phone,
          usertype,
          isactive: true,
        }),
      })
        .then((res) => res.json())
        .then((res: any) => {
          if (res?.token) {
            localStorage.setItem("auth", res.token);
            router.push("/lander");
          }
        });
    } catch (error) {
      console.error("Error setting data:", error);
    }
  };

  return (
    <div className="login-screen">
      <div className="first-portion"></div>
      <div className="main-portion">
        <React.Fragment>
          <form onSubmit={signup} className="login-field">
            <FormControl>
              <TextField
                className="email-container"
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
                variant="outlined"
                required
              />
              <TextField
                className="password-container"
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                variant="outlined"
                required
              />
              <TextField
                className="firstname-container"
                type="text"
                name="firstname"
                label="First Name"
                placeholder="First Name"
                variant="outlined"
                required
              />
              <TextField
                className="lastname-container"
                type="text"
                name="lastname"
                label="Last Name"
                placeholder="Last Name"
                variant="outlined"
                required
              />
              <TextField
                className="usertype-container"
                type="text"
                name="usertype"
                label="User Type"
                placeholder="User Type"
                variant="outlined"
                required
              />
              <TextField
                className="phonenumber-container"
                type="number"
                name="phone"
                label="Phone Number"
                placeholder="Phone Number"
                variant="outlined"
                required
              />
              <Button
                className="submit-container"
                variant="outlined"
                type="submit"
              >
                Signup
              </Button>
            </FormControl>
          </form>
        </React.Fragment>
      </div>
      <div className="last-portion"></div>
    </div>
  );
};

export default SignupPage;
