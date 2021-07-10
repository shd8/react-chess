import { FC } from "react";
import "../../assets/global.scss";
import { ReactComponent as Rook } from "../../assets/rook.svg";

type RookProps = {
  player: string;
};

const Piece: FC<RookProps> = ({ player }) => {
  return (
    <>
      <Rook className={player} />
    </>
  );
};

export default Piece;
