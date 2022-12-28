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
    z-index: 2;
    transition: 1s;


    animation: fadeIn 0.8s;
    -webkit-animation: fadeIn 0.8s;
    -moz-animation: fadeIn 0.8s;
    -o-animation: fadeIn 0.8s;
    -ms-animation: fadeIn 0.8s;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-moz-keyframes fadeIn {    
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIn { 
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-ms-keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }


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
        max-height: 300px;
        overflow: auto;
    }

    .container > main > ul::-webkit-scrollbar {
    width: 0 !important
    }

    .container > main > ul > li {
        display: flex;
        justify-content: space-between;
    }

    .container > main > ul > li > div {
        display: flex;
    }

    .container > main > ul > li > div > figure {
        background-color: var(--grey-20);
        border-radius: var(--radius-2);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;
    }

    .container > main > ul > li > div > figure > img {
        height: 80%;
    }

    .container > main > ul > li > div > .div-buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 10px;
    }

    .container > main > ul > li > div > .div-buttons > div {
        display: flex;
    }

    .container > main > ul > li > div > .div-buttons > div > button { 
        background-color: var(--grey-20);
        border: solid 2px var(--grey-20);
        color: var(--color-secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        width : var(--unit-rem-32);
        transition: 0.3s;
    }

    .container > main > ul > li > div > .div-buttons > div > button:hover {
        background-color: var(--grey-50-opacity);
        border: solid 2px var(--grey-50-opacity);
        transition: 0.3s;
    }

    .container > main > ul > li > div > .div-buttons > div > p {
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
        transition: 0.6s;
    }

    .container > main > ul > li > .MuiSvgIcon-root:hover {
        color: var(--grey-50);
        transition: 0.6s;
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

    .container > main > footer > .gray-button-default {
        margin: 16px 0 4px;
    }

    @media (min-width: 395px) {  
 
        .container {
            width: 70%;
        }
    }

    @media (min-width: 500px) {  
 
        .container > main > ul > li > div > .div-buttons {
            margin-left: 40px;
        }
    }

    @media (min-width: 550px) {  
 
        .container {
            width: 65%;
        }
    }

    @media (min-width: 720px) {  
 
        .container {
            width: 60%;
        }

        .container > main > ul > li > div > .div-buttons {
            margin-left: 50px;
        }
    }

    @media (min-width: 1024px) {
  
        .container {
            max-width: 500px;
        }

        .container > main > ul > li > div > .div-buttons {
            margin-left: 80px;
        }

    }
    
`