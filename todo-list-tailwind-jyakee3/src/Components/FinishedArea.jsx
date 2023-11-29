export const FinishedArea = () => {
    return (
        <>
            <h1 className={"text-4xl font-bold my-10 text-center"}>Finished Tasks</h1>
            <ul className={"flex items-center"}>
                <li><p className={"mx-10 text-2xl font-semibold"}>Task 1 Neko-san</p></li>
                <li>
                    <button
                        className={"border-2 border-black text-2xl p-5 m-2  rounded-3xl hover:bg-black hover:text-white"}>Undo
                    </button>
                </li>
            </ul>
        </>
    )
}