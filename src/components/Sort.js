import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: 0,
            clickedA: false,
            clickedD: false
        }
    }

    sortAscending = () => {
        this.props.sortCallback(1)
        this.setState({ 
            clickedA: true,
            clickedD: false 
        });
    }

    sortDescending = () => {
        this.props.sortCallback(-1)
        this.setState({ 
            clickedD: true,
            clickedA: false  
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.sortAscending} variant={this.state.clickedA ? 'primary' : 'outline-primary'}>Ascendente</Button>&nbsp;
                <Button onClick={this.sortDescending} variant={this.state.clickedD ? 'primary' : 'outline-primary'}>Descendente</Button>
            </div>
        );
    }
}

export default Sort;