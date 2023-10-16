import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserState, useUserDispatch } from "../context/loginContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  var { isAuthenticated } = useUserState();
  var userDispatch = useUserDispatch();

  const [usersData, setUserData] = useState({});

  /**Logout from our application */
  const logoutFunction = (e) => {
    e.preventDefault();
    localStorage.clear();
    userDispatch({ type: "SIGN_OUT_SUCCESS" });
  };
  useEffect(() => {
    let userData = localStorage.getItem("loginResponse");
    if (userData) {
      let obj = JSON.parse(userData);
      setUserData(obj);
    }
  }, [isAuthenticated]);
  return (
    <header>
      {!isAuthenticated && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 ">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link "
                >
                  Join As a design expert
                </Link>
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link "
                >
                  Partner with HomeLane
                </Link>
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link"
                >
                  Refer and Earn
                </Link>
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link"
                >
                  Join Us
                </Link>
              </div>
              <div className="navbar-nav ms-auto">
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link"
                >
                  Visit Us
                </Link>
                <Link
                  style={{ color: "Black" }}
                  to="#"
                  className="nav-item nav-link"
                >
                  Login/Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
      {isAuthenticated && (
        <div className="LogoWrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="logoBlock">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon">
                      <GiHamburgerMenu />
                    </span>
                  </button>
                  <img
                    className="imglogo"
                    src="./images/logo_new.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="Logocontent">
                  <h5 className="pt-2 pr-4" style={{ "margin-left": "auto" }}>
                    <u>End-to-end interior home interior design solutions </u>
                    <Link to="#">
                      <img src="./images/arrow.png" alt="" />
                    </Link>
                  </h5>
                  <div className="dropdown">
                    <Link
                      to="#!"
                      className="text-white ml-1"
                      type="button"
                      id="dropDownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-flip="false"
                    >
                      <figure className="avatar avatar-nav">
                        <img
                          src="images/sample-photo.png"
                          alt=""
                          className="rounded-circle"
                        />
                      </figure>
                    </Link>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropDownMenuButton"
                    >
                      <span class="dropdown-menu-arrow"></span>
                      <div>
                        <div className="container1 mb-3 mt-4">
                          <img
                            src={usersData?.profile_pic}
                            alt=""
                            className="rounded-circle drop-img"
                          />
                          <Link to="#">
                            <img
                              className="iconmodal"
                              src="images/camera.png"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <h5 className="text-center mb-2 fs-5 log-text">
                        {usersData?.first_name}
                      </h5>
                      <h6 className="text-center fs-7 log-text mb-4">
                        <span> {usersData?.email}</span>
                      </h6>
                      <hr />
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn mb-3 btnlog"
                          onClick={(e) => logoutFunction(e)}
                        >
                          <h5 className="mb-0">
                            Logout
                            <img
                              className="img-logout"
                              src="images/logout.png"
                              alt="logout"
                            />
                          </h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
