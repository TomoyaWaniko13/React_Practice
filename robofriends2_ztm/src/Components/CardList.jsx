import {Card} from "./Card";

export const CardList = ({robots}) => {

    const cardComponent = robots.map((user,i) =>{
        return(
                <Card key={i} id={robots[i].id}
                      name={ robots[i].name} email={robots[i].email}/>
        )
    })

    return(
        <div className={"flex flex-wrap justify-center"}>
            {cardComponent}
        </div>
    )
}


// return (
//     <div className="App flex flex-wrap justify-center">
//
//         <Card id={1} name={"Neko"} email={"kevin@gmail.com"}/>
//         <Card id={2} name={"Neko"} email={"james@gmail.com"}/>
//         <Card id={3} name={"Neko"} email={"paul@gmail.com"}/>
//         <Card id={4} name={"Neko"} email={"vwefae@gmail.com"}/>
//         <Card id={5} name={"Neko"} email={"kevnfafa@gmail.com"}/>
//         <Card id={6} name={"Neko"} email={"faijgareo@gmail.com"}/>
//         <Card id={7} name={"Neko"} email={"fajojjteait@gmail.com"}/>
//         <Card id={8} name={"Neko"} email={"ffafdafeafaotjeoreorjeoj@gmail.com"}/>
//     </div>
// )

