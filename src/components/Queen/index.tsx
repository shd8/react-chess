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
      <Queen className={`${player} queen`} />
    </>
  );
};

export default Piece;
