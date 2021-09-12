import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";
import "./css/login.css";
import { auth, provider } from "./fireb";

export const Login = () => {
  const [register, setregister] = useState(false);
  const dispatch = useDispatch();

  const signin = () => {
    
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="lcont">
      {register ? (
        <>
          <div className="reg">
            <img
              width="100px"
              src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt=""
            />

            <div className="si">
              <h4>Sign up </h4>
              <p>to continue to Gmail</p>
            </div>

            <div>
              <form action="" className="in ">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="PhotoURL" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Re-password" />
                <button type="submit"></button>
              </form>
            </div>

            <div className="ropt">
              <button className="ii" onClick={() => setregister(false)} style={{marginRight:'10px'}}>
                already exist?{" "}
              </button>
              <button className="ii">Sign in </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="log">
            <img
              width="100px"
              src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt=""
            />
            <div className="si">
              <h4>Sign in </h4>
              <p>to continue to Gmail</p>
            </div>
            <div>
              <form action="" className="in ">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit"></button>
              </form>
            </div>

            <div className="opt">
              <button id="i" onClick={() => setregister(true)}>
                Create a account
              </button>
              <Button onClick={signin}>
                <img
                  src="https://img-authors.flaticon.com/google.jpg"
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "30px",
                    borderRadius: "100px",
                  }}
                />
              </Button>
              <button className="ii">Sign in </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
