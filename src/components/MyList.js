import { List, ListSubheader, ListItem } from "@mui/material";

const MyList = ({ headerList, list }) => {
  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#FEF2F2",
        fontSize: "x-large",
        borderRadius: 3,
      }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          component='div'
          sx={{ borderRadius: 3, bgcolor: "#FEF2F2", fontSize: "xx-large" }}
        >
          {headerList}
        </ListSubheader>
      }
    >
      {list.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  );
};

export default MyList;
