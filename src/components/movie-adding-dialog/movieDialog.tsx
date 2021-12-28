import { FavoriteBorder, Favorite } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import WatchList from "../utils/watchList";
import css from "./movieDialog.module.css";

interface Props {
    movieLists: WatchList[];
}
const MovieDialog: FC<Props> = (props) => {
    const [movieLists] = [props.movieLists];
    const [open, setOpen] = useState(false);
    const [selectedLists, setSelectedLists] = useState([""]);

    useEffect(() => {
        const cleanArr = selectedLists;
        cleanArr.splice(0, 1);
        setSelectedLists(cleanArr);
    }, []);
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const indexOfList = selectedLists.indexOf(event.target.value);
        if (indexOfList !== -1) {
            const currentLists = selectedLists;
            currentLists.splice(indexOfList, 1);
            setSelectedLists(currentLists);
        } else setSelectedLists(selectedLists.concat([event.target.value]));
    };
    const handleSubmit = () => {
        console.log(selectedLists);
        setOpen(false);
    };
    return (
        <div>
            <Checkbox
                checked={true}
                color="secondary"
                onClick={() => setOpen(true)}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
            />
            <Dialog
                open={open}
                sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
                maxWidth="xs"
            >
                <DialogTitle>Add Movie To List</DialogTitle>
                <DialogContent dividers>
                    <FormGroup>
                        {movieLists.map((list) => (
                            <FormControlLabel
                                key={list.listName}
                                control={
                                    <Checkbox
                                        name={list.listName}
                                        value={list.listName}
                                        onChange={handleCheckboxChange}
                                    />
                                }
                                label={list.listName}
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default MovieDialog;
