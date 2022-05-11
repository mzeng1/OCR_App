import React from "react";
import axios from 'axios';


class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      img:''
    }
  }

    uploadImage = async(e) => {
        const file = e.target.files[0]
         console.log(file)
        const base64 = await this.convertToBase64(file);
        var base64string = base64.split(',')[1]
        this.setState({
            img: base64
        })
        console.log(base64string)

        const headers = { 
        'Content-Type': 'application/x-www-form-urlencoded'
        };

        let body=new FormData()
        body.append('image', base64string)
        axios.post('https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=24.5c565b22e993add191fd30d409d939f4.2592000.1652362749.282335-25954865', 
        body, {headers})
        .then(response => 
            // console.log(response)
            this.props.addPost(response.data.words_result)
        );
    }
   
    convertToBase64=(file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onloadend = function() {
                resolve(fileReader.result);
            };

          
        })
    }

    render() {
        return <div className="col-md-6 mb-4">
        <h1>OCR Tool</h1>
        <label className="form-label">Choose an Image For Text Extraction</label>
        <input onChange={(e)=>{this.uploadImage(e)}} accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" type="file" className="form-control" id="input" />
        <br/>

        <h2>The image you chose:</h2>
        <img src={this.state.img} alt='the image you chose'></img>
        {/* <button type="submit" onClick={this.upload.bind(this)}>Get Text</button> */}
   
  </div>;
    }
}

export default Form;