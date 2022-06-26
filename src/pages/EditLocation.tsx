import {
  ChangeEvent,
  FormEvent,
  FormHTMLAttributes,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/button/Button";
import IconButton from "../components/button/IconButton";
import TextField from "../components/form/TextField";
import FullPageError from "../components/FullPageError";
import AppBar from "../components/navigation/AppBar";
import icons from "../data/_icons";
import { db, useLocation } from "../data/db";
import Page from "./Page";

const EditLocation = ({ ...props }: FormHTMLAttributes<HTMLDivElement>) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof id !== "string") {
    return (
      <FullPageError backTo="/database">
        <p>Location not found</p>
      </FullPageError>
    );
  }

  const [name, setName] = useState("");
  const [icon, setIcon] = useState<string | undefined>(undefined);

  const [location, setLocation] = useLocation(id);
  useEffect(() => {
    if (location) {
      setName(location.name);
      setIcon(location.icon);
    }
  }, [location]);

  if (typeof location === "undefined") {
    return (
      <FullPageError backTo="/location">
        <p>Location not found</p>
      </FullPageError>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLocation({
      ...location,
      name,
      icon: icons.includes(icon ?? "") ? icon : "",
    });

    navigate("/database");
  };

  const handleDelete = (e: MouseEvent<Element>) => {
    e.preventDefault();

    db.locations.delete(id);
    navigate("/database");
  };

  return (
    <div {...props}>
      <AppBar
        variant="small"
        title="Edit location"
        backTo="/database"
        actions={<IconButton icon="delete" onClick={handleDelete}></IconButton>}
      ></AppBar>
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
            options={icons.map((x) => [x, x])}
            leadIcon={icons.includes(icon ?? "") ? icon : ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIcon(e.target.value)
            }
          ></TextField>

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
