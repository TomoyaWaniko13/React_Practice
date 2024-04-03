// const Example = () => {
//     const profile = [
//         {name: 'Takashi', age: 19, country: 'Japan'},
//         {name: 'Jane', age: 28, country: 'UK'},
//     ];
//     return (
//         <div>
//             <h3>練習問題</h3>
//             <p>Profileコンポーネントの中身を変更して完成コードと同じ状態になるようにしてください。※なるべく分割代入を使用してください。
//             </p>
//             <Profile
//                 name={profile[0].name}
//                 age={profile[0].age}
//                 country={profile[0].country}
//             />
//             <Profile {...profile[1]} />
//             <Profile/>
//         </div>
//     );
// };

import Profile from "./components/Profile";

const Example = () => {
    const profileArray = [
        {name: 'Takashi', age: 19, country: 'Japan'},
        {name: 'Jane', age: 28, country: 'UK'}
    ];
    return (
        <div>
            <h3>練習問題</h3>
            <p>Profileコンポーネントの中身を変更して完成コードと同じ状態になるようにしてください。※なるべく分割代入を使用してください。</p>
            <Profile name={profileArray[0].name} age={profileArray[0].age} country={profileArray[0].country} />
            <Profile {...profileArray[1]} />
            <Profile/>
        </div>
    )
}


export default Example;
