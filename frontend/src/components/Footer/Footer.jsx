import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <p>
                        Discover Gifty, your go-to destination for thoughtful and unique gifts. At Gifty, we believe in
                        the magic of giving—every present is a token of love and joy. Our curated collection ensures that
                        every gift you choose will make hearts happy and moments memorable. Share joy, give love with Gifty,
                        and celebrate life's special occasions in the most meaningful way.
                    </p>
                </div>
                <div className="footer-center">
                    <h2>Stay in Touch:</h2>
                    <div className='contact'>
                        <img src={assets.facebook} />
                        <p>Facebook</p>
                    </div>
                    <div className="contact">
                        <img src={assets.instagram} />
                        <p>Intagram</p>
                    </div>
                    <div className="contact">
                        <img src={assets.whatsapp} />
                        <p>Whatsapp</p>
                    </div>
                </div>
                <div className="footer-right">
                    <h2>Company</h2>
                    <p>17/1,Lotus Road, Colombo 8</p>
                    <li>+94 333 444 345</li>
                    <li>gifty@gmail.com</li>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Gifty.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
