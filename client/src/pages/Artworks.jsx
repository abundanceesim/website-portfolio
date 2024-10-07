import Artwork from '../components/Artwork'
import artworks from '../components/allArtworks'

export default function Artworks() {
  return (
    <>
      <div className="wrapper">
        {artworks.length > 0 ? (
          <div className="art-page mb-3">
            <div className="row mt-4">
              {artworks.map((art) => (
                <div className="col mb-3" key={art.id + "-" + art.description}>
                  <div className="art-container">
                    <Artwork artwork={art} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No art found.</h3>
        )}
      </div>
    </>
  );
}
