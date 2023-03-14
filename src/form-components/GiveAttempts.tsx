import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [aleft, setAleft] = useState<number>(3);
    const [aRequested, setARequested] = useState<string>("");
    function changeAttempts() {
        setAleft(aleft + (parseInt(aRequested) || 0));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="giveAttempts">
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={aRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setARequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={changeAttempts}>gain</Button>
            <Button onClick={() => setAleft(aleft - 1)} disabled={aleft === 0}>
                use
            </Button>
            <div>Number of Attemps: {aleft}</div>
        </div>
    );
}
