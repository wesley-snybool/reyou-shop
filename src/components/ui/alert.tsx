interface AlertProps {
	message?: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
	return (
		<div className=" w-1/2 mx-auto h-full py-8 px-5 text-sm text-red-600 font-semibold flex items-center justify-center border border-red-200 rounded">
			{message}
		</div>
	);
};

export default Alert;
