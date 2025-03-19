import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { JSX, useEffect, useState } from 'react';
import AddShoeForm from './add';
import { instance } from '../../../utils/axios';
import { useAuth } from '../../../context/AuthContext';

// Тип для элемента коллекции
interface Item {
  id: string;
  name: string;
  url: string;
}

const Collection: React.FC = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [showHello, setShowHello] = useState<boolean>(false);
  const { getTokens } = useAuth();

  useEffect(() => {
    const tokens = getTokens();
    if (!tokens?.accessToken) return; // Не выполняем запрос, если токен отсутствует
  
    const fetchShoes = async () => {
      try {
        const response = await instance.get('http://localhost:8081/api/v1/shoes', {
          headers: { Authorization: `Bearer ${tokens.accessToken}` },
        });
        const fetchedItems = response.data.shoes.map((shoe: any) => ({
          id: shoe.shoeId,
          name: shoe.name,
          url: shoe.imageUrl,
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Ошибка при загрузке обуви:', error);
      }
    };
  
    fetchShoes();
  }, [getTokens]);

  const handleAddShoe = () => {
    setShowHello(!showHello);
  };

  return (
    <div className='collectionMain'>
      <div className='buttonAdd'>
        <Button
          type='submit'
          sx={{
            fontFamily: 'Inter',
            width: '15vw',
            backgroundColor: '#F9F8F3',
            borderRadius: '15px',
            borderColor: '#fff',
            color: '#0E0F15',
          }}
          variant="contained"
          className='addShoes'
          endIcon={<Add />}
          onClick={handleAddShoe}
        >
          Добавить пару
        </Button>
      </div>
      <div>
        {showHello ? (
          <AddShoeForm />
        ) : (
          <div className="collectionItems">
            {items.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.url} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;