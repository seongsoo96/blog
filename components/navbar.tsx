import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import githubImg from "../public/github-origin-mark.png";
import profileImg from "../public/profile.jpeg";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

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
	const { systemTheme, theme, setTheme } = useTheme();
	const renderThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<SunIcon
					className="w-10 h-10 text-yellow-500"
					role="button"
					onClick={() => setTheme("light")}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-10 h-10 text-gray-900"
					role="button"
					onClick={() => setTheme("dark")}
				/>
			);
		}
	};

	return (
		<>
			<header>
				<div className="wrapper flex justify-between items-center">
					<div>
						<Link href="/">
							<a>
								<h1 className="text-xl md:text-2xl font-bold">
									KimDev
								</h1>
							</a>
						</Link>
					</div>
					{renderThemeChanger()}
					<nav>
						<ol className="flex text-sm">
							<Link href="/blog">
								<a>
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-white hover:border-primary transition duration-500 border-primary">
										Blog
									</li>
								</a>
							</Link>
							<Link href="/about">
								<a>
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-white hover:border-primary transition duration-500 ">
										About
									</li>
								</a>
							</Link>
						</ol>
					</nav>
				</div>
			</header>

			{/* <header className="fixed top-0 left-0 h-16 right-0 bg-orange-200 flex justify-between">
				<div className="container px-40 mx-auto flex flex-wrap items-center justify-between">
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
								<a
									href="https://github.com/seongsoo96"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={githubImg}
										className="w-auto h-6 rounded-full"
										alt="Github Image"
										width={40}
										height={40}
									/>
								</a>
							</button>
						</li>
						<li onClick={onClick}>
							<button className="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
								<Image
									src={profileImg}
									className="w-auto h-6 rounded-full"
									alt=""
									width={40}
									height={40}
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
			</header> */}

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
