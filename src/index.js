import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('A');
        this.state = {
            lat: null,
            errorMessage: ''
        };
        window.navigator.geolocation.getCurrentPosition(
            (position) => { 
                console.log('B'); 
                this.setState({ 
                    lat: position.coords.latitude
                 }); 
                console.log('C'); 
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
        console.log('D');
    }

    render() {
        console.log('E');
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>;
        }
        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);