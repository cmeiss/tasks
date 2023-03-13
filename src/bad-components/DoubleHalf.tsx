import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DHValue {
    setDhValue: (newDhValue: number) => void;
    DhValue: number;
}

function Doubler({ setDhValue, DhValue }: DHValue): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(2 * DhValue)}>Double</Button>
        </div>
    );
}

function Halver({ setDhValue, DhValue }: DHValue): JSX.Element {
    return (
        <div>
            <Button onClick={() => setDhValue(0.5 * DhValue)}>Halve</Button>
        </div>
    );
}

export function DoubleHalf(): JSX.Element {
    const [DhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <div>Double Half</div>
            <Halver setDhValue={setDhValue} DhValue={DhValue}></Halver>
            <Doubler setDhValue={setDhValue} DhValue={DhValue}></Doubler>
            <div>Double Half The current value is: </div>
            <div>{DhValue}</div>
        </div>
    );
}
