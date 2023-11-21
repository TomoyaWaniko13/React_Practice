function App() {
    return (
        <>
            <section className={"flex"}>
                <input type="text" placeholder={"Enter your task:"}
                       className={"border border-blue-200 p-2 m-2 rounded-3xl"}/>
                <button className="border border-blue-200 px-4 m-2 rounded-3xl hover:bg-blue-500 hover:text-white">
                    Add
                </button>
            </section>
            <section className={"mt-2 ml-3 text-gray-700 bg-blue-50 rounded-3xl p-3"}>
                <h1 className={"text-3xl "}>Unfinished Tasks</h1>
                <ul>
                    <li className={"flex"}>
                        <p className={"mt-3"}>Task neko san</p>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Done
                        </button>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Delete
                        </button>
                    </li>
                    <li className={"flex"}>
                        <p className={"mt-3"}>Task neko san</p>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Done
                        </button>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Delete
                        </button>
                    </li>
                </ul>
            </section>
            <section className={"mt-9 ml-3 text-gray-700 bg-green-50 rounded-3xl p-3"}>
                <h1 className={"text-3xl"}>Finished Tasks</h1>
                <ul>
                    <li className={"flex"}>
                        <p className={"mt-3"}>Task neko san</p>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Undo
                        </button>
                    </li>
                    <li className={"flex"}>
                        <p className={"mt-3"}>Task neko san</p>
                        <button
                            className={"border border-blue-200 px-4 mx-1 mt-3 rounded-3xl hover:bg-blue-500 hover:text-white"}>
                            Undo
                        </button>
                    </li>
                </ul>
            </section>
        </>

    );
}

export default App;
