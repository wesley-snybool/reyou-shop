import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import ForgetPasswordForm from "@components/auth/forget-password-form";
import PageHeader from "@components/ui/page-header";
import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { FaCentercode } from "react-icons/fa";

export default function ForgetPasswordPage() {
	return (
		<>
			<p style={{fontSize: 18, paddingTop: 50, textAlign: "center"}}><strong>Esqueceu sua senha?</strong></p>
			<Container>
				<div className="py-16 lg:py-20">
					<ForgetPasswordForm />
				</div>
				<Subscription />
			</Container>
		</>
	);
}

ForgetPasswordPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
