import React, {Component} from 'react'

export default class Footer extends Component {

  render () {
    return (
      <div>
        <p className="footer">&copy; &mdash; Sparta Plaesant &ndash;&nbsp;
        <a className="footer-social" href="https://www.instagram.com">Instagram</a> &ndash;&nbsp; 
        <a className="footer-social" href="https://www.facebook.com">Facebook</a> &ndash;&nbsp;
        <a className="footer-social" href="https://www.twitter.com">Twitter</a></p>
      </div>
    )
  }
}