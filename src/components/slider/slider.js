import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";


class Slider extends Component {

render () {
    const images = [
        { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
        { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'},
        { require: "../../imgs/img3" },
        { require: "../../imgs/img4" },
       /*  { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" }, */
    ];

return (
    <div style={{textAlign: 'center'}}>
        <SimpleImageSlider
            width='100%'
            height={504}
            images={images}
        />
    </div>
);
}

}

export default Slider;