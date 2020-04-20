import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';/* 
import styles from './home.module.css' */
import Icon from '@mdi/react';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HotelIcon from '@material-ui/icons/Hotel';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PrimarySearchAppBar from '../navbar/navbar';
import CakeIcon from '@material-ui/icons/Cake';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import SpaIcon from '@material-ui/icons/Spa';
import styles from './home.module.css';
import Slider from '../slider/slider';
import FooterPage from '../footer/footer';
import Parlx2 from '../parrallax/parlx2';

const insideStyles = {
   height: 100
}

const styles1 = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

const icondiv = {
  borderWidth: 1
}
 
  const row = {
        display: 'inline-block',
        marginLeft:20,
        marginRight: 20,
        /* marginTop: 256, */
        fontSize: 60,
        cursor: 'pointer',
        borderWidth: 10,
        borderColor: 'black'
        
            
  }

const image3 =
  /* "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001"; */
  /* "https://images.unsplash.com/photo-1578946956271-e8234ecaaadd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80"
 */  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"

class Home extends Component {


    Handler() {
      console.log("icon")
    }
    

    render () {
        return (
            <div /*  className='rows' */ style={{textAlign: 'center', alignItems: 'center'}}>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            
            <Parallax 
            bgImage={image3}
            style={{height: 900}}
            strength={500}
            blur={{ min: -1, max: 3 }}>
            <div style={icondiv} >
            
            <div className={styles.icondiv}>            
            <AddAPhotoIcon style={row} className={styles.row1}/>
            </div>

            <HotelIcon style={row} className="row"/>
            <MusicNoteIcon style={row} className={styles.row}/>
            <CakeIcon style={row} className={styles.row}/>
            <DriveEtaIcon style={row} className={styles.row}/>
            <FastfoodIcon style={row} className={styles.row}/>
            <CardGiftcardIcon style={row} className={styles.row}/>
            <LocalFloristIcon style={row} className={styles.row}/>
            <SpaIcon style={row} className={styles.row}/> 
              </div>
            </Parallax>
         
            <div style={{height: 400, alignContent: 'center'}}>Some Content</div>

            <Slider></Slider>{/* 
            <div style={{height: 400}}></div> */}
            <Parlx2></Parlx2>
            <FooterPage></FooterPage>
            </div>
        )
    }
}

export default Home