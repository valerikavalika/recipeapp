import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { RecipeEditPage } from './pages/RecipeEditPage';
import { NewRecipePage } from './pages/NewRecipePage';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/recipe/NewRecipePage" element={<NewRecipePage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/recipe/:slug/RecipeEditPage" element={<RecipeEditPage />} />
    </RouterRoutes>
  );
}
