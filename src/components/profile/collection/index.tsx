import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { JSX, useState } from 'react';
import AddShoeForm from './add';

// Тип для элемента коллекции
interface Item {
  id: number;
  name: string;
  url: string;
}

const Collection: React.FC = (): JSX.Element => {
  // Моковый массив данных
  const mockItems: Item[] = [
    {
      id: 1,
      name: 'Nike air force 1 black',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 2,
      name: 'Кроссовки 2',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 3,
      name: 'Кроссовки 3',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 4,
      name: 'Кроссовки 4',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 5,
      name: 'Кроссовки 5',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
    {
      id: 6,
      name: 'Кроссовки 6',
      url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
    },
  ];

  // Состояние для хранения данных
  const [items, setItems] = useState<Item[]>(mockItems);
  const [showHello, setShowHello] = useState<boolean>(false);
  
    // Обработчик нажатия на кнопку
  const handleAddShoe = () => {
      // Переключаем состояние
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
        {showHello ? ( // Условный рендеринг
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