import {useState} from "react";
import FruitsOption from "./components/FruitsOption";


const Example = () => {

    const [selectedFruitString, setSelectedFruitString] = useState('Apple');
    const onChangeInput = event => setSelectedFruitString(event.target.value);

    const fruitsStringArray = ['Apple', 'Banana', 'Cherry'];

    return (
        <>
            {fruitsStringArray.map(fruitString => {
                return (
                    <FruitsOption
                        key={fruitString}
                        fruitString={fruitString}
                        selectedFruitString={selectedFruitString}
                        onChangeInput={onChangeInput}/>
                )
            })}
            <h3>{selectedFruitString} is selected.</h3>
        </>
    );
};

export default Example;
