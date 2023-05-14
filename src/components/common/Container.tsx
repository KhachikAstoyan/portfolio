import React from "react";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <div className="max-w-full mx-auto px-4 md:max-w-4xl lg:max-w-5xl">{children}</div>;
};
