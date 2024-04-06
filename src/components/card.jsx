export default function Card({ title, description, thumbnail }) {
  return (
    <div className="card">
      <img className="card-image" src={thumbnail} alt="랜덤한 이미지" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
