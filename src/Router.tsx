import { Route, Routes } from "react-router-dom";
import App from "./App";
import { AdoptionForm } from "./components/AdoptionForm/AdoptionForm";
import { AnimalDetails } from "./components/AnimalDetails/AnimalDetails";
import { Catalog } from "./components/Catalog/Catalog";
import { Home } from "./components/Home/Home";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/AnimalDetails/:id" element={<AnimalDetails />} />
        <Route path="/AdoptionForm/:id" element={<AdoptionForm />}/>
      </Route>
    </Routes>
  );
};
