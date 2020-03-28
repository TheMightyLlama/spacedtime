<template>
  <div>
    <header>
      <nav>
        <a href="/">
          <img alt="Logo" src="/spacedtime-logo.png" height="70" />
        </a>
        <ul>
          <li>Home</li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCH1m4a3Kud_lx3eRlaZts5Q"
            >Youtube</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/uptownhr/spacedtime">Github</a>
          </li>
        </ul>
      </nav>
      <h1>Remember the important things in your life.</h1>
      <p>
        Using time spaced repition techniques, you can
        <mark>permemantly</mark> store information in your brain, instead of the cloud.
      </p>
      <br />
      <p>
        <a href="https://github.com/uptownhr/spacedtime">
          <b>Check it out on Github</b>
        </a>
      </p>

      <code style="margin-top: 3rem">
        1. yarn global add spacedtime
        <br />2. spacedtime add "What is my anniversary" "2010-10-10"
        <br />3. spacedtime recall //this will now pull a question for you to remember
        <br />
      </code>
    </header>

    <footer>
      <hr />
      <p>
        <a target="_blank" href="https://www.twitter.com/uptownhr">twitter (uptownhr)</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'SpacedTime - Spaced Time Repetition App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Use the spaced time memory technique to permenantly remember the important things in your life.'
        }
      ]
    };
  }
};
</script>