import React from "react";

export default function Footer() {
	return (
		<footer className="mt-10 bg-gray-700 py-6 text-center text-white">
			<p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
		</footer>
	);
}
