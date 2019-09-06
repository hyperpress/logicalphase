import { css } from 'lit-element';

export const SharedStyles = css `

/* All screens smaller than 460px wide */

  :host {
    display:none;
  }

  /* Box model */
  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  /* Base Styles */

  body #ts-site {
    color: #202124;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--app-primary-text-color); 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 10px 0; }

  h1, h2, h3, h4, h5, h6, a {
    text-rendering: optimizeLegibility; }

  a { 
    background-color: transparent;
    color: var(--app-primary-color);
    text-decoration: none; 
    font-weight: 400;
    margin-bottom: 5px;
    border-bottom: 2px solid var(--app-primary-color);
    will-change: background-color
  }

  a:hover {
    outline: 0; 
    border-bottom: 0px;
    transition: background-color .3s ease-out;
    -webkit-transition: background-color .3s ease-out;
    -o-transition: background-color .3s ease-out;
  }

  p {
    margin: 16px 0;
    padding: 0;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary, img {
    display: block; }

  .entry .entry-content .wp-block-image {
    max-width: 100%;
  }

  section {
    margin: 24px 0 0 0; 
  }

  th {
    font-weight:500;
  }

  figure.img-right {
      float:none;
      margin: 0;
  }
  figure.img-right img {
    float:none;
    margin: auto auto;
    max-width: 80%;
    margin-top: 28px;
    margin-bottom: 28px;
  }

  img, embed, object, video {
    height: auto;
    /* Make sure images are scaled correctly. */
    max-width: 100%;
    /* Adhere to container width. */
    width: 100%
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }
  .delayed-fade-in {
    opacity: 0;
    animation: fadeIn 1.4s forwards;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Base Classes */

  .nav {
    display: inline; }

  .sticky {
    display: none; } 

  .hero-section p {
    margin: 0 0 25px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px; }

  .text-uppercase {
    border-top: 1px solid var(--app-primary-border-color);
    display: block;
    text-align: left; }

  .entry-content .alignfull {
    margin-left  : calc( -100vw / 2 + 100% / 2 );
    margin-right : calc( -100vw / 2 + 100% / 2 );
    max-width    : 100vw;
  }

  .entry-content .alignwide {
    margin-left  : -100px;
    margin-right : -100px;
    max-width    : 1024px;
  }

  .sidebar {
    background: var(--app-secondary-background-color); }

  .sidebar a, .sidebar a:hover {
    border-bottom: none;
    font-weight: normal;
    transition: background-color .3s ease-out;
    -webkit-transition: background-color .3s ease-out;
    -o-transition: background-color .3s ease-out;
  }

  .sidebar-selected {
    background: var(--app-primary-navigation-background);
    color: var(--app-primary-color);
    text-decoration:none; 
    border-bottom: none; }

  /* Classes - Section Layout */

  .ts-section {
      padding: 42px 0;
  }
  .ts-section--border {
      border-top: 1px solid #dadce0;
  }
  .ts-section--no-padding-bottom {
      padding-bottom: 0;
  }
  .ts-section--no-padding-top {
      padding-top: 0;
  }
  .ts-section__header, .ts-section__spacer {
      margin-bottom: 56px;
  }

  .background-servers {
    background: linear-gradient(#253238, #3A464B);
    background-color: #253238;
    color: var(--app-reverse-text-color); }

  .ts-max-width-standard {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px; }

  .ts-full-bleed-section, 
  #ts-social-footer.ts-full-bleed-section, 
  .ts-max-width-standard {
    margin-left: -10000px;
    margin-right: -10000px;
    padding-left: 10000px;
    padding-right: 10000px; }

  .background-grey {
    background: var(--app-secondary-background-color);
  }

  .ts-pad-bottom-12 {
    padding-bottom: 96px; }

  .ts-pad-top-6 {
    padding-top: 3px; }

  .ts-content-body {
    padding: 0px 34px 0 34px; }

  ul.right-side-nav {
    list-style: none;
    padding-left: 10px; }

  .nav li {
    border-bottom: 1px solid var(--app-primary-border-color);
    margin: 0;
    padding: 0; }

  li, li p {
    margin: 8px 0;
    padding: 0; 
    font-size: 16px; 
    font-weight: 300;
    letter-spacing: 0;
  }

  ul.body-checks {
    list-style: none;
    margin-left: 0px;
    padding: 0 4px 0 4px; 
  }

  ul.body-checks li {
    background-image: url('/images/icons/ts-check-purple-opt.svg');
    font-size: 17px;
    font-weight: 400;
    background-repeat: no-repeat;
    padding: 5px 0 0 36px;
    background-position: 0px 5px; }

  .ts-icon{
    fill: var(--app-primary-color);
  }

  .sidebar a, 
  .sidebar a:hover {
    border-bottom: none;
    font-weight: normal;
    transition: background-color .3s ease-out;
    -webkit-transition: background-color .3s ease-out;
    -o-transition: background-color .3s ease-out;
  }

  .sidebar-selected {
    background: var(--app-primary-navigation-background);
    color: var(--app-primary-color);
    text-decoration:none; 
    border-bottom: none; }

  .nav li h3 {
    font-size: 1.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 20px 0 16px;
    padding-bottom: 0; }

  .nav li a {
    color: var(--app-secondary-color);
    display: block;
    font-size: 0.95rem;
    line-height: 40px;
    margin: 0;
    overflow: hidden;
    padding: 0 16px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap; }

  .nav li a:hover{
    background: var(--app-secondary-background-color);
    color: var(--app-primary-color);
    text-decoration: none; 
    transition: background-color .3s ease-out;
    -webkit-transition: background-color .3s ease-out;
    -o-transition: background-color .3s ease-out;}

  .ts-hero .content-set {
    margin: 50px 0 40px 0;
    padding-bottom: 26px;
  }

  .ts-section--border {
    margin-top: 32px;
  }

  .ts-section__header, .ts-section__spacer {
    margin-bottom: 26px;
  }

  .ts-content-grid-image,
  .ts-content-grid-image-lower {
    padding-bottom: 64px;
    padding-top: 36px;
  }

  .ts-products-and-solutions 
  .card-cta-image 
  .ts-button__set {
    margin-bottom: 24px;
  }

  .ts-element-align {
    text-align: center;
  }
  .ts-element-display {
    display: block;
  }

  /* All screens larger than 460px */

  @media (min-width: 460px) {

    figure.img-right {
      float:right;
      margin-right: 60px;
    }

    figure.img-right img {
      max-width: 100%;
      margin-top: 28px;
      margin-bottom: 20px;
    }

    ul.body-checks {
      padding: 0 5px; 
    }

    .ts-hero .content-set {
      margin: 80px 14px 40px 14px;
    }

    .ts-grid-wrapper-standard {
      margin: auto auto;
      max-width: 1024px; }
    
    .ts-left {
      float: none;
      margin: 0;
      text-align: center;
    }
    .ts-right {
      float: right;
      margin: 24px 30px 5px; }

    .columns {
      display: flex;
      flex-wrap: wrap;
      flex: 1; }  

    section {
      margin: 62px 0 0 0; 
    }

    .ts-section {
      padding: 40px 0;
    }
    .ts-element-align {
      text-align: left;
    }
    .ts-element-display {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .article-image--full, .article-image--full-aspect {
      width: 100%;
    }
    .article-module {
      margin: 35px 0 0 0 !important;
    }
  }


`;