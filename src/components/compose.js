import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import "./css/compose.css";
export const Compose = ({ close }) => {
  const [resize, setresize] = useState({ mini: false, fullsize: false });

  function standard() {
    console.log("entered");
    console.log(resize);
    if (resize["mini"] === true) setresize({ mini: false, fullscreen: false });
    else if (resize["fullscreen"] === true) setresize({ fullscreen: false });
    else {
      setresize({ fullscreen: true, mini: false });
    }
  }
  return (
    <div className={`comp  ${resize["fullscreen"] === true && "cfull"} `}>
      <div className="compheader">
        <p style={{ margin: "8px 0 8px 40px", fontWeight: "400" }}>
          New message
        </p>
        <div>
          <RemoveIcon onClick={() => setresize({ mini: !resize["mini"] })} />
          {resize["fullscreen"] === true ? (
            <FullscreenExitIcon onClick={() => standard()} />
          ) : (
            <FullscreenIcon onClick={() => standard()} />
          )}
          <CloseIcon onClick={close} />
        </div>
      </div>

      <div
        className={`conte  ${resize["mini"] === true && "cmini"} ${
          resize["fullscreen"] === true && "cful"
        }`}
      >
        <div className="ccontent">
          <form action="">
            <p>
              To
              <span className="cp">
                {" "}
                <input type="text" />{" "}
              </span>
            </p>
            <p>
              Subject
              <span className="cp">
                {" "}
                <input type="text" />{" "}
              </span>
            </p>
            <input id="cmain" type="text" />
          </form>
        </div>
        <div className="cfooter"></div>
      </div>
    </div>
  );
};
