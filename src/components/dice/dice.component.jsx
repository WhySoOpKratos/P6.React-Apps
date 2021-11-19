export function Dice({ id, imgSrc, onClick }) {
  const _handleOnClick = () => onClick(id);
  return (
    <div className="col">
      <img id={id} src={imgSrc} alt={imgSrc} onClick={_handleOnClick} />
    </div>
  );
}

// export default Dice;
