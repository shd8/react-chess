import { FC } from "react";
import "../../assets/global.scss";
import "./style.scss";
import { ReactComponent as King } from "../../assets/king.svg";

type KingProps = {
  player: string;
};

const Piece: FC<KingProps> = ({ player }) => {
  return (
    <>
      <King className={`${player} king`} />
    </>
  );
};

export default Piece;
