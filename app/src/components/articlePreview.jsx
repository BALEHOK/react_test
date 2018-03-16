import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articlePreview.css';

class articleList extends Component {
  static propTypes = {
    articleId: PropTypes.number
  }

  render() {
    if (typeof this.props.articleId === 'undefined') {
      return (<div className="article-preview"></div>);
    }

    return (
      <div className="article">
        <h1>CERN experiment discovers five new particles</h1>
        <div className="article-image">
          <img src="http://www.stfc.ac.uk/stfc/cache/file/4821074D-0D31-4964-9318CA0AE81E0639.jpg" alt="CERN experiment discovers five new particles" />
        </div>
        <div className="article-body">
          A new group of particles which have long been hiding in plain sight have finally been discovered thanks to the incredibly sensitive LHCb experiment at CERN. LHCb, otherwise known as the Large Hadron Collider beauty experiment, is one of seven experiments collecting data at the Large Hadron Collider at CERN. UK participation in the experiment is funded by STFC.
        </div>
        <div className="article-comments">
          <h4>Comments</h4>
          <textarea cols="30" rows="5">Body of comment</textarea>
          <ul>
            <li>
              <div>
                <p>rk 3 hours ago</p>
                <p>First comment</p>
              </div>
            </li>
            <li>
              <div>
                <p>rk 2 hours ago</p>
                <p>Second comment</p>
                <ul>
                  <li>
                    <div>
                      <p>rk 2 hours ago</p>
                      <p>Reply to second comment</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>rk 2 hours ago</p>
                      <p>Second reply to second comment</p>
                      <textarea cols="30" rows="5">Body of reply</textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default articleList;
