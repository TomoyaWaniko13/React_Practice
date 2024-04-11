/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でforwardRefを使用する必要があります。
*/

/*
* In React, the term "imperative" refers to actions that manipulate the
* component directly, rather than through React's declarative state and
* props system. Declarative programming focuses on what the program should
* accomplish without specifying how the program should achieve the result.
* React is primarily declarative, as you describe the UI as a function of the
* application's state and React takes care of rendering the components based on
* this description.

However, there are cases where you might need to directly manipulate a component
* in an imperative way. This could involve focusing a text input, playing media in
* a player, or triggering animations directly. These actions don't fit neatly into
* the declarative paradigm because they involve directly interacting with the DOM
* elements or components, bypassing the usual data flow through state and props.

`useImperativeHandle` is a hook that allows parent components to directly invoke
* functions or modify properties of a child component, essentially providing a way
* to perform imperative actions on that child. It's used together with `forwardRef`
*  to expose a handle to the parent component. The parent can then use this handle
*  to execute functions or access values within the child component, which are defined
*  using `useImperativeHandle`.

The "imperative" in `useImperativeHandle` essentially acknowledges that while React
* prefers a declarative approach to building UIs, there are situations where direct,
* imperative manipulation is necessary or more efficient. This hook provides a controlled
*  means of enabling this without stepping completely outside the React paradigm.
* */

import {forwardRef, useImperativeHandle, useRef} from "react";

const Input = forwardRef((props, ref) => {

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => (
        {
            exposedFocus() {
                inputRef.current.focus();
                console.log('exposedFocus() run.')
            }
        }
    ))

    return <input type={'type'} ref={inputRef}/>;
});

const Example = () => {
    const ref = useRef(null);

    return (
        <>
            <Input ref={ref}/>
            <button onClick={() => ref.current.exposedFocus()}>
                Focus on the input area.
            </button>
        </>
    );
};

export default Example;