import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>text</h1>
            <header className="App-header">
                ADDAM UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img
                src="https://s40170.pcdn.co/wp-content/uploads/2022/01/close-up-view-of-rock-aggregates.png"
                alt="A picture"
            />
            <ul>
                <li>test 1</li>
                <li>test 2</li>
                <li>test 3</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            test 4
                        </span>
                    </Col>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            test 5
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
