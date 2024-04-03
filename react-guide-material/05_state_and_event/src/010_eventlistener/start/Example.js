const Example = () => {
    const clickHandler1 = () => {
        alert('This button has been clicked...');
    }
    const clickHandler2 = () => {
        console.log('This button has been clicked...');
    }

    const hello = () => 'hello';
    console.log(hello());
    console.log(hello)
    return (
        <>
            <button onClick={clickHandler1}>click here!</button>
            <button onClick={clickHandler2}>click here!</button>
            <button onClick={() => clickHandler1()}>click here!!</button>
            {hello}
            {hello()}
        </>
    );
};

export default Example;
