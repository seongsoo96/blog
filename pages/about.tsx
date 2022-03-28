import Head from "next/head";
import Image from "next/image";
import profileImg from "../public/profile2.jpeg";
import githubLight from "../public/github-light.png";
import githubDark from "../public/github-dark.png";
import { useTheme } from "next-themes";

export default function About() {
	const { systemTheme, theme } = useTheme();
	const githubImg = () => {
		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<Image
					src={githubDark}
					className="w-auto h-6 rounded-full hover:"
					alt="Github"
					width={40}
					height={40}
				/>
			);
		} else {
			return (
				<Image
					src={githubLight}
					className="w-auto h-6 rounded-full"
					alt="Github"
					width={40}
					height={40}
				/>
			);
		}
	};

	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="category-header">
				<h1 className="category-title">About</h1>
				<p className="category-description w-full h-1 rounded-lg bg-slate-500 mb-6"></p>
			</div>
			<div className="flex justify-between items-start">
				<div>
					<h1>&ldquo;안녕하세요👋</h1>
					<h1>흐름을 읽는 개발자</h1>
					<h1>
						<span className="font-bold">이성수</span>입니다.&rdquo;
					</h1>
					<br />
					<p>코드의 흐름을 이해하며 발전하고 있습니다.</p>
					<p>빠른 습득력을 가지고 있습니다.</p>
					<p>새로운 것을 받아들이는 데에 즐거움을 느낍니다.</p>
					<button className="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
						<a
							href="https://github.com/seongsoo96"
							target="_blank"
							rel="noreferrer"
						>
							{githubImg()}
						</a>
					</button>
				</div>
				<div>
					<Image
						src={profileImg}
						alt="profile"
						width={300}
						height={300}
						className="rounded-lg"
						// layout="fixed"
					/>
				</div>
			</div>
		</>
	);
}
