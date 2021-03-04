import React, { useState } from 'react';
import './header.styles.css';
import { MENUS } from './menus';
import { GiHamburgerMenu, MdKeyboardArrowDown } from 'react-icons/all';

const Header = () => {
    const [dropView, setDropView] = useState([]);
    const [dropViewM, setDropViewM] = useState<any>({ v: [], key: null });
    const [showMobileMenu, toggleShowMobileMenu] = useState(true);
    const showDrops = (drops: any) => {
        drops ? setDropView(drops) : setDropView([]);
    };

    return (
        <div className={'header'}>
            <div className="header__content nav-container">
                <div className="header__content_logo">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div className="header__content_nav--menus">
                    {MENUS.map((el, i) => (
                        <div
                            className="header__content_nav--menus_menu"
                            onMouseEnter={() => showDrops(el?.drops)}
                            key={i}>
                            <span className={'menu_title'}>{el.title}</span>
                            {el?.drops && (
                                <span className={'menu_title--has-more'}>
                                    <MdKeyboardArrowDown size={22} />
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                {dropView.length ? (
                    <div className={'menu_dropdown'} onMouseLeave={() => showDrops([])}>
                        <div className={'menu_dropdown--options nav-container'}>
                            {dropView.map((el: any) => (
                                <div className={'drop-item'}>
                                    <p>{el.title}</p>
                                    <p>{el.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className={'menu_dropdown_footer'}>
                            <p>Are you a journalist or an editor?</p>
                        </div>
                    </div>
                ) : null}
                <div className={`menu_dropdown__mobile ${showMobileMenu ? 'mobile-is-active' : ''}`}>
                    {MENUS.map((el, i) => (
                        <>
                            <div
                                onClick={() => setDropViewM({ v: el?.drops, key: i })}
                                className="menu_dropdown__mobile--menu"
                                key={i}>
                                <span className={'menu_title'}>{el.title}</span>
                                {el?.drops && (
                                    <span className={'menu_title--has-more'}>
                                        <MdKeyboardArrowDown size={22} />
                                    </span>
                                )}
                            </div>
                            <div className={'menu_dropdown__mobile--options'}>
                                {dropViewM.v && dropViewM.v.length && dropViewM.key === i
                                    ? dropViewM.v.map((el: any) => (
                                          <div className={'option'}>
                                              <p>{el.title}</p>
                                              <p>{el.description}</p>
                                          </div>
                                      ))
                                    : null}
                            </div>
                        </>
                    ))}
                </div>

                <div className="header__content__mobile-nav">
                    <div className={'hamburger'} onClick={() => toggleShowMobileMenu(!showMobileMenu)}>
                        <GiHamburgerMenu size={18} color={'white'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
