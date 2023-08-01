import Artwork from '../components/Artwork'
import flame from '../assets/art/flame.png'
import figureDrawing from "../assets/art/figure-drawing.png"
import greyWoman from '../assets/art/grey-woman.png'
import glassfish from '../assets/art/glassfish.png'

export default function Artworks() {

  const artworks = [
    {
      id: 1,
      src: figureDrawing,
      description: "figure-drawing-img",
    },
    {
      id: 2,
      src: flame,
      description: "matchstick-with-flame",
    },
    {
      id: 3,
      src: greyWoman,
      description: "woman-in-greyscale",
    },
    {
      id: 4,
      src: glassfish,
      description: "glassfish-in-glass",
    },
    {
      id: 5,
      src: glassfish,
      description: "glassfish-in-glass",
    },
    {
      id: 6,
      src: glassfish,
      description: "glassfish-in-glass",
    },

  ];

  // console.log(artworks);
  return (
    <>
      {artworks.length > 0 ? (
      <div className="art-page">
        <div className="row mt-4">
          {artworks.map((art) => (
            <div className="col-4 mb-3">
              <Artwork artwork={art} key={art.id} />
            </div>
          ))}
        </div>
      </div>) : (
        <h3>No art found.</h3>
      )}
    </>
  );
}
