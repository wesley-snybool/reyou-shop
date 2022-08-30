import { useState } from "react";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useLoginMutation, LoginInputType } from "@framework/auth/use-login";
import { useUI } from "@contexts/ui.context";
import Logo from "@components/ui/logo";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const LoginForm: React.FC = () => {
	const { t } = useTranslation();
	const { setModalView, openModal, closeModal } = useUI();
	const { mutate: login, isLoading } = useLoginMutation();

  const { data: session } = useSession();

	const getsession = getSession();
	const ant_token = "EAAJfnIeTZCNoBANyR8zSxpPuswucUxC7i0DEbZAFMZCxOsHqIcnczOWgBm9YpudzxNZAJkoxM9f8yyRThww6RgElYAWUfCEk4lJ7dLa6qlhLtNSswQXTmUSi640XZA83KcqRdo1SW5FFtZCCWUpyby5uJDCoB0zFZBhZBLIaoZANAikxzcwVAchnIqgnKEm88qXUwkAZAEDnlWOGLYYAksy78dvZBCJbk8BLlPF9fko4XeELQZDZD"


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputType>();

	function onSubmit({ email, password, remember_me }: LoginInputType) {
		login({
			email,
			password,
			remember_me,
		});
		console.log(email, password, remember_me, "data");
	}
	function handelSocialLoginFacebook() {
		if(!session) {
			signIn("facebook", { callbackUrl: 'http://localhost:3000/search' })
		}
	}

	const handelSocialLoginGoogle = () => {
		if(!session) {
			signIn("google", { callbackUrl: 'http://localhost:3000/search' });
		}
	}

	function handleSignUp() {
		setModalView("SIGN_UP_VIEW");
		return openModal();
	}
	function handleForgetPassword() {
		setModalView("FORGET_PASSWORD");
		return openModal();
	}
	return (
		<div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
			<div className="text-center mb-6 pt-2.5">
				<div onClick={closeModal}>
				<h2 style={{fontSize: 24,}}><strong></strong></h2>
				<br></br>
				<h2 style={{fontSize: 24,}}><strong>Entrar</strong></h2>
				
				</div>
				<p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
					{t("common:login-helper")}
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center"
				noValidate
			>
				<div className="flex flex-col space-y-3.5">
					<Input
						labelKey="forms:label-email"
						type="email"
						variant="solid"
						{...register("email", {
							required: `${t("forms:email-required")}`,
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: t("forms:email-error"),
							},
						})}
						errorKey={errors.email?.message}
					/>
					<PasswordInput
						labelKey="forms:label-password"
						errorKey={errors.password?.message}
						{...register("password", {
							required: `${t("forms:password-required")}`,
						})}
					/>
					<div className="flex items-center justify-center">
						<div className="flex items-center flex-shrink-0">
							<label className="switch relative inline-block w-10 cursor-pointer">
								<input
									id="remember"
									type="checkbox"
									className="opacity-0 w-0 h-0"
									{...register("remember_me")}
								/>
								<span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
							</label>
							<label
								htmlFor="remember"
								className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
							>
								{t("forms:label-remember-me")}
							</label>
						</div>
						<div className="flex ms-auto">
							<button
								type="button"
								onClick={handleForgetPassword}
								className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
							>
								{t("common:text-forgot-password")}
							</button>
						</div>
					</div>
					<div className="relative">
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
							className="h-11 md:h-12 w-full mt-1.5"
						>
							{t("common:text-login")}
						</Button>
					</div>
				</div>
			</form>
			<div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
				<hr className="w-full border-gray-300" />
				<span className="absolute -top-2.5 px-2 bg-white">
					{t("common:text-or")}
				</span>
			</div>
			<Button
				loading={isLoading}
				disabled={isLoading}
				className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
				onClick={handelSocialLoginFacebook}
			>
				<ImFacebook2 className="text-sm sm:text-base me-1.5" />
				{t("common:text-login-with-facebook")}
			</Button>
			<Button
				loading={isLoading}
				disabled={isLoading}
				className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
				onClick={handelSocialLoginGoogle}
			>
				<ImGoogle2 className="text-sm sm:text-base me-1.5" />
				{t("common:text-login-with-google")}
			</Button>
			<div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
				{t("common:text-no-account")}{" "}
				<button
					type="button"
					className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
					onClick={handleSignUp}
				>
					{'Registre-se'}
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
