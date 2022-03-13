import Head from "next/head";

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-4xl my-6">
				<h1>소개 페이지</h1>
			</div>
		</>
	);
}
