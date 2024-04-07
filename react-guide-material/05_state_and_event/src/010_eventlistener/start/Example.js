const Example = () => {
    const clickHandler = () => {
        alert('this!!');
    }

    return (
        <>
            <button onClick={clickHandler}>Click here!!</button>
            <button onClick={() => clickHandler()}>Click here!!</button>
        </>
    );
};

export default Example;
