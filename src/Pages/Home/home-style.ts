import styled from "styled-components"

export const StyledHome = styled.main`

    header {
        background-color: var(--grey-20);
    }

    header > .container {
        display: flex;
        flex-direction: column;
        gap: var(--unit-12);
        padding: var(--unit-24) var(--unit-20);
    }

    header > .container > div {
        display: flex;
        justify-content: space-between;

        align-items: center;
        height: 40px;
    }

    header > .container > div > figure > img{
        width: 150px;
    }

    header > .container > div > nav {
        display: flex;
        gap: var(--unit-16);
    }

    header > .container > div > nav > div {
        display: flex;
    }

    header > .container > div > nav > div > button > .shoppingIcon {
        color: var(--grey-50);
        transition: 0.4s;
    }

    header > .container > div > nav > div > button > .shoppingIcon:hover {
       color: var(--grey-50-opacity);
        transition: 0.4s;
    }

    header > .container > div > nav > div > p {
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 52px;

        background-color: var(--color-primary);
        border-radius: var(--radius-1);
        color: var(--white);

        display: flex;
        justify-content: center;

        font-family: var(--font-family-1);
        font-size: var(--unit-rem-14);
        font-weight: var(--font-weight-9);
        line-height: var(--font-line-height-1);

        width: fit-content;
        height: var(--unit-20);
        padding: 0 4px;
    }

    header > .container > div > nav > button > .exitIcon {
        color: var(--grey-50);
        transition: 0.4s;
    }

    header > .container > div > nav > button > .exitIcon:hover {
        color: var(--grey-50-opacity);
        transition: 0.4s;
    }

    main {
        display: flex;
        justify-content: center;
        padding: var(--unit-24) var(--unit-20);
    }

    main > .products-container {
        display: flex;
        flex-direction: column;
        gap: var(--unit-20)
    }

    main > .products-container > .product {
        border: solid 3px var(--grey-50);
        border-radius: var(--radius-2);
        overflow: hidden;
        transition:0.8s;
    }

    main > .products-container > .product:hover {
        transition:0.8s;
        border: solid 3px var(--color-primary);
        box-shadow: 9px 9px 23px -6px rgba(0,0,0,0.5);
        -webkit-box-shadow: 9px 9px 23px -6px rgba(0,0,0,0.5);
        -moz-box-shadow: 9px 9px 23px -6px rgba(0,0,0,0.5);
    }

    main > .products-container > .product > figure {
        background-color: var(--grey-20);
        display: flex;
        justify-content: center;
        height: 177px;
    }

    main > .products-container > .product > div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: var(--unit-14);
        margin: var(--unit-14) var(--unit-14);
    }

    main > .products-container > .product > div > .green-button-default {
        height: var(--unit-40);
        width: fit-content;
        margin-bottom: var(--unit-4);
    }

    @media (min-width: 375px) {  

        main > ul > .product {
            height: 355px;
            width: 290px;
        }

    }

    @media (min-width: 640px) {  

        main > .products-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        main > .products-container > .product {
            margin: 1.5%;
        }

    }

    @media (min-width: 1300px) {  

        main > .products-container {
         max-width: 1000px
        }
    }

`