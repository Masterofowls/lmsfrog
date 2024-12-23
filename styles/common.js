// styles/common.js
import css from 'styled-jsx/css';

export const commonStyles = css.global`
    body {
        font-family: 'Arial, sans-serif';
        background-color: #f0f0f0;
        color: #333;
        padding-top: 5rem; /* Adjust for fixed header */
        padding-bottom: 5rem; /* Adjust for fixed footer */
        transition: background-color 0.3s, color 0.3s;
    }
    .page-container {
        background-color: #f7f7f7;
        padding: 2rem;
        min-height: calc(100vh - 10rem); /* Adjust for header and footer */
    }
    .title-block {
        text-align: center;
        margin-bottom: 2rem;
        font-family: 'Arial, sans-serif';
    }
    .title-block h1 {
        font-size: 2.5rem;
        color: #2ecc71;
    }
`;
