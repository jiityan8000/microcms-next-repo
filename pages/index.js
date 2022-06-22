import Link from "next/link";
import { client } from "../libs/client";
import styled from 'styled-components';

export default function Home({ blog }) {

  const ArticleList = styled.ul`
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    padding: 40px 0;
    list-style: none;
  `

  const ArticleItem = styled.li`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid #f2f2f2;
  `

  return (
    <div>
      <ArticleList>
        {blog.map((blog) => (
          <ArticleItem key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </ArticleItem>
        ))}
      </ArticleList>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};