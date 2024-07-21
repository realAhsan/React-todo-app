import React from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
const TodoItem = ({ todo, fetchDetailsofCurrentTodo }) => {
  console.log(todo);
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          onClick={() => {
            fetchDetailsofCurrentTodo(todo.id);
          }}
        >
          {" "}
          Show details
        </button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
