

async function fetchCiudades(){
   const res=await fetch("http://localhost:9000/api/ciudades")
   const data = await res.json()
   return data.data
}
async function indexPage(){
  const user =await fetchCiudades()



  return (
    <ul>
      
      {
        user.map((p)=>(
          <li key={p.id}>
            <h3 className="text-green-600 font-bold">{p.name}</h3>
            
          </li>
        ))
      }
    </ul>
  )
}

export default indexPage
