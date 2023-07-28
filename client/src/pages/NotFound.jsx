import ErrorImage from  '../assets/404-not-found.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div className="not-found-error">
        <img className="not-found" src={ErrorImage} alt="" />
        <p>Sorry, the page you are looking for does not exist</p>
      </div>
      <div className="back-to-home">
        <Link to="/" className="btn btn-outline-primary redirect-to-home">
          Return to Home
        </Link>
      </div>

      {/* <div className='back-to-home'>
        <Link to="/" className="redirect-to-home">
          Return to Home
        </Link>
      </div> */}
      {/* <div>404</div>
      <div>Page Not Found</div> */}
    </>
  );
}
