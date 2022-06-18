import { ChangeEvent, FormEvent, FormHTMLAttributes, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button/Button";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import TopAppBar from "../components/navigation/AppBar";
import { useDB } from "../data/db";

const EditLocation = ({ ...props }: FormHTMLAttributes<HTMLFormElement>) => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLocations(
      locations.map((x) =>
        x._id === id
          ? {
              ...x,
              name: name,
            }
          : x
      )
    );

    navigate("/database");
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <TopAppBar
        variant="small"
        title="Edit location"
        backTo="/database"
      ></TopAppBar>

      <TextField
        label="Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      ></TextField>

      <div style={{ textAlign: "right" }}>
        <Button variant="filled" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditLocation;
