import React from "react"

interface Props {
    width: number;
    height: number;
    url: string,
    styles?: any;
}
interface State {
}
class HappyPlayer extends React.Component<Props, State>{
    render() {
        return (
            <canvas id="myCanvas" width={this.props.width} height={this.props.height} style={this.props.styles}>
            </canvas>
        )
    }
}
export default HappyPlayer