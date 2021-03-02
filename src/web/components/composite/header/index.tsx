import React from 'react';
import './header.styles.css';
import { MENUS } from './menus';
import { MdKeyboardArrowDown } from 'react-icons/all';

const Header = () => {
    const showDrops = (drops: any) => {
        console.log(drops);
    };
    return (
        <div className={'header'}>
            <div className="header__content nav-container">
                <div className="header__content_logo">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div className="header__content_nav--menus">
                    {MENUS.map((el) => (
                        <div className="header__content_nav--menus_menu" onMouseEnter={() => showDrops(el?.drops)}>
                            <span className={'menu_title'}>{el.title}</span>
                            {el?.drops && (
                                <span className={'menu_title--has-more'}>
                                    <MdKeyboardArrowDown size={22} />
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                {/*<div className={'menu_dropdown'}>*/}
                {/*    <div className={'menu_dropdown--options nav-container'}>*/}
                {/*        {['drps'].map((el) => (*/}
                {/*            <div className={'drop-item'}>*/}
                {/*                <p>{el}</p>*/}
                {/*                <p>*/}
                {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque libero neque quidem.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <div className={'menu_dropdown_footer'}>*/}
                {/*        <p>Are you a journalist or an editor?</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Header;
