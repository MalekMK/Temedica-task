import React from "react";
import { Paper, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { CardItem } from "./CardItem";
import { DrugItem } from "../../common/models/drugList";
// importing data from JSON file
import data from './data/dataset.json'

export const DrugList = () => {
  const [search, setSearch] = React.useState('');
  const [drugList, setDrugList] = React.useState<DrugItem[]>([]);

  return (
    <>
      <Paper
        sx={{ display: "flex", alignItems: "center", marginTop: 5 }}
      >
        <InputBase
          onChange={(event) => {
            if (event.target.value.length > 0) {
              const list = data.drugs.filter(elt => elt.diseases.some(element => element.toUpperCase().includes(event.target.value.toUpperCase())) || elt.name.toUpperCase().includes(event.target.value.toUpperCase()))
              setDrugList(list)
            } else {
              setDrugList([])
            }
            setSearch(event.target.value)
          }}
          value={search}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by drug name or disease"
        />
        {search.length > 0 && (
          <IconButton onClick={() => {
            setDrugList([])
            setSearch('')
          }}>
            <CloseIcon />
          </IconButton>
        )}
      </Paper>
      {search.length > 0 && (
        <Typography
          sx={{ my: 2, fontSize: 15 }}
          color="text.primary"
        >
          {`Showing ${drugList.length} results`}
        </Typography>
      )}
      {drugList.map((elt, index) => (
        <CardItem key={index} item={elt} wordToHighlight={search} />
      ))}
    </>
  );
}