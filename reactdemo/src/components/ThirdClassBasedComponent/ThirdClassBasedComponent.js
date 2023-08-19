import React, { Component } from 'react'

class ThirdClassBasedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        console.log("Constructor")
    }
    render() {
        console.log("render");
        return (
            <div style={{ border: '1px solid red' }}>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: this.state.name.toUpperCase() })}>Change State</button>
                <button onClick={() => this.props.setParagraphUpper()}>Uppercase</button>
                <button onClick={() => this.props.setParagraphLower()}>Lowercase</button>
            </div>

        )
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log(this.state)
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

}

export default class ThirdClassBasedComponentParent extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            s1: "s1 data",
            s2: "s2 data",
            p: "LOREM IMPSUM SFDCGVHBJNMK,"
        }
    }
    render() {
        return (
            <>
                <button onClick={
                    () => this.setState({ show: !this.state.show })
                }> Toggle</button >
                <p>{this.state.p}</p>
                <div>{this.state.show && <ThirdClassBasedComponent
                    setParagraphLower={() => this.setState(prev => ({ p: prev.p.toLowerCase() }))}
                    setParagraphUpper={() => this.setState(prev => ({ p: prev.p.toUpperCase() }))}
                    name={this.state.p} />}</div>
            </>
        )
    }
}
