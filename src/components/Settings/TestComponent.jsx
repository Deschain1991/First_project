import React from 'react'

class Tooltip extends React.Component {

    state = {
        isOpen: false
    };

    componentDidMount() {
        console.log('Component did mount')
    }

    componenDidUpdate() {
        console.log('Component did update')
    }

    componentWillUnmount() {
        console.log('Component will unmount')
    }

    render() {
        return (
            <div style={{width: 100, height: 100, background: '#fefefe'}}>
                {this.state.isOpen ? (
                    <div>
                        <h1>Привіт, світе!</h1>
                        <h2>Зараз BLA.</h2>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Tooltip