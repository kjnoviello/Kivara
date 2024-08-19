const getFetch = async () =>{
    const res = await fetch ('https://66af1becb05db47acc590364.mockapi.io/celulars')
    if (!res.ok) {
        throw new Error("No se pudieron obtener los datos. Revisar url de la api")
    }
    const data = await res.json()
    return data
}

export default getFetch