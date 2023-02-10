// export default Navbar;
import React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import { Signout } from "../actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Userlogout from "../Actions/User_logout";

const Navbar = () => {
  //   const history = useHistory();
  const dispatch = useDispatch();
  const history=useHistory();
  const UserDetails = useSelector((state) => state.UserDetails);
  const { loading: userloading, error, UserInfo } = UserDetails;

  const RenderMenu = () => {
    return (
      <>
        <li className="nav-item" id="n1">
          <Link className="nav-link " aria-current="page" to="/">
            Home
          </Link>
        </li>
        {UserInfo===null ? (
          <>
            <li className="nav-item" id="n2">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item" id="n3">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item" id="n3">
              <Link className="nav-link" to="/">
                {UserInfo.userName}
              </Link>
            </li>
            <li className="nav-item" id="n3">
              <Link
                className="nav-link"
                onClick={() => {
                  dispatch(Userlogout());
                  history.push("/login");
                }}
              >
                Logout
              </Link>
            </li>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand navtitle" to="#" id="navtitle">
            Parallel Universe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
