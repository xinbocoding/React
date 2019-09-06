import React from 'react'

const clientId = process.env.REACT_APP_AUTH_ID;

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>
        GoogleAuth
    </div>
    )
  }
}

export default GoogleAuth;
