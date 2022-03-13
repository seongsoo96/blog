import Head from "next/head";
import type { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import Date from "../components/date";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};

export default function Blog({
	allPostsData,
}: {
	allPostsData: { date: string; title: string; id: string }[];
}) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-4xl my-6">
				<h1>블로그</h1>
			</div>
			<div className="text-2xl">
				{allPostsData.map(({ id, date, title }) => (
					<Link key={id} href={`/posts/${id}`}>
						<a>
							<div className="my-6 border border-indigo-600">
								{title}
								<br />
								<small>
									<Date dateString={date} />
								</small>
							</div>
						</a>
					</Link>
				))}
			</div>
		</>
	);
}
