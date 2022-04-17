// import { Input, Row, Col, InputGroup, InputGroupText } from 'reactstrap';

// export function EditRecipeMainInfos({
//   preparationTime,
//   servingCount,
//   sideDish,
// }) {
//   function handleUpdatePreparationTime(e) {
//     e.preventDefault();
//     setRecipe({
//       ...recipe,
//       preparationTime: e.target.value,
//     });
//   }
//   function handleUpdateServingCount(e) {
//     e.preventDefault();
//     setRecipe({
//       ...recipe,
//       servingCount: e.target.value,
//     });
//   }
//   function handleUpdateSideDish(e) {
//     e.preventDefault();
//     setRecipe({
//       ...recipe,
//       sideDish: e.target.value,
//     });
//   }
//   return (
//     <Col lg={4}>
//       <h5>Základné údaje</h5>
//       <p>Doba prípravy:</p>
//       <InputGroup style={{ marginBottom: '10px' }}>
//         <Input
//           type="number"
//           className="UpdateRecipepreparationTimeInput"
//           value={preparationTime}
//           onChange={handleUpdatePreparationTime}
//         />
//         <InputGroupText>min</InputGroupText>
//       </InputGroup>
//       <p>Počet porcií:</p>
//       <Input
//         type="number"
//         className="UpdateRecipeServingCountInput"
//         value={servingCount}
//         onChange={handleUpdateServingCount}
//         style={{ marginBottom: '10px' }}
//       />
//       <p>Príloha:</p>
//       <Input
//         type="text"
//         className="UpdateRecipeSideDishInput"
//         value={sideDish}
//         onChange={handleUpdateSideDish}
//       />
//       {/* <Input
// type="text"
// className="UpdateRecipeIngredientsInput"
// value={recipe.ingredients}
// onChange={handleUpdateIngredients}
// /> */}
//     </Col>
//   );
// }
