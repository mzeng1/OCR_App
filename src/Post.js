import React from "react";
import Item from "./Item.js"
class Post extends React.Component {
    render() {
        const {postContent} = this.props;
        return (
        <div className="col-md-6 p-3">
        <h1>History</h1>
         {
             postContent.map((each)=>{
                console.log(each)
                return <Item item={each}/>
             })
         }
       
         </div>
         )
}
}

export default Post;