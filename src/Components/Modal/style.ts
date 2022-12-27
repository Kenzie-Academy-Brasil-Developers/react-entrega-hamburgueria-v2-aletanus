import styled from "styled-components"

export const StyledModalCart = styled.div`

    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--backgroud-opacity);
    transition: 1s;
    width: 100vw;
    height: 100vh;

   .container {
        width: 80%;
    }

    .container > header {
        border-radius: var(--radius-2) var(--radius-2) 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-primary);
        height: var(--unit-rem-56);
        padding: var(--unit-20);
    }

    header > .h2-title {
        color: var(--white);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
    }

    header > button {
        font-size: var(--unit-rem-24);
        font-weight: var(--font-weight-3);
        color: var(--white);
        font-family: var(--font-family-1);
        line-height: var(--font-line-height-1);
        transform: rotate(45deg);
    }

    .container > main {
        border-radius: 0 0 var(--radius-2) var(--radius-2);
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: var(--white);
        padding: var(--unit-20);
    }

    .container > main > span > .no-product-title {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-18);
        font-weight: var(--font-weight-7);
        line-height: var(--font-line-height-1);
    }

    .container > main > span > .no-product-sub-title {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);
    }

    .container > main > ul {
        display: flex;
        flex-direction: column;
        gap: var(--unit-rem-16);
    }

    .container > main > ul > li {
        display: flex;
        justify-content: space-between;
        height: 80px;
    }

    .container > main > ul > li > figure {
        background-color: var(--grey-20);
        border-radius: var(--radius-2);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;
    }

    .container > main > ul > li > figure > img {
        height: 80%;
    }

    .container > main > ul > li > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
    }

    .container > main > ul > li > div > div {
        display: flex;
    }

    .container > main > ul > li > div > div > button { 
        background-color: var(--grey-20);
        border: solid 2px var(--grey-20);
        color: var(--color-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        width : var(--unit-rem-32);
    }

    .container > main > ul > li > div > div > p {
        background-color: var(--white);
        border: solid 2px var(--grey-20);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-12);
        font-weight: var(--font-weight-4);
        line-height: var(--font-line-height-1);
        width: var(--unit-rem-32);
    }

    .container > main > ul > li > .MuiSvgIcon-root {
       color: var(--grey-20);
    }

    .container > main > footer {
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .container > main > footer > .div-line {
        background-color: var(--grey-20);
        margin: var(--unit-20) 0;
        height: 1px;
        width: 100%;
    }

    .container > main > footer > .totalPrice  {
        display: flex;
        justify-content: space-between;
    }

    .container > main > footer > .totalPrice > .total  {
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-6);
        line-height: var(--font-line-height-1);
    }

    .container > main > footer > .totalPrice > .price  {
        color: var(--grey-50);
        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-6);
        line-height: var(--font-line-height-1);
    }

    /* @media (min-width: 768px) {  
        div {
            width: 40%;
        }
    }

    @media (min-width: 1024px) {
        div {
            width: 30%;
        }
    }

    @media (min-width: 1440px){
        div {
            width: 25%;
        }
    }

    @media (min-width: 2200px){
        div {
            width: 20%;
        }
    }  */
    
`