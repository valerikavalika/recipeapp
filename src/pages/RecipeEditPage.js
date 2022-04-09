import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input } from 'reactstrap';
import { api } from '../api';
import { useParams } from 'react-router-dom';

export function RecipeEditPage() {
  const { slug } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [title, setTitle] = useState(recipe.title);

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Input type="text" placeholder={recipe.title} />
      <Input type="text" placeholder={recipe.preparationTime} />
      <Input type="text" placeholder={recipe.directions} />
    </Container>
  );
}
