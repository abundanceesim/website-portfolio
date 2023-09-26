import error404 from '../assets/error404.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';
/*Image downloaded from: https://www.pngegg.com/ */
 
export default function NotFound() {
  return (
    <>
      <div className="container page-not-found">
        <div className="" style={{ textAlign: "center" }}>
          <div className='not-found-img'>
            <img style={{width: "85%"}} src={error404} alt="error-404" />
            <div>
              <h4>Sorry, the page you are looking for does not exist</h4>
            </div>
            <div className="back-to-home mt-4">
              <Link to="/" className="btn btn-outline-primary redirect-to-home">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
