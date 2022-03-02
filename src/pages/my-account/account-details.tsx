import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import AccountDetails from "@components/my-account/account-details";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import Image from 'next/image'
import { useSession } from "next-auth/react";

export default function AccountDetailsPage() {
	const { data: session } = useSession();
	console.log(session?.user);
	return (
		<AccountLayout>
			<div className="flex items-center gap-5">
				<img className="my-10 rounded-full" width={80} height={80} src={`${session?.user?.image}`}/>
				<span className="font-bold">{`Olá, ${session?.user?.name}`}</span>
			</div>
			<AccountDetails />
		</AccountLayout>
	);
}

AccountDetailsPage.Layout = Layout;

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
