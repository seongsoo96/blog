import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/post';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ReactNode } from 'react';
import CodeBlock from '../../components/CodeBlock';
import Date from '../../components/Date';
import Comments from '../../components/Comments';

interface Props {
  children?: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button
      className="bg-black dark:bg-white text-lg text-teal-200 dark:text-teal-700 rounded-lg px-5"
      onClick={() => alert(`thanks to ${children}`)}
    >
      {children}
    </button>
  );
};

const components = { Button, CodeBlock };

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    mdxSource: MDXRemoteSerializeResult;
    category: string;
    contentHtml: string;
  };
}) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-12 pt-8 md:pt-16">
        <div className="mb-1 md:mb-2">
          <span className="bg-primary bg-opacity-50 px-1.5 text-sm md:text-base bg-indigo-500 dark:bg-yellow-200 dark:text-indigo-900">
            {postData.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{postData.title}</h1>
        <div className="text-gray-500 flex items-center text-sm mt-6">
          {/* <Image className="rounded-full w-6 h-6 mr-3" src="/images/profile.png" alt="Wonny (워니)"> */}
          <div>
            KimDev<span className="mx-1.5">·</span>
            <Date dateString={postData.date} />
          </div>
        </div>
      </header>
      {postData.contentHtml && (
        <div
          // className="text-2xl my-3"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      )}
      {postData.mdxSource && (
        <MDXRemote {...postData.mdxSource} components={components} />
      )}

      {/* <article>
				<div className="mb-1 md:mb-2">
					<span className="bg-primary bg-opacity-50 px-1.5 text-sm md:text-base bg-indigo-500 dark:bg-yellow-200 dark:text-indigo-900">
						{postData.category}
					</span>
				</div>
				<div className="text-4xl my-6">
					<h1>{postData.title}</h1>
				</div>
				<small className="text-xl my-2">
					<Date dateString={postData.date} />
				</small>
				<div
					className="text-2xl my-3"
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article> */}
      <Comments />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
