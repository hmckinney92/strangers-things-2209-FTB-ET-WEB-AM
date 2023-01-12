import React, {useState} from 'react'


const Update =({token, posts, setPosts, postId, setPostId}) => {

    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [location, setLocation] =useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('title, description, Price:', title, description, price);
        console.log('postId:', postId);
        const response = await fetch
        (`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/posts/${postId}`,
         {
            method: 'PATCH',
            headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`  

            },

            body: JSON.stringify({
                post : {
                    title:title,
                    description:description,
                    price:price,
                    location: location
                    

                } 

            })

            });

                const data = await response.json();
                console.log('data:' , data);
                if(data && data.title, description.description,price.price){
                    const newPosts = posts.map(post => {
                        if(post._id === postId){
                            return data;
                        }else{
                            return post;
                        }

                    });
                    
                    setPosts(newPosts);
                    setTitle('');
                    setDescription('');
                    setPrice('');    
                    setPostId(null);
                      

                }
        }
    return <>
        <form className='update' onSubmit ={handleSubmit}>
            
        <h2>
        Edit Post    
        </h2>

        <input type ="text"
            placeholder="edit title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}>
        </input>

        <input type ="text"
            placeholder="edit description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}>
        </input>

        <input 
             type ="text" 
            placeholder ="edit price" 
            value = {price} 
             onChange = {(ev) => setPrice(ev.target.value)}>
        </input>

        <input 
             type ="text" 
            placeholder ="edit location" 
            value = {location} 
             onChange = {(ev) => setLocation(ev.target.value)}>
        </input>

        <button type="submit" className="btn btn-outline-primary">Submit</button>

        </form>
    </>
 }

 
 export default Update;