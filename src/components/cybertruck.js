import React from 'react';
import { Timer } from './timer';

export function Cybertruck() {
return (
<div className='container'>
<p className='bottom-space-md' />
<div className='token__section'>
	<div className='token__wrapper'>
		<div className="token__container-card">
			<div className="token__container-cardInfo" style={{height:'200px'}}>
				<p className='bottom-space-sm' />
				<div className='row' >
					<div className='col'>
						<img src='cybertruck_logo_flash.gif'  width="250px" alt=''  />
					</div>
					<div className='col'>
						<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
							<h2 style={{display: 'flex',fontSize: '35px', fontWeight: '800', textAlign: 'center'}}>
								GIVEAWAY
							</h2>
						</div>
					</div>
				</div>
			</div>
			<p className='bottom-space-md' />
			<div className='row' style={{flexFlow:'column'}}>
			<h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
					take a cybertruck tour
					</h2>
					<h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', margin:'5px'}}>
					↡
					</h2>
			<a href='cyber.doge-1.org'>
				<h2 style={{fontSize: '15px', fontWeight: '200', textAlign: 'center', letterSpacing:'8px'}}>
			<i>CYBER.</i><b>DOGE-1</b>.ORG 
			</h2>
			</a>
			</div>
			<div className='row'>
			<div className='col'>
						<img src='cybertruck_headlight.gif'  width="250px" alt=''  />
					</div>
			</div>
			<p className='bottom-space-md' />
			<div className='row' style={{flexFlow:'column'}}>
			<h2 style={{fontSize: '10px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
					stayed tuned for more
					</h2>
					<h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', margin:'5px'}}>
					↡
					</h2>
			</div>
			<p className='bottom-space-sm' />
				<div className='row' >
					<div className='col'>
					<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
					
							<h2 style={{display: 'flex',fontSize: '30px', fontWeight: '800', textAlign: 'center'}}>
								COMMUNITY
							</h2>
						</div>
						
					</div>
					<div className='col'>
						<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
						<img src='banner.gif'  width="250px" alt=''  />
						</div>
					</div>
				</div>
		<p className='bottom-space-sm' />
		<div className='row' >
			<div className='col'>
				<a href='https://t.me/official_doge1'  className="btn effect04">
					<img src='images/web/telegram_icon.png' width='30px' alt='telegram-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://twitter.com/Official_DOGE1'  className="btn effect04">
					<img src='images/web/twitter_icon.png' width='30px' alt='twitter-profile' />
				</a>
			</div>
		</div>

		</div>
	</div>
</div>
<p className="bottom-space-sm" />

</div>
);
}