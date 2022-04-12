import { useEffect, useState } from 'react';
import { Container, Spinner, Alert, Input } from 'reactstrap';
import { api } from '../api';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { EditRecipeForm } from '../components/EditRecipeForm';

export function RecipeEditPage() {
  const { slug } = useParams();
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

  // axios
  //   .post(`/recipes/${slug}`, {
  //     title: recipe.title,
  //     // preparationTime: recipe.preparationTime,
  //     // directions: recipe.directions,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  function handleTitleChange() {
    const updatedRecipe = recipes.map((recipes) => {
      title: recipe.title;
    });
    setRecipe(setTitle);
  }

  function UpdateRecipe() {
    axios
      .post(`/recipes/${slug}`, {
        title: recipe.title,
        // preparationTime: recipe.preparationTime,
        // directions: recipe.directions,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // function handlePreparationTimeChange() {
  //   setPreparationTime({
  //     ...recipe,
  //     preparationTime: e.target.value,
  //   });
  // }

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>;
  }
  return (
    <Container>
      <h1>{recipe.title}</h1>
      <Input value={recipe.title} onChange={handleTitleChange} />
      {/* <Input value={recipe.preparationTime} onChange={handlePreparationTime} /> */}
      {/* <Input type="text" value={recipe.title} onChange={handleTitle} />
      <Input type="text" placeholder={recipe.preparationTime} />
      <Input type="text" placeholder={recipe.directions} /> */}
      <button onClick={UpdateRecipe}>Upraviť</button>
    </Container>
  );
}
