import React from 'react';
import { Navbar, Header, Contents } from './components'
import { PostApi } from './api'

class App extends React.Component {

  state = {
    posts: null
  }

  componentDidMount() {
    this._handleGetPosts();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {this.state.posts === null ? (
          <h3>Loadding...</h3>
        ) : (
          <Contents posts={this.state.posts} />
        )}
      </div>
    );
  }

  /**
   * 게시글 조회
   */
  _handleGetPosts = async () => {
    const result = await PostApi.getPosts();
    setTimeout(()=> {
      this.setState({
        posts: result.slice(0, 10)
      })
    }, 1500)
  }
}

export default App;
