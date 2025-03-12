import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PrimaryLayout() {
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const checkScreenSize = () => {
		setIsMobile(window.innerWidth < 768);

		if (window.innerWidth < 768) {
			setSidebarOpen(false);
		} else {
			setSidebarOpen(true);
		}
	};

	useEffect(() => {
		checkScreenSize();

		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="h-screen overflow-hidden bg-gray-50">
			{sidebarOpen && isMobile && (
				<div
					className="fixed inset-0 z-10 bg-black bg-opacity-50"
					onClick={toggleSidebar}
				></div>
			)}

			<Sidebar isOpen={sidebarOpen} isMobile={isMobile} />

			<div
				className={`flex h-screen flex-col transition-all duration-300 ${
					isMobile
						? "w-full"
						: sidebarOpen
							? "md:ml-52 lg:ml-52 xl:ml-52"
							: "ml-0"
				}`}
			>
				<Header
					toggleSidebar={toggleSidebar}
					sidebarOpen={sidebarOpen}
					isMobile={isMobile}
				/>

				{/* content  */}
				<main className="flex-1 overflow-auto p-2 sm:p-4">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
