// components/ApiData.tsx

import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CatFact {
  fact: string;
  length: number;
}

function ApiData() {
  const [fact, setFact] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const jsonData: CatFact = await response.json();
      setFact(jsonData.fact);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cataas.com/cat" />
        <Card.Body>
          <Card.Title>Cat Fact</Card.Title>
          <Card.Text>{fact}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApiData;
