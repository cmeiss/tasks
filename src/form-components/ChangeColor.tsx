import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "blue",
        "green",
        "yellow",
        "red",
        "purple",
        "orange",
        "white",
        "black",
        "pink"
    ];
    const [color, setColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((col: string) => (
                <Form.Check
                    inline
                    type="radio"
                    key={col}
                    name={col} //{color}
                    onChange={() => setColor(col)} //{change}
                    id="color-check-{color}"
                    label={<span style={{ backgroundColor: col }}>{col}</span>} //{() => createTextBox(col)} //{color}
                    checked={col === color}
                    background-color={col}
                />
            ))}
            <div>
                You are
                <span
                    data-testid="colored-box"
                    style={{
                        width: "50px",
                        height: "25px",
                        backgroundColor: color, //color,
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: "5px"
                    }}
                >
                    on {color}
                </span>
            </div>
        </div>
    );
}
