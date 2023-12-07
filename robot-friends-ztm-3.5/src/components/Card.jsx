export const Card = ({id,name,email}) => {
    return (

        <div className={"sm:w-full md:w-1/2 xl:w-1/3  "}>
            <div className={"bg-blue-100 text-center rounded-3xl p-10 m-3.5 duration-300 hover:scale-105"}>
                <img src={`https://robohash.org/${id}`} alt="robot" className={"block my-0 mx-auto"}/>
                <h2 className={"mt-10 text-2xl"}>{name}</h2>
                <p className={"mt-2"}>{email}</p>
            </div>
        </div>
    )
}