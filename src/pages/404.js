import { Link } from '../utils';

export default function FourZeroFour() {
  return (
        <>
        <div className="site-content">
        <h1>
          404
        </h1>
        <p>
          Sorry - we couldn't find this page.
        </p>
        <p>But don't worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">
          <button>
            Back to homepage
          </button>
        </Link>
        </div>
        </>
  )
}