import React from 'react';
import { Navbar, Header, Contents, Modal } from './components'
import { PostApi } from './api'

class App extends React.Component {

  state = {
    posts: null,
    isOpenModal: false
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
          <Contents 
            posts={this.state.posts} 
            onSetModal={this._handleSetModal} 
          />
        )}
        <Modal 
          isOpen={this.state.isOpenModal} 
          onClose={(value)=>this._handleSetModal()}  
        />
      </div>
    );
  }

  /**
   * 모달토글함수
   */
  _handleSetModal = () => {
    this.setState(prev => ({
      isOpenModal: !prev.isOpenModal
    }))
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
