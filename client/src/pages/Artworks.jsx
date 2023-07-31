import Artwork from '../components/Artwork'

export default function Artworks() {

  const artworks = [
    {
      id: 1,
      src: "",
      description: "FIrst artwork",
    },
    {
      id: 2,
      src: "sdjskdj",
      description: "Secondddd",
    },
    {
      id: 3,
      src: "lol",
      description: "third lol",
    },
    {
      id: 4,
      src: "sduissd",
      description: "4th",
    },
  ];

  console.log(artworks);
  return (
    <>
      <div className="art-container">
        {artworks.map((art) => (
          <div className="row mt-4">
            <Artwork artwork={art} key={art.id} />
          </div>
        ))}
      </div>
    </>
  );
}
