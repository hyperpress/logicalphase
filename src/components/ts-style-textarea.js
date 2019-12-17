import { css } from 'lit-element';

export const TsTextAreaStyle = css`
  ts-textarea {
    display: inline-block;
    margin: 5px 0px 5px 0px;
  }
  ts-textarea > textarea::-webkit-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea::-moz-placeholder {
    color: transparent;
  }
  ts-textarea > textarea:-ms-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea::-ms-input-placeholder {
    color: transparent;
  }
  ts-textarea > textarea {
    font-size: 1em;
    font-weight: 300;
    color: var(--app-secondary-color);
    border: none;
    padding: 0px 0px;
    height: 14px;
    width: 100%;
    outline: none;
  }
  ts-textarea > textarea:invalid {
    /* reset the default style in FF */
    box-shadow: none;
  }
  ts-textarea > ts-md-decorator {
    display: block;
    height: 1px;
    width: 100%;
    margin: auto;
    border-top: 1px solid #ccc;
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ts-textarea ts-underline {
    display: block;
    height: 2px;
    width: 100%;
    margin: auto;
    background-color: var(--app-accent-color);
    position: absolute;
    top: -1px;
    left: 0;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
  }
  /* textarea label */
  ts-textarea > ts-md-decorator > label {
    display: block;
    pointer-events: none;
    opacity: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
    will-change: transform;
    -webkit-transform: translate3d(0px, -1.9em, 0px);
    transform: translate3d(0px, -1.9em, 0px);
  }
  /* Error message */
  ts-textarea > ts-md-decorator::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 0.65em;
    color: #dd2c00;
    content: attr(error-message);
    display: none;
    white-space: nowrap;
  }
  ts-textarea > textarea:focus + ts-md-decorator > ts-underline {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Label: valid state */
  ts-textarea > textarea:focus + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-textarea > textarea:optional:not(:placeholder-shown) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  _:-ms-lang(x),
  ts-textarea > textarea + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  ts-textarea > textarea:optional:-moz-ui-valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
  /* Underline */
  ts-textarea
    > textarea:not(:focus):not(:placeholder-shown):invalid
    + ts-md-decorator
    > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator > ts-underline {
    background-color: #dd2c00;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
  }
  /* Error message */
  ts-textarea > textarea:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator::after {
    display: block;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator::after {
    display: block;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator::after {
    display: block;
  }
  /* Error label */
  ts-textarea > textarea:not(:focus):not(:placeholder-shown):invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-textarea > textarea:not(:focus):-moz-ui-invalid:invalid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  ts-textarea > textarea[aria-invalid='true']:not(:valid) + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
    color: #dd2c00;
  }
  /* Valid label */
  ts-textarea > textarea:not(:focus):required:valid + ts-md-decorator > label {
    -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
    opacity: 1;
  }
`;
