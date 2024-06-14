

function ImageComponent (props) {
    return (
    <div id = {props.id} className = 'nes-container image-component' onClick = {props.onClick}>
        <img src = {props.image} alt = {props.name}></img>
        <div className = 'image-name'>{props.name}</div>
    </div>)
}

export default ImageComponent

