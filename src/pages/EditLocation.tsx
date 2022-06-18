import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  MouseEvent,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import TopAppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";
import icons from "../data/_icons";
import Page from "./Page";

const EditLocation = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [locations, setLocations] = useDB("locations");
  const location = locations.find((x) => x._id === id);

  if (typeof location === "undefined") {
    return (
      <FullPageError backTo="/location">
        <p>Location not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState(location.name);
  const [icon, setIcon] = useState(location.icon);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLocations(
      locations.map((x) =>
        x._id === id
          ? {
              ...x,
              name,
              icon: icons.includes(icon ?? "") ? icon : "",
            }
          : x
      )
    );

    navigate("/database");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    setLocations(locations.filter((x) => x._id !== id));
    navigate("/database");
  };

  return (
    <div {...props}>
      <TopAppBar
        variant="small"
        title="Edit location"
        backTo="/database"
        actions={<IconButton icon="delete" onClick={handleDelete}></IconButton>}
      ></TopAppBar>
      <Page>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          ></TextField>

          <TextField
            label="Icon"
            value={icon}
            list="icon-list"
            leadIcon={icons.includes(icon ?? "") ? icon : ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIcon(e.target.value)
            }
          ></TextField>
          <datalist id="icon-list">
            {icons.map((x) => (
              <option value={x}></option>
            ))}
          </datalist>

          <div style={{ textAlign: "right" }}>
            <Button variant="filled" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Page>
    </div>
  );
};

export default EditLocation;
