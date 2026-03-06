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
    /*deciding the type of bullet points*/
    list-style: circle;
`;
const StyledListItem = styled.li`
    margin: 10px;
    color: #1e0404;
    font-family: "Courier New", sans-serif;
    font-weight: bold;
`
export default function Education() {
    return (
        <StyledMain>
            <StyledH3>Education</StyledH3>
            <StyledP><strong><em>BOSTON UNIVERSITY</em></strong>  January 2023 – May 2026</StyledP>
            <StyledList>
                <StyledListItem>
                    Bachelor of Arts in Computer Science — Dean’s List, GPA: 3.52
                    <StyledList>
                        <StyledListItem>Focused on algorithms, software engineering, and machine learning systems.</StyledListItem>
                        <StyledListItem>Completed multiple full-stack and backend system development projects.</StyledListItem>
                    </StyledList>
                </StyledListItem>

                <StyledListItem>
                    Relevant Courses
                    <StyledList>
                        <StyledListItem>Analysis of Algorithms</StyledListItem>
                        <StyledListItem>Concepts of Programming Languages</StyledListItem>
                        <StyledListItem>Combinatorics Structures</StyledListItem>
                        <StyledListItem>Computer Systems</StyledListItem>
                        <StyledListItem>Geometric Algorithms</StyledListItem>
                        <StyledListItem>Probability in Computing</StyledListItem>
                        <StyledListItem>Large Scale Software Development</StyledListItem>
                        <StyledListItem>Human Computer Interaction</StyledListItem>
                        <StyledListItem>Distributed Systems</StyledListItem>
                        <StyledListItem>Databases</StyledListItem>
                        <StyledListItem>Artificial Intelligence</StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP><strong><em>AUSTIN HIGH SCHOOL</em></strong>  September 2018 – May 2022</StyledP>
            <StyledList>
                <StyledListItem>
                    Valedictorian — GPA: 4.6
                    <StyledList>
                        <StyledListItem>Graduated top of class with academic honors.</StyledListItem>
                    </StyledList>
                </StyledListItem>
                <StyledListItem>
                    Activities
                    <StyledList>
                        <StyledListItem>Softball Team</StyledListItem>
                        <StyledListItem>Student Council</StyledListItem>
                        <StyledListItem>National Honor Society</StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
        </StyledMain>
    );
}