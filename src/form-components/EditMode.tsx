import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={(e) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
            </label>
            {isEditMode ?
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Student:
                        <input
                            type="checkbox"
                            className="form-switch"
                            checked={isStudent}
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
