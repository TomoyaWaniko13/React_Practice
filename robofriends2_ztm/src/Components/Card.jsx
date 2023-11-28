export const Card = ({id, name, email}) => {
    return (

        <div
            className={"bg-blue-300 m-2 p-3 rounded-3xl" +
                " w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/4 " +
                "duration-300 hover:bg-blue-400 hover:scale-105"}>
            <ul>
                <img src={`https://robohash.org/${id}`}
                     alt="Robo photo" width="200px" height="200px"
                     className="my-0 mx-auto"/>
                <li className={"text-center p-3 font-bold text-2xl"}>{name}</li>
                <li className={"text-center sm:text2xl md:text-base  text-xl"}>{email}</li>
            </ul>
        </div>


    )
}
