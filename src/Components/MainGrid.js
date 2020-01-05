import React, {Component} from 'react'
import MainContent from './MainContent'
import Main from './Main'

let sorted = []
let main

export default class MainGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {width: window.innerWidth}
  }

  sortByDate = () => {
    let gridContent = MainContent
    gridContent.map(grid => sorted[grid.dateId] = grid)
    return(sorted)
  }

  componentWillMount() {
    main = MainContent
  }

  componentDidMount() {
    window.addEventListener('resize', this.widthResize)
  }

  render() {

    this.widthResize = () => {
      this.sortByDate()
      this.setState({width: window.innerWidth})
      this.state.width < 720 ? main = sorted : main = MainContent
    }

    return (
      <div className="main-grid">
        {main.map(content => 
        <div className="main-grid-wrapper">
          <Main key={content.id}
          id={content.id}
          date={content.id}
          body={content.body}
          sub={content.sub}
          link={content.link}
          img={content.img}/></div>)}
      </div>
    )
  }
}