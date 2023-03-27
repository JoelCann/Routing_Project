import React from 'react'
import address from '../assets/address.png'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'

function Contactpage() {

    return <div >
        <div className="bg-dark p-3 text-white">
            <h1>Contact Page</h1>
        </div>

        <div className='row mt-5 p-5' >
            <div className='col-md-4 p-5'>
                <img src={phone} /><br /><br />
                <h5>call (+233) 9*5 477 360<br />or<br /> (+44) 938 419 61* 19 </h5>
            </div>

            <div className='col-md-4 p-5'>
                <img src={mail} /><br /><br />
                <h5>supp*rt@nextgendevs.org</h5>

            </div>

            <div className='col-md-4 p-5'>
                <img src={address} /><br /><br />
                <h5>7d0 NQ Bizarre St*<br />Florida City, Miami<br />GS-11*-110311 </h5>
            </div>
        </div>
    </div>

}

export default Contactpage;