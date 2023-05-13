import React from 'react';
import './RoomsDetails.css';
import image from './img/12.jpg';

function RoomDetails() {
  return (
    <div className="RoomD" style={{height:'100%',width:'100%'}}> 
      <div >
      <div className='row' style={{marginTop:-29,backgroundColor:'black'}}>
        <div className='column' style={{marginLeft:18}}>
          <div className='card'> <img src={image} alt='img' style={{height:300,width:"100%"}} />
          </div>
          <div className='card'> <img src={image} alt='img' style={{height:300,width:"100%"}} />
          </div>
        </div>
        <div className='column'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <h6 style={{textAlign:'center',color:'#c3971a',fontSize:11}}>FLATRON DISTRICT</h6>
            <h2 className='title' style={{textAlign: 'center',fontWeight: 400,fontSize: 37,letterSpacing: 0.3,lineHeight: 1.1,color: '#fff',marginTop: -20}}>The Sentry</h2>
            <h6 style={{textAlign: 'center',color: '#adb4bd',marginTop: 10,fontWeight: 300,fontSize: 11,letterSpacing: 0.3}}>37 West 24th Street, New York, NY</h6>
            <br></br>
            <h6 style={{fontSize: 8,color: '#9fa6b0',display:'block',lineHeight: 1.4,letterSpacing: 0.3,marginLeft: 80}}>CUISINE</h6>
            <h6 style={{marginTop: -10,color: '#ddd',fontSize: 11,letterSpacing: 0.2,lineHeight: 1.5,marginLeft:80}}>Cocktails, Australian, American (New)</h6>
            <h6 style={{fontSize: 8,color: '#9fa6b0',display: 'block',lineHeight: 1.4,letterSpacing: 0.3,marginLeft: 80}}>AMBIENCE</h6>
            <h6 style={{marginTop: -10,color: '#ddd',fontSize: 11,letterSpacing: 0.2,lineHeight: 1.5,marginLeft: 80}}>Hidden Gem</h6>
            <h6 style={{fontSize: 8,color: '#9fa6b0',display: 'block',lineHeight: 1.4,letterSpacing: 0.3,marginLeft: 80}}>AT A GLANCE</h6>
            <h6 style={{marginTop: -10,color: '#ddd',fontSize: 11,letterSpacing: 0.2,lineHeight: 1.5,marginLeft: 80,marginRight: 80}}>Penthouse rooftop bar and lounge serving perfectly crafted cocktails and bites.</h6>
        </div>
        <div className='column'>
        <div className='card'> <img src={image} alt='img' style={{height:300,width:"100%"}} />
          </div>
          <div className='card'> <img src={image} alt='img' style={{height:300,width:"100%"}} />
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
        <h2 className='desc'>About the Venue</h2>
        <h3 style={{border: 0,paddingBottom: 7,fontWeight: 500,fontSize: 18,letterSpacing: 0.3}}>What to Expect</h3>
        <hr></hr>
      </div>
    </div>
  )
}

export default RoomDetails

    
