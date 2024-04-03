const Hello = (props) => {
    const description = Reflect.getOwnPropertyDescriptor(props, 'name');
    console.log(description);
    return (
        <div>
            <h3>Hello {props.name}</h3>
        </div>
    );
};

export default Hello;
