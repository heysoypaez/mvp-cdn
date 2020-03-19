import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./styles/Header.css";
import envelopeIcon from "../../images/icons/envelope-solid.svg";
import phoneIcon from "../../images/icons/phone-solid.svg";
import clientLogo from "../../images/logo/logo-impulsados-icono.jpg";

const Header = ({ siteTitle }) => (
	<header class="header">
		<figure class="header__item header__item-1">
			<img src={clientLogo} width="80" />
		</figure>
		<section class="header__item header__item-2">
		</section>
		<section class="header__item header__item-3">
			<ul>
				<li>  <img src={phoneIcon} width="24px" height="24px" /><a href="tel:+56983870290">+569 8387 0290</a> </li>
				<li>  <img src={envelopeIcon} /> <a href="mailto:contacto@mail.cl">contacto@mail.cl </a></li>
			</ul>
		</section>
	</header>

);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: "",
};

export default Header;
