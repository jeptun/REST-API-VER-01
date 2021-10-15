
import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component  {

    //React state variable
    //Když chceme volat funkci z předka se stejným jménem, použijeme slovo super (v našem případě v konstruktoru).
     constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    //Načtení databaze
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        
        //callback po načtení 
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    render (){
      const {posts} = this.state  
      return   (
        <div>
            <h1>List of Posts</h1>
            {posts.map(post => <div key={posts.id} >{post.title}</div>)}
        </div>
    )
}
}

export default PostList

