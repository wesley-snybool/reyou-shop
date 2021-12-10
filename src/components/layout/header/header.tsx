import React, { useRef } from "react";
import SearchIcon from "@components/icons/search-icon";
import { siteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@utils/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "@components/ui/language-switcher";
import { useAppSelector } from "src/redux/hooks/selectors";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});


type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {

const data = useAppSelector((state) => state.getConfig.data)

	const {
		openSidebar,
		setDrawerView,
		openSearch,
		openModal,
		setModalView,
		isAuthorized,
	} = useUI();
	const { t } = useTranslation("common");
	const siteHeaderRef = useRef() as DivElementRef;
	addActiveScroll(siteHeaderRef);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	function handleMobileMenu() {
		setDrawerView("MOBILE_MENU");
		return openSidebar();
	}
	return (
		<header
			id="siteHeader"
			ref={siteHeaderRef}
			className="bg-white w-full shadow-header h-16 sm:h-20 lg:h-24 z-20 flex align-center justify-center overflow-hidden"
		>
			<div className="any-qualq"></div>
			<div className="bg-white  w-full mx-sm px-10 text-gray-700 body-font fixed  h-16 sm:h-20 lg:h-24 z-20 transition duration-200 ease-in-out">
				<div className="flex items-center justify-center  h-full w-full">
					<button
						aria-label="Menu"
						className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
						onClick={handleMobileMenu}
					>
						<span className="w-full">
							<span className="bar" />
							<span className="bar" />
							<span className="bar" />
						</span>
					</button>
					<div className="p-4 flex items-center justify-center">
						<Logo />
					</div>

					<HeaderMenu
						data={site_header.menu}
						className=""
					/>

				<div className="max-w-2xl p-4 m-20 w-full flex align-center justify-center">
					<div className="relative flex items-center w-full">
						<input className="w-full border border-black rounded-full p-3 px-6 text-gray-700 focus:outline-none" id="search" type="text" placeholder="Buscar"/>
						
						<div className="absolute right-4 mx-2">
						<button className="text-white rounded-full hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
							<SearchIcon color='black'/>
						</button>
						</div>
						</div>
					</div>

					<div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
						<button
							className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
							onClick={openSearch}
							aria-label="search-button"
						>
						</button>
						<div className="">
							<AuthMenu
								isAuthorized={isAuthorized}
								href={ROUTES.ACCOUNT}
								className="text-sm xl:text-base text-heading font-semibold"
								btnProps={{
									className:
										"text-sm xl:text-base text-heading font-semibold focus:outline-none",
									children: t("Login/Cadastrar"),
									onClick: handleLogin,
								}}
							>
								{t("text-account")}
							</AuthMenu>
						</div>
						
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
