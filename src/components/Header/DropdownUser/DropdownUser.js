import React, { useState, useEffect, createElement } from 'react';
import { Link } from 'react-router-dom';
import { formatCNPJ, getItemSession } from '../../../utils';


const DropdownUser = () => {
    const [nome, setNome] = useState([]);
    const [cnpj, setCnpj] = useState([]);

    useEffect(() => {
        const dados = JSON.parse(getItemSession('_dados'))
        if (dados) {
            setNome(dados.Nome);
            setCnpj(formatCNPJ(dados.Login));
        }
    }, [])

    return (
        <div className="dropdown dropdown_user">
            <button className="btn btn--icon dropdown-toggle" type="button" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="dropdown_user_img"><span className="icon icon-user"></span></span>
                <span className="dropdown_user_msg">
                    <b>{nome}</b>
                    <small>CNPJ {cnpj}</small>
                </span>
                <span className="icon icon-chevron-down"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="UserDropdown">
                <div className="dropdown-menu_cont">
                    <ul className="list-unstyled mb-0">
                        <li>
                            {/* <Link to="/minha-conta" className="dropdown-menu_link">Minha conta</Link> */}
                            {createElement('a', { href: '/minha-conta', className: 'dropdown-menu_link' }, "Minha conta")}
                        </li>
                        <li>
                            {/* <Link to="/" className="dropdown-menu_link"><span>Pedidos</span><span className="badge badge-roxo">2</span></Link> */}
                            {createElement('a', { href: '/pedidos', className: 'dropdown-menu_link' }, "Pedidos")}
                        </li>
                        {/* <li>
                            <Link to="/" className="dropdown-menu_link">Sugestão de Compra</Link>
                        </li> */}
                        {/* <li> */}
                            {/* <Link to="/" className="dropdown-menu_link">Fale Conosco</Link> */}
                            {/* {createElement('a', { href: '/fale-conosco', className: 'dropdown-menu_link' }, "Fale Conosco")} */}
                        {/* </li> */}
                    </ul>
                </div>
                <div className="dropdown-menu_footer">
                    <Link to="/logout" className="dropdown-menu_link">Sair</Link>
                </div>
            </div>
        </div>
    );
}

export default DropdownUser;