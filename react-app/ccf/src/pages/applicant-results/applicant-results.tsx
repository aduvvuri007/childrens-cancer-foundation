import "./applicant-results.css";
import homeIcon from "../../assets/home-icon.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplicantResults(): JSX.Element {

    const [accepted, setAccepted] = useState<any>(false);
    const [reward, setReward] = useState<any>(0);

    useEffect(() => {
        setAccepted(true)
        setReward("50,000.000")
    })

    const navigate = useNavigate();

    return (
        <div className="content">
        <div className="header">
            <h1>Grant Results</h1>
            <div className="home-icon" onClick={() => navigate("/applicant-dashboard")}>🏠</div>
        </div>
        <div className="grant-results">
            <div className="main-content">
            {accepted && 
                <>
                    <div className="decision">
                        <h2>Congratulations!</h2>
                        <p>
                        We are delighted to inform you that your application has been
                        selected for funding! Your proposal stood out for its innovation,
                        potential impact, and the clarity of your research goals. We are
                        honored to support your work and look forward to the significant
                        advancements your project promises to bring.
                        </p>
                        <br />
                        <p>
                        This grant represents our confidence in your vision and
                        dedication, and we are excited to see how this support will
                        empower your research journey. Please don't hesitate to reach out
                        with any questions as you move forward with your project.
                        </p>
                        <br />
                        <p>
                        Congratulations once again on this well-deserved award!
                        </p>
                        <br />
                        <p>
                        Warm regards,
                        <br />
                        <p>Children's Cancer Foundation</p>
                        </p>
                    </div>
                    <div className="reward">
                        <h3>Reward Amount:</h3>
                        <p className="reward-amount">${reward}</p>
                    </div>
                </>
            }
            {!accepted && 
                <>
                    <div className="decision">
                        <h2>Thank You!</h2>
                        <p>
                        Thank you for your recent application to [Grant Organization/Program Name].
                        After careful consideration, we regret to inform you that
                        your proposal was not selected for funding in this cycle.
                        We received an extraordinary number of applications, making 
                        the selection process highly competitive, and while we were 
                        deeply impressed by the vision and potential impact of your project,
                        we were unable to fund all deserving proposals.
                        </p>
                        <br />
                        <p>
                        Please know that this decision is not a reflection on the quality
                        of your work or your commitment to advancing knowledge in your field.
                        We encourage you to apply again in the future, as each cycle brings
                        new opportunities and priorities.
                        </p>
                        <br />
                        <p>
                        If you would like feedback on your application or have any questions
                        about future funding opportunities, please don’t hesitate to reach out.
                        We are grateful for your dedication and hope to support your research 
                        in the future.
                        </p>
                        <br />
                        <p>
                        Thank you once again for your interest, and we wish you all the best with your project.
                        </p>
                        <p>
                        Warm regards,
                        <br />
                        <p>Children's Cancer Foundation</p>
                        </p>
                    </div>
                </>
            }
            <div className="feedback">
                <h3>Feedback from Reviewers:</h3>
                <p className="topic">
                <b>SIGNIFICANCE:</b> How significant is the childhood cancer
                problem addressed by this proposal? How will the proposed study
                add to or enhance the currently available methods to prevent,
                treat or manage childhood cancer?
                </p>
                <div className="reviewers">
                <div className="reviewer">
                    <label htmlFor="reviewer1">Reviewer 1:</label>
                    <textarea
                    id="reviewer1"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <div className="reviewer">
                    <label htmlFor="reviewer2">Reviewer 2:</label>
                    <textarea
                    id="reviewer2"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <p className="topic">
                <b>APPROACH:</b> Is the study hypothesis-driven?  Is this a novel hypothesis or research question?  How well do existing data support the current hypothesis? Are the aims and objectives appropriate for the hypothesis being tested? Are the methodology and evaluation component adequate to provide a convincing test of the hypothesis?  Have the applicants adequately accounted for potential confounders?  Are there any methodological weaknesses? If there are methodological weaknesses, how may they be corrected?  Is the statistical analysis adequate? 
                </p>
                <div className="reviewers">
                <div className="reviewer">
                    <label htmlFor="reviewer1">Reviewer 1:</label>
                    <textarea
                    id="reviewer1"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <div className="reviewer">
                    <label htmlFor="reviewer2">Reviewer 2:</label>
                    <textarea
                    id="reviewer2"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                </div>
                <p className="topic">
                <b>FEASIBILITY:</b> Comment on how well the research team is to carry out the study.  Is it feasible to carry out the project in the proposed location(s)?  Can the project be accomplished within the proposed time period? 
                </p>
                <div className="reviewers">
                <div className="reviewer">
                    <label htmlFor="reviewer1">Reviewer 1:</label>
                    <textarea
                    id="reviewer1"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <div className="reviewer">
                    <label htmlFor="reviewer2">Reviewer 2:</label>
                    <textarea
                    id="reviewer2"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                </div>
                <p className="topic">
                <b>INVESTIGATOR:</b> What has the productivity of the PI been over the past 3 years? If successful, does the track record of the PI indicate that future peer-reviewed funding will allow the project to continue? Are there adequate collaborations for work outside the PI’s expertise?
                </p>
                <div className="reviewers">
                <div className="reviewer">
                    <label htmlFor="reviewer1">Reviewer 1:</label>
                    <textarea
                    id="reviewer1"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <div className="reviewer">
                    <label htmlFor="reviewer2">Reviewer 2:</label>
                    <textarea
                    id="reviewer2"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                </div>
                <p className="topic">
                <b>SUMMARY:</b> Please provide any additional comments that would be helpful to the applicant, such as readability, grantspersonship, etc., especially if the application does not score well.
                </p>
                <div className="reviewers">
                <div className="reviewer">
                    <label htmlFor="reviewer1">Reviewer 1:</label>
                    <textarea
                    id="reviewer1"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                <div className="reviewer">
                    <label htmlFor="reviewer2">Reviewer 2:</label>
                    <textarea
                    id="reviewer2"
                    placeholder="Enter feedback."
                    ></textarea>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    
    );
};

export default ApplicantResults;