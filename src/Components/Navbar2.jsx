import React from "react";
import logo from '../media/logo.png'

export default function(){
    return(
        <div style={{display: 'flex'}}>
      <a href="https://www.iitjammu.ac.in/"><img src={logo} style={{width: '170px'}} /></a>
        <a href="/dashboard" style={{padding: '20px'}}>DashBoard</a>
        <a href="/preferenceForm" style={{padding: '20px'}}>Add Preferences</a>

    </div>
    )
}