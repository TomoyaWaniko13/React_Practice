const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
    const animalList = [];
    for (const animalElement of animals) {
        animalList.push(<li>{animalElement}</li>);
    }

    const helloAnimals = animals.map((animalElement) => <li>Hello, {animalElement}</li>);

    return (
        <>
            <h3>配列の操作</h3>
            <ul>
                {animalList}
                {helloAnimals}

            </ul>
        </>
    );
};

export default Example;

// 式(expression)はJSX{}のなかで使用可能：何らかの値を返すもの、変数に代入できるもの
// 文(statement)はJSX{}のなかで使用できない: 変数宣言(const a = 1　など)、for statement, if statement, switch statementやセミコロン；で区切るもの