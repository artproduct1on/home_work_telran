import { useState, useEffect } from 'react'
import axios from 'axios';
import s from './styles.module.css'

function Gallery() {
  const [photos, setPhotos] = useState(null);
  const [selectPhoto, setSelectPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(({ data }) => {
        setPhotos(data);
      })
      .catch(err => setError(err));
  }, []);

  function imgHeandler(num) {
    setSelectPhoto(photos[num])
  };

  if (error) return (
    <h1>(╯°□°) Something went wrong!</h1>
  );

  if (!photos) return (
    <h1>(O_o) To be or not to be - that is the question</h1>
  );

  return <>

    <ul className={s.list}>
      {photos.map(({ id, title, image }, num) =>
        <li key={id} onClick={() => imgHeandler(num)}>
          <img src={image} alt={title} loading='lazy' />
        </li>
      )}
    </ul>

    {
      selectPhoto &&
      <div className={s.selectPhoto} onClick={() => setSelectPhoto(null)}>
        <button className={s.close}>Close</button>
        <img
          src={selectPhoto.image}
          alt={selectPhoto.title}
          onClick={e => e.stopPropagation()}
        />
      </div>
    }
  </>
};

export default Gallery;




// Задача 2: Создать компонент Gallery, который загружает список изображений с сервера и отображает их в виде галереи. Каждое изображение должно быть кликабельным и при клике на него должно открываться в полноразмерном режиме.


// 1.Создайте компонент Gallery, который будет загружать и отображать список изображений.
// 2.Добавьте обработчик события для открытия изображения в полноразмерном режиме.


// Обязательно использовать useEffect, useState и axios.
// API: https://jsonplaceholder.typicode.com/photos 