import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Holidays: Christmas, Birthday, Easter, Carneval, Saint Nicholas Day

// type Holiday =
//     | "Birthday"
//     | "Christmas"
//     | "Easter"
//     | "Carneval"
//     | "Saint Nicholas Day";

const HOLIDAY_ALPH: Record<string, string> = {
    Birthday: "Carneval",
    Carneval: "Christmas",
    Christmas: "Easter",
    Easter: "Saint Nicholas Day",
    "Saint Nicholas Day": "Birthday"
};

const HOLIDAY_DATE: Record<string, string> = {
    Carneval: "Easter",
    Easter: "Birthday",
    Birthday: "Saint Nicholas Day",
    "Saint Nicholas Day": "Christmas",
    Christmas: "Carneval"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Carneval");
    function changeAlph(): void {
        setHoliday(HOLIDAY_ALPH[holiday]);
    }
    function changeTime(): void {
        setHoliday(HOLIDAY_DATE[holiday]);
    }
    function chooseEmoji(): string {
        let emoji = "";
        if (holiday === "Christmas") {
            emoji = "🎄";
        } else if (holiday === "Carneval") {
            emoji = "🎭";
        } else if (holiday === "Easter") {
            emoji = "🐇";
        } else if (holiday === "Birthday") {
            emoji = "🎁";
        } else {
            emoji = "🎅";
        }
        return emoji;
    }
    return (
        <div>
            <Button onClick={changeAlph}>Advance by Alphabet</Button>
            <Button onClick={changeTime}>Advance by Time of Year</Button>
            <div>Holiday: {chooseEmoji()} </div>
        </div>
    );
}
