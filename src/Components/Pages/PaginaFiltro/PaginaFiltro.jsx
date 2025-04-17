
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'

import CardCumt from '../../CardCumt/CardCumt';


const PaginaFiltro = () => {

    let {genero} = useParams([]);

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchDataAllCharacter = async() => {
            try {

                let allCharacters = [];
                let nextPage = 'https://dragonball-api.com/api/characters';

                while (nextPage) {
                    const response = await fetch(nextPage);
                    const json = await response.json();
                    
                    // Filtra por género y agrega a la lista
                    const filteredCharacters = json.items.filter(item => item.gender === genero);
                    allCharacters = [...allCharacters, ...filteredCharacters];
                    
                    nextPage = json.links.next; // URL de la siguiente página
                  }
                  
                  setData(allCharacters);
      
            } catch (error) {
                console.error('Error fetching data:', error);
            }

          };

          fetchDataAllCharacter();
      }, [genero]);

  return (
    <>
        <main>
            {
                data.map((item) => (
                <Link to={`/details/${item.id}`} key={item.id} >
                <CardCumt 
                    key={item.id}
                    user={item}
                />
                </Link>

                ))
            }
        </main>
    </>
  )
}

export default PaginaFiltro