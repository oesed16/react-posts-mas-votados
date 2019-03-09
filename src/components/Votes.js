import React, { Component } from 'react';

export default class Votes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.votesAmount
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: this.state.count + 1
        })
        this.props.votesChanged(newCount)
    }

    decrease = () => {
        let newCount = this.state.count - 1
        if (newCount >= 0) {
            this.setState({
                count: newCount
            })
        }
        this.props.votesChanged(newCount)
    }

    render() {
        return (
            <div>
                <p><i onClick={this.increase} className="fas fa-sort-up"></i></p>
                <p>{this.state.count}</p>
                <p><i onClick={this.decrease} className="fas fa-sort-down"></i></p>
            </div>
        );
    }
}