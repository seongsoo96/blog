import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="py-14">
				<h1 className="category-title">소개 페이지</h1>
				<p className="category-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus id condimentum elit. Aliquam eu massa facilisis,
				</p>
			</div>
		</>
	);
}
