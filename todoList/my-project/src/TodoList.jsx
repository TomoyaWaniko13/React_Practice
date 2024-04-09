import {useState} from "react";

export default function TodoList() {
    const blueButtonClass = 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
    const redButtonClass = 'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900';
    const unOrderedListClass = 'list-disc m-4';
    const grayBorderClass = 'border-2 border-b-gray-600 rounded-lg p-2 m-3'

    const [inputTodo, setInputTodo] = useState('');
    const [incompleteTodosArray, setIncompleteTodosArray] = useState(['Todo A', 'Todo B', 'Todo C']);
    const [completeTodosArray, setCompleteTodosArray] = useState(['Todo R', 'Todo S', 'Todo T']);

    const onChangeInputArea = (e) => setInputTodo(e.target.value);
    const onClickAddTodo = (e) => {
        const newTodosArray = [...incompleteTodosArray, ];

    }


    return (
        <div className={'box-sizing: border-box m-5'}>
            <div>
                <input type="text"
                       className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5  m-3 w-1/3"
                       placeholder="Please enter you new taksks."
                       required
                       onChange={onChangeInputArea}
                />
                <button type="button" className={blueButtonClass} onChange={onClickAddTodo}>Add</button>
            </div>
            <div className={grayBorderClass}>
                <h2 className={'font-bold m-3 text-xl '}>Unfinished Tasks:</h2>
                <ul className={unOrderedListClass}>
                    {incompleteTodosArray.map(incompleteTask => {
                            return (
                                <li key={incompleteTask}>
                                    <p className={'my-2'}>{incompleteTask}</p>
                                    <button type="button" className={blueButtonClass}>Task completed</button>
                                    <button type="button" className={redButtonClass}>Delete</button>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
            <div className={grayBorderClass}>
                <h2 className={'font-bold m-3 text-xl'}>Finished Tasks:</h2>

                <ul className={unOrderedListClass}>
                    {completeTodosArray.map(completeTask => {
                            return (
                                <li key={completeTask}>
                                    <p className={'my-2'}>{completeTask}</p>
                                    <button className={blueButtonClass}>Undo</button>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    );
};