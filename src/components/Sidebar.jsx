import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
	<div className="mt-10">
		{links.map((link) => (
			<NavLink
				key={link.name}
				to={link.to}
				className="flex flex-row justify-start items-center my-8 text-2xl md:text-lg font-medium text-gray-400 hover:text-pink-300"
				onClick={() => handleClick && handleClick()}
			>
				<link.icon className="w-6 h-6 mr-2" />
				{link.name}
			</NavLink>
		))}
	</div>
);

export const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Regular menu */}
			<div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1b1b1b]">
				<img src={logo} alt={logo} className="w-full h-20 object-contain" />
				<NavLinks />
			</div>

			{/* Mobile Menu */}
			<div className="absolute md:hidden block top-6 right-3">
				{mobileMenuOpen ? (
					<RiCloseLine
						onClick={() => setMobileMenuOpen(false)}
						className="w-12 h-12 text-white mr-2"
					/>
				) : (
					<HiOutlineMenu
						onClick={() => setMobileMenuOpen(true)}
						className="w-12 h-12 text-white mr-2"
					/>
				)}
			</div>
			<div
				className={`absolute top-0 h-screen w-3/4 bg-gradient-to-tl from-[#360f36] to-[#111] 
        backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
			mobileMenuOpen ? "left-0" : "-left-full"
		}`}
			>
				<img src={logo} alt={logo} className="w-full h-22 object-contain" />
				<NavLinks handleClick={() => setMobileMenuOpen(false)} />
			</div>
		</>
	);
};
