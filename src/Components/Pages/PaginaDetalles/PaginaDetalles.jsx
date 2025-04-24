import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import fondoImage from "../../../assets/Imagen_fondo_del.jpg";

import CardCusmDetail from '../../CardCusmDetail/CardCusmDetail';
import CardPlanets from '../../CardPlanets/CardPlanets';

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


    <main style={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '10px',
      alignItems: 'center', 
      padding:  '20px clamp(10px, 10vw, 150px)',
      backgroundImage:  `url(${fondoImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
        <CardCusmDetail 
            key={data.id}
            user={data}
        />

        <CardPlanets planeta={data.originPlanet}/>

    </main>
    
  )
}

export default PaginaDetalles