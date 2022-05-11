import React from "react";

class Item extends React.Component{

    render() {
        const {item} = this.props
        return (
        <div className="col-md-6 p-3">
         {
             item.map((each)=>{
                console.log(each)
                return <p>{each.words}</p>;
             })
         }
           <hr/>
         </div>
        )
    }
}

export default Item;