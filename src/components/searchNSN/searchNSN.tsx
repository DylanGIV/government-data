import { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Grid,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import { GetNSNDetails } from "../../utils/lqlite";
import { NSNDetail } from "../../API";
import { useNavigate } from "react-router";

const SearchNSN = () => {
  const [nsn, setNsn] = useState("");

  const navigate = useNavigate();

  const handleClear = () => {
    setNsn("");
  };

  const handleSearch = async () => {
    navigate(`/search/${nsn}`);
  };

  return (
    <Box>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={4}>
          <FormControl
            onSubmit={handleSearch}
            fullWidth
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Autocomplete
              options={[]}
              value={nsn}
              onInputChange={(event, newInputValue) => {
                setNsn(newInputValue);
              }}
              onSubmit={handleSearch}
              sx={{
                flex: 0.9,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search NSN"
                  placeholder="Enter NSN"
                  fullWidth
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter") {
                      ev.preventDefault();
                      handleSearch();
                    }
                  }}
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      borderRadius: "4px 0px 0px 4px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        {nsn && (
                          <IconButton
                            onClick={handleClear}
                            style={{ marginRight: "-40px" }}
                          >
                            <ClearIcon />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <IconButton
              onClick={handleSearch}
              disabled={!nsn}
              sx={{
                flex: 0.1,
                border: 1,
                borderLeft: 0,
                borderRadius: "0px 4px 4px 0px",
                borderColor: "lightgrey",
              }}
            >
              <SearchIcon />
            </IconButton>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchNSN;
