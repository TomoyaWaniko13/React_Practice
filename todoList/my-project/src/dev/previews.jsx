import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TodoList from "../TodoList.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TodoList">
                <TodoList/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews