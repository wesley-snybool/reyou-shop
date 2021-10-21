import Container from "@components/ui/container";
import { siteSettings } from "@settings/site-settings";
import { useTranslation } from "next-i18next";

interface CopyrightProps {
	payment?: {
		id: string | number;
		path?: string;
		name: string;
		image: string;
		width: number;
		height: number;
	}[];
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = () => {
	const { t } = useTranslation("footer");
	return (
		<div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
			<Container className="flex flex-col-reverse md:flex-row text-center md:justify-between">
				<p className="text-body text-xs lg:text-sm leading-6">
					{t("text-copyright")} &copy; {year}&nbsp;
					<a
						className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
						href={siteSettings.author.websiteUrl}
					>
						{siteSettings.author.name}
					</a>
					&nbsp; {t("text-all-rights-reserved")}
				</p>

				
					
			</Container>
		</div>
	);
};

export default Copyright;
