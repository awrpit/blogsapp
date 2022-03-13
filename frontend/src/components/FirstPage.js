import { Link } from "react-router-dom";
function FirstPage() {
  return (
    <>
      <h1> Welcome to the this funblog app</h1>
      <p> Lorem ipsum sample discripyop</p>
      <button>
        <Link to="/register"> Register </Link>
      </button>
      <button>
        <Link to="/login"> Login </Link>
      </button>
    </>
  );
}

export default FirstPage;
