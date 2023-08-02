import Artwork from '../components/Artwork'
import flame from '../assets/art/flame.png'
import figureDrawing from "../assets/art/figure-drawing.png"
import greyWoman from '../assets/art/grey-woman.png'
import glassfish from '../assets/art/glassfish.png'
import kakashi from '../assets/art/kakashi-sensei.png'
import scorpion from '../assets/art/scorpion-mk11.png'

export default function Artworks() {

  const artworks = [
    {
      id: 1,
      src: kakashi,
      description: "kakashi-sensei-img",
    },
    {
      id: 2,
      src: figureDrawing,
      description: "figure-drawing-img",
    },
    {
      id: 3,
      src: scorpion,
      description: "scorpion-mortal-kombat-11",
    },
    {
      id: 4,
      src: flame,
      description: "matchstick-with-flame",
    },
    {
      id: 5,
      src: greyWoman,
      description: "woman-in-greyscale",
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
            <div className="col mb-3">
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
