import './Container.css';

const Container = ({title, children, first, second}) => {
    console.log(children);
    return (
        <div className={'container'}>
            <h3>{title}</h3>
            <h3>{children}</h3>
            <h3>{first}</h3>
            <h3>{second}</h3>
        </div>
    );
};

export default Container;