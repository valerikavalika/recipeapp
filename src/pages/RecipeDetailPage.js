import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Spinner,
  Alert,
  Row,
  Col,
  List,
  Button,
  ButtonGroup,
} from 'reactstrap';
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

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <h1>{recipe.title}</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Link to={`/recipe/${slug}/RecipeEditPage`}>
            <Button style={{ marginRight: '20px' }} color="secondary">
              Upraviť recept
            </Button>
          </Link>
          <Button color="danger" onClick={handleDeleteRecipe}>
            Vymazať recept
          </Button>
        </div>
      </div>
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
