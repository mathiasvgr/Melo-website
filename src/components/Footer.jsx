import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos : [1, 2, 3 , 4, 5, 6, 7, 8]
        }
    }
    componentDidMount() {
        //todo get photos et ask melo for picture   
    }

    PhotosInstagram(photos) {
        return (
            <div className="photo-insta">
            </div>
        )
    }

    render() {
        return (
            <div className='footer'>
                <div className ="wrapper">
                    {this.state.photos.map((photos) => {
                        return <this.PhotosInstagram photos={photos}/>
                    })}
                </div>
                <div className="end-wrapper">
                    suivez moi sur ©insta : emotion-videaste
                </div>
            </div>
        )
    }
}