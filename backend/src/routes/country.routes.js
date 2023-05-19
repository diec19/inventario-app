import { Router } from "express";
import {
     getCountries,
     getCountry,
     createCountries,
     updateCountries,
     deleteCountries } from "../controllers/country.controller.js";

const countryRouter = Router();

countryRouter.get("/",getCountries)

countryRouter.get("/:id",getCountry)

countryRouter.post("/",createCountries)

countryRouter.put("/:id",updateCountries)

countryRouter.delete("/:id",deleteCountries)


export default countryRouter;