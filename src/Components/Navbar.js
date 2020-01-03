import React, { Component } from "react";
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../logo.svg'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }

    displayHamburger = () =>{
        return (
          
          
          <div className="burger-menu">
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
           </div>
              
            )
          }

    displayDropDown = () => {
      return (
          <ul className="dropdown">
            <li className="nav-link">
              Lorem
            </li>
            <li className="nav-link">
              Ipsum
            </li>
          </ul>
        
        )
    }
      
    render(){
           return (
            <div className="navbar">
            <img id='logo' className='logo' src={logo} alt='logo'></img>
            <div className='navbar-items'>
            <p className='phone-number'>212.555.5555</p>
            <p className='login'>login</p>
            {this.displayHamburger()}
            {this.state.open && this.displayDropDown()}
            </div>
            </div>
                  )
                }
                
        
      }