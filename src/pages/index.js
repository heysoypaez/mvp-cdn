import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { 
	Principal	
} from "../components/layout/index.js";

const IndexPage = () => (
	<Layout>
		<SEO title="Capacitación gratuita para emprendedores" />	
		<Principal />
	</Layout>
);

export default IndexPage;
