function Register() {
  return (
    <>
      Register into the website
      <form>
        <label>
          Your Name <input type="email" name="email" placeholder="email" />
        </label>
        <label> Email </label>
        <input type="email" name="email" placeholder="email" />
        <label>
          Password
          <input type="password" name="password" placeholder="passowrd" />
        </label>
        <button> Register </button>
      </form>
    </>
  );
}
export default Register;
