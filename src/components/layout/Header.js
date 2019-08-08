import React from 'react';

const styles = {
  wrapper: {
    width:'100%',
    borderBottom: '1px solid #d1d1d1',
  },
  container: {
    display: 'flex',
    width: 1000,
    padding:15,
    margin: '0 auto',
    alignItems: 'center',
    
  },

  profileImage: {
    width:200,
    height:200,
    borderRadius: 100
  },

  profileContainer: {
    padding: 15,
    paddingLeft:35
  },

  staticDataContainer: {
    display:'flex'
  },
  staticDataItem: {
    marginRight: 15
  },
  button: {
    width: 165,
    height: 35,
    backgroundColor:'#0d78d6',
    borderRadius: 25,
    border:'1px solid #1266b0',
    color:'#fff',
    fontSize:'1.25em'
  }
}

const Header = () => {
  return (  
    // Wrapper
    <div style={styles.wrapper}>
      {/* Container */}
      <div style={styles.container}>
        {/* Image */}
        <div>
          <img style={styles.profileImage} src="https://cdn.ppomppu.co.kr/zboard/data3/2017/0818/20170818095926_xahmceyr.jpg" alt=""/>
        </div>
        {/* Profile Info */}
        <div style={styles.profileContainer}>
          <h1>Your Name </h1>
          <p>Veniam eiusmod et reprehenderit anim velit non excepteur non. Elit in laborum ut</p>
          <div style={styles.staticDataContainer}>
            <h3 style={styles.staticDataItem}>게시물 100</h3>
            <h3 style={styles.staticDataItem}>팔로워 1000</h3>
            <h3 style={styles.staticDataItem}>팔로잉 800</h3>
          </div>
          <div>
            <button style={styles.button}>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Header;