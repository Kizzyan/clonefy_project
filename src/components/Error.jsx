import React from "react";

export const Error = ({ error }) => {
	return (
		<div className="w-full flex justify-center items-center">
			<h1 className="font-bold text-2xl text-white mt-2">
				Something went wrong. Please try again.
			</h1>
		</div>
	);
};
