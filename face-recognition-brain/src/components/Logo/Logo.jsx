import Tilt from 'react-parallax-tilt';
import brain from "./icons8-brain-100.png"

export const Logo = () => {
    return (
        <div className={"m-4 mt-0 "}>
            <Tilt className={"Tilt rounded-3xl shadow-md p-4 w-1/12 bg-gray-300"}>
                <div className={"Tilt"}>
                    <img src={brain} alt="brain icon" className={"text-white"}/>
                </div>
            </Tilt>
        </div>
    )
}