import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
	return (
		<Breadcrumb
			items={items.map((item) => ({
				title: item.link ? (
					<Link className="!text-primary" to={item.link}>
						{item.name}
					</Link>
				) : (
					<span className="!text-lightGray">{item.name}</span>
				),
			}))}
		/>
	);
};

export default Breadcrumbs;
