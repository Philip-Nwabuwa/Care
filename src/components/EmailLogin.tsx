"use client";

const Login = () => {
  return (
    <form>
      <label>
        Email:
        <input type="email" value={email} />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button type="submit">Log in</button>
      <Link href="/signup">Create new account</Link>
    </form>
  );
};

export default Login;
