import './Expression.css';

const Expression = () => {
    const title = 'Expression';

    const array = ['item 1', 'item 2', 'item 3'];
    const joinedArray = array.join(', ');

    const hello = (arg) => `${arg} Function`;


    return (
        <div className={title.toLowerCase()}>
            <h3>Hello! {title}</h3>
            <h3>{joinedArray}</h3>
            <h3>{hello('hello')}</h3>
            <h3>{/*This line is not displayed because this is a comment.*/}</h3>
            {<h3>Hello JSX</h3>}
        </div>
    );
};

export default Expression;
