import React from 'react';

const styles = {
  wrapper: {
    width: '100%',
    borderBottom: '1px solid #d1d1d1',
  },
  container: {
    width:1000,
    margin: '0 auto',
    padding: 15,
    display:'flex',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  searchBar: {
    width: 300,
    height: 25,
    padding: 10,
    paddingLeft:25,
    paddingRight:25,
    marginLeft:25,
    fontSize: '1.2em',
    backgroundColor:'#f3f3f3',
    borderRadius: 25,
    border:'1px solid #dbdbdb',
  }
}

const Navbar = () => {
  return (  
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Navbar</h1>
        <div>
          <input placeholder="Search..." type="text" style={styles.searchBar} />
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;