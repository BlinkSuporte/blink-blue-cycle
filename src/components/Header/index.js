import React from 'react';
import Logo from './Logo/Logo';
import Search from './SearchBar/SearchBar';
import DropdownUser from './DropdownUser/DropdownUser';
import DropdownCart from './DropdownCart/DropdownCart';
import NavBar from '../NavBar';
import HeaderResponsive from '../HeaderResponsive';
import NavBarResponsive from '../NavBarResponsive';

export default function Header() {
    return (
        <>
            <header className="header header-logado">
                <div className="bg-white">
                    <div className="container header_topo d-none d-lg-flex">
                        <Logo />
                        <Search />
                        <DropdownUser />
                        <DropdownCart />
                    </div>
                    <HeaderResponsive />
                </div>
                <NavBar />
            </header>
            <NavBarResponsive />
        </>
    )
}