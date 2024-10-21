import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../application-form/ApplicationForm.css";

const Breadcrumb = ({ currentPage }: { currentPage: number }) => {
  const pages = [
    "My Information",
    "Application Questions",
    "Grant Proposal",
    "Review",
  ];

  return (
    <div>
      <h1 className="header">Research/Next Gen Grant</h1>
      <div className="breadcrumb">
        {pages.map((p, index) => (
          <p key={index} className={index === currentPage ? "active" : ""}>
            {p}
          </p>
        ))}
      </div>
      <div className="label">{pages[currentPage]}</div>
    </div>
  );
};

const InformationPage = () => {
    const [projectTitle, setProjectTitle] = useState('');
    const [investigator, setInvestigator] = useState('');
    const [cancers, setCancers] = useState('');
    const [staff, setStaff] = useState('');
    const [institution, setInstitution] = useState('');
    const [institutionAddress, setInstitutionAddress] = useState('');

    const [institutionPhone, setInstitutionPhone] = useState('');
    const [institutionEmail, setInstitutionEmail] = useState('');
    const [adminName, setAdminName] = useState('');
    const [adminAddress, setAdminAddress] = useState('');
    const [adminPhone, setAdminPhone] = useState('');
    const [adminEmail, setAdminEmail] = useState('');

  return (
    <div className="info-page-container">
        <div className="left-container">
            <p>Title of Project*</p>
            <input type="text" onChange={e => setProjectTitle(e.target.value)} placeholder="Enter title of project" required />

            <p>Principal Investigator*</p>
            <input type="text" onChange={e => setInvestigator(e.target.value)} placeholder="Enter principal investigator" required />

            <p>Types of Cancers Being Addressed*</p>
            <input type="text" onChange={e => setCancers(e.target.value)} placeholder="Enter types of cancers" required />

            <p>Name/Titles of Other Staff*</p>
            <input type="text" onChange={e => setStaff(e.target.value)} placeholder="Enter name/titles of other staff" required />

            <p>Institution*</p>
            <input type="text" onChange={e => setInstitution(e.target.value)} placeholder="Enter institution" required />

            <p>Address of Institution*</p>
            <input type="text" onChange={e => setInstitutionAddress(e.target.value)} placeholder="Enter address of Institution" required />

        </div>
        <div className="right-container">
            <p>Phone Number*</p>
            <input type="text" onChange={e => setInstitutionPhone(e.target.value)} placeholder="Enter institution phone number" required />

            <p>Email*</p>
            <input type="text" onChange={e => setInstitutionEmail(e.target.value)} placeholder="Enter institution email" required />

            <p>Administration Official Name*</p>
            <input type="text" onChange={e => setAdminName(e.target.value)} placeholder="Enter administration official" required />

            <p>Address of Administration Official*</p>
            <input type="text" onChange={e => setAdminAddress(e.target.value)} placeholder="Enter address of administration official" required />

            <p>Phone Number*</p>
            <input type="text" onChange={e => setAdminPhone(e.target.value)} placeholder="Enter administration official phone number" required />

            <p>Email*</p>
            <input type="text" onChange={e => setAdminEmail(e.target.value)} placeholder="Enter administration official email" required />
        </div>
    </div>
  );
};

const ApplicationQuestions = () => {
  return (
    <div>
      <button>Put application questions here</button>
    </div>
  );
};

function ApplicationForm(): JSX.Element {
  const navigate = useNavigate();
  const formPages = [<InformationPage />, <ApplicationQuestions />];
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleGoBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < formPages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log("Form submitted");
    }
  };

  return (
    <div className="application-container">
      <Breadcrumb currentPage={currentPage} />

      <div>{formPages[currentPage]}</div>

      <div >
        <button onClick={handleGoBack}>Go Back</button>
        <button
          onClick={() => {
            if (currentPage < 0) {
              navigate("/applicant-dashboard");
            } else {
              handleNext();
            }
          }}
        >
          {currentPage === formPages.length - 1
            ? "Save and Submit"
            : "Save and Continue"}
        </button>
      </div>
    </div>
  );
}

export default ApplicationForm;
