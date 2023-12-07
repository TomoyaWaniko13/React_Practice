export const Card = ({id,name,email}) => {
    return (
        <div className={"sm:w-full md:w-1/3 lg:w-1/4"}>
            <div
                className={"bg-blue-300  text-center rounded-3xl p-10 m-5 transition-transform:1000ms duration-300 hover:scale-105 shadow-2xl"}>
                <img src={`https://robohash.org/100`} alt="" className={"block my-0 mx-auto"}/>
                <h2 className={"text-xl"}>{name}</h2>
                <p>{email}</p>

            </div>
        </div>
    )
}