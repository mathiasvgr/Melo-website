import React from 'react'
import TrackVisibility from 'react-on-screen';

export default class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom : true,
            clientsCritic : [{
                pathPic : 'profil-pic.jpg',
                criticSliced : undefined,
                critic : "The philosophy of René Descartes (and the idealistic error connected with it) finds its foundation in a two-fold way. The transition from sensory perception to the plane of reflection and the ultimate establishing of the „cogito” form one foundation. The „cogito” and particularly its structure and its existential-reflectional",
                name : "jean benoit"    
            }, {
                pathPic : 'profil-pic.jpg',
                criticSliced : undefined,
                critic : "The philosophy of René Descartes (and the idealistic error connected with it) finds its foundation in a two-fold way. The transition from sensory perception to the plane of reflection and the ultimate establishing of the „cogito” form one foundation. The „cogito” and particularly its structure and its existential-reflectional",
                name : "jean benoit"    
            }, {
                pathPic : 'profil-pic.jpg',
                criticSliced : undefined,
                critic : "The philosophy of René Descartes (and the idealistic error connected with it) finds its foundation in a two-fold way. The transition from sensory perception to the plane of reflection and the ultimate establishing of the „cogito” form one foundation. The „cogito” and particularly its structure and its existential-reflectional",
                name : "jean benoit"    
            }]
        }
    }


    componentDidMount () {
        let clientsCritic = this.state.clientsCritic;

        for(let indexCritic = 0; indexCritic != clientsCritic.length; indexCritic += 1) {
            clientsCritic[indexCritic].criticSliced  = clientsCritic[indexCritic].critic.slice(0, 300) + "...";
        }
        this.setState({clientsCritic});
    }
    
    test = () => {
        console.log( this.refText)
        console.log( this.refs)
    }


    printClientCritic(clientsInfo, index) {
        let {pathPic, criticSliced,  critic, name} = clientsInfo;
        //TODO change to classe component 
        return (
                index % 2 === 0 ?
                <div className="critic" key={index}>
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
                <div className="critic" key={index}>
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

    RenderedElements = ({isVisible}) => {

        return(
            isVisible ===  true 
            ?
            <div className="content-page">
                <div className='critic-content'>
                    {this.state.clientsCritic.map((clientsInfo, index) => this.printClientCritic(clientsInfo, index))}
                </div>
            </div>
            :
            <div className='full-screen'/>
        )
    }

    render() {
        return (
            <TrackVisibility once={true} offset={50} partialVisibility={true}>
                <this.RenderedElements />
            </TrackVisibility>
            )
    }
}