import React, { useState } from "react";
export default function TwoWayBinding() {
    const couse = [
        { id: 1, name: "HTML CSS" },
        { id: 2, name: "Javascript" },
        { id: 3, name: "ReactJS" },
    ];
    const [selected, setSelected] = useState([]);

    const handleChange = (id) => {
        setSelected((prev) => 
            prev.includes(id) 
                ? prev.filter((item) => item !== id) // Remove if already selected
                : [...prev, id] // Add if not selected
        );
    };

    console.log(selected);
    return (
        <div>
            {couse.map((item) => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        checked={selected.includes(item.id)}
                        onChange={() => handleChange(item.id)}
                    />
                    {item.name}
                </div>
            ))}
        </div>
    );
}