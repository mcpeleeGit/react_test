import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Layout from "../../components/layout";
import Head from 'next/head';
import Date from "../../components/date";
import { MDXRemote } from 'next-mdx-remote'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    console.log(postData.mdxSource)
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                { postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}

            </article>
        </Layout>
    );
}
