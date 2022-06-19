import { useRef,createContext, React, useContext, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import SearchComponent from "../pages/SearchComponent";
import { SearchContext } from "../Helpers/Context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const data = [
  {
    name: "Trending",
  },
  { name: "Popular" },
  { name: "Coins" },
];

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  const {search,setSearch} = useContext(SearchContext);

  const isInputFocussed = useRef(false);

  useEffect(() => {
    if (document.activeElement === isInputFocussed.current) {
      console.log('element has focus');
    } else {
      console.log('element does NOT have focus');
    }
  }, []);

  const getList = () => (
    <div className="w-48" onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  const getSearchTerm = () => {
    fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setItem(data.coins[0]));
  };

  useEffect(() => {
    getSearchTerm();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setSearch(!search)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/allcoins">Coins</Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">Popular</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/trending">Trending</Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <Link to="/search">
              <StyledInputBase
                placeholder="Search Coin..."
                inputProps={{ "aria-label": "search" }}
                value={searchTerm}
                onChange={handleSearch}
              />
            </Link>
          </Search>
          <div>
            <Drawer
              sx={{ height: 1 / 2 }}
              open={open}
              anchor={"left"}
              onClose={() => setOpen(false)}
            >
              {getList()}
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
      {search && (
        <SearchComponent
          name={item.name}
          symbol={item.symbol}
          rank={item.market_cap_rank}
          img={item.large}
        />
      )}
    </Box>
  );
}
