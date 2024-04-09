import {useState} from "react";

const Example = () => {
    const [selectedFruitString, setSelectedFruitString] = useState('Banana');

    const OPTIONS = ['Apple', 'Banana', 'Cherry'];

    return (
        <>
            <select
                value={selectedFruitString}
                onChange={e => setSelectedFruitString(e.target.value)}
            >
                {OPTIONS
                    .map(optionString =>
                        <option value={optionString} key={optionString}>
                            {optionString}
                        </option>
                    )
                }
                {/*<option value={'Apple'}>Apple</option>*/}
                {/*<option value={'Banana'}>Banana</option>*/}
                {/*<option value={'Cherry'}>Cherry</option>*/}
            </select>
            <div>selected item: {selectedFruitString}</div>
        </>
    );
};

export default Example;
