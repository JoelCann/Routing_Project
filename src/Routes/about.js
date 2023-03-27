import React from 'react'
import audi_Q3 from '../assets/Audi_Q3.jpg'
import audi_logo from '../assets/audi_logo.jpg'


function Aboutpage() {

    return <div>
        <div className="bg-dark p-3 text-white">
            <h1>About Page</h1>
        </div>
        <div className='mt-5'>
            <img src={audi_logo} style={{ width: 400 }} />
        </div>
        <br />
        <div className='mx-5'>
            <h4> Who Owns Audi?</h4><bbr />
            <p>While researching your favorite Audi luxury automobiles near Rock Creek, it's natural to wonder about the history of Audi and the owners of this heralded marque. Have you been asking yourself, "who owns Audi?" or "who makes Audi cars?" The Volkswagen Group makes Audi vehicles, and has a history that runs deep in motorsport heritage. Learn more about who owns Audi, who makes Audi, Audi history, and even how to pronounce Audi, with our team at Audi of North Austin.</p>
            <br />
            <h4> Who Makes Audi Vehicles? </h4><bbr />
            <p>
                So Killeen drivers, who owns Audi and who makes Audi Cars? Today, that's the Volkswagen Group, as we mentioned previously. However, Audi history has endured many permutations.

                In 1899, August Horch founded his own auto group: Horch & Cie. Due to creative differences with his partner, Herr Horch parted ways to make his own vehicles. His second car company also brought with it a new name: Audi.

                The name "Audi" is derived from the Latin translation of "Horch" or "hark!" which means "listen." Over the next few years, Audi grew famous due to its excellence in motorsports during the early 1900s. In 1964, the Volkswagen Group purchased a 50% stake in Audi, utilizing their manufacturing and engineering expertise. Today, the Volkswagen group owns dozens of high-performance automakers, including Lamborghini, Bugatti, Porsche, and Bentley.

                The question of who owns Audi and who makes Audi is simply answered with: The Volkswagen Auto Group. Although, technically speaking, Audi is public and partially owned by shareholders from across the world, including some Cedar Park drivers.


            </p>
            <br />
            <h4>Where Are Audi Vehicles Made? </h4><bbr />
            <p>
                While they're a German automaker, Audi vehicles are made all over the world. A few countries with Audi manufacturing plants include: Germany, Hungary, Belgium, Mexico, Slovakia, Spain, Russia, Brazil, India, and China. While Audi has plants all over the world, its headquarters remains in Ingolstadt, Germany, and it's culturally significant as a specifically German manufacturer.
            </p>
        </div>
    </div>

}

export default Aboutpage;