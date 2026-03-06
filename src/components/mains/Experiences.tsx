import styled from "styled-components";


const StyledMain = styled.main`
    width:70%;
    padding: 5%;
    text-align: left;
`;

const StyledH3 = styled.h3`
    text-align: center;
    font-weight: bolder;
    margin: 2% 0;
    color: #630000;
    font-size: calc(2px + 2vw);
`;
const StyledP = styled.p`
    text-align: left;
    padding: 1%;
    color: #630000;
    font-size: calc(1px + 1.25vw);
    
`;
const StyledList = styled.ul`
    padding:  0 25px;
    margin: 10px 0 10px 0;
    list-style: circle;
`;
const StyledListItem = styled.li`
    margin: 10px;
    color: #1e0404;
    font-family: "Courier New", sans-serif;
    font-weight: bold;
`
export default function Experiences() {
    return (
        <StyledMain>
            <StyledH3>Experience</StyledH3>
            <StyledP>
                <strong><em>Break Through Tech AI</em></strong> | Boston, MA | May 2025 – April 2026
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Fellow
                    <StyledList>
                        <StyledListItem>
                            Selected from 4000+ applicants for the Break Through Tech AI Program at Cornell University.
                        </StyledListItem>
                        <StyledListItem>
                            Completed a 12-month program including a Machine Learning course, experiential industry projects,
                            and mentorship from senior technology professionals.
                        </StyledListItem>
                        <StyledListItem>
                            Collaborated in cross-functional teams to design and evaluate machine learning solutions
                            addressing real-world business problems.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Outlier AI</em></strong> | Remote | 2025 – Present
            </StyledP>
            <StyledList>
                <StyledListItem>
                    AI Data Specialist
                    <StyledList>
                        <StyledListItem>
                            Evaluated and improved large language model outputs through structured annotation,
                            reasoning validation, and feedback pipelines.
                        </StyledListItem>
                        <StyledListItem>
                            Applied analytical thinking to verify response accuracy, logical reasoning consistency,
                            and factual correctness across diverse problem sets.
                        </StyledListItem>
                        <StyledListItem>
                            Maintained high-quality review standards while working independently in a remote,
                            deadline-driven environment.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Target</em></strong> | Boston, MA & Houston, TX | Sep 2023 – Sep 2024
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Team Member
                    <StyledList>
                        <StyledListItem>
                            Adapted to multiple operational roles, addressing 60+ customer inquiries daily
                            and resolving issues efficiently.
                        </StyledListItem>
                        <StyledListItem>
                            Collaborated with team members to streamline store operations, improve product availability,
                            and maintain high-quality customer experiences.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Chipotle Mexican Grill</em></strong> | Houston, TX | 2022 – 2023
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Crew Member
                    <StyledList>
                        <StyledListItem>
                            Delivered fast, high-quality customer service in a high-volume food service environment,
                            maintaining accuracy and efficiency during peak hours.
                        </StyledListItem>
                        <StyledListItem>
                            Worked collaboratively with team members to manage food preparation, inventory organization,
                            and cleanliness standards.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
        </StyledMain>
    );
}