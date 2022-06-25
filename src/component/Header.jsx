import Link from "next/link";
import styled from 'styled-components';

export default function Header() {

    const HeaderInner = styled.header`
        display: flex;
        align-items: center;
        height: 150px;
    `
    const Title = styled.h1`
        width: 1120px;
        margin: 0 auto;
        font-size: 50px;
    `

    const TitleLink = styled.span`
        color: #E6E6E6;
        &::before {
            content: "";
            display: inline-block;
            background: #fff;
            width: 36px;
            height: 36px;
            margin-right: 15px;
            border-radius: 50%;
        }
    `


    return (
        <HeaderInner>
            <Title>
                <Link href="/">
                    <a><TitleLink>Hiroki Nagai</TitleLink></a>
                </Link>
            </Title>
        </HeaderInner>
    );
}
