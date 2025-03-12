import React, { useState } from "react";

import { Segmented, Table, Tabs } from "antd";

import Breadcrumbs from "../../components/common/Breadcrumb";
import SearchWithButton from "../../components/common/SearchWithButton ";

import "./style.css";

const { TabPane } = Tabs;
export default function saleInvoice() {
	const [activeSegment, setActiveSegment] = useState("all");
	const [selectedFilter, setSelectedFilter] = useState("all");

	// Sample data for invoices
	const invoiceData = [
		{
			id: <p className="underline">SIN-010</p>,
			branchName: "Jeddha Branch",
			storeName: "Stellar Boutique",
			customerName: "John Doe",
			invoiceType: "Tax",
			grandTotal: "SAR 1,000",
			issueDate: "12-09-2021",
			status: "Cleared",
			payStatus: "Paid",
			reportStatus: "Reported",
		},
		{
			id: <p className="underline">SIN-010</p>,
			branchName: "Dammam Branch",
			storeName: "Nebula Emporium",
			customerName: "John Doe",
			invoiceType: "Tax",
			grandTotal: "SAR 1,000",
			issueDate: "12-09-2021",
			status: "Unreported",
			payStatus: "Unpaid",
			reportStatus: "Unreported",
		},
	];

	// Define columns for different segments
	const getColumns = () => {
		const baseColumns = [
			{
				title: "Invoice Id",
				dataIndex: "id",
				key: "id",
				render: (text) => (
					<a className="text-blue-500 hover:underline">{text}</a>
				),
				sorter: (a, b) => a.id.localeCompare(b.id),
			},
			{
				title: "Branch Name",
				dataIndex: "branchName",
				key: "branchName",
				sorter: (a, b) => a.branchName.localeCompare(b.branchName),
			},
			{
				title: "Store Name",
				dataIndex: "storeName",
				key: "storeName",
				sorter: (a, b) => a.storeName.localeCompare(b.storeName),
			},
			{
				title: "Customer Name",
				dataIndex: "customerName",
				key: "customerName",
				sorter: (a, b) => a.customerName.localeCompare(b.customerName),
			},
			{
				title: "Invoice Type",
				dataIndex: "invoiceType",
				key: "invoiceType",
				sorter: (a, b) => a.invoiceType.localeCompare(b.invoiceType),
			},
			{
				title: "Grand Total",
				dataIndex: "grandTotal",
				key: "grandTotal",
				sorter: (a, b) => a.grandTotal.localeCompare(b.grandTotal),
			},
			{
				title: "Issue Date",
				dataIndex: "issueDate",
				key: "issueDate",
				sorter: (a, b) => new Date(a.issueDate) - new Date(b.issueDate),
			},
		];

		// Add specific columns based on active segment
		if (activeSegment === "all") {
			baseColumns.push({
				title: "Status",
				dataIndex: "status",
				key: "status",
				render: (text) => (
					<span
						className={
							text === "Cleared" || text === "Reported"
								? "text-green-500"
								: "text-pink-500"
						}
					>
						{text}
					</span>
				),
				sorter: (a, b) => a.status.localeCompare(b.status),
			});
		} else if (activeSegment === "tax") {
			baseColumns.push(
				{
					title: "Pay Status",
					dataIndex: "payStatus",
					key: "payStatus",
					sorter: (a, b) => a.payStatus.localeCompare(b.payStatus),
				},
				{
					title: "Status",
					dataIndex: "status",
					key: "status",
					render: (text) => (
						<span
							className={
								text === "Cleared" ? "text-green-500" : "text-pink-500"
							}
						>
							{text}
						</span>
					),
					sorter: (a, b) => a.status.localeCompare(b.status),
				},
			);
		} else if (activeSegment === "simplified") {
			baseColumns.push({
				title: "Status",
				dataIndex: "reportStatus",
				key: "reportStatus",
				render: (text) => (
					<span
						className={text === "Reported" ? "text-green-500" : "text-pink-500"}
					>
						{text}
					</span>
				),
				sorter: (a, b) => a.reportStatus.localeCompare(b.reportStatus),
			});
		}

		return baseColumns;
	};

	// Filter data based on active segment and filter
	const getFilteredData = () => {
		let filteredData = [...invoiceData];

		// Filter by segment type
		if (activeSegment === "tax") {
			filteredData = filteredData.filter((item) => item.invoiceType === "Tax");
		} else if (activeSegment === "simplified") {
			filteredData = filteredData.filter(
				(item) => item.invoiceType === "Simplified",
			);
		}

		// Apply secondary filters within each segment
		if (activeSegment === "all") {
			// No additional filtering needed for "All" filter in any segment
			if (selectedFilter === "all") {
				return filteredData;
			}
			return filteredData.filter(
				(item) => item.status.toLowerCase() === selectedFilter.toLowerCase(),
			);
		} else if (activeSegment === "tax") {
			if (selectedFilter === "all") {
				return filteredData;
			}
			return filteredData.filter(
				(item) => item.payStatus.toLowerCase() === selectedFilter.toLowerCase(),
			);
		} else if (activeSegment === "simplified") {
			if (selectedFilter === "all") {
				return filteredData;
			}
			return filteredData.filter(
				(item) =>
					item.reportStatus.toLowerCase() === selectedFilter.toLowerCase(),
			);
		}

		return filteredData;
	};

	// Handle segment change
	const handleSegmentChange = (value) => {
		setActiveSegment(value);
		setSelectedFilter("all");
	};

	// Get filter options based on active segment
	const getFilterOptions = () => {
		if (activeSegment === "all") {
			return (
				<Tabs
					activeKey={selectedFilter}
					onChange={(key) => setSelectedFilter(key)}
					size="small"
				>
					<TabPane tab="All" key="all" />
					<TabPane tab="Cleared" key="cleared" />
					<TabPane tab="Uncleared" key="uncleared" />
				</Tabs>
			);
		} else if (activeSegment === "tax") {
			return (
				<Tabs
					activeKey={selectedFilter}
					onChange={(key) => setSelectedFilter(key)}
					size="small"
				>
					<TabPane tab="All" key="all" />
					<TabPane tab="Paid" key="paid" />
					<TabPane tab="Unpaid" key="unpaid" />
					<TabPane tab="Partial" key="partial" />
					<TabPane tab="Cleared" key="cleared" />
					<TabPane tab="Uncleared" key="uncleared" />
				</Tabs>
			);
		} else if (activeSegment === "simplified") {
			return (
				<Tabs
					activeKey={selectedFilter}
					onChange={(key) => setSelectedFilter(key)}
					size="small"
				>
					<TabPane tab="All" key="all" />
					<TabPane tab="Reported" key="reported" />
					<TabPane tab="Unreported" key="unreported" />
				</Tabs>
			);
		}

		return null;
	};
	return (
		<div>
			<Breadcrumbs
				items={[{ name: "Sale", link: "/sales" }, { name: "Sale Invoice" }]}
			/>
			<SearchWithButton placeholder="Search" buttonText="Create Invoice" />

			<h1 className="text-2xl font-extrabold text-[#141433]">Sale Invoice</h1>

			<div className="py-2">
				<Segmented
					options={["All", "Tax", "Simplified"]}
					value={activeSegment.charAt(0).toUpperCase() + activeSegment.slice(1)}
					onChange={(value) => handleSegmentChange(value.toLowerCase())}
					block
					className="custom-segmented w-full border bg-white text-lg sm:w-1/2 md:w-1/2 lg:w-1/2"
					style={{
						height: "50px",
						fontSize: "14px",
					}}
				/>
			</div>

			<div className="min-h-screen">
				<div className="rounded-lg bg-white p-6 shadow">
					<div className="mb-4">
						<div className="mb-2 text-lg font-semibold text-[#141433]">
							Total 215 <span className="text-lg font-normal">(15 new)</span>
						</div>
						<div className="mb-4 flex flex-wrap">{getFilterOptions()}</div>
					</div>

					<Table
						columns={getColumns()}
						dataSource={getFilteredData()}
						rowKey="id"
						pagination={false}
						className="mb-4"
					/>
				</div>
			</div>
		</div>
	);
}
