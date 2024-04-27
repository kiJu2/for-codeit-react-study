export default function Card({
  title,
  description,
  thumbnail,
  onClick,
  onClickDelete,
}) {

  return (
    <div
      className="card"
      onClick={() => onClick(description)}
      style={{
        cursor: "pointer",
      }}
    >
      <img className="card-image" src={thumbnail} alt="랜덤한 이미지" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}
