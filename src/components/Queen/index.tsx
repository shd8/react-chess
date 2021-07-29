import { FC } from "react";
import "../../assets/global.scss";
import "./style.scss";
import { ReactComponent as Queen } from "../../assets/queen.svg";

type QueenProps = {
  player: string;
};

const Piece: FC<QueenProps> = ({ player }) => {
  return (
    <>
      <Queen className={`${player} queen`} id="queen" />
    </>
  );
};

export default Piece;
