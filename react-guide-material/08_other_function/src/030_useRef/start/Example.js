import {useCallback, useRef, useState} from "react";



const Case1 = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef();
    // inputRef.current contains a HTML element.
    console.dir(inputRef);
    return (
        <div>
            <h3>ユースケース1</h3>
            <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => inputRef.current.focus()}>
                インプット要素をフォーカスする
            </button>

        </div>
    );
};

const Case2 = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();

    const onButtonClick = useCallback((event) => {
        if (isPlaying) { // if true
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(prev => !prev);

    }, []);

    return (
        <div>
            <video style={{maxWidth: "300px"}} ref={videoRef}>
                <source src="./sample.mp4"/>
            </video>
            <button onClick={onButtonClick}>
                {isPlaying ? 'pause' : 'play'}
            </button>
        </div>
    );
};


/*
    1.再レンダリングされても情報が保存される.(通常の変数はレンダリングの時初期化される。)
    2.refの値を変更しても再レンダリングされない。
    3.ref objectをJSXに渡すとそのDOMにアクセスできる。(よく使う)
*/
const getCurrentTimeString = () => new Date().toTimeString();

const Case3 = () => {
    const [currentTimeString, setCurrentTimeString] = useState(getCurrentTimeString());
    const ref = useRef(getCurrentTimeString());

    const updateState = () => {
        setCurrentTimeString(getCurrentTimeString());
    };

    const updateRef = () => {
        /* コンソールを見るとブラウザの表示と、ref.currentの中身が異なることを確認できます */
        ref.current = getCurrentTimeString();
        console.log("ref.current -> ", ref.current);
    };

    return (
        <div>
            <p>
                state: {currentTimeString}
                <button onClick={updateState}>updateState()</button>
            </p>
            <p>
                ref: {ref.current}
                <button onClick={updateRef}>updateRef()</button>
            </p>
        </div>
    );
};

const Example = () => {
    return (
        <>
            <Case1/>
            <Case2/>
            <Case3/>
        </>
    );
};

export default Example;
