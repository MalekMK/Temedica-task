import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { DrugItem } from "../../common/models/drugList";

interface CardItemProps {
  item: DrugItem
  wordToHighlight: string
}

export const CardItem = (props: CardItemProps) => {
  const { item, wordToHighlight } = props
  return (
    <Card sx={{ minWidth: 275, marginTop: 3, marginBottom: 3 }}>
      <CardContent>
        <div style={{ display: "flex" }}>
          <Typography
            sx={{ display: "flex-inline", flexGrow: 1, fontSize: 34, fontWeight: "bold" }}
            color="text.primary"
          >
            <Highlighter
              searchWords={[wordToHighlight]}
              textToHighlight={item.name}
            />
          </Typography>
          <Typography
            sx={{ display: "inline-flex", fontSize: 15, fontWeight: "light" }}
            color="text.primary"
          >
            {moment(item.released, "YYYY-MM-DD").format('DD/MM/YYYY')}
          </Typography>
        </div>
        <Typography
          sx={{ mb: 1.5, fontSize: 15, fontWeight: "medium" }}
          color="text.primary"
        >
          list of related diseases :
        </Typography>
        {item.diseases.map((elt, index) => (
          <Typography
            key={index}
            sx={{ mx: 2, mb: 1, fontSize: 14, fontWeight: "medium" }}
            color="text.primary"
          >
            <Highlighter
              searchWords={[wordToHighlight]}
              textToHighlight={`- ${elt}`}
            />
          </Typography>
        ))}
        <Divider />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
