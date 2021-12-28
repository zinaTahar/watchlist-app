import {
    Avatar,
    Tabs,
    Tab,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { FC, useEffect, useState } from "react";
import User from "../utils/user";
import css from "./content.module.css";
import ListDisplay from "../list-display/listDisplay";
import AllMovies from "../utils/allMovies";
import WatchList from "../utils/watchList";

interface Props {
    user: User;
}
const Content: FC<Props> = (props) => {
    const [username, userImg, userLists] = [
        props.user.username,
        props.user.profileImg,
        props.user.lists,
    ];
    const [watchLists, setWatchLists] = useState(userLists);
    const [activeTabs, setActiveTabs] = useState(AllMovies);
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newListName, setNewListName] = useState("");

    const handleTabs = (event: React.MouseEvent<HTMLElement>) => {
        const selectedList = (event.target as HTMLDataListElement).firstChild;
        const selectedListValue = selectedList?.nodeValue?.toString() || "";
        const result = watchLists.filter(
            (list) => list.listName === selectedListValue
        );

        if (activeTabs.includes(result[0])) return;
        setActiveTabs(activeTabs.slice().concat(result));
    };
    const handleListRemoval = (list: WatchList) => {
        const watchListsDup = watchLists;
        const indexListToRemove = watchLists.indexOf(list);
        watchListsDup.splice(indexListToRemove, 1);
        setWatchLists(watchListsDup);
    };
    const watchListValues = watchLists.map((item) => (
        <li onClick={handleTabs} key={item.listName}>
            <div className={css.listContainer}>
                {item.listName}
                <div
                    onClick={() => handleListRemoval(item)}
                    className={editMode ? css.deleteListBtn : css.hide}
                >
                    <DeleteIcon />
                </div>
            </div>
        </li>
    ));
    const openTabs = activeTabs.map((item) => (
        <Tab key={item.listName + 1} label={item.listName} />
    ));
    const handleCloseTab = () => {
        setActiveTabs(
            activeTabs.filter(
                (tab) => tab.listName !== activeTabs[value].listName
            )
        );
        if (value > 0) setValue(value - 1);
    };
    const handleChange = (event: any, newValue: any) => setValue(newValue);
    const handleAddList = () => {
        var listIndex = -1;
        watchLists.map((list) => {
            if (list.listName === newListName.trim())
                listIndex = watchLists.indexOf(list);
        });
        const newList: WatchList = {
            listName: newListName.trim(),
        };
        if (listIndex === -1) setWatchLists(watchLists.concat([newList]));
        setOpen(false);
    };
    return (
        <div className={css.contentContainer}>
            <div className={css.profile}>
                <div
                    onClick={() => setEditMode(!editMode)}
                    className={css.editBtn}
                >
                    <EditIcon />
                </div>
                <div className={css.avatar}>
                    <Avatar
                        alt={username}
                        src={userImg}
                        sx={{ width: 90, height: 90 }}
                    />
                    <p>Hey {username.split(" ")[0]}!</p>
                </div>
                <div className={css.watchListsContainer}>
                    <ul className={css.watchLists}>
                        <li
                            onClick={() => setOpen(true)}
                            className={css.addNewListBtn}
                        >
                            Add New List!
                        </li>
                        <Dialog
                            open={open}
                            sx={{
                                "& .MuiDialog-paper": {
                                    width: "80%",
                                    maxHeight: 435,
                                },
                            }}
                        >
                            <DialogTitle>Add New Watch List</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Choose your new list name
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="List Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) =>
                                        setNewListName(e.target.value)
                                    }
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleAddList}>
                                    Add List
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <li
                            className={css.allMoviesBtn}
                            onClick={() =>
                                activeTabs.includes(AllMovies[0])
                                    ? null
                                    : setActiveTabs(
                                          activeTabs.concat(AllMovies)
                                      )
                            }
                        >
                            All Movies
                        </li>
                        {watchListValues}
                    </ul>
                </div>
            </div>
            <div className={css.displayContainer}>
                <div className={css.tabsContainer}>
                    <Tabs
                        textColor="inherit"
                        indicatorColor="secondary"
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        className={css.tabsBar}
                    >
                        {openTabs}
                    </Tabs>
                </div>
                <div className={css.screenDisplay}>
                    <div className={css.moviesDisplay}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={
                                activeTabs.length > 0
                                    ? css.closeTabBtn
                                    : css.hide
                            }
                            onClick={handleCloseTab}
                        >
                            Close Tab
                        </Button>
                        {activeTabs.length > 0 ? (
                            <ListDisplay
                                watchLists={userLists}
                                allMoviesList={
                                    activeTabs[value].listName === "All Movies"
                                        ? true
                                        : false
                                }
                                watchListMovies={activeTabs[value].movies}
                            ></ListDisplay>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
