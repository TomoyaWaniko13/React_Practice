export const Width = () => {
    function showWidth() {
        const width = window.innerWidth;
        document.getElementById("width").innerText = `Width: ${width}px`;
    }

    window.onload = showWidth;
    window.onresize = showWidth;

    return (
        <>
            <p id={"width"}></p>
        </>
    )
}