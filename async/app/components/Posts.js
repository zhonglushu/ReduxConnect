/**
 * Created by rambo.huang on 18/4/7.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                    <li key={i}>{post.title}</li>
                )}
            </ul>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};