import React from 'react';

const styles = {
  container: {
    zIndex:999,
    position: 'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor: 'rgba(0,0,0, 0.55)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  modalContent: {
    width:'50%',
    // margin:'0 auto',
    backgroundColor:'white',
    padding:25,
    boxShadow: '2px 1px 5px 0px rgba(0,0,0,0.15)'
  }
}

const Modal = props => {
  return props.isOpen && (  
    <div style={styles.container}>
      <div style={styles.modalContent}>
        <button onClick={()=>props.onClose(!props.isOpen)}>닫기</button>
        {props.children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  isOpen: false,
  onClose: ()=>{}
}
 
export default Modal;