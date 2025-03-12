import { useState } from "react";

import Search from "../../assets/header/search.svg?react";

const SearchWithButton = ({ placeholder, buttonText, onSearch }) => {
	const [search, setSearch] = useState("");

	return (
		<div className="flex items-center justify-end space-x-4">
			{/* Search Input */}
			<div className="relative">
				<Search className="text-lightGray absolute left-3 top-2.5" size={18} />
				<input
					type="text"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						if (onSearch) onSearch(e.target.value);
					}}
					placeholder={placeholder || "Search"}
					className="focus:ring-primary text-lightGray rounded-md border py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2"
				/>
			</div>

			<button className="hover:bg-primary bg-primary flex items-center space-x-2 rounded-md px-5 py-1 text-sm text-white transition">
				{buttonText || "Button"}
				<span className="ml-2 text-lg font-semibold">+</span>
			</button>
		</div>
	);
};

export default SearchWithButton;
