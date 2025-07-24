import { Card, CardContent, Typography } from '@mui/material';

const InvestmentCard = ({ investment }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">{investment.name}</Typography>
        <Typography variant="body1">Price: ${investment.price}</Typography>
        <Typography color={investment.change.includes('+') ? 'green' : 'red'}>
          Change: {investment.change}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;

