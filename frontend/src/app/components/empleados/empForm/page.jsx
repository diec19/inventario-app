"use client"
import React from 'react'
import Axios from 'axios'
import {useFormik} from 'formik';


const empleadoForm = () => {

  const {handleSubmit,handleChange} = useFormik({
        initialValues:{
          nombre:'',
          edad:'',
          pais:'',
          cargo:'',
          anios:''
        },
        onSubmit:async (values)=>{
          try {
            // Realizar una solicitud HTTP utilizando axios
            const response = await Axios.post('http://localhost:9000/api/empleados', values);
            console.log(response.data); // Puedes manejar la respuesta según tus necesidades
          } catch (error) {
            console.error(error);
          }
        }
  })


  return (
   <div>
     <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
           type="text" placeholder="Nombre" name="nombre" onChange={handleChange}

            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Edad
          </label>
          <input
            type='number' placeholder='Edad' name="edad" onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Pais
          </label>
          <input
            type='text' placeholder='Pais' name="pais" onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Cargo
          </label>
          <input
            type='text' placeholder='Cargo' name="cargo" onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Años
          </label>
          <input
            type='number' placeholder='Años' name="anios" onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Registrar
        </button>
      </form>
    </div>
   
    </div>
  )
}

export default empleadoForm