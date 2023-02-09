// import React from "react";
// import { Link,Link } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">
//                   signup
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React from "react";

// import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import { Signout } from "../actions/UserActions";

const Navbar = () => {
  //   const history = useHistory();

  //   //Getting userDetails to check if signin or not
  //   const UserDetails = useSelector((state) => state.UserDetails);
  //   const { loading, error, UserInfo } = UserDetails;
  //   //Importing dispatch
  //   const dispatch = useDispatch();
  //   const SignoutHandler = () => {
  //     dispatch(Signout());
  //     history.push("");
  //   };

  const RenderMenu = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/blogs">
            Signup
          </Link>
        </li>
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
