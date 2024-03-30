import './example.css';

/**
 * [注意]レクチャーをプルダウンで選択すると、
 * <head>タグにそのレクチャーでimport "Child.css"のように読み込んだスタイルが挿入されます。
 * このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた
 * 場合にはブラウザを更新してください。
 */

const Example = () => {
    return (
        <div className={'component'}>
            <h3>Hello from Example.js!</h3>
        </div>
    )
};

export default Example;
