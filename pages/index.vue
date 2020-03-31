<template>
  <div>
    <header>
      <nav>
        <a href="/">
          <picture>
            <source srcset="/spacedtime-logo.webp" type="image/webp" />
            <source srcset="/spacedtime-logo.png" type="image/png" />
            <img alt="Logo" src="/spacedtime-logo.png" height="70" />
          </picture>
        </a>
        <ul>
          <li>Home</li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/channel/UCH1m4a3Kud_lx3eRlaZts5Q"
              >Youtube</a
            >
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/uptownhr/spacedtime"
              >Github</a
            >
          </li>
        </ul>
      </nav>
      <h1>Remember the important things in your life.</h1>
      <p>
        Using time spaced repetition techniques, you can
        <mark>permanently</mark> store information in your brain, instead of the
        cloud.
      </p>

      <img style="width: 640px;" src="/spacedtime-terminal.gif" />

      <br />
      <p>
        <a href="https://github.com/uptownhr/spacedtime">
          <b>Check it out on Github</b>
        </a>
      </p>

      <code style="margin-top: 3rem">
        1. yarn global add spacedtime
        <br />2. spacedtime add "What is my anniversary" "2010-10-10" <br />3.
        spacedtime recall //this will now pull a question for you to remember
        <br />
      </code>
    </header>

    <footer>
      <hr />
      <nav style="margin-bottom: 0;">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.everchat.com/uptownhr"
          >Chat with me</a
        >

        <a
          style="display: block;"
          href="https://www.producthunt.com/posts/spacedtime?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-spacedtime"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=190071&theme=light"
            alt="SpacedTime - Remember the important things in your life | Product Hunt Embed"
            style="width: 250px; height: 54px;"
            width="250px"
            height="54px"
        /></a>
      </nav>
    </footer>
  </div>
</template>
