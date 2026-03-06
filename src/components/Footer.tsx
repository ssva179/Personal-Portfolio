import {Link} from "react-router";
import styled from "styled-components";


const StyledFooter = styled.footer`
    padding: 1%;
    text-align: center;
    background-color: #24201D;
    width: 100%;
    margin: 0 auto;
    border-top-style: double;
    border-top-width: 6px;
    border-color: #630000;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
    color: #EDEBDD;
`;


/* making the link white so it contrasts appropriately with background colors */
const linkStyles = {
    color: "#EDEBDD",
};

export default function Footer() {
    return (
        <StyledFooter>
            <footer>
                <p>All rights reserved by Stephanie Argueta <Link to="" style ={linkStyles}>Credits</Link> &#169;</p>
            </footer>
        </StyledFooter>
    );
}