import {Link} from "react-router";
import styled from "styled-components";


const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    background-color: #24201D;
    /*Making the border have a double line outline on the right side to separate from main*/
    border-right-style: double;
    border-color: #640606;
    border-width: 6px;

    @media screen and (max-width: 1000px){
        width: 100%;
        border-bottom: double;
        border-right: none;
        border-width: 6px;
        justify-content: center;
        color: #630000;
    }


    
`
const StyledList=styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    margin: 0;
    list-style: none;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        padding: 25px;  
        width: 100%;
    }
`;
const StyledListItem=styled.li`
    width: 100%;
    margin: 10% auto;
    padding: 1% 3%;
    /*Making the buttons on nav have rounded edges*/
    border-radius: 30px;
    background-color: #630000;
    border-style: solid;
    border-width: 2px;
    border-color: #eDEBDD;

    /* Originally used hover components from the CSS documentation:
    mozilla --> docs/Learn_web_development/Core/Text_styling/Styling_links*/
    
    /* nested these elements from the example of Pseudoelements, pseudoselectors, and nesting on the styled-components 
    documentation: https://styled-components.com/docs/basics*/
    &:hover {
        background: #8f1010;
        box-shadow: 10px 5px 5px rgba(124, 122, 122, 0.35);
    }
    @media screen and (max-width: 1000px) {
        width: auto;
        margin: 2px;
        padding: 0;
    }
`;

const StyledLink=styled(Link)`
    display: flex;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 12px;
    font-size: calc(2px + 1.3vw);
    color: #EDEBDD;
    font-weight: bold;
    
    @media screen and (max-width: 1000px){
        width: auto;
        padding: 8px;
        font-size: calc(1px + 1.3vw);
    }
`;




export default function Nav(){
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/" >Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/experiences.html">Experiences</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/education.html">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/certs.html">Certifications</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/projects.html">Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/activities.html">Activities</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}