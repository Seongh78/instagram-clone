import React from 'react';
import { Input } from '../';

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
  
}

const Navbar = () => {
  return (  
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1>Navbar</h1>
        <div>
          <Input placeholder="search..." />
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;