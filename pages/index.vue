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
        Using the spaced time repetition techniques, you can
        <mark>permanently</mark> store information in your brain, instead of the
        cloud.
      </p>

      <no-ssr>
        <typed-examples />
      </no-ssr>

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
        <div>
          <a target="_blank" rel="noopener" href="https://ever.chat/spacedtime"
            >Ever.chat/spacedtime
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener"
            href="https://www.twitter.com/uptownhr"
            >Twitter (uptownhr)
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    TypedExamples: () => import('@/components/TypedExamples.vue')
  }
};
</script>
