import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Spinner, Alert, Row, Col, List } from 'reactstrap';
import { api } from '../api';
import { RecipeListPage } from './RecipeListPage';

export function RecipeDetailPage() {
  const { slug, id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/recipes/${slug}`)
      .then((res) => setRecipe(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleDeleteRecipe = (event) => {
    event.preventDefault();
    api.delete(`/recipes/${recipe._id}`).catch((error) => setError(error));
    navigate(`/`), { replace: true };
  };

  // const handleDeleteRecipe = (event) => {
  //   api
  //     .delete(`/recipes/${id}`)
  //     // .then((res) => {
  //     //   <RecipeListPage />;
  //     //   console.log('deleted');
  //     // })
  //     .catch((error) => setError(error));
  // };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Link to={`/recipe/${slug}/RecipeEditPage`}>
        <button>Upraviť recept</button>
      </Link>
      <button onClick={handleDeleteRecipe}>Vymazať recept</button>
      <Row>
        <Col lg={4}>
          <h5>{recipe.preparationTime} min</h5>
          <List type="unstyled">
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient._id}>
                {ingredient.amount} {ingredient.amountUnit} - {ingredient.name}
              </li>
            ))}
          </List>
        </Col>
        <Col lg={8}>
          <p>{recipe.directions}</p>
        </Col>
      </Row>
    </Container>
  );
}
