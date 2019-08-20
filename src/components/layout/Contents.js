import React from 'react';

const styles = {
  flexWrapper:{
    width:1000,
    margin:'0 auto',
    display: 'flex',
    flexFlow: 'row wrap',
    flexWrap: 'wrap',
    marginTop: 5
  },
  itemWrapper:{
    width: 327,
    height:327,
    padding: 3
  },
  image: {
    width:'100%',
    height:'100%',
  }
}

const Contents = props => {
  const { posts } = props;

  return (  
    <div style={styles.flexWrapper}>
      {/* <h1 key={`post_id_${index}`}>{JSON.stringify(post)}</h1> */}
      {posts.map((post, index) => (
        <div 
          style={styles.itemWrapper} 
          key={`post_id_${index}`}
          onClick={()=>props.onGetPost(post.id)}
        >
          <img style={styles.image} src={post.url} alt=""/>
        </div>
      ))}
    </div>
  );
}
 
export default Contents;