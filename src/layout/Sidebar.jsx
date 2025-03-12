import React, { useState } from "react";

import { Link } from "react-router-dom";

// Sidebar icons
import Account from "../assets/sidebar/account.svg?react";
import Arrow from "../assets/sidebar/arrow.svg?react";
import Dashboard from "../assets/sidebar/dashboard.svg?react";
import Header_logo from "../assets/sidebar/header.svg?react";
import Hrm from "../assets/sidebar/hrm.svg?react";
import Inventory from "../assets/sidebar/inventory.svg?react";
import Purchase from "../assets/sidebar/purchase.svg?react";
import Report from "../assets/sidebar/report.svg?react";

export default function Sidebar({ isOpen, isMobile }) {
	const [openMenus, setOpenMenus] = useState({});

	const MENU_ITEMS = [
		{ name: "Dashboard", icon: <Dashboard />, subMenu: [], link: "/" },
		{
			name: "Sales",
			icon: <Dashboard />,

			subMenu: [
				{ name: "Customers", link: "/sales/customers" },
				{ name: "Sales Invoice", link: "/sales/invoice" },
				{ name: "Sales Quotation", link: "/sales/quotation" },
				{ name: "Sales Commission", link: "/sales/commission" },
			],
		},
		{
			name: "Purchases",
			icon: <Purchase />,

			subMenu: [
				{ name: "Suppliers", link: "/purchases/suppliers" },
				{ name: "Purchase Orders", link: "/purchases/orders" },
				{ name: "Bills", link: "/purchases/bills" },
			],
		},
		{
			name: "Inventory",
			icon: <Inventory />,

			subMenu: [
				{ name: "Products", link: "/inventory/products" },
				{ name: "Stock Levels", link: "/inventory/stock-levels" },
				{ name: "Adjustments", link: "/inventory/adjustments" },
			],
		},
		{
			name: "Delivery",
			icon: <Inventory />,

			subMenu: [
				{ name: "Orders", link: "/delivery/orders" },
				{ name: "Shipments", link: "/delivery/shipments" },
			],
		},
		{
			name: "Finance",
			icon: <Inventory />,

			subMenu: [
				{ name: "Transactions", link: "/finance/transactions" },
				{ name: "Budgets", link: "/finance/budgets" },
			],
		},
		{
			name: "POS",
			icon: <Inventory />,

			subMenu: [
				{ name: "Orders", link: "/pos/orders" },
				{ name: "Payments", link: "/pos/payments" },
			],
		},
		{
			name: "Reports",
			icon: <Report />,

			subMenu: [
				{ name: "Sales Report", link: "/reports/sales" },
				{ name: "Inventory Report", link: "/reports/inventory" },
			],
		},
		{
			name: "Accounts",
			icon: <Account />,

			subMenu: [
				{ name: "Invoices", link: "/accounts/invoices" },
				{ name: "Expenses", link: "/accounts/expenses" },
				{ name: "Transactions", link: "/accounts/transactions" },
			],
		},
		{
			name: "HRM",
			icon: <Hrm />,

			subMenu: [
				{ name: "Employees", link: "/hrm/employees" },
				{ name: "Payroll", link: "/hrm/payroll" },
				{ name: "Attendance", link: "/hrm/attendance" },
			],
		},
		{
			name: "Settings",
			icon: <Hrm />,

			subMenu: [
				{ name: "General", link: "/settings/general" },
				{ name: "User Management", link: "/settings/users" },
			],
		},
	];

	const toggleMenu = (menu) => {
		setOpenMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	return (
		<div
			className={`fixed left-0 top-0 z-20 h-screen bg-white shadow-lg transition-all duration-300 ${
				isOpen
					? isMobile
						? "w-[203px] translate-x-0 transform"
						: "w-[203px]"
					: isMobile
						? "w-[203px] -translate-x-full transform"
						: "w-0 overflow-hidden"
			}`}
		>
			<div className="flex items-center justify-between p-4">
				<Header_logo />
			</div>
			<div className="max-h-[calc(100vh-64px)] overflow-y-auto">
				<ul className="text-lightGray">
					{MENU_ITEMS.map((menu, index) => (
						<li key={index}>
							<div
								className={`flex cursor-pointer items-center justify-between px-4 py-2 md:px-6 lg:px-10 ${
									openMenus[menu.name]
										? "bg-primary rounded-md text-white"
										: "hover:bg-gray-100"
								}`}
								onClick={() => toggleMenu(menu.name)}
							>
								<div className="flex items-center gap-2">
									{menu.subMenu.length > 0 && (
										<Arrow
											className={`transition-transform duration-200 ${
												openMenus[menu.name] ? "rotate-[90deg]" : ""
											}`}
										/>
									)}

									<span
										className={`${openMenus[menu.name] ? "text-white" : "text-gray-700"}`}
									>
										{menu.icon}
									</span>

									<span className="whitespace-nowrap">{menu.name}</span>
								</div>
							</div>

							{/* Submenu */}
							{openMenus[menu.name] && menu.subMenu.length > 0 && (
								<ul className="text-lightGray pl-8 text-sm md:pl-10 lg:pl-14">
									{menu.subMenu.map((sub, subIndex) => (
										<li
											key={subIndex}
											className="hover:text-primary cursor-pointer py-2"
										>
											<Link to={sub.link}>
												<span className="whitespace-nowrap">{sub.name}</span>
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
