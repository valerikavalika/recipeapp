import { Row, Col } from 'reactstrap';

import { RecipeCard } from './RecipeCard';

export function RecipesList({ recipes }) {
  // function timeConvert(recipe.preparationTime) {
  //   const num = recipe.preparationTime;
  //   const hours = (num / 60);
  //   var rhours = Math.floor(hours);
  //   var minutes = (hours - rhours) * 60;
  //   var rminutes = Math.round(minutes);
  //   return rhours + "h" + rminutes + " min";
  //   }
  return (
    <Row className="gy-4">
      {recipes.map((recipe) => (
        <Col key={recipe._id} lg={3} md={4} sm={6} xs={12}>
          <RecipeCard
            title={recipe.title}
            preparationTime={recipe.preparationTime}
            slug={recipe.slug}
          />
        </Col>
      ))}
    </Row>
  );
}
