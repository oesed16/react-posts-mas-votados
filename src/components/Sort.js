import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Sort extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: 0,

        }
    }

    sortAscending = () => {
        // const votes = posts.map(post => post.votes);
        // // const { votes } = this.state;
        // votes.sort((a, b) => a - b)
        // this.setState({
        //     votes
        // });
        this.props.sortCallback(1)
    }

    sortDescending = () => {
        // const { votes } = this.state;
        // const votes = posts.map(post => post.votes);
        // votes.sort((a, b) => a - b).reverse()
        // this.setState({ 
        //     votes 
        // });
        this.props.sortCallback(-1)
    }

    render() {
        return (
            <div>
                <Button onClick={this.sortAscending} variant="outline-primary">Ascendente</Button>&nbsp;
                <Button onClick={this.sortDescending} variant="primary">Descendente</Button>
            </div>
        );
    }
}

export default Sort;