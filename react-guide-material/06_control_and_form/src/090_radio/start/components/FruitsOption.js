import {useState} from "react";

const FruitsOption = ({fruitString, selectedFruitString, onChangeInput}) => {
    return (
        <>
            <input
                type={"radio"}
                onChange={onChangeInput}
                id={fruitString}
                value={fruitString}
                checked={selectedFruitString === fruitString}/>
            <label htmlFor={fruitString}>
                {fruitString}
            </label>
        </>
    )
};

export default FruitsOption;