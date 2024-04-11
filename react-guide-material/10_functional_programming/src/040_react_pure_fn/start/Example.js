let value = 0;

const Child = () => {
    value++;
    return (
        <>
            {value}
        </>
    );
};

const ChildPure = ({value}) => {
    return <div>{value}</div>
}

const Example = () => {
    let value = 0;

    return (
        <>
            <div><Child/></div>
            <div><Child/></div>
            <div><Child/></div>
            <div><ChildPure value={++value}/></div>
            <div><ChildPure value={++value}/></div>
            <div><ChildPure value={++value}/></div>
        </>
    );
};

export default Example;