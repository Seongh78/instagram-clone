import React from 'react';

const styles = {
  container : {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'fixed',
    right: 50,
    bottom: 50,
    backgroundColor: '#1ba7de',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    color:'#fff',
    boxShadow: '2px 1px 2px 1px rgba(0,0,0,0.5)'
  },

  font: {
    fontSize: '2.7em',
  }
}

const AddButton = props => {
  return (  
    <div style={styles.container} onClick={props.onClick}>
      <span style={styles.font}>+</span>
    </div>
  );
}

AddButton.defaultProps = {
  onClick: ()=>{}
}

 
export default AddButton;