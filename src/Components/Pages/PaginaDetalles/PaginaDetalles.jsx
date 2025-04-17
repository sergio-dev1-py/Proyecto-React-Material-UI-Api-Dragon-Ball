import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import CardCusmDetail from '../../CardCusmDetail/CardCusmDetail'
import CardPlanets from '../../CardPlanets/CardPlanets'

const PaginaDetalles = () => {

    const [data, setData] = useState({});

    let {id} = useParams()

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters/'+id)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error('Error fetching data:', error));    
      },[]);

  return (


    <main style={{  justifyContent: 'center',alignItems: 'center'}}>
        <CardCusmDetail 
            key={data.id}
            user={data}
        />

        <CardPlanets planeta={data.originPlanet}/>

    </main>
    
  )
}

export default PaginaDetalles