"use client";

import { useState } from "react";
import { loginWithEmailAndPassword } from "@/lib/firebase";
import { createUser } from "@/lib/firebase";
import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";

import TwitterButton from "@/components/TwitterButton";
import GoogleButton from "@/components/GoogleButton";

function AuthenticationForm(props: PaperProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await loginWithEmailAndPassword(email, password);
      console.log("logged in");
    } catch (error) {
      console.log(error);
    }
  };
  const Signup = () => {
    const [SignupMail, setSignupMail] = useState("");
    const [SignupPassword, setSignupPassword] = useState("");
  
    const handleSignup = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      try {
        await createUser(email, password);
      } catch (error) {
        console.log(error);
      }
    };
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={handleLogin}>
        <Stack>
          {type === "login" && (
            <>
              <TextInput
                required
                type="email"
                label="Email"
                placeholder="hello@mantine.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={form.errors.email && "Invalid email"}
                radius="md"
              />
              <PasswordInput
                required
                label="Password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />
            </>
          )}

          {type === "register" && (
            <>
              <TextInput
                required
                type="email"
                label="Email"
                placeholder="hello@mantine.dev"
                value={SignupMail}
                onChange={(e) => setSignupMail(e.target.value)}
                error={form.errors.email && "Invalid email"}
                radius="md"
              />
              <PasswordInput
                required
                label="Password"
                type="password"
                placeholder="Your password"
                value={SignupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />
            </>
          )}

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          {type === "login" && (
            <Button className="bg-[#228be6]" type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          )}
          {type === "register" && (
            <Button className="bg-[#228be6]" type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          )}
        </Group>
      </form>
    </Paper>
  );
}

export default AuthenticationForm;
