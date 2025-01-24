// container for search-results cards
import { Grid, Typography, Box } from "@mui/material";
import { Product } from "./types";
import SearchResultItem from "./search-result-item"

type SearchResultsProps = {
  products: Product[];
};

export default function SearchResults({ products }: SearchResultsProps) {

  const handleCardClick = (id: number) => {
    // Navigate to the product details page
    console.log(`clicked product ${id}`)
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <SearchResultItem product={product} onCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
