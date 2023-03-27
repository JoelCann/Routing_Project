import React from 'react'
import audi1 from '../audi1.jpg'

function Homepage() {

    return <div >
        <div className="bg-dark p-3 text-white">
            <h1>Homepage</h1>
        </div>

        <div className='row mt-5 p-5' >
            <div className='col-md-6 p-2'>
                <img src={audi1} className='shadow-5-strong' style={{ width: 650, borderRadius: 50 }} />
            </div>

            <div className='col-md-6 p-5'>
                <h2 style={{ fontWeight: '700' }}>AUDI AG</h2>
                <p className='textmarkup'> Audi AG  is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.

                    The origins of the company are complex, going back to the early 20th century and the initial enterprises (Horch and the Audiwerke) founded by engineer August Horch (1868–1951); and two other manufacturers (DKW and Wanderer), leading to the foundation of Auto Union in 1932. The modern Audi era began in the 1960s, when Auto Union was acquired by Volkswagen from Daimler-Benz.[9] After relaunching the Audi brand with the 1965 introduction of the Audi F103 series, Volkswagen merged Auto Union with NSU Motorenwerke in 1969, thus creating the present-day form of the company.</p>

            </div>
        </div>
    </div>

}

export default Homepage;