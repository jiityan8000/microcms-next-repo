import styled from 'styled-components';
import media from "styled-media-query";

export default function Footer() {

    const FooterInner = styled.footer`
        background: #191E2E;
        height: 100px;
        ${media.lessThan("medium")`
            height: 70px;
        `}
        ${media.lessThan("small")`
            height: 50px;
        `}
    `

    return (
        <FooterInner />
    );
}
