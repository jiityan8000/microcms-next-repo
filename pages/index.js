import Link from "next/link";
import { client } from "../libs/client";
import styled from 'styled-components';
import Header from "../src/component/Header";
import Footer from "../src/component/Footer";

export default function Home({ blog }) {

  const Main = styled.main`
    flex: 1;
    width: 1120px;
    margin: 0 auto 60px;
  `

  const ArticleList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  `

  const ArticleItem = styled.li`
    &:not(:nth-last-child(-n+2)){
      margin-bottom: 50px;
    }
  `

  const ArticleItemInner = styled.span`
    display: block;
    width: 520px;
    border: 2px solid #fff;
    border-radius: 30px;
    box-sizing: content-box;
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, .16));
    transition: 0.3s;
    &:hover {
      filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
      transform: scale(0.98);
    }
  `

  const ArticleItemName = styled.span`
    display: flex;
    height: 75px;
    padding: 10px 30px;
    font-size: 24px;
    color: #E6E6E6;
  `

  return (
    <div>
      <Header />
      <Main>
        <ArticleList>
          {blog.map((blog) => (
            <ArticleItem key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>
                  <ArticleItemInner><ArticleItemName>{blog.title}</ArticleItemName></ArticleItemInner>
                </a>
              </Link>
            </ArticleItem>
          ))}
        </ArticleList>
      </Main>
      <Footer />
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