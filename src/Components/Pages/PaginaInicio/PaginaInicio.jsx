import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CardCumt from '../../CardCumt/CardCumt';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginaInicio = () => {

    
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    const fetchDataAllCharacter = async() => {
      try {

          let allCharacters = [];
          let nextPage = 'https://dragonball-api.com/api/characters';

          while (nextPage) {
              const response = await fetch(nextPage);
              const json = await response.json();
              
              // Filtra por género y agrega a la lista
              const filteredCharacters = json.items;
              allCharacters = [...allCharacters, ...filteredCharacters];
              
              nextPage = json.links.next; // URL de la siguiente página
            }
            
            setData(allCharacters);

      } catch (error) {
          console.error('Error fetching data:', error);
      }

    };

    fetchDataAllCharacter();

  }, []);

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
    
    {/**
     * 
     <div style={{ display: 'flex', justifyContent: 'center', padding: '5px', backgroundColor: 'gray' }}> 
       <Stack spacing={2} style={{ marginTop: '0px', justifyContent: 'center', backgroundColor: 'transparent' }}>
         <Pagination
           count={totalPages}
           page={page}
           onChange={(e, newPage) => setPage(newPage)}
           variant="outlined"
           color="primary"
           size='large' 
         
         />
       </Stack>
     </div>
     * 
     */}
      
    </>

    
    
    
  )
}

export default PaginaInicio