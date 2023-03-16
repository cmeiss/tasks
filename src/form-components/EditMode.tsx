import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface EditMode {
    editMode: boolean;
    setEditMode: (newMode: boolean) => void;
}
interface Name {
    name: string;
    setName: (newName: string) => void;
}
interface Student {
    student: boolean;
    setStudent: (newStudent: boolean) => void;
}

function InEditName({ name, setName }: Name): JSX.Element {
    return (
        <div>
            <Form.Group controlId="changeName">
                <Form.Label>Enter your name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}

function InEditStudent({ student, setStudent }: Student): JSX.Element {
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Are you a student?"
                checked={student}
                onChange={() => setStudent(!student)}
            />
        </div>
    );
}

function NotInEdit({
    name,
    student
}: {
    name: string;
    student: boolean;
}): JSX.Element {
    return (
        <div>
            {name} is {student ? "" : "not"} a student.
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-check"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            <div>
                {editMode ? (
                    <div>
                        <InEditName name={name} setName={setName}></InEditName>
                        <InEditStudent
                            student={student}
                            setStudent={setStudent}
                        ></InEditStudent>
                    </div>
                ) : (
                    <NotInEdit name={name} student={student}></NotInEdit>
                )}
            </div>
        </div>
    );
}
