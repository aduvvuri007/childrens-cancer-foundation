import "./CreateAccReviewer.css";
import logo from "../../assets/ccf-logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AccountPageReviewers(): JSX.Element {
  //form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [affiliation, setAffiliation] = useState("");

  //password reqs
  const [specialChar, setSpecialChar] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const [number, setNumber] = useState(false);
  const [showReqs, setShowReqs] = useState(false);

  useEffect(() => {}, [name, email, pwd, confirmPwd, affiliation]);

  /* Check if user input satisfies password requirements */
  const checkPasswordRequirements = (password: string) => {
    setSpecialChar(/[\W_]/.test(password)); // Checks for special character
    setCapitalLetter(/[A-Z]/.test(password)); // Checks for capital letter
    setNumber(/[0-9]/.test(password)); // Checks for number
  };

  const handleSubmit = () => {
    // let user submit if pwd reqs are met
    if (specialChar && capitalLetter && number && showReqs) {
    }
  };

  return (
    <div>
      <div className="box2">
        <div className="left-container2">
          <div className="content2">
            <div className="header-container2">
              <img
                src={logo}
                className="logo2"
                alt="Circular logo with red borders encompassing 'The children's cancer Foundation, Inc.' and three individuals in the middle"
              />
              <h1 className="header2">Create Account</h1>
            </div>

            <form className="form-container2">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email*</label>
              <input
                type="text"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password*</label>
              <input
                type="password"
                placeholder="Create a password"
                required
                value={pwd}
                onChange={(e) => {
                  setPwd(e.target.value);
                  checkPasswordRequirements(e.target.value);
                }}
                onFocus={() => setShowReqs(true)} // Show on focus
                onBlur={() => setShowReqs(false)}
              />

              {showReqs && (
                <div className="pwd-reqs">
                  <p>Password requires:</p>
                  <label id="checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      value="Yes"
                      checked={specialChar}
                      readOnly
                    />
                    One special character
                  </label>
                  <label id="checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      value="Yes"
                      checked={capitalLetter}
                      readOnly
                    />
                    One capital letter
                  </label>
                  <label id="checkbox">
                    <input
                      type="checkbox"
                      name="options"
                      value="Yes"
                      checked={number}
                      readOnly
                    />
                    One number
                  </label>
                </div>
              )}

              <label>Confirm Password*</label>
              <input
                type="password"
                placeholder="Enter password again"
                required
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
              />

              <label>Institution/Hospital Affiliation*</label>
              <input
                type="text"
                placeholder="Enter hospital name"
                required
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />

              <p className="acc-req2">
                Already have an account?{" "}
                <Link to="/log-in" className="acc-req2" id="link-to">
                  <b>Log in</b>
                </Link>{" "}
              </p>
              <button
                type="submit"
                className="signup-btn2"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="right-container2">
          {/* remove once given image */}
          <div className="image-placeholder2"></div>
        </div>
      </div>
    </div>
  );
}

export default AccountPageReviewers;
