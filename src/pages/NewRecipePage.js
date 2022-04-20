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
import { useNavigate } from 'react-router-dom';

export function NewRecipePage() {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [amountUnit, setAmountUnit] = useState('');
  // const [ingredients, setIngredients] = useState([{ name: '' }]);

  const [newRecipe, setNewRecipe] = useState({
    title: 'Názov receptu',
    preparationTime: '0',
    directions: 'Postup',
    servingCount: '4',
    sideDish: '',
    // ingredients: 'ingredients',
  });

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleNewRecipe = (event) => {
    api
      .post(`/recipes`, newRecipe)
      .then(() => {
        if (!unmounted.current) {
          setLoading(false);
        }
      })
      .catch((error) => setError(error));
    navigate(`/`), { replace: true };
  };

  // function handleNewIngredientName(e) {
  //   const insertAt = 1;
  //   setIngredients([...ingredients.slice(0, insertAt), { name: name }]);
  //   setNewRecipe({
  //     ...newRecipe,
  //     ingredients: ingredients,
  //   });
  //   setName('');
  // }

  function handleNewTitle(e) {
    setNewRecipe({
      ...newRecipe,
      title: e.target.value,
    });
  }
  function handleNewPreparationTime(e) {
    setNewRecipe({
      ...newRecipe,
      preparationTime: e.target.value,
    });
  }
  function handleNewServingCount(e) {
    setNewRecipe({
      ...newRecipe,
      servingCount: e.target.value,
    });
  }
  function handleNewSideDish(e) {
    setNewRecipe({
      ...newRecipe,
      sideDish: e.target.value,
    });
  }

  // function handleNewSideDish(e) {
  //   setNewRecipe({
  //     ...newRecipe,
  //     sideDish: e.target.value,
  //   });
  // }
  // function handleNewSideDish(e) {
  //   setNewRecipe({
  //     ...newRecipe,
  //     sideDish: e.target.value,
  //   });
  // }
  function handleNewDirections(e) {
    setNewRecipe({
      ...newRecipe,
      directions: e.target.value,
    });
  }

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <h2>Vytvoriť nový recept</h2>
        <Button
          style={{ marginLeft: 'auto' }}
          color="success"
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
          <p>Počet porcií (ale môžeš to zjesť aj sam):</p>
          <Input
            type="number"
            className="NewRecipeServingCountnput"
            value={newRecipe.servingCount}
            onChange={handleNewServingCount}
            style={{ marginBottom: '10px' }}
          />
          <p>Bude výborne s takou prílohou:</p>
          <Input
            type="text"
            className="NewRecipepSideDishInput"
            value={newRecipe.sideDish}
            onChange={handleNewSideDish}
          />
        </Col>
        {/* <Col lg={4}>
          <h5>Ingrediencie</h5>
          <p>Pridať ingredienciu</p>
          <Input
            type="text"
            className="NewIngredientName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleNewIngredientName}>Pridat</button> */}
        {/* <p>Potrebné množstvo</p>
          <Input
            type="number"
            className="NewIngredientAmount"
            // value={newRecipe.ingredients.amount}
            onChange={e => setAmount(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          <p>Jednotka</p>
          <Input
            type="text"
            className="NewIngredientAmountUnit"
            // value={newRecipe.ingredient.amountUnit}
            onChange={e => setAmountUnit(e.target.value)}
          /> */}
        {/* </Col> */}
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
