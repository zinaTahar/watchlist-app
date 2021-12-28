import { Switch } from "@mui/material";
import { useState } from "react";
import Content from "../content/content";
import css from "./app.module.css";
const App = () => {
    const [checked, setChecked] = useState(true);

    return (
        <div
            className={`${css.background} ${
                checked ? css.darkBackground : css.brightBackground
            }`}
        >
            <div className={`${css.navbar} ${checked ? css.dark : css.bright}`}>
                <div className={css.mainNavbar}>
                    <p>My Watch List</p>
                    <div className={css.login}>register/login</div>
                </div>
                <div className={css.switchControl}>
                    <span>Dark mode?</span>
                    <span>
                        <Switch
                            color="secondary"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </span>
                </div>
            </div>
            <div
                className={`${css.listContainer} ${
                    checked ? css.dark : css.bright
                }`}
            >
                <Content
                    user={{
                        username: "Zinaida the third",
                        profileImg:
                            "https://mui.com/static/images/avatar/1.jpg",
                        lists: [
                            {
                                listName: "my list",
                                movies: [
                                    {
                                        name: "Matrix",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 2",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 3",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                ],
                            },
                            {
                                listName: "me and omri",
                                movies: [
                                    {
                                        name: "Matrix",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 2",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 3",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                    {
                                        name: "Matrix4",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 5",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 6",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                    {
                                        name: "Matrix 7",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 8",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 9",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                    {
                                        name: "Matrix 10",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 11",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                    {
                                        name: "Matrix 12",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 13",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 14",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                    {
                                        name: "Matrix 15",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270536/movies/matrix1_cjfkqm.jpg",
                                    },
                                    {
                                        name: "Matrix 16",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix2_vraefb.jpg",
                                    },
                                    {
                                        name: "Matrix 17",
                                        movieImg:
                                            "https://res.cloudinary.com/dnky6url6/image/upload/v1640270511/movies/matrix3_cb1ltn.jpg",
                                    },
                                ],
                            },
                            {
                                listName: "documentry time",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "my list1",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "me and omri1",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "documentry time1",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "my list2",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "me and omri2",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                            {
                                listName: "documentry time2",
                                movies: [
                                    {
                                        name: "Harry Potter",
                                        movieImg: "example",
                                    },
                                ],
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default App;
