import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import styles from './home.module.css'
import Icon from '@mdi/react';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HotelIcon from '@material-ui/icons/Hotel';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PrimarySearchAppBar from '../navbar/navbar';

const insideStyles = {
   height: 100
}

const styles1 = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
 
  const row = {
        display: 'inline-block',
        marginLeft:20,
        marginRight: 20,
        marginTop: 256,
        fontSize: 156,
            
  }
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";


class Home extends Component {


    

    render () {
        return (
            <div className='rows' style={{textAlign: 'center'}}>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            
            <Parallax 
            bgImage={image3}
            style={{height: 600}}
            strength={500}
            blur={{ min: -1, max: 3 }}>
            <AddAPhotoIcon style={row}/>
            <HotelIcon style={row}/>
            <MusicNoteIcon style={row}/>
            </Parallax>
            <div style={{height: 400}}></div>



            </div>
        )
    }
}

export default Home