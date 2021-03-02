import React from 'react';
import Card from '../../elements/card';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/all';
import './footer.style.css';
import { FOOTERLINKS } from './footerLinks';

const Footer = () => {
    return (
        <Card className={'footer'}>
            <div className="footer__links-subscribe">
                <div className="links">
                    {FOOTERLINKS.map((el) => (
                        <div>
                            <p style={{ fontWeight: 700 }}>{el.title}</p>
                            {el.children.map((sub) => (
                                <a href={'/'} style={{ display: 'block' }}>{sub}</a>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <p style={{ marginBottom: '10px' }}>Subscribe to join our weekly newsletter.</p>
                    <form action="" className="subscribe" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder={'Email'} className={'subscribe-input'} />
                        <button type={'submit'} className={'subscribe-button'}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer__logo-socials">
                <a href="/">
                    <img src="/logo.svg" style={{ width: '55px' }} alt="" />
                </a>
                <div className="socials">
                    <FaFacebookF size={22} />
                    <FaTwitter size={22} />
                    <FaYoutube size={25} />
                </div>
            </div>
            <div className="footer__copyright">
                <span>&copy; BSC.NEWS 2021 - All Rights Reserved</span>
                <span>
                    <a href="/">Privacy</a>
                    <span className="divide" />
                    <a href="/">Terms</a>
                </span>
            </div>
        </Card>
    );
};

export default Footer;
