import React from 'react';
import StarImage from './StarImage';
import StarGallery from './StarGallery';
import StarFacts from './StarFacts';
import SubscribeForm from './SubscribeForm';
import StarVideos from './StarVideos';
import ApiData from './ApiData';

function Main() {
  return (
    <main style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
      <section style={{ marginBottom: '40px' }}>
        <h2>Bienvenido a la página de las Estrellas</h2>
        <p>Descubre el fascinante mundo del espacio y las estrellas.</p>
        <StarImage />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Galería de Estrellas</h2>
        <StarGallery />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Curiosidades sobre las Estrellas</h2>
        <StarFacts />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Suscríbete para recibir actualizaciones</h2>
        <SubscribeForm />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Videos de las Estrellas</h2>
        <StarVideos />
      </section>

      <section>
        <ApiData />
      </section>
    </main>
  );
}

export default Main;
