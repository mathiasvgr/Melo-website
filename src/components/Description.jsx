import React from 'react'
import TrackVisibility from 'react-on-screen';

export default class Description extends React.Component {

    RenderedElements = ({isVisible}) => {
        return (
            isVisible === true 
        ?
            <header className='description full-width' >
                <div className='description-bg rotate-effect'/>
                <div className="description-content" >
                    <div className="text-description">
                            violence conjugale, qu'est ce que c'est ?
                            La violence conjugale désigne les actes de violence commis, au sein d’un couple, par l’un des conjoints sur l’autre.
                            Il y a violence conjugale dès lors qu’un des conjoints exerce une violence sur l'autre. Et ce quelque soit le statut de la conjugalité : mariage, union libre, pacs, concubinage…
                            La violence conjugale peut prendre la forme d’actes isolés, qui ne se reproduisent pas, ou bien d’actes répétés, habituels.
                    </div>
                    <div className="img-description-wrapper">
                        <img src='profil-pic.jpg' alt='profil-pic'></img>
                    </div>
                </div>
            </header>
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

// TO PUT ON ELEMENT
//     position: relative;
//     color: white;