import Link from "next/link";
import { useState } from "react";

const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];
const profile = [
	{ name: "menu1", href: "#" },
	{ name: "menu2", href: "#" },
	{ name: "menu3", href: "#" },
];

export default function Navbar() {
	const [drop, setDrop] = useState(false);
	const onClick = () => (drop ? setDrop(false) : setDrop(true));
	return (
		<>
			<header className="fixed top-0 left-0 h-16 right-0 bg-orange-200 flex justify-between">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<Link href="/">
						<a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
							KimDev
						</a>
					</Link>
					<ul className="flex space-x-4 items-center">
						{navigation.map((nav) => (
							<li key={nav.name}>
								<Link href={nav.href}>
									<a>{nav.name}</a>
								</Link>
							</li>
						))}
						<li onClick={onClick}>
							<button className="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
								<img
									src="https://randomuser.me/api/portraits/men/12.jpg"
									className="w-auto h-6 rounded-full"
									alt=""
								/>
							</button>
							{drop ? (
								<div className="absolute px-2 py-2 bg-white rounded-md shadow">
									<ul>
										{profile.map((p) => (
											<li key={p.name}>
												<Link href={p.href}>
													<a className="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
														{p.name}
													</a>
												</Link>
											</li>
										))}
									</ul>
								</div>
							) : null}
						</li>
					</ul>
				</div>
			</header>
			{/* <div>
				<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
					<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
						<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
							<a
								className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
								href="#pablo"
							>
								teal Tailwind Starter Kit
							</a>
							<button
								className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
								type="button"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<i className="fas fa-bars"></i>
							</button>
						</div>
						<div
							className={
								"lg:flex flex-grow items-center" +
								(navbarOpen ? " flex" : " hidden")
							}
							id="example-navbar-danger"
						>
							<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Share</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Tweet</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										href="#pablo"
									>
										<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
										<span className="ml-2">Pin</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div> */}
		</>
	);
}
