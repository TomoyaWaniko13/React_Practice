import "./Example.css";

const Example = () => {
    return (

        <>
            <div>
                <p>Check your console!</p>
                <label htmlFor="">
                    <input
                        type={'text'}
                        onChange={()=> console.log('onChange detected!')}
                        onFocus={() => console.log('onFocus detected!')}
                        onBlur={() => console.log('onBlur detected!')}
                    >
                    </input>
                </label>
            </div>
            <div>
                <p>Get your input value: </p>
                <label htmlFor="">
                    <input type="text" onChange={(e) => console.log(e)}/>
                </label>
            </div>
            <div
                className={'hover-event'}
                onMouseEnter={() => console.log('onMouseEnter detected!')}
                onMouseLeave={() => console.log('onMouseLeave detected!!')}
            >
                <p>Hover here!</p>
            </div>
        </>
    );
};

export default Example;
