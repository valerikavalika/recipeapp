import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input, Row, Col, Button } from 'reactstrap';
import { api } from '../api';
import { RecipeCard } from '../components/RecipeCard';

export function NewRecipePage() {
  const [newRecipe, setNewRecipe] = useState({
    title: 'Názov receptu',
    preparationTime: '0',
    directions: 'Postup',
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleNewRecipe = (event) => {
    api.post(`/recipes`, newRecipe).catch((error) => setError(error));
  };

  function handleNewTitle(e) {
    setNewRecipe({
      ...newRecipe,
      title: e.target.value,
    });
    console.log(newRecipe);
  }
  function handleNewPreparationTime(e) {
    setNewRecipe({
      ...newRecipe,
      preparationTime: e.target.value,
    });
    console.log(newRecipe);
  }
  function handleNewServingCount(e) {
    setNewRecipe({
      ...newRecipe,
      servingCount: e.target.value,
    });
    console.log(newRecipe);
  }
  function handleNewSideDish(e) {
    setNewRecipe({
      ...newRecipe,
      sideDish: e.target.value,
    });
    console.log(newRecipe);
  }
  function handleNewDirections(e) {
    setNewRecipe({
      ...newRecipe,
      directions: e.target.value,
    });
    console.log(newRecipe);
  }

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <h2>Vytvoriť nový recept</h2>
        <Button
          style={{ marginLeft: 'auto' }}
          onClick={(event) => handleNewRecipe(event.target.value)}
        >
          Vytvoriť
        </Button>
      </div>
      <Row>
        <Col lg={12}>
          <Input
            type="text"
            className="NewRecipeTitleInput"
            value={newRecipe.title}
            onChange={handleNewTitle}
          />
        </Col>
        <Col lg={4}>
          <Input
            type="number"
            className="NewRecipePreparationTimeInput"
            value={newRecipe.preparationTime}
            onChange={handleNewPreparationTime}
          />
          <Input
            type="number"
            className="NewRecipeServingCountnput"
            value={newRecipe.servingCount}
            onChange={handleNewServingCount}
          />
          <Input
            type="number"
            className="NewRecipepSideDishInput"
            value={newRecipe.sideDish}
            onChange={handleNewPreparationTime}
          />
        </Col>
        <Col lg={8}>
          <Input
            type="textarea"
            className="NewRecipeDirectionsInput"
            style={{ height: '370px' }}
            value={newRecipe.directions}
            onChange={handleNewDirections}
          />
        </Col>
      </Row>
    </Container>
  );
}
