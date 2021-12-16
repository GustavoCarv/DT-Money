import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB2;
        --shape: #FFFFFF;
    }

    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    html{ 
        @media (min-width: 1024px) {
            font-size: 93.75%;
        }

        @media (min-width: 720px) {
            font-size: 87.5%;
        } 
    }   
    

    body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6, strong { 
        font-weight: 600;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

`