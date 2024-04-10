import {useState} from "react";
import {TodoInput} from "./components/TodoInput.jsx";
import {UncompletedTodos} from "./components/UncompletedTodos.jsx";
import {CompletedTodos} from "./components/CompletedTodos.jsx";
import {atRule} from "postcss";

export default function TodoList() {
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

    const triggerClickOnEnter = (e) => {
        if (e.key === 'Enter') {
            onClickAddHandler();
        }
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

    const isUncompletedTodosLimitReached = () => uncompletedTodos.length >= 5;

    return (
        <div className={'box-sizing: border-box m-5'}>
            <TodoInput inputtedTodo={inputtedTodo}
                       onChangeInputArea={onChangeInputArea}
                       onClickAddHandler={onClickAddHandler}
                       triggerClickOnEnter={triggerClickOnEnter}
                       isDisabled={isUncompletedTodosLimitReached()}
            />
            {isUncompletedTodosLimitReached() && (
                <p className={'font-bold m-3 text-xl text-red-700'}>
                    * Maximum number of uncompleted todos is 5. *
                </p>
            )
            }
            <UncompletedTodos
                uncompletedTodos={uncompletedTodos}
                onClickCompleteHandler={onClickCompleteHandler}
                onClickDeleteHandler={onClickDeleteHandler}

            />
            <CompletedTodos
                completedTodos={completedTodos}
                onClickUndoHandler={onClickUndoHandler}
            />
        </div>
    );
};