
export default {
  /**
   * 
   */
  getPosts: async () => {
    try{
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const result = await fetch(url)
      const resultJson  = result.json()
      return resultJson;
    }catch(e){
      return [];
    }
  },

  /**
   * 
   */
  setPost: ()=>{},

  /**
   * 
   */
  removePost: ()=>{}
};