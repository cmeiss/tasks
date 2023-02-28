import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript : Cornelia Meiss
                <h1>Rowing is cool</h1>
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={require("./CAA_2.jpg")}
                            width="200"
                            height="125"
                            alt="a picture of our eight at CAAs."
                        />
                        <div
                            id="rectangle"
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Reasons for Rowing:
                        <ul>
                            <li>You see the sunrise every morning</li>
                            <li>You hang out with amazing people</li>
                            <li>Regattas!!!!</li>
                        </ul>
                        <div
                            id="rectangle"
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
