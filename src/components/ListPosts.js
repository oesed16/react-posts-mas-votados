import React, { Component } from 'react';
import { posts } from '../resources/constants';
import Post from './Post';

export default class ListPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortType: 0,
            listPosts: posts
        }
    }

    reorder = (votes, key, index) => {
        this.state.listPosts[index].votes = votes
        this.reorderPosts(this.state.sortType)
    }

    renderPosts = () => {
        return this.state.listPosts.map((post, index) => <Post countVotesCallback={this.reorder} post={post} key={post.id} index={index} />)
    }

    reorderPosts = (sortType) => {
        if (sortType < 0) {
            this.setState({
                sortType,
                listPosts: this.state.listPosts.sort((item1, item2) => { return item2.votes - item1.votes })
            })
        } else if (sortType > 0) {
            this.setState({
                sortType,
                listPosts: this.state.listPosts.sort((item1, item2) => { return item1.votes - item2.votes })
            })
        }
    }

    render() {
        return (
            <div className="container">
                {this.renderPosts()}
            </div>
        )
    }
}