import Head from "next/head";
import Image from "next/image";
import profileImg from "../public/profile2.jpeg";
import githubLight from "../public/github-light.png";
import githubDark from "../public/github-dark.png";
import { useTheme } from "next-themes";
import Link from "next/link";

const category = [
	{ name: "Resume", href: "/blog", desc: "여기엔 내 블로그 주소" },
	{ name: "Website", href: "/about", desc: "여기엔 웹사이트 주소" },
	{
		name: "Github",
		href: "/algorithm",
		desc: "https://github.com/seongsoo96",
	},
	{
		name: "Email",
		href: "/portfolio",
		desc: "gasmathdog@gmail.com",
	},
	{
		name: "Mobile",
		href: "/portfolio",
		desc: "010-xxxx-xxxx",
	},
];

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
			<div className="flex justify-between items-center md:items-start flex-col-reverse md:flex-row mb-6">
				<div className="text-center md:text-left">
					<h1>&ldquo;안녕하세요👋</h1>
					<h1>흐름을 읽는 개발자</h1>
					<h1>
						<span className="font-bold">이성수</span>입니다.&rdquo;
					</h1>
					<br />
					<p>코드의 흐름을 이해하며 발전하고 있습니다.</p>
					<p>빠른 습득력을 가지고 있습니다.</p>
					<p>새로운 것을 받아들이는 데에 즐거움을 느낍니다.</p>
					<button className="flex flex-row items-center justify-center md:justify-start w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
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
						width={250}
						height={250}
						className="rounded-lg"
						layout="fixed"
					/>
				</div>
			</div>
			<p className="category-description w-full h-px rounded-lg bg-slate-500 mb-6"></p>

			<h1 className="about-title">자기소개</h1>

			<article>
				<div className="content">
					안녕하세요. 저는 @@에서 병원 솔루션을 개발하는
					웹개발자입니다.
				</div>
			</article>
			<h1 className="about-title">경력사항</h1>
			<article>
				<div className="content">
					아직은 경력사항이 얼마 되지 않지만 채워갈 생각에 설레입니다.
					<h3>@@@</h3>
					<p>- 재직중 2021-07-21 ~</p>
				</div>
			</article>
			<h1 className="about-title">Contact</h1>
			<article>
				<div className="content">
					<ul>
						{category.map((c) => (
							<li key={c.name} className="text-xl">
								<Link href={c.href}>
									<a>
										<div className="py-4">
											<p>
												<span className="underline underline-offset-4 dark:hover:text-blue-400">
													{c.name}
												</span>{" "}
												-{" "}
												<span className="text-lg font-medium">
													{c.desc}
												</span>
											</p>
										</div>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</article>
			<h1 className="about-title">업무경험</h1>
			<h1 className="about-title">프로젝트</h1>
			<h1 className="about-title">기술스택</h1>
			<h1 className="about-title">학력사항</h1>
			<h1 className="about-title">자격사항</h1>
			<p>Last Updated</p>
		</>
	);
}
