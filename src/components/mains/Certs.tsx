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
export default function Certs() {
    return (
        <StyledMain>
            <StyledH3>Certifications & Skills</StyledH3>
            <StyledP>
                <strong><em>Cornell University</em></strong> | Machine Learning Foundations Certificate | August 2025
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Completed coursework covering supervised learning, model evaluation,
                    data preprocessing, and practical machine learning workflows.
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Microsoft Office Specialist (Word)</em></strong> | Certification | 2022
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Demonstrated proficiency in document formatting, professional report creation,
                    and advanced productivity tools.
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong>Technical Skills & Languages</strong>
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Programming Languages:
                    <StyledList>
                        <StyledListItem>Java</StyledListItem>
                        <StyledListItem>Python</StyledListItem>
                        <StyledListItem>Ocaml</StyledListItem>
                        <StyledListItem>JavaScript</StyledListItem>
                        <StyledListItem>C</StyledListItem>
                        <StyledListItem>C++</StyledListItem>
                        <StyledListItem>Assembly</StyledListItem>
                    </StyledList>
                </StyledListItem>
                <StyledListItem>
                    Web Development:
                    <StyledList>
                        <StyledListItem>HTML</StyledListItem>
                        <StyledListItem>CSS</StyledListItem>
                    </StyledList>
                </StyledListItem>
                <StyledListItem>
                    Data & Machine Learning Tools: Pandas, Scikit-Learn, Jupyter Notebooks, Google Colab
                </StyledListItem>
                <StyledListItem>
                    Systems & Tools: GitHub, Linux, MySQL
                </StyledListItem>
                <StyledListItem>
                    Languages: Spanish
                </StyledListItem>
            </StyledList>
        </StyledMain>
    );
}