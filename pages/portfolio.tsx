import Head from "next/head";

export default function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="py-14">
				<h1 className="category-title">포트폴리오</h1>
				<p className="category-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus id condimentum elit. Aliquam eu massa facilisis,
				</p>
				<button className="btn-blue">hello</button>
			</div>
		</>
	);
}
