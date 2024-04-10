import {blueButtonClass, grayBorderClass, redButtonClass, unOrderedListClass} from "../styleConstants.js";

export const UncompletedTodos = ({uncompletedTodos, onClickCompleteHandler, onClickDeleteHandler}) => {
    return (
        <div className={grayBorderClass}>
            <h2 className={'font-bold m-3 text-xl '}>Uncompleted Todos:</h2>
            <ul className={unOrderedListClass}>
                {uncompletedTodos.map((uncompletedTaskTask, index) => {
                        return (
                            <li key={uncompletedTaskTask}>
                                <p className={'my-2'}>
                                    {uncompletedTaskTask}
                                </p>
                                <button type="button" className={blueButtonClass}
                                        onClick={() => onClickCompleteHandler(index)}
                                >
                                    Task completed
                                </button>
                                <button type="button" className={redButtonClass}
                                        onClick={() => onClickDeleteHandler(index)}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};
