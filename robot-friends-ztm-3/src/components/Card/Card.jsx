export const Card = () => {
    return (
        <div className={"bg-gray-200 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-2xl p-3 "}>
            <img src="https://robohash.org/test" alt="robot"  className={"block mx-auto"}/>
            <div className={"text-center block my-0 mx-auto"}>
                <h2 className={"text-2xl"}>Hawaii Neko san</h2>
                <p className={"text-base"}>student@gmail.com</p>
            </div>
        </div>
    )
}