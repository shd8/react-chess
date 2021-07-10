import { FC } from "react";
import "../../assets/global.scss";
import { ReactComponent as King } from "../../assets/king.svg";

type KingProps = {
  player: string;
};

const Piece: FC<KingProps> = ({ player }) => {
  return (
    <>
      <King className={player} />
    </>
  );
};

export default Piece;
