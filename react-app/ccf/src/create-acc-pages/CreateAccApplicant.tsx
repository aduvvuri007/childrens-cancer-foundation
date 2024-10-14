import { Link } from "react-router-dom";
import "./CreateAccApplicant.css";
import logo_app from "../assets/ccf-logo.png";
import { useEffect, useState } from "react";

function AccountPageApplicants(): JSX.Element {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [affiliation, setAffiliation] = useState('');
    const [princInvestigator, setPrincInvestigator] = useState('');
  const applyingForOptions: { label: string; value: string }[] = [
    { label: "NextGen", value: "NextGen" },
    { label: "General Grant", value: "General Grant" },
    { label: "New Grant", value: "New Grant" },
  ];
  const [selectedApplyingFor, setSelectedApplyingFor] = useState<{
    label: string;
    value: string;
  }>(applyingForOptions[0]);
  const [receivedFundingSelection, setReceivedFundingSelection] = useState<string>("No");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = applyingForOptions.find(
      (option) => option.value === selectedValue
    );
    console.log("select: ", selectedValue);

    if (selectedOption) {
      setSelectedApplyingFor(selectedOption);
    }
  };

 useEffect(() => {
  }, [name, title, email, pwd, confirmPwd, affiliation, princInvestigator, selectedApplyingFor, receivedFundingSelection]);

  return (
    <div>
      <div className="box">
        <div className="left-container">
          <div className="content">
            <div className="header-container">
              <img
                src={logo_app}
                className="logo-app"
                alt="Circular logo with red borders encompassing 'The children's cancer Foundation, Inc.' and three individuals in the middle"
              />
              <h1 className="header">Create Account</h1>
            </div>

            <form className="form-container">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Title*</label>
              <input type="text" placeholder="M.D., Ph.D., etc." required value={title} onChange={(e) => setTitle(e.target.value)}/>

              <label>Email*</label>
              <input type="text" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label>Password*</label>
              <input type="password" placeholder="Create a password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />

              <label>Confirm Password*</label>
              <input
                type="password"
                placeholder="Enter password again"
                required
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
              />

              <label>Institution/Hospital Affiliation*</label>
              <input type="text" placeholder="Enter hospital name" required value={affiliation}  onChange={(e) => setAffiliation(e.target.value)}/>

              <label>Principal Investigator*</label>
              <input type="text" placeholder="Enter principal Investigator" required value={princInvestigator}  onChange={(e) => setPrincInvestigator(e.target.value)}/>

              <label>Applying for: </label>
              <select
                defaultValue={selectedApplyingFor.value}
                onChange={handleChange}
              >
                {applyingForOptions.map((i, k) => (
                  <option value={i.value} key={k}>
                    {i.label}
                  </option>
                ))}
              </select>

              <div className="radio-container">
                <label>Received prior CCF Funding:</label>
                <div className="radio-inputs">
                  <label id="radio-opts">
                    <input type="radio" name="options" value="No" checked={receivedFundingSelection === 'No'} onChange={e => setReceivedFundingSelection(e.target.value)}/>
                    No
                  </label>

                  <label id="radio-opts">
                    <input type="radio" name="options" value="Yes" checked={receivedFundingSelection === 'Yes'} onChange={e => setReceivedFundingSelection(e.target.value)}/>
                    Yes
                  </label>
                </div>
              </div>

              <input
                type="text"
                placeholder="If yes, list years."
                required={receivedFundingSelection === "Yes"}
              />

              <p className="acc-req">
                Already have an account?{" "}
                <Link to="/log-in" className="acc-req" id="link-to">
                  <b>Log in</b>
                </Link>{" "}
              </p>
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="right-container">
          {/* remove once given image */}
          <div className="image-placeholder"></div>
        </div>
      </div>
    </div>
  );
}

export default AccountPageApplicants;
