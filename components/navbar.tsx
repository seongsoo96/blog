import Link from "next/link";
import { useEffect, useState } from "react";
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
	// const [drop, setDrop] = useState(false);
	// const onClick = () => (drop ? setDrop(false) : setDrop(true));
	// const { systemTheme, theme, setTheme } = useTheme();
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [checked, setChecked] = useState(
		systemTheme === "dark" ? false : true
	);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	const renderThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;
		return (
			<>
				<li>
					<input
						type="checkbox"
						id="hide-checkbox"
						defaultChecked={checked}
						onClick={() =>
							setTheme(currentTheme === "dark" ? "light" : "dark")
						}
					/>
					<label htmlFor="hide-checkbox" className="toggle">
						<span className="toggle-button">
							<span className="crater crater-1"></span>
							<span className="crater crater-2"></span>
							<span className="crater crater-3"></span>
							<span className="crater crater-4"></span>
							<span className="crater crater-5"></span>
							<span className="crater crater-6"></span>
							<span className="crater crater-7"></span>
						</span>
						<span className="star star-1"></span>
						<span className="star star-2"></span>
						<span className="star star-3"></span>
						<span className="star star-4"></span>
						<span className="star star-5"></span>
						<span className="star star-6"></span>
						<span className="star star-7"></span>
						<span className="star star-8"></span>
					</label>
				</li>
			</>

			// <button
			// 	aria-label="Toggle Dark Mode"
			// 	type="button"
			// 	className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
			// 	onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			// >
			// 	<svg
			// 		xmlns="http://www.w3.org/2000/svg"
			// 		viewBox="0 0 24 24"
			// 		fill="currentColor"
			// 		stroke="currentColor"
			// 		className="h-6 w-6 text-gray-800 dark:text-gray-200"
			// 	>
			// 		{theme === "dark" ? (
			// 			<path
			// 				strokeLinecap="round"
			// 				strokeLinejoin="round"
			// 				strokeWidth={2}
			// 				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			// 			/>
			// 		) : (
			// 			<path
			// 				strokeLinecap="round"
			// 				strokeLinejoin="round"
			// 				strokeWidth={2}
			// 				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			// 			/>
			// 		)}
			// 	</svg>
			// </button>
		);

		// if (currentTheme === "dark") {
		// 	return (
		// 		<SunIcon
		// 			className="w-10 h-10 text-yellow-500"
		// 			role="button"
		// 			onClick={() => setTheme("light")}
		// 		/>
		// 	);
		// } else {
		// 	return (
		// 		<MoonIcon
		// 			className="w-10 h-10 text-gray-900"
		// 			role="button"
		// 			onClick={() => setTheme("dark")}
		// 		/>
		// 	);
		// }
	};

	return (
		<>
			<header className="border-b-2">
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
					<nav>
						<ol className="flex text-sm">
							<Link href="/blog">
								<a>
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-black dark:border-white hover:border-primary transition duration-500 border-primary">
										Blog
									</li>
								</a>
							</Link>
							<Link href="/about">
								<a>
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-black dark:border-white hover:border-primary transition duration-500 ">
										About
									</li>
								</a>
							</Link>
							{renderThemeChanger()}
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
