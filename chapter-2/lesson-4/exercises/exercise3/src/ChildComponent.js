import React, {useState, useEffect} from "react";

function ChildComponent() {
    const [color, setColor] = useState("red");

    useEffect(() => {
        let unmounted = false;
        setTimeout(() => {
            if (!unmounted) {
                setColor("green")
                console.log("color is set green")
            }
        }, 3000);

        console.log("component is rendering")

        return () => {
            unmounted = true;
            console.log("component is re-rendering")
        };
    }, []);

    return <p style={{color}}>{color}</p>;
}

export default ChildComponent;