import React, {Component} from 'react'
import MainContent from './MainContent'
import Main from './Main'

let main = MainContent


export default class MainGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {width: window.innerWidth }
  }


  componentDidMount() {
    window.addEventListener('resize', this.widthResize)
    this.widthResize = () => 
    {this.setState({width: window.innerWidth})}
    
  }

  
  render() {
   
    
    return (
      <section className="grid">
      <div className="main-grid">
        {main.map(content => 
        <div className="main-grid-wrapper">
          {/* <div className="main-grid-column"> */}
          <Main key={content.id}
          date={content.date}
          body={content.body}
          sub={content.sub}
          link={content.link}
          img={content.img}/></div>)}
          
      </div>
      </section>
      
    )
  }
}