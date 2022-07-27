import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faGoogle, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SocialLinks = [
    {
        text: "facebook",
        icon:  faFacebookF,
        href: ""
    },
    {
        text: "gmail",
        icon: faGoogle,
        href: ""
    },
    {
        text: "instagram",
        icon: faInstagram,
        href: ""
    },
    {
        text: "twitter",
        icon: faTwitter ,
        href: ""
    },
    {
        text: "telegram",
        icon: faTelegram,
        href: ""
    }
]


function ContactBar() {
    return (
        <div className='hidden md:block'>
            <div className="bg-primary text-white">
                <div className="container flex justify-between items-center max-w-screen-2xl">
                    <div>
                        <span className='uppercase text-xs'>order online or call us (+20 1020 304050)    </span>
                        <span>EGP</span>
                    </div>


                    <div className='flex items-center'>
                        <Link to="/account/login" className='p-1 text-sm mr-4'>
                            <FontAwesomeIcon icon={faUser} />
                            <span className='ml-2'>Sign In</span>
                        </Link>
                        <ul className="flex justify-center items-center">
                            {
                                SocialLinks.map((link , ind) => (
                                    <li className='p-1 ' style={{"fontSize": "14px" }} key={ind}>
                                        <a className='group' href={link.href} title={link.text}>
                                                <FontAwesomeIcon icon={link.icon} className="p-2 hover:ease-out hover:duration-400 group-hover:transition group-hover:scale-150 transform-gpu"/>
                                        </a>
                                    </li>
                                )
                                     
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}

export default ContactBar