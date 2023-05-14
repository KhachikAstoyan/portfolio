import React from "react";

export const SectionTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <h2 className="text-4xl font-bold mb-4">{children}</h2>;
};
