import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../petDB.json";
import { useLocalStorage } from "../../UseLocalStorage";
import { CardProps } from "../CardAnimal/CardAnimal";
import Navbar from "../Navbar/Navbar";
import classes from "./AnimalDtails.module.scss";

export const AnimalDetails: React.FC = () => {
  const { id } = useParams();
  const pet = data.find((petId) => {
    return petId.id === id;
  });
  if (!pet) {
    return <h1>not found</h1>;
  }
  const animal = data.find((animal) => animal.id == id) as CardProps;
  const [storedPets, setPets] = useLocalStorage<CardProps[]>("pets", []);
  useEffect(() => {
    setPets((prev) => [...prev, animal]);
  }, []);
  return (
    <div>
      <Navbar />
      <div className={classes.AnimalDetails}>
        <img src={pet.pictureUrl} className={classes.imgDetails} />
        <p className={classes.textPetDetails}>
          {pet.animalType}: {pet.firstName}, בן {2022 - pet.birthYear}
          {pet.gender}
        </p>
        <p className={classes.textDetails}>{pet.description}</p>
        <Link to={`/AdoptionForm/${id}`} className={classes.Adopt}>
          Adopt
        </Link>
      </div>
    </div>
  );
};
