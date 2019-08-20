import React from 'react';
import { 
  Navbar, 
  Header, 
  Contents, 
  Modal, 
  AddButton,
  Input
} from './components'
import { PostApi } from './api'


class App extends React.Component {

  state = {
    posts: null,
    post: null,
    isOpenModal: false,
    isOpenCreateModal: false,
    
    title: '',
    url: ''
  }

  componentDidMount() {
    this._handleGetPosts();
  }

  render() {
    const viewPosts = this.state.posts ? [...this.state.posts].sort((a,b)=>(b.id - a.id)) : [];
    return (
      <div>
        <Navbar />
        <Header />
        {this.state.posts === null ? (
          <h3>Loadding...</h3>
        ) : (
          <Contents 
            posts={viewPosts} 
            onGetPost={this._handleGetPost} 
          />
        )}

        {/* 글작성 버튼 */}
        <AddButton onClick={()=>this.setState({isOpenCreateModal: true})} />
        
        {/* 생성모달 */}
        <Modal 
          isOpen={this.state.isOpenCreateModal} 
          onClose={(value)=>this.setState({isOpenCreateModal: value})}  
        >
          <form>
            <Input 
              placeholder="title" 
              value={this.state.title} 
              onChange={value => this._handleChangeValue('title', value)} 
            />
            <Input 
              placeholder="Image" 
              value={this.state.url}
              onChange={value => this._handleChangeValue('url', value)} 
            />
            <button type="button" onClick={()=> this._handleSavePost()}>저장</button>
          </form>
        </Modal>

        {/* 상세보기모달 */}
        <Modal 
          isOpen={this.state.isOpenModal} 
          onClose={(value)=>this._handleSetModal()}  
        >
          {/* <h1>{JSON.stringify(this.state.post)}</h1> */}
          {this.state.post && (
            <div >
              <img style={{width:'100%'}} src={this.state.post.url} alt=""/>
            </div>
          )}
        </Modal>
      </div>
    );
  }

  /**
   * 게시글 저장
   */
  _handleSavePost = () => {
    const {title, url, posts } = this.state;
    if(!title || !url){
      alert('입력값을 확인해 주세요');
      return;
    }

    this.setState({
      posts: [
        ...posts,
        {
          id: posts[posts.length-1].id + 1,
          title: title,
          url: url
        }
      ]
    }, ()=>{
      alert("저장되었습니다");
      this._handleChangeValue('isOpenCreateModal', false)
    })
  }

  /**
   * 인풋데이터 변경
   */
  _handleChangeValue = (target, value) => {
    this.setState({
      [target] : value
    })
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
   * 
   */
  _handleGetPost = (id) => {
    this.setState(prev =>({
      post : prev.posts.filter(post => post.id === id)[0],
    }), ()=>{
      this._handleSetModal()
    })
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
