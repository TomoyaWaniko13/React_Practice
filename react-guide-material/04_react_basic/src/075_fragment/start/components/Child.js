import "./Child.css";
import React from "react";


console.log(React);

const Child = () => {
    return (
        <>
            <div className="component">
                <h3>Hello Component</h3>
            </div>
            <h3>Hello Fragment!!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi commodi consequatur corporis
                cupiditate, dolor eligendi ex, illo inventore neque, numquam porro qui quis quos saepe sint soluta
                veritatis voluptatem?
            </p>
        </>
    );
};

export default Child;
