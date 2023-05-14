import { Component } from 'react';


export default class Logout extends Component {
  constructor(props) {
    super(props);
    sessionStorage.removeItem('ctoken');
  }
  componentDidMount() {
    window.onpageshow = function(event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
    this.handleLogout();
  }

  handleLogout = () => {
    window.history.go();
    sessionStorage.setItem("AloggedIn","");
    window.location = "/login";
  }

  render() {
    return null;
  }
}