import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";
import logo from '../../../public/assets/images/logogrande.png'

const Logo = ({...props}) => {

	const { className } = props;

	return (
		<Link
			href={siteSettings.logo.href}
			className={cn("inline-flex focus:outline-none", className)}
			{...props}
		>
			<Image
				src={logo}
				alt={"Logo Re.You"}
				height={38.41}
				width={130}
				layout='fixed'
				quality={75}
			/>
		</Link>
	);
};

export default Logo;
