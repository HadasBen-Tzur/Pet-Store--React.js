import classes from "./Home.module.scss";
import Navbar from "../Navbar/Navbar";
import Logo from "./Groupp.png";
import { useLocalStorage } from "../../UseLocalStorage";
import { useState } from "react";
import { CardAnimal, CardProps } from "../CardAnimal/CardAnimal";
import { removeDuplicates } from "../../utils/array.utils";

export const Home: React.FC = () => {
  const [storedPets, setPets] = useLocalStorage<CardProps[]>("pets", []);
  const treePetArr = removeDuplicates(storedPets).reverse().slice(0, 3);
  return (
    <section className={classes.Home}>
      <Navbar />
      <div className={classes.welcomeHome}>
        <img src={Logo} className={classes.LogoHome} />
        <div className={classes.textHome}>
          <h1>Save a pet</h1>
          <h3>This is a practice site for saving pets</h3>
          <h5>
            Israel, Pikud Ha’Oref
            <br /> 9:00 AM - 5:30 PM <br />
            Own by: Omer Lev
          </h5>
        </div>
      </div>
      <div className={classes.divCardHome}>
        <h1 className={classes.textHome}>Recently Viewed Pets</h1>
        <div className={classes.CardHome}>
          {treePetArr.map((pet) => (
            <CardAnimal
              key={pet.id}
              id={pet.id}
              firstName={pet.firstName}
              birthYear={2022 - pet.birthYear}
              pictureUrl={pet.pictureUrl}
              animalType={pet.animalType}
              gender={pet.gender}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
