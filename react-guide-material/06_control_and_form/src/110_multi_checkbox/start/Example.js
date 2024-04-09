import {useState} from "react";

const Example = () => {
    const [fruitsObjectArray, setFruitsObjectArray] = useState(
        [
            {name: "Apple", price: 100, checked: false},
            {name: "Banana", price: 200, checked: false},
            {name: "Cherry", price: 300, checked: false},
        ]
    );

    const [priceSum, setPriceSum] = useState(0);

    const handleCheckboxChange = (e) => {

        const updatedFruitObjectArray = fruitsObjectArray.map(fruitObject => {
                const newFruitObject = {...fruitObject};

                if (e.target.value === newFruitObject.name) {
                    newFruitObject.checked = !newFruitObject.checked;
                }
                return newFruitObject;
            }
        );

        setFruitsObjectArray(updatedFruitObjectArray);

        // let newPriceSum = 0;
        // updatedFruitObjectArray.forEach((updatedFruitObject) => {
        //         if (updatedFruitObject.checked) {
        //             newPriceSum += updatedFruitObject.price;
        //         }
        //     }
        // )

        // let newPriceSum = 0;
        // updatedFruitObjectArray
        //     .filter(updatedFruitObject => updatedFruitObject.checked)
        //     .forEach(updatedFruitObject => (newPriceSum += updatedFruitObject.price));

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        // To sum up the values contained in an array of objects, you MUST supply an initialValue,
        // so that each item passes through your function.

        let newPriceSum = updatedFruitObjectArray
            .filter(fruitObject => fruitObject.checked)
            .reduce((accumulator, fruitObject) => accumulator + fruitObject.price, 0);

        setPriceSum(newPriceSum);
    }

    return (
        <>
            {fruitsObjectArray.map(fruitObject => {
                    return (
                        <div key={fruitObject.name}>
                            <input type={"checkbox"}
                                   id={fruitObject.name}
                                   value={fruitObject.name}
                                   checked={fruitObject.checked}
                                   onChange={handleCheckboxChange}
                            />
                            <label htmlFor={fruitObject.name}>
                                {fruitObject.name}:{fruitObject.price}
                            </label>

                        </div>
                    );
                }
            )
            }
            <p>Sum: {priceSum}</p>
        </>
    );


}


export default Example;
