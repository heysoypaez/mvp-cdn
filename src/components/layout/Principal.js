
import React from "react";
import "./styles/Principal.css";

function Principal(props) {
	
	return(
		<section class="layout-section principal-section" >
			<section class="principal-section__item principal-section__item-1">
				<h1 class="principal-section__item principal-section__item-1__title">Capacitación gratuita para emprendedores</h1>
				<ul>
					<li>Modalidad de estudio online.</li>
					<li>Disfruta de un enfoque práctico.</li>
					<li>Consectetur, adipisci velit, sed quia non numquam.</li>
					<li>Modi tempora incidunt ut labore et dolore magnam.</li>
				</ul>
			</section>
			<section class="principal-section__item principal-section__item-2" id="mas-info">
				<iframe id="inlineFrameExample"
			    title="Inline Frame Example"
			    width="100%"
			    height="500px"
			    src="https://docs.google.com/forms/d/e/1FAIpQLSf6Awkyxjk-1txB3ubbEDSME4o9BOa2gYJ0_OQ6xXOOlb3A7w/viewform?embedded=true">
				</iframe>

			</section>
		</section>
	);
}

export default Principal;


