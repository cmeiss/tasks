import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function start(): void {
        setInProgress(!inProgress);
        setAttempts(attempts - 1);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    function stop(): void {
        setInProgress(!inProgress);
    }
    return (
        <div>
            <Button onClick={start} disabled={attempts === 0 || inProgress}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <div>Number of Attempts: {attempts}</div>
        </div>
    );
}
