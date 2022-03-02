import { useTranslation } from "next-i18next";
import { useSession } from "next-auth/react";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
</style>;

interface HeaderProps {
  pageSubHeader?: string;
  pageHeader: string;
}

const PageHeader: React.FC<HeaderProps> = ({
  pageHeader = "text-page-header",
}) => {

  const { t } = useTranslation("common");

  return (
    <h2 className="mt-10 text-sm md:text-2xl md:text-2xl font-bold text-black text-center">
      {t(`${pageHeader}`)}
    </h2>
  );
};

export default PageHeader;
