import { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

import { api } from '../api';
import { SearchInput } from '../components/SearchInput';
import { RecipesList } from '../components/RecipesList';
import { axios } from 'axios';
import { NewRecipePage } from '../pages/NewRecipePage';

export function RecipeListPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchValue, setSearchValue] = useState('');

  const filterredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    setLoading(true);

    api
      .get('/recipes')
      .then((res) => setRecipes(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const [recipeTitle, setRecipeTitle] = useState(['']);
  const [recipePreparationTime, setRecipePreparationTime] = useState(['']);
  const [recipeDirections, setRecipeDirections] = useState(['']);
  const [editRecipeTitle, setEditRecipeTitle] = useState(['']);
  const [editRecipePreparationTime, setEditRecipePreparationTime] = useState([
    '',
  ]);
  const [editRecipeDirections, setEditRecipeDirections] = useState(['']);

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
      setRecipes(allRecipes);
      setRecipeTitle('Nazov');
      setRecipePreparationTime('cas');
      setRecipeDirections('postup');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (slug) => {
    const updatedRecipe = {
      // slug,
      title: editRecipeTitle,
      preparationTime: editRecipePreparationTime,
      directions: editRecipeDirections,
    };
    try {
      const response = await api.post(`/recipes/${slug}`, updatedRecipe);
      setRecipes(
        recipes.map((recipe) =>
          recipe.slug === id ? { ...response.data } : recipe,
        ),
      );
      setEditRecipeTitle('');
      setEditRecipePreparationTime('');
      setEditRecipeDirections('');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleDelete = async (slug) => {
    try {
      await api.delete(`/recipes/${slug}`);
      const recipesList = recipes.filter((recipe) => recipe.slug !== slug);
      setRecipes(recipesList);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Container>
      <h1>Recepty</h1>
      <Link to={`/recipe/${slug}/NewRecipePage`}>
        <button>Novy Recept</button>
      </Link>
      <SearchInput
        className="mb-4"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      {isLoading && <Spinner className="mb-4" />}
      {error && (
        <Alert color="danger">Vyskytla se chyba při načítání dat</Alert>
      )}
      <RecipesList recipes={filterredRecipes} />
    </Container>
  );
}
