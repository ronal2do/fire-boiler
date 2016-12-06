import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    // Decode entities in the URL a
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#');
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }

  render() {
    return (
      <div>
        <p>dssads</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
