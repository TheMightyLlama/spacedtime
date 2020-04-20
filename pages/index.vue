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

      <client-only>
        <typed-examples />
      </client-only>

      <p>
        <a href="https://app.spacedtime.com/onboarding/questions">
          <b>Start remembering now</b>
        </a>
      </p>
    </header>

    <main>
      <hr />
      <section>
        <header>
          <h2>Also available in the command line</h2>
          <p>
            For people that spend most of their days in the command line,
            spacedtime is available as an NPM package.
          </p>
        </header>

        <code>
          1. yarn global add spacedtime
          <br />2. spacedtime add "What is my anniversary" "2010-10-10" <br />3.
          spacedtime recall //this will now pull a question for you to remember
        </code>
      </section>
    </main>

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

<script>
export default {
  components: {
    TypedExamples: () => import('@/components/TypedExamples.vue'),
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  header nav {
    margin-bottom: 3rem;
  }

  footer nav {
    flex-direction: column;
    text-align: center;
  }

  footer nav * + * {
    margin-top: 2rem;
  }
}
</style>
