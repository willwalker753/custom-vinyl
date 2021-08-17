import React, { Component } from "react";
// import img1 from "./images/1.jpg";
import { importAll } from "./util/functions";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    }
  }

  componentDidMount() {
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    const imagesArr = [];

    for(let key in images) {
      imagesArr.push(images[`${key}`].default)
    }

    console.log(images, imagesArr)
    this.setState({ images: imagesArr })
  }

  render() {
    const { images } = this.state;
    if(images === null) {
      return <h1>loading...</h1>
    }
    else {
      return (
        <>
          {/* <img src={img1}></img> */}
          {images.map((image, key) => {
            return <img key={key} src={image}></img>;
          })}
          
        </>
      );
    }
    
  }
}

export default App;