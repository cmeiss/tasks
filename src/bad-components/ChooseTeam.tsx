import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface Options {
    allOptions: string[];
    setAllOptions: (newOption: string[]) => void;
}

interface Team {
    team: string[];
    setTeam: (newTeam: string[]) => void;
}

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(
        { team, setTeam }: Team,
        newMember: string
    ): JSX.Element {
        if (!team.includes(newMember)) {
            const newPeople = [...team, newMember];
            setTeam(newPeople);
        }
        // if (!team.includes(option)) {
        //     const newPeople = [...team, option];
        //     setTeam(newPeople);
        //     const newOptions = [];
        // }

        return <div></div>;
    }

    function clearTeam({ setTeam }: Team) {
        setTeam([]);
        /*
        setTeam([]);
        setAllOptions(PEOPLE);
        */
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() =>
                                    chooseMember({ team, setTeam }, option)
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={() => clearTeam({ team, setTeam })}>
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
