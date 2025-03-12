import React from "react";

import HeaderArrow from "../assets/header/arrowbtn.svg?react";
import Bell from "../assets/header/bell.svg?react";
import Guide from "../assets/header/guide.svg?react";
import Search from "../assets/header/search.svg?react";

export default function Header({ toggleSidebar, sidebarOpen }) {
	return (
		<header className="bg-darkGray flex flex-wrap items-center justify-between p-2 shadow-md sm:p-4">
			<div className="mr-2 flex items-center gap-3">
				<button
					onClick={toggleSidebar}
					className="cursor-pointer"
					aria-label="Toggle Sidebar"
				>
					<HeaderArrow
						className={`transition-transform duration-300 ${sidebarOpen ? "" : "rotate-180"}`}
					/>
				</button>
			</div>

			<div className="order-3 mt-2 flex w-full items-center rounded-lg bg-gray-100 px-2 py-2 sm:order-2 sm:mt-0 sm:w-64 sm:px-4 md:w-72 lg:w-96">
				<Search className="text-black" />
				<input
					type="text"
					placeholder="Search anything anywhere"
					className="ml-2 flex-1 bg-transparent text-sm text-gray-700 outline-none"
				/>
			</div>

			<div className="order-2 hidden items-center gap-2 sm:order-3 md:flex lg:gap-4">
				<select className="text-primary rounded-md border border-gray-300 px-1 py-1 text-xs sm:text-sm">
					<option>Select Branch</option>
				</select>
				<select className="text-primary rounded-md border border-gray-300 px-1 py-1 text-xs sm:text-sm">
					<option>Select Store</option>
				</select>
			</div>

			<div className="order-2 flex items-center gap-2 sm:order-4 sm:gap-3 lg:gap-4">
				<select className="rounded-md border border-gray-300 px-1 py-1 text-xs sm:text-sm">
					<option>ENG</option>
				</select>
				<div className="hidden sm:block">
					<Guide />
				</div>
				<Bell />

				<button className="text-lightGray flex items-center rounded-md bg-[#F6F8F9] px-1 py-1 text-xs sm:px-2 sm:py-2 sm:text-sm">
					<span className="hidden sm:inline">Log out</span>
					<span className="sm:hidden">Exit</span>
				</button>
			</div>

			<div className="order-4 mt-2 flex w-full items-center justify-between gap-2 md:hidden">
				<select className="text-primary flex-1 rounded-md border border-gray-300 px-1 py-1 text-xs">
					<option>Select Branch</option>
				</select>
				<select className="text-primary flex-1 rounded-md border border-gray-300 px-1 py-1 text-xs">
					<option>Select Store</option>
				</select>
			</div>
		</header>
	);
}
