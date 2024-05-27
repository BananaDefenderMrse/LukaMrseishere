import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './App.css';

export default class Login extends Component {
  state = {
    name: '',
    skill: '',
    lecture: '',
    region: '',
    discord: '',
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("The form is accepted", this.state.name);
  }

  render() {
    return (
      <div className="background-image">
        <nav className="navbar">
          <span className="navbar-brand">Pages</span>
          <span className="linkovi"><Link to="/" className="link">Home</Link></span>
          <span className="linkovi"><Link to="/Pvp" className="link">PvP</Link></span>
          <span className="linkovi"><Link to="/Rod" className="link">Rod pvp</Link></span>
          <span className="linkovi"><Link to="/Building" className="link">Building</Link></span>
          <span className="linkovi"><Link to="/Login" className="link">Sign up to our private classes</Link></span>
        </nav>
        <div className="crna_crta3"><p>Sign in, join our community and learn new skills every day</p></div>
        <form className="margina" onSubmit={this.onSubmit}>
          <input placeholder="Name" id="input" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} key="name" />
          <br></br>
          <input placeholder="Skill" id="input" value={this.state.skill} onChange={e => this.setState({ skill: e.target.value })} key="skill" />
          <br></br>
          <input placeholder="Class" id="input" value={this.state.lecture} onChange={e => this.setState({ lecture: e.target.value })} key="lecture" />
          <br></br>
          <input placeholder="Region" id="input" value={this.state.region} onChange={e => this.setState({ region: e.target.value })} key="region" />
          <br></br>
          <input placeholder="Discord" id="input" value={this.state.discord} onChange={e => this.setState({ discord: e.target.value })} key="discord" />
          <br></br>
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    );
  }
}