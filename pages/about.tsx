import Head from 'next/head';
import Image from 'next/image';
import profileImg from '../public/profile2.jpeg';
import githubLight from '../public/github-light.png';
import githubDark from '../public/github-dark.png';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const category = [
  {
    name: 'Github',
    href: '/algorithm',
    desc: 'https://github.com/seongsoo96',
  },
  {
    name: 'Email',
    href: '/portfolio',
    desc: 'seongsoo.dev@gmail.com',
  },
  {
    name: 'Mobile',
    href: '/portfolio',
    desc: '010-xxxx-xxxx',
  },
];

const badge = [
  // {
  //   alt: 'TypeScript',
  //   src: 'https://img.shields.io/badge/Typescript-ffb13b?style=flat-square&logo=typescript&logoColor=white',
  // },
  // {
  //   alt: 'JavaScript',
  //   src: 'https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white',
  // },
  // {
  //   alt: 'JavaScript',
  //   src: 'https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white',
  // },
  {
    alt: 'JavaScript',
    src: 'https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white',
  },
  {
    alt: 'Java',
    src: 'https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white',
  },
  {
    alt: 'HTML5',
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white',
  },
  {
    alt: 'CSS3',
    src: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white',
  },
  {
    alt: 'Spring',
    src: 'https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white',
  },
  {
    alt: 'Spring Boot',
    src: 'https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white',
  },
  {
    alt: 'Vue.js',
    src: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white',
  },
  {
    alt: 'Handlebars.js',
    src: 'https://img.shields.io/badge/Handlebar.js-000000?style=flat-square&logo=Handlebars.js&logoColor=white',
  },
  {
    alt: 'MariaDB',
    src: 'https://img.shields.io/badge/OracleDB-F80000?style=flat-square&logo=Oracle&logoColor=white',
  },
  {
    alt: 'MySQL',
    src: 'https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=MariaDB&logoColor=white',
  },
];

export default function About() {
  const { systemTheme, theme } = useTheme();
  const githubImg = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Image
          src={githubDark}
          className="w-auto h-6 rounded-full"
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
          <h1>함께하면 즐거운 개발자</h1>
          <h1>
            <span className="font-bold">이성수</span>입니다.&rdquo;
          </h1>
          <br />
          <p>읽기 좋은 코드를 작성하고자 노력합니다.</p>
          <p>새로운 기술을 배우는 것을 좋아합니다.</p>
          <p>개인보다는 팀을 더 중요한 가치로 생각합니다.</p>
          <p>학습의 즐거움으로 살아가고 있습니다.</p>
          <p>기록하고 공유하는 것을 좋아합니다.</p>
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
          현재 병원 CRM, EMR, ERP를 개발하는 솔루션 기업에서 웹개발자로 근무하고
          있습니다. 프론트엔드 개발자로의 전향을 계획하며 퇴근 후에 꾸준히
          학습하며 준비중입니다. CS지식을 쌓기 위해 방통대에 신입학하여 학업과
          일 병행하고 있습니다.{' '}
        </div>
      </article>
      {/* <h1 className="about-title">경력사항</h1>
      <article>
        <div className="content">
          링크올
        </div>
      </article> */}
      <h1 className="about-title">업무경험</h1>
      <article>
        <div className="content">
          <h2 className="font-bold">학생검진 신규 개발</h2>
          <p className="ml-2">2022.09 ~ 2022.10</p>
          <p className="ml-2">- 학생검진 개발.</p>
          <p className="ml-2">
            - 외부 프로그램(B형간염,x-ray, 흉부 등)의 정보들을 emr에 연동.
          </p>
          <p className="ml-2">
            - 검사항목과 검진결과를 기반으로 자동판정 기능 개발.
          </p>
          <br />
          <h2 className="font-bold">병원 청구 프로세스 신규 개발</h2>
          <p className="ml-2">2022.01 ~ 2022.07</p>
          <p className="ml-2">- 공단검진 관련 항목들 (주로 청구 관련) 개발.</p>
          <p className="ml-2">- 공단검진 접수 후 청구까지의 프로세스 개발.</p>
          <p className="ml-2">- crm 문진표와 emr 문진표의 연동.</p>
          <p className="ml-2">- emr 문진표와 emr 검진결과연동.</p>
          <p className="ml-2">
            - 문진표, 검진결과를 기반으로 한 청구 문서 개발.
          </p>
          <p className="ml-2">- 기술스택 -`vue.js` / `spring` / `jpa`</p>
          <br />
          <h2 className="font-bold">병원 홈페이지 개발</h2>
          <p className="ml-2">2021.11 ~ 2021.12 </p>
          <p className="ml-2">
            - 업체에 매달 비용을 지불하여 운영되고 있는 병원 홈페이지를 온전히
            회사 자원으로 만들기 위해 자체 개발을 진행
          </p>
          <p className="ml-2">
            - 웹퍼블리싱 작업 + 이미지 교체용 관리자 페이지 개발.
          </p>
          <p className="ml-2">- 전체적인 레이아웃 공통화 작업</p>
          <p className="ml-2">
            - 관리자 페이지 작업, 홈페이지에 들어갈 사진 교체 기능 개발.
          </p>
          <p className="ml-2">
            - 사이트 -[https://www.naraemedic.com/](https://www.naraemedic.com/)
          </p>
          <p className="ml-2">- 기술스택 - `handlebar.js` / `spring` / `jpa`</p>
          <br />
          <h2 className="font-bold">진료대기현황</h2>
          <p className="ml-2">2021.09 ~ 2021.10</p>
          <p className="ml-2">
            - 일반 병원에 있는 진료대기현황이 없어서 자체 개발을 진행.
          </p>
          <p className="ml-2">
            - 현재 병원에서 사용하는 시스템을 분석하여 진료상태 변화를 파악한 후
            실시간으로 데이터(대기자/진료자 등)를 제공.
          </p>
          <p className="ml-2">
            - 설정값(화면 분할, 광고, 진료실등)의 재사용을 위해 localStorage에
            저장.
          </p>
          <p className="ml-2">
            - 진료대기현황에 같이 보여질자동 광고 슬라이드 기능을 구현.
          </p>
          <p className="ml-2">
            - 기술스택 - `vue.js` / `handlebar.js`/ `spring` / `jpa`
          </p>
        </div>
      </article>
      {/* <h1 className="about-title">Contact</h1>
      <article>
        <div className="content">
          <ul>
            {category.map((c) => (
              <li key={c.name} className="text-xl">
                <a href={c.href}>
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article> */}

      {/* <h1 className="about-title">프로젝트</h1>
      <article>
        <div className="content">
          안녕하세요. 저는 @@에서 병원 솔루션을 개발하는 웹개발자입니다.
        </div>
      </article> */}
      <h1 className="about-title">기술스택</h1>
      <article>
        <div className="content flex justify-center items-start flex-wrap">
          {badge.map((b) => (
            <div key={b.alt} className="w-[100px] h-[20px] relative flex m-2">
              <Image
                src={b.src}
                layout="fill"
                objectFit="contain"
                alt={b.alt}
              />
            </div>
          ))}
        </div>
      </article>
      <h1 className="about-title">학력사항</h1>
      <article>
        <div className="content">
          <p className="font-bold">방송통신대학교</p>
          <p className="ml-2">- 컴퓨터과학과</p>
          <p className="ml-2">- 재학중 (2022-03 ~ )</p>
          <br />
          <p className="font-bold">CCA(Crested Crane Academy)</p>
          <p className="ml-2">- 잠비아 사립 고등학교</p>
          <p className="ml-2">- 졸업 2014.06 ~ 2015.05</p>
          <br />
          <p className="font-bold">의정부 고등학교</p>
          <p className="ml-2">- 중퇴 2012.03 ~ 2014.06</p>
        </div>
      </article>
      <h1 className="about-title">자격사항</h1>
      <article>
        <div className="content">
          <p className="font-bold">SQLD</p>
          <p className="ml-2">- 2021.12</p>
          <br />
          <p className="font-bold">정보처리기능사</p>
          <p className="ml-2">- 2021.05</p>
        </div>
      </article>
      <p>Last Updated 22/10/25</p>
    </>
  );
}
