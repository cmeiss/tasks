import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieL, setDieL] = useState<number>(1);
    const [dieR, setDieR] = useState<number>(2);
    function rollLeft() {
        setDieL(d6());
    }
    function rollRight() {
        setDieR(d6());
    }
    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <div>
                Left Die: <span data-testid="left-die">{dieL}</span>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{dieR}</span>
            </div>
            <div>
                {dieL === 1 && dieR === 1 ? "Sorry, you Lose!" : ""}
                {dieL === dieR && dieL !== 1 ? "Congrats, you Win!" : ""}
            </div>
        </div>
    );
}
