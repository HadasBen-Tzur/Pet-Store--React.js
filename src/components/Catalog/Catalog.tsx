import Navbar from "../Navbar/Navbar";
import data from "../../petDB.json";
import { CardAnimal } from "../CardAnimal/CardAnimal";
import { ChangeEvent, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import classes from "./Catalog.module.scss";

export const Catalog: React.FC = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <section className={classes.Catalog}>
      <Navbar />
      <div className={classes.divCatalog}>
        <div className={classes.filterCatalog}>
          <input
            className={classes.searchCatalog}
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
          <FormControl className={classes.genderCatalog}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="נקבה"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="זכר" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.cardCatalog}>
          {data
            .filter((pet) => {
              return pet.firstName.toLowerCase().includes(query.toLowerCase());
            })
            .filter((pet) => {
              return value ? pet.gender === value : pet;
            })
            .map((pet) => (
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
