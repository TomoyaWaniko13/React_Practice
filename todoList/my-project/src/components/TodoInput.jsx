import {blueButtonClass} from "../styleConstants.js";

export const TodoInput = ({inputtedTodo, onChangeInputArea, onClickAddHandler, triggerClickOnEnter, isDisabled}) => {
    return (
        <>
            <input type="text"
                   className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5  m-3 w-1/3"
                   placeholder="Please enter you new taks."
                   required
                   value={inputtedTodo}
                   onChange={onChangeInputArea}
                   onKeyDown={triggerClickOnEnter}
                   disabled={isDisabled}
            />
            <button type="button"
                    className={blueButtonClass}
                    onClick={onClickAddHandler}
                    disabled={isDisabled}
            >
                Add
            </button>
        </>
    );
};