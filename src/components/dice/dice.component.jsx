export function Dice({ id, imgSrc, onRoll }) {
  const _handleOnClick = () => onRoll(id);
  return (
    <div className="col">
      <img id={id} src={imgSrc} alt={imgSrc} onClick={_handleOnClick} />
    </div>
  );
}

// export default Dice;
