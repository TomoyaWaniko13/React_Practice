export const ImageLinkForm = () => {
    return (
        <div>
            <p className={"text-xl m-10 text-center"}>
                This Magic Brain will detect faces in your pictures. Give it a try.
            </p>
            <div className={"flex flex-col justify-center shadow-2xl p-2"}>
                <input type="text" className={"block text-2xl p-2 w-2/3 my-0 mx-auto border border-gray-400 rounded-3xl"}/>
                <button
                    className={"block p-2 w-3/5  m-3.5 text-white bg-gray-700 rounded-3xl my-2 mx-auto transform duration-150 hover:scale-105"}>
                    Detect
                </button>
            </div>
        </div>
    )
}