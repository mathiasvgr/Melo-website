import React from 'react'
import TrackVisibility from 'react-on-screen';

export default class Critic extends React.Component {
    constructor (props) {
        super(props)
        this.clientsInfo = this.props.clientsInfo
        this.index = this.props.index
    }

    render () {
        let {pathPic, criticSliced,  critic, name} = this.clientsInfo;
        //TODO CHANGE OPACITY AND ZOOM WITH REF
        return (
            index % 2 === 0 ?
            <div className="critic" key={this.index}>
                <div className="content-pic-wrapper">
                    <img src={pathPic} alt={pathPic}></img>
                    <div className="name">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="border"/>
                <div className="wrapper-critic-text" onMouseEnter={this.test} onMouseLeave={() => this.setState({zoom : false})} >
                    <div className="critic-text" style={{opacity : this.state.zoom ? 0 : 1}}>{criticSliced}</div>
                    {this.state.zoom && <div className="critic-text-zoomed">{critic}</div>}
                </div>
            </div>
            : 
            <div className="critic" key={this.index}>
                <div className="wrapper-critic-text" onMouseEnter={() => this.setState({zoom : true})} onMouseLeave={() => this.setState({zoom : false})} >
                    <div className="critic-text" style={{opacity : this.state.zoom ? 0 : 1}}>{criticSliced}</div>
                    {this.state.zoom && <div className="critic-text-zoomed">{critic}</div>}
                </div>
                <div className="border"/>
                <div className="content-pic-wrapper">
                    <img src={pathPic} alt={pathPic}></img>
                    <div className="name">
                        <p>{name}</p>
                    </div>
                </div>
            </div>
    )
    }
}