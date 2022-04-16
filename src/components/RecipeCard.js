import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import placeholder from '../images/food-placeholder.png';

export function RecipeCard({ title, preparationTime, slug, sideDish }) {
  function convertTime(preparationTime) {
    preparationTime = Number(preparationTime);
    const h = Math.floor(preparationTime / 60);
    const m = Math.floor(preparationTime % 60);
    const hDisplay = h > 0 ? h + 'h ' : '';
    const mDisplay = m > 0 ? m + 'min' : '';
    return hDisplay + mDisplay;
  }

  return (
    <Card className="h-100">
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`/recipe/${slug}`}
      >
        <CardImg src={placeholder} alt="Preview" top />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle>
            {convertTime(preparationTime)} {sideDish}
          </CardSubtitle>
        </CardBody>
      </Link>
    </Card>
  );
}
