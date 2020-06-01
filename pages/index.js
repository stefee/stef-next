import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stef's Website</title>
      </Head>

      <h1>Stef's Website</h1>

      <main>
        <p>Welcome!</p>
        <h2 id="writing">Writing</h2>
        <p><a href="https://medium.com/condenastengineering/speedy-builds-with-docker-layer-caching-7ed590ac2fd1">Speedy builds with Docker Layer Caching</a></p>
        <h2 id="talks">Talks</h2>
        <p><a href="https://www.youtube.com/watch?v=AwfXypdYcv0">5 Things I Learned About Software Engineering From Watching Art Restoration Videos</a></p>
        <h2 id="software-projects">Software Projects</h2>
        <h3 id="renditions">renditions</h3>
        <p>JavaScript modules for implementing W3C-standard responsive images.</p>
        <p>Packages:</p>
        <ul>
          <li><a href="https://github.com/renditions/get-sizes">@renditions/get-sizes</a></li>
          <li><a href="https://github.com/renditions/get-srcset">@renditions/get-srcset</a></li>
          <li><a href="https://github.com/renditions/react-img">@renditions/react-img</a></li>
        </ul>
        <p><a href="https://renditions.dev/project">Project board</a></p>
        <h3 id="letter-press">letter-press</h3>
        <p>Print GitHub Markdown to PDF using headless Chrome. 💌</p>
        <p><a href="https://www.npmjs.com/package/letter-press">Package</a></p>
        <p><a href="https://github.com/stefee/letter-press">Source</a></p>
        <h3 id="outerspace">outerspace</h3>
        <p>Preserve whitespace surrounding expressions in a template string.</p>
        <p><a href="https://www.npmjs.com/package/outerspace">Package</a></p>
        <p><a href="https://github.com/stefee/outerspace">Source</a></p>
        <h3 id="content-migrations-at-conde-nast">content migrations at Condé Nast</h3>
        <p>Flyway is a system for migrating content from an existing CMS into Condé Nast's CMS. Content can be defined as articles, authors, categories, galleries, videos and images.</p>
        <p>This system was used to migrate 20 Vogue and GQ websites managed by teams in 10 countries onto a single global web platform managed in London.</p>
        <p><a href="https://stefee.github.io/flyway-manual/flyway.html">Flyway Documentation (mirror)</a></p>
        <h3 id="design-systems-at-conde-nast">design systems at Condé Nast</h3>
        <p>&ldquo;A unified, scalable, digital design language for Condé Nast brands.&rdquo;</p>
        <p>Atelier is the React <a href="https://github.com/styled-components/styled-components">styled-components</a> library that feeds Condé Nast's international brand sites, and a living and evolving style guide to be used internally at Condé Nast HQ and by 3rd parties and brand licensees.</p>
        <p><a href="http://atelier.prod.cni.digital/">Atelier Storybook</a></p>
        <h3 id="real-time-shock-wave-simulation">real-time shock wave simulation</h3>
        <p>My research project in the final year of my degree was around simulating shock waves in real time using the Unity game engine. This was largely considered to be a failure.</p>
        <h3 id="web-marketing-sites-at-feral-interactive">web marketing sites at Feral Interactive</h3>
        <ul>
          <li><a href="https://www.feralinteractive.com/en/games/lifeisstrange/">Life Is Strange for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/games/alienisolation/">Alien: Isolation for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/linux-games/f12015/">F1 2015 for Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/games/dirtrally/">DiRT Rally for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/games/madmax/">Mad Max for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/games/companyofheroes2/">Company of Heroes 2 for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/games/gridautosport/">GRID Autosport for Mac and Linux</a></li>
          <li><a href="https://www.feralinteractive.com/en/mac-games/medieval2/">Medieval II: Total War for Mac</a></li>
        </ul>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        html {
          background-color: #ffc0c0;
        }

        body {
          padding: 1rem 1rem 4rem;
          margin: 0 auto;
          max-width: 42rem;
        }

        a,
        a:link,
        a:visited {
          color: inherit;
          text-decoration: none;
          background-color: #ffaaaa;
          box-shadow: 0 -0.1rem #ffaaaa, 0 0.2rem #000;
        }

        a:focus {
          outline-width: 4px;
          outline-style: solid;
          background-color: #ffdd00;
          box-shadow: none;
        }

        p {
          line-height: 1.6;
        }

        li {
          margin-top: 0.9em;
          margin-bottom: 0.9em;
        }

        h2 {
          margin-top: 2em;
          margin-bottom: 1em;
        }

        h3 {
          margin-top: 2em;
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  )
}
