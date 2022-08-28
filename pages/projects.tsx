import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="category-header">
        <h1 className="category-title">포트폴리오</h1>
        <p className="category-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          condimentum elit. Aliquam eu massa facilisis,
        </p>
        <button className="btn-blue">hello</button>
      </div>
    </>
  );
}
