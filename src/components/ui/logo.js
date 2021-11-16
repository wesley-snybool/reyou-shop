import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";
import logo from '../../../public/assets/images/Assinatura_Reyou.png'
import { useAppSelector } from "src/redux/hooks/selectors";

const Logo = ({...props}) => {

	const { className } = props;

	return (
		<Link
			href={siteSettings.logo.href}
			className={cn("inline-flex focus:outline-none", className)}
			{...props}
		>
			<Image
				src={"https://reyoushop.nyc3.digitaloceanspaces.com/images/id-visual-reyou/logo-reyou.jpg"}
				alt={"Logo Re.You"}
				height={90}
				width={120}
				layout="fixed"
				loading="eager"
				quality={100}
			/>
		</Link>
	);
};

export default Logo;
