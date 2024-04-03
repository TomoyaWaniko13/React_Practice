import Container from './components/Container';
import Profile from "./components/Profile";

const profileArray = [
    {name: "Takashi", age: 19, country: "JP", color: 'green'},
    {name: "Jane", age: 28, country: "UK", color: 'blue'}
];

// const Example = () => {
//     return (
//         <div>
//             <Container title={'What is container?'}>
//                 {'children here!!!'}
//             </Container>
//         </div>
//     )
// };

// const Example = () => {
//     return (
//         <div>
//             <Container title={'What is container?'}>
//                 <Profile {...profileArray[0]}/>
//                 <Profile {...profileArray[1]}/>
//             </Container>
//         </div>
//     )
// };

const Example = () => {
    return (
        <div>
            <Container title={'What is container?'}
                       children={
                           [
                               <Profile key={profileArray[0].name} {...profileArray[0]} />,
                               <Profile key={profileArray[0].name} {...profileArray[1]} />
                           ]
                       }
                       first={<Profile key={profileArray[0].name} {...profileArray[0]} />}
                       second={<Profile key={profileArray[1].name} {...profileArray[1]} />}
            />
        </div>
    );
};

export default Example;
