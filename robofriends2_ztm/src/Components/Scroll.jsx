export const Scroll = (props) => {
    return (
        <div className={"overflow-scroll border border-black h-1/6"   }>
            {props.children}
        </div>
    );
}

