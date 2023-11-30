export const SearchBox = ({searchChange}) => {
    return (
        <input type="search"
               placeholder="search robots"
               className={"border border-black  my-10 mx-auto rounded-3xl p-4 block focus:border-none"}
               onChange={searchChange}
        />
    );
}