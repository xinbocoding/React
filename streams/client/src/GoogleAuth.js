import React from 'react'

const clientId = process.env.REACT_APP_AUTH_ID;

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange() {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't have auth</div>
    } else if (this.state.isSignedIn) {
      return <div>I signed in</div>
    }
  }
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth;
