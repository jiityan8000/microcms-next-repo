import Link from "next/link";
import { client } from "../libs/client";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #262E45;
  }
  a {
    color: #E6E6E6;
  }
`
export default function Home({ blog }) {

  const ArticleList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 940px;
    margin: 0 auto;
    padding: 40px 20px;
    list-style: none;
  `

  const ArticleItem = styled.li`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid #f2f2f2;
  `

  const ArticleItemLink = styled.a`
    display: block;
    width: 520px;
    border: 2px solid #fff;
    border-radius: 30px;
    box-sizing: content-box;
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, .16));
    transition: 0.3s;
  `

  const ArticleItemName = styled.span`
    display: flex;
    align-items: center;
    height: 75px;
    padding: 0 30px;
    font-size: 24px;
  `

  return (
    <div>

      <ArticleList>
        {blog.map((blog) => (
          <ArticleItem key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <ArticleItemLink><ArticleItemName>{blog.title}</ArticleItemName></ArticleItemLink>
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