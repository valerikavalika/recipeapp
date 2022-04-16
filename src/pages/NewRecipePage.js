import { useEffect, useState } from 'react';
import {
  Container,
  Spinner,
  Alert,
  Input,
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
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
            style={{ marginBottom: '25px', marginTop: '25px' }}
          />
        </Col>
        <Col lg={4}>
          <h5>Základné údaje</h5>
          <p>Doba prípravy:</p>
          <InputGroup style={{ marginBottom: '10px' }}>
            <Input
              type="number"
              className="NewRecipePreparationTimeInput"
              value={newRecipe.preparationTime}
              onChange={handleNewPreparationTime}
            />
            <InputGroupText>min</InputGroupText>
          </InputGroup>
          <p>Počet porcií (ak nahodou nechces papať sam):</p>
          <Input
            type="number"
            className="NewRecipeServingCountnput"
            value={newRecipe.servingCount}
            onChange={handleNewServingCount}
            style={{ marginBottom: '10px' }}
          />
          <p>Bude výborne s takou prílohou:</p>
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
