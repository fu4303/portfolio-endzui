import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center">
      <h2 className="f2 f1-m f-headline-l mv2 mv3-ns ml0 mh0">
        hello, I'm Andrzej
      </h2>
      <div className="measure pa0">
        <h2 className="ma0 f4 f3-ns mb4-l mb3-m mb2">
          I make music, sounds & JavaScript.
        </h2>
        <hr />
        <p className="mv1">
          code I write is open source on
          {' '}
          <a
            target="_blank"
            href="https://github.com/endziu"
            className="link blue dim no-underline"
          >
            github
          </a>
          {'.'}
        </p>
        <p className="mv1">
          you can follow me on twitter
          {' '}
          <a
            target="_blank"
            href="https://twitter.com/1000machines"
            className="link blue dim no-underline"
          >
            @1000machines
          </a>
          {'. '}
        </p>
        <p className="mv1">
          I post music online as
          {' '}
          <a
            target="_blank"
            href="https://soundcloud.com/abstract-machines"
            className="link blue dim no-underline"
          >
            @abstract-machines
          </a>
        </p>
        <p className="mv1">
          and I also keep some music over
          {' '}
          <a href="/music" className="link blue dim no-underline">
            here
          </a>
          {'. '}
        </p>
        <div className="measure-narrow">
          <hr />
          <p className="mv1">
            feel free to send me an
            {' '}
            <a
              href="mailto:koper.andzrej@gmail.com"
              className="link blue dim no-underline"
            >
              email
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
