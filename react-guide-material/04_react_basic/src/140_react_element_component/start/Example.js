import React from "react";

// check 'Line Wrap' and 'react' sections, 'React Runtime' is 'classic'.
// https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBAQgTwKYwLwwBQEo0D4YDeAUDKWQE5JQCu5YMAPABYBMuA4iCACaJICEDAPStcAbiIBfIkVCRYAUQAeAQwC2ABwA2KdNjyESMSjTqYjpBtwCWAN1wWyDPkIdlGQm_aNYJksUA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.24.3&externalPlugins=&assumptions=%7B%7D

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

const Example2 = () => {
    return React.createElement("div", null, React.createElement(Bye, null));
};

console.log(Example());


export default Example;

