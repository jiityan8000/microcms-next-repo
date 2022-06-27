import Link from "next/link";
import styled from 'styled-components';
import media from "styled-media-query";

export default function Header() {

    const HeaderInner = styled.header`
        display: flex;
        align-items: center;
        height: 150px;
        ${media.lessThan("large")`
            height: 120px;
        `}
        ${media.lessThan("small")`
            height: 90px;
        `}

    `
    const Title = styled.h1`
        width: 1120px;
        margin: 0 auto;
        font-size: 50px;
        ${media.lessThan("large")`
            width: 90vw;
            font-size: 40px;
        `}
        ${media.lessThan("small")`
            font-size: 30px;
        `}
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
            ${media.lessThan("large")`
                width: 25px;
                height: 25px;
                margin-right: 9px;
            `}
            ${media.lessThan("small")`
                width: 20px;
                height: 20px;
                margin-right: 7px;
            `}
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
