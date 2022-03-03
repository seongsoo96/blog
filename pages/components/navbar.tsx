const navigation = [
	{ name: "Dashboard", href: "#", current: true },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
];

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(" ");
};

export default function Navbar() {
	return (
		<>
			<header className="fixed top-0 left-0 h-16 right-0 bg-orange-200 flex justify-between">
				<h1>KimDev's Blog</h1>
				<nav>
					<span>Menu</span>
					<span>Menu</span>
					<span>Menu</span>
				</nav>
			</header>
		</>
		// <>
		// 	<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		// 		<div className="relative flex items-center justify-between h-16">
		// 			<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
		// 				<div className="hidden sm:block sm:ml-6">
		// 					<div className="flex space-x-4">
		// 						{navigation.map((item) => (
		// 							<a
		// 								key={item.name}
		// 								href={item.href}
		// 								className={classNames(
		// 									item.current
		// 										? "bg-gray-900 text-white"
		// 										: "text-gray-900 hover:bg-gray-700 hover:text-white",
		// 									"px-3 py-2 rounded-md text-sm font-medium"
		// 								)}
		// 								aria-current={
		// 									item.current ? "page" : undefined
		// 								}
		// 							>
		// 								{item.name}
		// 							</a>
		// 						))}
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
}
