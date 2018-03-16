import React, { Component } from 'react';
import './articleList.css';

class articleList extends Component {
  render() {
    return (
      <div className="article-list">
        <h2>Article list</h2>
        <ul>
          <li>
            <div className="article-tile">
              <div className="article-tile-image">
                <img src="http://www.stfc.ac.uk/stfc/cache/file/4821074D-0D31-4964-9318CA0AE81E0639.jpg" alt="CERN experiment discovers five new particles" />
              </div>
              <div className="article-tile-info">
                <h3>CERN experiment discovers five new particles</h3>
                <p>A new group of particles which have long been hiding in plain sight have finally been discovered thanks to the incredibly sensitive LHCb experiment at CERN. LHCb, otherwise known as the Large Hadron Collider beauty experiment, is one of seven experiments collecting data at the Large Hadron Collider at CERN. UK participation in the experiment is funded by STFC.</p>
                <span>10 comments</span>
              </div>
            </div>
          </li>
          <li>
            <div className="article-tile selected">
              <div className="article-tile-image">
                <img src="http://www.stfc.ac.uk/stfc/cache/file/4821074D-0D31-4964-9318CA0AE81E0639.jpg" alt="CERN experiment discovers five new particles" />
              </div>
              <div className="article-tile-info">
                <h3>CERN experiment discovers five new particles</h3>
                <p>A new group of particles which have long been hiding in plain sight have finally been discovered thanks to the incredibly sensitive LHCb experiment at CERN. LHCb, otherwise known as the Large Hadron Collider beauty experiment, is one of seven experiments collecting data at the Large Hadron Collider at CERN. UK participation in the experiment is funded by STFC.</p>
                <span className="article-tile-comments">10 comments</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default articleList;
