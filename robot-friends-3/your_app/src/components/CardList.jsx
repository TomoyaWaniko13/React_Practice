import {Card} from "./Card";

export const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card id={user.id} name={user.name} email={user.email}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}