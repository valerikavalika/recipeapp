import { useEffect, useState } from 'react';
import {
  Container,
  Spinner,
  Alert,
  Input,
  Row,
  Col,
  Button,
  ButtonGroup,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export function RecipeEditPage() {
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

  const handleUpdateRecipe = (event) => {
    api
      .post(`/recipes/${recipe._id}`, recipe)
      .catch((error) => setError(error));
    navigate(`/`), { replace: true };
  };

  const handleGoBack = (event) => {
    navigate(`/`), { replace: true };
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
  function handleUpdateServingCount(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      servingCount: e.target.value,
    });
  }
  function handleUpdateSideDish(e) {
    e.preventDefault();
    setRecipe({
      ...recipe,
      sideDish: e.target.value,
    });
  }

  // function handleUpdateIngredients(e) {
  //   e.preventDefault();
  //   setRecipe({
  //     ...recipe,
  //     ingredients: e.target.value,
  //   });
  // }
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
      <div style={{ display: 'flex' }}>
        <h1>{recipe.title}</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Button
            style={{ marginRight: '20px' }}
            color="success"
            onClick={handleUpdateRecipe}
          >
            Uložiť
          </Button>
          <Button color="secondary" onClick={handleGoBack}>
            Zrušiť
          </Button>
        </div>
      </div>
      <Row>
        <Col lg={12}>
          <Input
            type="text"
            className="UpdateRecipeTitleInput"
            value={recipe.title}
            onChange={handleUpdateTitle}
            style={{ marginBottom: '25px', marginTop: '25px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <h5>Základné údaje</h5>
          <p>Doba prípravy:</p>
          <InputGroup style={{ marginBottom: '10px' }}>
            <Input
              type="number"
              className="UpdateRecipepreparationTimeInput"
              value={recipe.preparationTime}
              onChange={handleUpdatePreparationTime}
            />
            <InputGroupText>min</InputGroupText>
          </InputGroup>
          <p>Počet porcií:</p>
          <Input
            type="number"
            className="UpdateRecipeServingCountInput"
            value={recipe.servingCount}
            onChange={handleUpdateServingCount}
            style={{ marginBottom: '10px' }}
          />
          <p>Príloha:</p>
          <Input
            type="text"
            className="UpdateRecipeSideDishInput"
            value={recipe.sideDish}
            onChange={handleUpdateSideDish}
          />
          {/* <Input
        type="text"
        className="UpdateRecipeIngredientsInput"
        value={recipe.ingredients}
        onChange={handleUpdateIngredients}
      /> */}
        </Col>
        <Col lg={8}>
          <Input
            type="textarea"
            style={{ height: '370px' }}
            className="UpdateRecipeDirectionsInput"
            value={recipe.directions}
            onChange={handleUpdateDirections}
          />
        </Col>
      </Row>
    </Container>
  );
}
