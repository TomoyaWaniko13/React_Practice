import {blueButtonClass, grayBorderClass, unOrderedListClass} from "../styleConstants.js";

export const CompletedTodos = ({completedTodos, onClickUndoHandler}) => {
    return (
        <div className={grayBorderClass}>
            <h2 className={'font-bold m-3 text-xl'}>Completed Todos:</h2>

            <ul className={unOrderedListClass}>
                {completedTodos.map((completeTask, index) => {
                        return (
                            <li key={completeTask}>
                                <p className={'my-2'}>{completeTask}</p>
                                <button
                                    className={blueButtonClass}
                                    onClick={() => onClickUndoHandler(index)}
                                >
                                    Undo
                                </button>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};