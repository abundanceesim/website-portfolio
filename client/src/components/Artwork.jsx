
export default function Artwork({artwork}) {
  return (
    <div className="img-wrapper">
      <img className="artwork" src={artwork.src} alt="" />
    </div>
  );
}
