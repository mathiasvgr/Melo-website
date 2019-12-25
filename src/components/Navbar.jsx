import React from 'react'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFixNavBar : "",
            brightness : "1",
            style : ["white", "text-shadow"],
            color : "white"
        }
    }

    componentDidMount( ) {
        window.addEventListener('scroll', this.changeScrollheader)
    }

    changeScrollheader = () => {
        const istop  = window.scrollY > 1;
        if (istop) {
            this.setState({
                isFixNavBar : "fade-in",
                brightness : '0',
                style : ["black", ""]
            })
        }else {
            this.setState({
                isFixNavBar : "",
                brightness : '1',
                style : ["white", "text-shadow"]
            })
        }
    }

    render() {
        return (
            <div className={`navbar ${this.state.isFixNavBar} `}>
                <img className=" flower-logo" src="flower-1.svg" style={{filter : `brightness(${this.state.brightness}) `}}/>
                <div className={`content-navbar ${this.state.style[0]} ${this.state.style[1]} slide-in-blurred-right`}>
                    <div>Home</div>
                    <div>About</div>
                    <div>News</div>
                    <div>Contact</div>
                </div>
             </div>
        )

    }
}