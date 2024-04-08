// import Container from './components/Container';
// import Profile from "./components/Profile";
//
// const profile = [
//     {name: 'Neko san', age: 2, country: 'AO'},
//     {name: 'Basic Neko san', age: 22, country: 'MT'}
// ];
//
//
// const Example = () => {
//     return (
//         <div>
//             <Container title={'What is container?'}>
//                 <Profile {...profile[0] } />
//                 <Profile {...profile[1] } />
//             </Container>
//         </div>
//     );
// };
//
//
// export default Example;

//
// import Container from './components/Container';
// import Profile from "./components/Profile";
//
// const profile = [
//     {name: 'Neko san', age: 2, country: 'AO'},
//     {name: 'Basic Neko san', age: 22, country: 'MT'},
//     {name: 'Nerf Neko san', age: 22, country: 'JP'},
//
// ];
//
// const object1 = {name: 'Neko san', age: 2, country: 'AO'}
//
// const Example = () => {
//     return (
//         <div>
//             <Container title={'What is container?'}
//                        children={
//                            [
//                                <Profile key={profile[0].name} {...profile[0]}/>,
//                                <Profile key={profile[1].name} {...profile[1]}/>,
//                                <Profile key={profile[2].name} {...profile[2]}/>,
//                            ]
//                        }
//             >
//             </Container>
//         </div>
//     );
// };
//
//
// export default Example;


import Container from './components/Container';
import Profile from "./components/Profile";

const profile = [
    {name: 'Neko san', age: 2, country: 'AO'},
    {name: 'Basic Neko san', age: 22, country: 'MT'},
    {name: 'Nerf Neko san', age: 22, country: 'JP'},

];

const object1 = {name: 'Neko san', age: 2, country: 'AO'}

const Example = () => {
    return (
        <div>
            <Container title={'What is container?'}
                       first={<Profile key={profile[0].name} {...profile[0]} />}
                       second={<Profile key={profile[1].name} {...profile[1]}/>}
            />

        </div>
    );
};


export default Example;

