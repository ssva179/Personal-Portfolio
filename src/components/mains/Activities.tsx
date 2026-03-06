
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



export default function Activities() {
    return (
        <StyledMain>
            <StyledH3>Leadership & Activities</StyledH3>
            <StyledP>
                <strong><em>Women in Computer Science (WiCS)</em></strong> | Boston, MA | Jan 2023 – Present
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Member
                    <StyledList>
                        <StyledListItem>
                            Participate in technical workshops, networking events, and collaborative projects
                            promoting gender diversity within the computing field.
                        </StyledListItem>
                        <StyledListItem>
                            Contribute to peer learning initiatives and professional development sessions
                            supporting women pursuing careers in technology.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Girls Who Code</em></strong> | Boston, MA | Jan 2023 – Present
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Volunteer Mentor
                    <StyledList>
                        <StyledListItem>
                            Supported coding workshops and mentorship activities designed to introduce
                            students to programming fundamentals and technology career pathways.
                        </StyledListItem>
                        <StyledListItem>
                            Collaborated with peers to organize events encouraging confidence and
                            technical skill development among young women in STEM.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
            <StyledP>
                <strong><em>Study Abroad Student Society</em></strong> | Auckland, NZ | Feb 2025 – July 2025
            </StyledP>
            <StyledList>
                <StyledListItem>
                    Member | Social Media Ambassador
                    <StyledList>
                        <StyledListItem>
                            Helped coordinate and promote 10+ multicultural campus events through social media
                            outreach and student engagement initiatives.
                        </StyledListItem>
                        <StyledListItem>
                            Fostered an inclusive international community by connecting students from diverse
                            academic and cultural backgrounds.
                        </StyledListItem>
                    </StyledList>
                </StyledListItem>
            </StyledList>
        </StyledMain>
    );
}