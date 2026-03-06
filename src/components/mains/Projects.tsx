import styled from "styled-components";
import {useState} from "react";

const StyledOutput=styled.h3`
    color: ${(props)=> props.theme===true?"#b50000":"black"};
`;


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
`;

const StyledCalcH3 = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: calc(2px + 1.5vw);
    color: #630000;
`;
const StyledCalcLabel = styled.label`
    text-align: center;
    display: block;
    margin: 0.75rem 0 0.35rem;
    font-weight: 600;
    color: #EDEBDD;
`;
const StyledCalc = styled.div`
    text-align: center;
    width: 70%;
    margin: 5% auto;
    padding: 20px 20px;
    /*The next few lines jsut make the calculator a rounder shape with a border*/
    border-style: solid;
    border-color: #630000;
    border-width: 4px;
    border-radius: 30px;
    background: #cc8a89;
    /*Make the calculator appear like its floating over the page*/
    box-shadow: 0 12px 28px #000000;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 10px 10px;
    border-radius: 20px;
    border-style: dashed;
    border-color: #630000;
    border-width: 2px;
    background: rgb(248, 219, 219);
    outline: none;
`;
const StyledButton = styled.button`
    margin: 5px;
    padding: 5px 2px;
    width: 15%;
    border-style: solid;
    border-radius: 30px;
    background: #F8DBDBFF;
    border-color: #630000;
    border-width: 2px;
    font-size: calc(1px + 1.25vw);
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

    /* Originally used hover components from the CSS documentation:
    mozilla --> docs/Learn_web_development/Core/Text_styling/Styling_links*/
    /* nested these elements from the example of Pseudoelements, pseudoselectors, and nesting on the styled-components 
    documentation: https://styled-components.com/docs/basics*/
    &:hover {
        background: #630000;
        box-shadow: 10px 5px 5px #000000;
        color: #EDEBDD;
    }
`;


export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState(0);

    function doAdd(){
        setOutput(Number(input1)+Number(input2));
    }
    function doSub(){
        setOutput(Number(input1)-Number(input2));
    }
    function doMul(){
        setOutput(Number(input1)*Number(input2));
    }
    function doDiv(){
        setOutput(Number(input1)/Number(input2));
    }
    function doPow(){
        setOutput(Number(input1)**Number(input2));
    }
    function doClear(){
        setInput1("");
        setInput2("");
        setOutput(0);
    }


    return (
        <StyledMain>
            <StyledH3> Projects</StyledH3>
            <StyledP><strong><em>Talking Cents </em></strong> October 2025 - Present</StyledP>
            <StyledList>
                <StyledListItem>
                    Developed AI-powered budgeting assistance that uses GPT API calls to categorize spending and
                    track balance via
                    speech and chat.
                </StyledListItem>
                <StyledListItem>
                    Integrated speech recognition, text-to-speech, and React/Node.js, for real-time conversation
                    budgeting and
                    debt-analysis
                </StyledListItem>
            </StyledList>
            <StyledP><strong><em>AI Studio Fake News Detection System</em></strong> September 2025- December 2025</StyledP>
            <StyledList>
                <StyledListItem>
                    Built and evaluated a fake news classification system using Logistic Regression, a fine-tuned
                    DeBERTa
                    transformer, and an LLM based approach.
                </StyledListItem>
                <StyledListItem>
                    Compared model performance using accuracy and F1 score to analyze generalization across models.
                </StyledListItem>
                <StyledListItem>
                    Developed a Streamlit demo and presented results to industry professionals.
                </StyledListItem>
            </StyledList>
            <StyledP><strong><em>Concert Booking Service</em></strong> March 2025 – May 2025</StyledP>
            <StyledList>
                <StyledListItem>
                    Designed 16 RESTful endpoints for reservations, seat availability, and user authentication
                </StyledListItem>
                <StyledListItem>
                    Built a backend concert booking system in a 2-person team using Java and JPA
                </StyledListItem>
                <StyledListItem>
                    Implemented concurrency control using pessimistic and optimistic locking.
                </StyledListItem>
            </StyledList>

            <StyledCalc>
                <StyledCalcH3> Steph's Number Lab</StyledCalcH3>

                <StyledCalcLabel htmlFor="first-number">First Number:</StyledCalcLabel>
                <StyledInput
                    id={`first`}
                    value={input1}
                    placeholder={`Enter a number`}
                    onChange={(e) => setInput1(e.target.value)}
                />
                <StyledCalcLabel htmlFor="second-number">Second Number:</StyledCalcLabel>
                <StyledInput
                    id={`second`}
                    value={input2}
                    placeholder={`Enter a number`}
                    onChange={(e) => setInput2(e.target.value)}
                />
                <StyledButton onClick={doAdd}> +</StyledButton>
                <StyledButton onClick={doSub}> -</StyledButton>
                <StyledButton onClick={doMul}> *</StyledButton>
                <StyledButton onClick={doDiv}> /</StyledButton>
                <StyledButton onClick={doPow}> **</StyledButton>
                <StyledButton onClick={doClear}> Clear</StyledButton>

                <StyledOutput theme={output<0?true:false}>{output}</StyledOutput>
            </StyledCalc>
        </StyledMain>
    );
}






