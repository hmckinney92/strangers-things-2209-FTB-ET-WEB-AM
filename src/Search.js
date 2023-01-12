import React, {useState , useEffect} from 'react';


const Search = (props) => {
  const fetchPosts = props.fetchPosts;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  }, []);

  return <form id="search" onSubmit={async (event) => {
    
  }}>
   <fieldset className='fieldset'>
        <label htmlFor="keywords">Search Posts</label>
        <input 
          id="keywords" 
          type="text" 
          placeholder="enter keywords..."
          value = {posts} 
           onChange = {(ev) => setPosts(ev.target.value)}></input>
      </fieldset>
      <button>SEARCH</button>
    </form>
  }

 export default Search;