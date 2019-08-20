import React from 'react';

const styles = {
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

const Input = props => {
  return (  
    <input 
      placeholder={props.placeholder} 
      type="text" 
      style={styles.searchBar} 
      onChange={event => props.onChange(event.target.value)}
    />
  );
}

Input.defaultProps ={
  placeholder: 'Search...',
  onChange: () => {}
}
 
export default Input;