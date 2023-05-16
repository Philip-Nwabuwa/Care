"use client";

import { signInWithGoogle } from "@/lib/firebase";
import React from "react";

const Login = () => {
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleSignInWithGoogle}>Sign in with Google</button>;
};

export default Login;
