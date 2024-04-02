import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { log } from "console";

interface Todo {
  id: number;
  a: number;
  b: string;
  c: boolean;
  image: string;
  name: string;
  lastName: string;
}

const Home = () => {
  const [data, setData] = useState<Todo[]>([]);

  function readProduct() {
    let data: Todo[] = JSON.parse(localStorage.getItem("todoTs") || "[]");
    setData(data);
  }

  useEffect(() => {
    readProduct();
  }, []);

  function deleteProduct(id: number): void {
    let data: Todo[] = JSON.parse(localStorage.getItem("todoTs") || "[]");

    let deleteData = data.filter((el: Todo, indx: number) => indx !== id);
    localStorage.setItem("todoTs", JSON.stringify(deleteData));
    readProduct();
  }

  const { id } = useParams();

  const [editINputed, setEditedInput] = useState({});
  function editINput(todo: Todo) {
    setEditedInput(todo);
  }

  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2pc",
            marginTop: "5pc",
          }}
        >
          {data?.map((el: Todo, index: number) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={el.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.lastName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteProduct(index)} size="small">
                  delete
                </Button>
                <Button
                  onClick={() => {
                    navigate(`/edit/${el.id}`);
                    editINput(el);
                  }}
                  size="small"
                >
                  edit
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
