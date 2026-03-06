import styled from "styled-components";

const StyledMain=styled.main`
    width: 70%;
    height: 100vh;
    padding: 5% 3%;
    text-align: center;
    background-color: #EDEBDD;
    
    @media screen and (max-width: 1000px){
        width: 100%;
        border: none;
        height: 150vh;
    }
`;

const StyledInfo=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: calc(1px + 1vw);
    width: 95%;
    margin: 5% 0;
    @media screen and (max-width: 1000px){
        flex-direction: column;
        margin: 25px auto;
    }
`;

const StyledProfilePic=styled.img`
    max-width: 50%;
`;

const StyledHeading=styled.h3`
    text-align: center;
    margin: 2% 0;
    font-size: calc(2px + 2vw);
    color: #630000;
`;
const StyledP = styled.p`
    text-align: center;
    color: #630000;
    font-size: calc(1px + 1.25vw);

    @media screen and (max-width: 1000px){
        padding-left: 1%;
        font-weight: bolder;
    }
`;
const StyledBottomP = styled.p`
    text-align: center;
    font-size: calc(2px + 1.5vw);
    font-weight: bold;
    color: #630000;
`;



export default function Home(){
    return (
        <StyledMain>
            <StyledHeading>Home</StyledHeading>
            <StyledInfo>
                <StyledProfilePic src="/public/img.png" alt="Stephanie Argueta" id="profile"/>
                <StyledP>
                    Hi! I’m Stephanie👋. I've always been curious and have a passion for
                    building tech that makes a positive impact on people's lives. Through my
                    coursework and experience, I’ve explored diverse areas of CS, including
                    machine learning, human-computer interaction, and graphic design.
                    Beyond tech, I love traveling. It has enhanced my adaptability,
                    cultural awareness, and ability to approach problems from new perspectives.
                    These qualities shape how I collaborate and innovate in every project I take
                    part in. I’m eager to contribute my skills and curiosity to impactful work and
                    am open to new opportunities, ready to grow and make a difference.
                </StyledP>
            </StyledInfo>
            <StyledBottomP>
                This page site showcases my education, work experience,
                and the projects and activities that reflect my interests and growth.
            </StyledBottomP>
        </StyledMain>
    );

}