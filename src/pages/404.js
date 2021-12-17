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

        <iframe src="https://openprocessing.org/sketch/642529/embed/?plusEmbedHash=MjYyNzAwZDZjNmI2MTcwM2Y3ZmIxMDFlMGMzZGZiZjI4YTk2YjYzZjgwYmRlMGQxMmRlMjEyODY3MjBkZWE4YjZjMzRkOGM4ODM3NzdiNzljZTZiYjFjOWQ5MTJjMzI3NDllMDM5NDU5YjNhOTNkNTEzMDQ5NGVlMGZmNGRlOWNpeFFjU0Y5eE5vb3dtbWdtZGh3dzVFd0lYVTFDRHVLbGpKWDIydXY1UU4ySFA1eHZiTmp1a1VKZjM3dis3NHloUUlvRWY2Y1hURXZLN3ErWDduM3VlQT09&plusEmbedFullscreen=true" width="400" height="400"></iframe>

        <br /><br />
        <Link href="/">
          <button>
            Back to homepage
          </button>
        </Link>
        </div>
        </>
  )
}