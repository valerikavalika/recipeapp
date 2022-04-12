import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input } from 'reactstrap';
import { api } from '../api';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function RecipeEditPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [recipeTitle, setRecipeTitle] = useState(['']);
  const [recipePreparationTime, setRecipePreparationTime] = useState(['']);
  const [recipeDirections, setRecipeDirections] = useState(['']);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);
}

const handleSubmit = async (e) => {
  e.preventDefault();
  // const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
  const newRecipe = {
    // id,
    title: recipeTitle,
    preparationTime: recipePreparationTime,
    directions: recipeDirections,
  };
  try {
    const response = await api.post('/recipes', newRecipe);
    const allRecipes = [...recipes, response.data];
    setRecipe(allRecipes);
    setRecipeTitle('Nazov');
    setRecipePreparationTime('cas');
    setRecipeDirections('postup');
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  return (
    <Container>
      <h1>Vytvorit recept</h1>
      <Input value={recipe.title} />
      <Input value={recipe.preparationTime} />
      <Input value={recipe.title} />
      <button onClick={handleSubmit}>Vytvorit</button>
      {isLoading && <Spinner className="mb-4" />}
      {error && (
        <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>
      )}
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
};
