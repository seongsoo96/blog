// import type { GetStaticProps } from "next";
import Head from 'next/head';
import Link from 'next/link';
// import Image from "next/image";
// import profileImg from "../public/profile2.jpeg";
// import { useState } from "react";
// import Date from "../components/date";
// import { getSortedPostsData } from "../lib/post";
// import Comments from "../components/comments";

const category = [
  { name: 'Blog', href: '/blog', desc: '까먹지 않기 위해 기록한다.' },
  { name: 'About', href: '/about', desc: '저.. 궁금하신가요..?' },
  {
    name: 'Algorithm',
    href: '/algorithm',
    desc: '하... 코테는 늘지를 않니 ㅠㅠ',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    desc: '어디 내놓아도 부끄러운.. 작품!',
  },
];

const Home = () => (
  <>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="category-header">
      <h1 className="category-title">G&rsquo;day Mate!</h1>
      <p className="category-description text-2xl font-bold underline rounded-md underline-offset-4 decoration-8 decoration-indigo-500 mb-10">
        안녕하세요&#128075; KimDev입니다!!!!
      </p>
      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
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
      </div>
      <br />
      <div className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <div className="md:p-8 text-center md:text-left space-y-4">
          <ul>
            {category.map((c) => (
              <li key={c.name} className="text-xl">
                <Link href={c.href}>
                  <a>
                    <div className="py-4">
                      <p>
                        <span className="underline underline-offset-4 dark:hover:text-blue-400">
                          {c.name}
                        </span>{' '}
                        - <span className="text-lg font-medium">{c.desc}</span>
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

export default Home;
