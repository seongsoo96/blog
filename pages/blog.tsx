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
	allPostsData: {
		id: string;
		title: string;
		date: string;
		preview: string;
		category: string;
	}[];
}) {
	return (
		<>
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div className="text-4xl my-6"> */}
			<div className="category-header">
				<h1 className="category-title">Blog</h1>
				<p className="category-description">
					기록하면 나중에라도 기억할 지도...?
				</p>
			</div>
			<ul className="text-2xl divide-y divide-gray-200 -m-4 md:-m-0">
				{allPostsData.map(({ id, title, category, date, preview }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>
							<a>
								<div className="p-4 md:p-0 md:py-8">
									<div className="mb-1 md:mb-2">
										<span className="bg-primary bg-opacity-50 px-1.5 text-sm md:text-base bg-indigo-500 dark:bg-yellow-200 dark:text-indigo-900">
											{category}
										</span>
									</div>
									<div className="grid grid-cols-12">
										<h1 className="text-lg md:text-2xl col-span-12 md:col-span-9 mb-2">
											{title}
										</h1>
										<div className="col-span-9 md:row-start-2 text-sm md:text-base flex flex-col justify-center md:py-2">
											<p className="overflow-ellipsis break-words overflow-hidden h-10 md:h-12 text-gray-400">
												{preview}
											</p>
											<div className="flex mt-2 md:mt-4 text-gray-500">
												<span>
													<Date dateString={date} />
												</span>
											</div>
										</div>
										<div className="col-span-3 justify-self-stretch self-stretch md:col-start-10 md:row-start-1 md:row-end-3 ml-2 md:ml-6">
											<div className="w-full h-full gatsby-image-wrapper relative overflow-hidden">
												<div></div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
