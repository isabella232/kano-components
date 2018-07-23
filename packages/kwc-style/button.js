import { html } from './template.js';

export const button = html`
<style>
    .btn {
        border: none;
        border-radius: 40px;
        color: var(--kwc-button-color, white);
        cursor: pointer;
        display: inline-block;
        font-family: var(--kwc-button-font, var(--font-body));
        font-weight: bold;
        min-width: 100px;
        outline: none;
        overflow: hidden;
        padding: 0 22px;
        text-align: center;
        text-transform: uppercase;
        transition-property: background-color, border-color, color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        white-space: nowrap;

        background: var(--kwc-button-background, var(--color-kano-orange));

        font-size: 14px;
        height: 40px;
        line-height: 40px;
    }
    .btn:hover,
    .btn:focus {
        color: var(--kwc-button-color-hover, white);
        background-color: var(--kwc-button-background-hover, var(--color-flame));
    }
    .btn.small {
        font-size: 12px;
        height: 32px;
        line-height: 32px;
    }
    .btn.square {
        border-radius: 3px;
    }
</style>
`;
