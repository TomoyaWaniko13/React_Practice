// import './Container.css';
//
// const Container = ({title, children}) => {
//     console.log(children);
//     return (
//         <div className={'container'}>
//             <h3>{title}</h3>
//             <h3>{children}</h3>
//         </div>
//     );
// };
//
// export default Container;


const Container = ({title, first, second}) => {
    return (
        <>
            <div className={'container'}>
                {first}
                {second}
            </div>
        </>
    );
};

export default Container;