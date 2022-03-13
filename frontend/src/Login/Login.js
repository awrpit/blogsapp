function Login() {
  return (
    <>
      Login in the website
      <form>
        <label>
          Email <input type="email" name="email" placeholder="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" placeholder="passowrd" />
        </label>

        <button> Login </button>
      </form>
    </>
  );
}

export default Login;
