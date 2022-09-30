// import type { GetStaticProps } from "next";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../public/profile3.jpeg';
import githubLight from '../public/github-light.png';
import githubDark from '../public/github-dark.png';
import { useTheme } from 'next-themes';

// import Image from "next/image";
// import profileImg from "../public/profile2.jpeg";
// import { useState } from "react";
// import Date from "../components/date";
// import { getSortedPostsData } from "../lib/post";
// import Comments from "../components/comments";

const category = [
  { name: 'Blog', href: '/blog', desc: '기록하면 좋다길래.. 무작정.. 끄적..' },
  { name: 'About', href: '/about', desc: '여기 좀 봐주세요~~!!' },
  // {
  //   name: 'Algorithm',
  //   href: '/algorithm',
  //   desc: '하... 코테는 늘지를 않니 ㅠㅠ',
  // },
  // {
  //   name: 'Portfolio',
  //   href: '/portfolio',
  //   desc: '어디 내놓아도 부끄러운.. 작품!',
  // },
];

const Home = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="category-header">
        <h1 className="category-title">G&rsquo;day Mate!</h1>
        <p className="category-description text-2xl font-bold underline rounded-md underline-offset-4 decoration-8 decoration-indigo-500 mb-10">
          안녕하세요&#128075; 이성수입니다!!!!
        </p>
        <div className="grid grid-cols-[100px_auto] bg-slate-100 rounded-xl p-6 dark:bg-slate-800">
          <div className="w-[100px] h-[100px] rounded-full border-2 border-solid border-slate-600">
            <Image
              src={profileImg}
              alt="profile"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="ml-8 pt-2">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">Seongsoo</p>
                <blockquote className="mt-2">
                  <p className="font-normal">Frontend Developer</p>
                </blockquote>
              </div>
              <div>
                <Image
                  src={currentTheme === 'dark' ? githubDark : githubLight}
                  alt="github logo"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <figcaption className="font-medium mt-1">
              <div className="text-slate-700 dark:text-slate-500">
                &ldquo;어떤 말을 쓰면 좀 멋져 보일까요?&rdquo;
              </div>
            </figcaption>
          </div>
        </div>
        {/* <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Don&apos;t worry if it doesn&apos;t work right. If everything
              did, you&apos;d be out of a job.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-slate-700 dark:text-slate-500">
              Mosher&apos;s Law of Software Engineering
            </div>
          </figcaption>
        </div>
        <div className="md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Don&apos;t worry if it doesn&apos;t work right. If everything
              did, you&apos;d be out of a job.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-slate-700 dark:text-slate-500">
              Mosher&apos;s Law of Software Engineering
            </div>
          </figcaption>
        </div>
      </div> */}
        <br />
        <div className="md:flex bg-slate-100 rounded-xl p-6 md:p-0 dark:bg-slate-800">
          <div className="md:p-8 md:text-left space-y-4">
            <ul>
              {category.map((c) => (
                <li key={c.name} className="text-xl">
                  <Link href={c.href}>
                    <a>
                      <div className="pt-2 pb-4">
                        <p>
                          <span className="underline underline-offset-4 dark:hover:text-blue-400">
                            {c.name}
                          </span>{' '}
                          -{' '}
                          <span className="text-lg font-normal">{c.desc}</span>
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Comments /> */}
    </>
  );
};

export default Home;
