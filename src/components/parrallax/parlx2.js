import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

class Parlx2 extends Component {

    

 render () {

    const img = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
     
    return (   
            <Parallax 
            bgImage={img}
            style={{height: 400}}
            strength={500}
            blur={{ min: -1, max: 3 }}>
            </Parallax>

            )
    }
}

export default Parlx2;