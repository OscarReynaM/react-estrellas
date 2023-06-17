// SubscribeForm.tsx
import React from 'react';
import Button from 'react-bootstrap/Button';


function SubscribeForm() {
  return (
    <form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <input type="email" placeholder="Correo electrónico" style={{ padding: '10px', border: '1px solid #333', borderRadius: '5px', marginRight: '10px' }} />
      <Button variant="info">Subscribe</Button>{' '}
    </form>
  );
}

export default SubscribeForm;
