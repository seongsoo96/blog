import Link from "next/link";
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
	const { systemTheme, theme, setTheme } = useTheme();
	const renderThemeChanger = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;
		return (
			<>
				<li>
					<input
						type="checkbox"
						id="hide-checkbox"
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
		);
	};

	return (
		<>
			<header className="w-full border-b-2 dart:border-white z-10 border-slate-900 fixed top-0 dark:bg-slate-800 bg-slate-200">
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
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-indigo-500 dark:border-white hover:border-primary transition duration-500 border-primary">
										Blog
									</li>
								</a>
							</Link>
							<Link href="/about">
								<a>
									<li className="mx-3 sm:mx-4 my-5 border-b-2 border-indigo-500 dark:border-white hover:border-primary transition duration-500 ">
										About
									</li>
								</a>
							</Link>
							{renderThemeChanger()}
						</ol>
					</nav>
				</div>
			</header>
		</>
	);
}
