import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input } from 'reactstrap';
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
  function handleNewDirections(e) {
    setNewRecipe({
      ...newRecipe,
      directions: e.target.value,
    });
    console.log(newRecipe);
  }

  return (
    <Container>
      <h2>Vytvoriť nový recept</h2>
      <Input
        type="text"
        className="NewRecipeTitleInput"
        value={newRecipe.title}
        onChange={handleNewTitle}
      />
      <Input
        type="number"
        className="NewRecipepreparationTimeInput"
        value={newRecipe.preparationTime}
        onChange={handleNewPreparationTime}
      />
      <Input
        type="text"
        className="NewRecipeDirectionsInput"
        value={newRecipe.directions}
        onChange={handleNewDirections}
      />
      <button onClick={(event) => handleNewRecipe(event.target.value)}>
        Vytvoriť
      </button>
    </Container>
  );
}
