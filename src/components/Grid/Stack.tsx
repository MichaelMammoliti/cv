import { Grid } from './Grid';
import { GridProps } from './types';

export const Stack = ({ ...props }: GridProps) => (
  <Grid
    container
    justifyContent="flex-start"
    alignItems="flex-start"
    direction="column"
    wrap="wrap"
    grow={false}
    {...props}
  >
    {props.children}
  </Grid>
);
