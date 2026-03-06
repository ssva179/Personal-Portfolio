import styled from "styled-components";


const StyledHeader = styled.header`
    padding: 20px;
    background-color: #24201D;
    width: 100%;
    /* mozilla --> docs/Web/CSS/Reference/Properties/border-radius*/
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    border-bottom-style: double;
    border-color: #630000;
    border-width: 6px;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

const StyledName = styled.h1`
    color: #EDEBDD;
    font-weight: bold;
`
const StyledTitle = styled.p`
    font-size: calc(1px + 1.25vw);
    color: #EDEBDD;
`


export default function Header() {
    return(
        <StyledHeader>
            <StyledName> Stephanie Argueta</StyledName>
            <StyledTitle> Welcome to my online portfolio!</StyledTitle>
        </StyledHeader>
    );
}