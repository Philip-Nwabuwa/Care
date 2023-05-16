"use client";

import { signInWithGoogle } from "@/lib/firebase";
import React from "react";
import { Button, ButtonProps } from "@mantine/core";
import { GoogleIcon } from "./GoogleIcon";

function GoogleButton(props: ButtonProps) {
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleSignInWithGoogle}
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}

export default GoogleButton;
