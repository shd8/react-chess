import { FC } from "react";
import "../../assets/global.scss";
import { ReactComponent as Pawn } from "../../assets/pawn.svg";

type PawnProps = {
  player: string;
};

const Piece: FC<PawnProps> = ({ player }) => {
  return (
    <>
      <Pawn className={player} />
    </>
  );
};

export default Piece;
