import React, { Component } from 'react';

export default class Badge extends Component {
  render() {
    const { total, items } = this.props;

    return (
      <section className='badges-section'>
        <div className='container'>
          <h2>
            All <span>{`${total} `} </span>#HerStoryOurStoryNG Badges
          </h2>
          <div className='divide'></div>
          <div className='row'>
            {items.map(function (user, index) {
              return user.profileImageURL === null ? null : (
                <div className='col-md-4' key={index}>
                  <img src={user.profileImageURL} alt='' />
                </div>
              );
            })}
          </div>

          <div className='pg-block'>{this.props.children}</div>
        </div>
        <style jsx>{`
          h2 {
            letter-spacing: 1px;
            span {
              color: #f16022;
            }
          }

          .divide {
            background-color: #f16022;
            width: auto;
            max-width: 80px;
            height: 2px;
            margin-top: 25px;
          }
          div.col-md-4 {
            margin: 40px 0 30px 0;
            img {
              height: auto;
              max-width: 100%;
            }
          }
          .pg-block {
            padding-bottom: 100px;
          }
        `}</style>
      </section>
    );
  }
}
