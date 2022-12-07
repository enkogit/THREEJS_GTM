import React from 'react';
import { Timer } from './timer';

export function Landing() {
return (
  <div className="container">
    <div className='row' style={{flexFlow:'column'}}>
      <div className='row' >
			<div className='col'>
				<a href='https://t.me/official_doge1'>
					<img src='images/web/telegram_icon.png' width='30px' alt='telegram-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://twitter.com/Official_DOGE1'>
					<img src='images/web/twitter_icon.png' width='30px' alt='twitter-profile' />
				</a>
			</div>
			
		</div>
      <h2 style={{fontSize: '18px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em', lineHeight:'25px'}}>
        HOLD <i><b> $DOGE-1</b></i> <br /> EARN <i> $DOGECOIN</i>
      </h2>
      
      <div className='flip'>
        <img src="images/web/doge_dance.gif" width="50px" alt="" style={{marginTop:'-5px'}} />
      </div>
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p>︾</p>
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p className="bottom-space" style={{marginBottom:'300px'}} />
      <div className='float-div2'>
        <img src="images/web/doge1.gif" width="150px" alt="" style={{marginTop:'-5px'}} />
      </div>
    </div>
    <p className="bottom-space" style={{marginBottom:'300px'}} />
    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
		<h3 style={{fontSize: '20px', padding: '5px 0px 5px 0px', opacity:1, letterSpacing: '0.5em'}}>SPACEX DOGE-1 ROCKET LAUNCH</h3>
		<Timer />
					<h2 style={{fontSize: '8px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
					click to view.
					</h2>
					<h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', margin:'5px'}}>
					↡
					</h2>
		<div className='img-zoom'>
			<a href={'https://twitter.com/elonmusk/status/1391523807148527620'}>
			<img src='images/web/tweet.jpg'  width="350px" alt=''  />
			</a>
		</div>
	</div>
</div>
);
}