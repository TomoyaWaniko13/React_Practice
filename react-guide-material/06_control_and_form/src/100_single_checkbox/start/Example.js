import { useState } from "react";

// implementation of a checkbox
const Example = () => {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div>
            <label>
                check:
            </label>
            <input type="checkbox"
                   id={'my-check'}
                   checked={isChecked}
                   onChange={() => setIsChecked(prevState => !prevState)}
            />
            <div>
                {isChecked ? 'ON' : 'OFF'}
            </div>
        </div>
    );
};

export default Example;
