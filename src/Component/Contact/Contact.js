import React, { Component } from 'react'
import '../Contact/Contact.css'
import Footer from '../Footer/footer'

export default class Contact extends Component {
    render() {
        const style1 = {
            textAlign: 'center',
            fontFamily: ' Kristi',
            color: '#4d3900',
            fontSize:'100px' 
      
          }
        return (
            <div className="element">
                <h1 style={style1}>Information For Contact Us You Look</h1>
                <Footer/>
                <div>
                <h1 style={style1}>Thank You For Come To My Web Site</h1>
                <h1 style={style1}>감사합니다</h1>
                </div>
               
            </div>
        )
    }
}
