import * as countryServices from "../sevices/country.service.js"

export const getCountries=(req, res)=>{
    countryServices
    .getCountries()
    .then((result)=>{

        res.status(200).json({
            message:"Ciudad sastifactoriamente",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const getCountry=(req, res)=>{
    const {id}=req.params
    countryServices
    .getCountry(id)
    .then((result)=>{

        res.status(200).json({
            message:"Ciudad ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const createCountries=(req, res)=>{
    const ciudades=req.body;
    countryServices
    .createCountry(ciudades)
    .then((result)=>{

        res.status(200).json({
            message:"Ciudad ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const updateCountries=(req, res)=>{
    const ciudades=req.body;
    const {id}=req.params
    countryServices
    .updateCountry(id,ciudades)
    .then((result)=>{

        res.status(200).json({
            message:"UPDATE Ciudad ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const deleteCountries=(req, res)=>{
    const {id}=req.params
    countryServices
    .deleteCountry(id)
    .then((result)=>{

        res.status(200).json({
            message:"Borrado Ciudad ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}