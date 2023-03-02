import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    //create state, visible set to false because answer is not shown initially
    function showAnswer(): void {
        setVisible(!visible);
    }
    //funtion to flip the visibility when button is pressed
    return (
        <div>
            <Button onClick={showAnswer}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </div>
    );
}
