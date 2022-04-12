import { useState } from 'react';

export function EditRecipeForm(title, preparationTime, slug) {
  const [recipe, setRecipe] = useState({
    title: recipe.title,
    preparationTime: recipe.preparationTime,
  });

  function handleTitleChange(e) {
    setTitle({
      ...recipe,
      title: e.target.value,
    });
  }

  function handlePreparationTimeChange(e) {
    setPreparationTime({
      ...recipe,
      preparationTime: e.target.value,
    });
  }
  return (
    <>
      <Input value={recipe.title} onChange={handleTitleChange} />
      <Input value={recipe.preparationTime} onChange={handlePreparationTime} />
    </>
  );
}
