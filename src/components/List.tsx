import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IProps {
  people: { name: string; url: string; age: number; note?: string }[];
}
//jedan nacin pisanja
// const List = ({ people }: IProps) => {
//   return <div>I am a list</div>;
// };

//drugi specificniji nacin
const List: FC<IProps> = ({ people }) => {
  const renderList = ():JSX.Element[] => {
    return people.map((item) => (
      <Card sx={{ maxWidth: 275, margin: "10px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.age}</Typography>
          <Typography variant="body2">{item.note}</Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
      </Card>
    ));
  };
  return <>{renderList()}</>;
};

export default List;
