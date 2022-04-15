import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input } from 'reactstrap';
import { api } from '../api';
import { useParams } from 'react-router-dom';

export function RecipeEditPage() {
  const { slug, id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleUpdateRecipe = (event) => {
    api
      .post(`/recipes/${recipe._id}`, recipe)
      .catch((error) => setError(error));
  };

  function handleUpdateTitle(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      title: e.target.value,
    });
  }

  function handleUpdatePreparationTime(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      preparationTime: e.target.value,
    });
  }
  function handleUpdateDirections(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      directions: e.target.value,
    });
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Input
        type="text"
        className="UpdateRecipeTitleInput"
        value={recipe.title}
        onChange={handleUpdateTitle}
      />
      <Input
        type="number"
        className="UpdateRecipepreparationTimeInput"
        value={recipe.preparationTime}
        onChange={handleUpdatePreparationTime}
      />
      <Input
        type="text"
        className="UpdateRecipeDirectionsInput"
        value={recipe.directions}
        onChange={handleUpdateDirections}
      />
      <button onClick={handleUpdateRecipe}>Uložiť</button>
    </Container>
  );
}
