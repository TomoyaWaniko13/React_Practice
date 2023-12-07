import {Card} from "./Card";

export const CardList = ({robots}) => {
    const cardComponent = robots.map((user, index) => {
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    })
    return (
        <div className={"flex flex-wrap justify-center"}>
            {cardComponent}
        </div>
    );
}
