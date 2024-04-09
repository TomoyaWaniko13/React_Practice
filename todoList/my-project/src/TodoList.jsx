import {useState} from "react";

export default function TodoList() {
    const blueButtonClass = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
    const redButtonClass = 'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
    const unOrderedListClass = 'list-disc m-4';
    const grayBorderClass = 'border-2 border-b-gray-600 rounded-lg p-2 m-3'

    const [inputtedTodo, setInputtedTodo] = useState('');
    const [uncompletedTodos, setUncompletedTodos] = useState(['Todo A', 'Todo B', 'Todo C']);
    const [completedTodos, setCompletedTodos] = useState(['Todo R', 'Todo S', 'Todo T']);

    const onChangeInputArea = (e) => {
        setInputtedTodo(e.target.value);
    }

    const onClickAddHandler = () => {
        if (inputtedTodo === '') return;

        const newTodos = [...uncompletedTodos, inputtedTodo];
        setUncompletedTodos(newTodos);
        setInputtedTodo('');
    };

    const onClickCompleteHandler = (index) => {
        const newUncompletedTodos = [...uncompletedTodos];
        const removedTodo = newUncompletedTodos.splice(index, 1)[0];

        setUncompletedTodos(newUncompletedTodos);
        setCompletedTodos([...completedTodos, removedTodo]);
    };

    const onClickDeleteHandler = (index) => {
        const newUncompletedTodos = [...uncompletedTodos];
        newUncompletedTodos.splice(index, 1);

        setUncompletedTodos(newUncompletedTodos);
    }

    const onClickUndoHandler = (index) => {
        const newCompletedTodos = [...completedTodos];
        const removedTodo = newCompletedTodos.splice(index, 1)[0];

        setCompletedTodos(newCompletedTodos);
        setUncompletedTodos([...uncompletedTodos, removedTodo]);
    }

    return (
        <div className={'box-sizing: border-box m-5'}>
            <div>
                <input type="text"
                       className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5  m-3 w-1/3"
                       placeholder="Please enter you new taksks."
                       required
                       value={inputtedTodo}
                       onChange={onChangeInputArea}
                />
                <button type="button" className={blueButtonClass} onClick={onClickAddHandler}>Add</button>
            </div>
            <div className={grayBorderClass}>
                <h2 className={'font-bold m-3 text-xl '}>Uncompleted Todos:</h2>
                <ul className={unOrderedListClass}>
                    {uncompletedTodos.map((uncompletedTaskTask, index) => {
                            return (
                                <li key={uncompletedTaskTask}>
                                    <p className={'my-2'}>{uncompletedTaskTask}</p>
                                    <button type="button" className={blueButtonClass}
                                            onClick={() => onClickCompleteHandler(index)}
                                    >
                                        Task completed
                                    </button>
                                    <button type="button" className={redButtonClass}
                                            onClick={() => onClickDeleteHandler(index)}>
                                        Delete
                                    </button>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
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
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    );
};