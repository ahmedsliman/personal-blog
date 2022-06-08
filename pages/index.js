import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

      <h1 align="center">Hi I'm Ahmed Soliman 👋</h1>
        <p align="center">
            <a href="https://twitter.com/ahmeds_link">
              <img src="https://img.shields.io/badge/twitter-%231FA1F1?style=flat&logo=twitter&logoColor=white"/>
            </a>
          </p>

          <img src="https://raw.githubusercontent.com/mohamedabusrea/mohamedabusrea/master/profile-img.png" align="right" width="25%"/>

        <p>
        I'm a software developer who is passionate about creating technology to elevate people. Some technologies I enjoy working with include PHP, MYSQL and JavasSript.
        </p>

        <h4>- 🔭 I'm a software developer in Belin, Germany</h4>
        <h4>- 💬 Ask me about **PHP and Backend**</h4>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}
