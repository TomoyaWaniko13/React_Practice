import React from "react";

// https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=ATDGHsDsGcBdmgQwLYAcA2BTAjMAvMABQBQIZZAPABa6jqLTQByKmeA3gOQDmATpplgBLSN04BfAHylyskAAlM6dOGAB3cL3QATGXIoB6GtPIBKANxA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.24.3&externalPlugins=&assumptions=%7B%7D
const Example = () => {

    const sample1 = (
        <h1 className={'greeting'}>
            Hello world
        </h1>
    );
    console.log(sample1);

    console.log(
        React.createElement
        (
            'h1',
            {className: 'greeting'},
            "Hello world"
        )
    );

    const sample2 = (
        <div>
            <h1>Hello</h1>
            <h2>Good to see you.</h2>
        </div>
    );
    console.log(sample2);

    const sample3 =
    React.createElement('div', null,
        React.createElement('h1', null, 'Hello!'),
        React.createElement('h2', null, 'Good to see you.')
    );

    console.log(sample3);
}

export default Example;
