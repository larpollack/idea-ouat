import React, {Component} from 'react'

export default class Main extends Component {
  render () {
    return (
      <div className='main'>
        <img className='main-img' src={this.props.img} alt={this.props.body}></img>
        <p className='main-date'>{this.props.date}</p>
        <a className='main-body' href='#'>{this.props.body}</a>
        <p className='main-sub'>{this.props.sub} <a className='main-link' href='#'>{this.props.link}</a></p>
        <hr className='separator'></hr>
      </div>
    )
  }
}