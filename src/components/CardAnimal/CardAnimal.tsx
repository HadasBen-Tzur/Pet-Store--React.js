import { Link } from "react-router-dom";
import classes from "./CardAnimal.module.scss";

export interface CardProps {
  id: string;
  firstName: string;
  birthYear: number;
  pictureUrl: string;
  animalType: string;
  gender: string;
}

export const CardAnimal: React.FC<CardProps> = ({
  id,
  firstName,
  birthYear,
  pictureUrl,
  animalType,
  gender,
}) => {
  return (
    <Link to={`/AnimalDetails/${id}`} className={classes.CardAnimal}>
      <div className={classes.CardPet}>
        <img src={pictureUrl} className={classes.imgCardPet} />
        <div className={classes.textCardPet}>
          <p>Name: {firstName}</p>
          <p>Age: {birthYear}</p>
          <p>Animal Type: {animalType}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
    </Link>
  );
};
