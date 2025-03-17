import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { JSX, useState } from 'react';

// Тип для элемента коллекции
interface Item {
  id: number;
  name: string;
  url: string;
}

const Articles: React.FC = (): JSX.Element => {

  const mockItems: Item[] = [
    {
      id: 1,
      name: 'Статья 1',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 2,
      name: 'Статья 2',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 3,
      name: 'Статья 3',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 4,
      name: 'Статья 4',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 5,
      name: 'Статья 5',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 6,
      name: 'Статья 6',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
  ];

  // Состояние для хранения данных
  const [items, setItems] = useState<Item[]>(mockItems);

  return (
    <div className='articleMain'>
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
            >
                Добавить статью 
            </Button>
      </div>
      <div className="articlesItems">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.url} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>        
    </div>
  );
};

export default Articles;