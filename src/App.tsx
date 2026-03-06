import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Education from "./components/mains/Education.tsx";
import Certs from "./components/mains/Certs.tsx";
import Projects from "./components/mains/Projects.tsx";
import Activities from "./components/mains/Activities.tsx";
import styled, {createGlobalStyle} from "styled-components";



const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;



const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    /*Helps create rounded edges on the overall website*/
    /* mozilla --> docs/Web/CSS/Reference/Properties/border-radius*/
    border-radius: 30px;
    border-style: solid;
    border-color: #640606;
    border-width: 3px;
    /*Creates an outline following the border of the webpage to separate from the background*/
    /* mozilla --> docs/Web/CSS/Reference/Properties/outline*/
    outline:  solid #67312F73;
    /*creates a shadow around body to add an effect making it look like its floating over the page*/
    /* mozilla --> docs/Web/CSS/Reference/Properties/box-shadow*/
    box-shadow: 0 12px 28px #000000;
`;

/*Acts as the body wrapper to transfer body designs over from mp 1*/
const GlobalStyle = createGlobalStyle`
body{
    padding: 1%;
    background-color: #EDEBDD;
    font-family: "Gill Sans", sans-serif;
}
`


function Root(){
    return (
        <>
            <GlobalStyle/>
                <StyledWrapper>
                    <Header/>
                    <StyledContainer>
                        <Nav/>
                        <Routes>
                            <Route
                                path={`/`}
                                element={<Home/>}
                            />
                            <Route
                                path={`experiences.html`}
                                element={<Experiences/>}
                            />
                            <Route
                                path={`/education.html`}
                                element={<Education/>}
                            />
                            <Route
                                path={`certs.html`}
                                element={<Certs/>}
                            />
                            <Route
                                path={`projects.html`}
                                element={<Projects/>}
                            />
                            <Route
                                path={`activities.html`}
                                element={<Activities/>}
                            />
                        </Routes>
                    </StyledContainer>
                    <Footer/>
                </StyledWrapper>
        </>
    )
}
const router =createBrowserRouter(
    [{path:"*",Component:Root}]
)
export default function App(){
    return (
        <>
            <RouterProvider router={router}/>

        </>
    )
}



