import {
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoFacebook,
	
} from "react-icons/io5";

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: "",
			lists: [
				{
					id: 1,
					title:"",
					path: "#",
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: "",
					path: "#",
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: "",
					path: "#",
					icon: <IoLogoFacebook />,
				},
				,
			],
			
			
		},
		{
			id: 1,
			widgetTitle: "ACESSO RÁPIDO >",
			lists: [
				{
					id: 1,
					title:"Início",
					path: "/",
					
				},
				{
					id: 2,
					title: "Login",
					path: "/Login",
					
				},
				{
					id: 3,
					title: "Termos de uso",
					path: "#",
					
				},
				{
					id: 4,
					title: "Políticas de Privacidade",
					path: "#",
					
				},
				{
					id: 4,
					title: "Suporte",
					path: "#",
					
				},
				,
			],
			
			
		},
		
		
	],
};
