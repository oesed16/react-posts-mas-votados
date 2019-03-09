import React, { Component } from 'react';
import Votes from './Votes'

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    onVotesChanged = (votes) => {
        this.props.countVotesCallback(votes, this.props.post.id, this.props.index)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={this.props.post.post_image_url} alt="PhotoPost" style={{ width: 300, height: 200 }} />
                </div>
                <div className="col-md-1">
                    <p><Votes votesChanged={this.onVotesChanged} votesAmount={this.props.post.votes} /></p>
                </div>
                <div className="col-md-3">
                    <a href={this.props.post.url}><p>{this.props.post.title}</p></a>
                    <p>{this.props.post.description}</p>
                    <p className="colorP">
                        Escrito por: <img src={this.props.post.writer_avatar_url} alt="PhotoAuthor" className="rounded-circle" style={{ width: 50, height: 50 }} />
                    </p>
                </div>
            </div>
        );
    }
}