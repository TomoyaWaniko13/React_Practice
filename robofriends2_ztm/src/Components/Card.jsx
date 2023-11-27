export const Card = ({name, email}) => {
    return (
        <div className={" bg-blue-300 m-1.5 p-3 rounded-3xl" +
            " w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 " +
            "hover:bg-blue-400 "}>
            <ul>
                <img src="https://robohash.org/1"
                     alt="Robo photo" width="200px" height="200px"
                     className="my-0 mx-auto"/>
                <li className={"text-center p-3 font-bold text-2xl"}>{name}</li>
                <li className={"text-center sm:text2xl md:text-base  text-xl"}>{email}</li>
            </ul>
        </div>
    )
}
