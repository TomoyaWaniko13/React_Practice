export const SearchBox = ({searchChange}) => {
    return (
        <>
            <input type="text"
                   placeholder={"search robots"}
                   className={"border border-gray-400 text-2xl p-3 text-center block mx-auto mt-2 mb-10"}
                   onChange={searchChange}
            />
        </>
    )
}