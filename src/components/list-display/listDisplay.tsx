import { FC, useEffect, useState } from "react";
import Movie from "../utils/movie";
import css from "./listDisplay.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button/Button";
import WatchList from "../utils/watchList";
import MovieDialog from "../movie-adding-dialog/movieDialog";

interface Props {
    watchLists: WatchList[];
    watchListMovies?: Movie[];
    allMoviesList: boolean;
}

const ListDisplay: FC<Props> = (props) => {
    const [watchLists, allListMovies = [], allMoviesList] = [
        props.watchLists,
        props.watchListMovies,
        props.allMoviesList,
    ];
    const moviesPerPage = 10;
    const [page, setPage] = useState(1);
    const [moviesToShow, setMoviesToShow] = useState(allListMovies);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setPage(1);
        setEditMode(false);
        setMoviesToShow(
            allListMovies.length < moviesPerPage
                ? allListMovies
                : allListMovies.slice(0, moviesPerPage)
        );
    }, [allListMovies]);

    const handlePageChange = (event: any, value: number) => {
        var firstMovieToShow = 0;
        var moviesToDisplay;
        if (value > 1) firstMovieToShow = moviesPerPage * (value - 1);

        if (firstMovieToShow + moviesPerPage > allListMovies.length)
            moviesToDisplay = allListMovies.slice(firstMovieToShow);
        else
            moviesToDisplay = allListMovies.slice(
                firstMovieToShow,
                firstMovieToShow + moviesPerPage
            );
        setMoviesToShow(moviesToDisplay);
        if (moviesToDisplay.length === 0 && value >= 1)
            handlePageChange(null, value - 1);
        else setPage(value);
    };
    const handleDelete = (movie: Movie) => {
        const movieToDeleteIndex = allListMovies.indexOf(movie);
        allListMovies.splice(movieToDeleteIndex, 1);
        handlePageChange(null, page);
    };

    const moviesList = moviesToShow.map((movie) => (
        <div key={movie.name} className={css.movieContainer}>
            <div className={allMoviesList ? css.favoriteBtn : css.hide}>
                <div className={css.iconContainer}>
                    <MovieDialog movieLists={watchLists}></MovieDialog>
                </div>
            </div>
            <div
                onClick={() => handleDelete(movie)}
                className={editMode ? css.iconContainer : css.hide}
            >
                <DeleteIcon fontSize="small" />
            </div>
            <img
                className={css.movieImg}
                src={movie.movieImg}
                alt={movie.name}
            ></img>
            <div className={css.movieTitle}>{movie.name}</div>
        </div>
    ));

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={allMoviesList ? css.hide : css.editModeBtn}
                onClick={() => setEditMode(!editMode)}
            >
                Edit List
            </Button>
            <div
                className={
                    moviesList.length === 0 ? css.title : css.moviesContainer
                }
            >
                {moviesList.length === 0 ? "No movies to show." : moviesList}
            </div>
            <div className={css.paginationContainer}>
                <Stack spacing={2}>
                    <Pagination
                        count={
                            allListMovies.length % moviesPerPage === 0
                                ? allListMovies.length / moviesPerPage
                                : Math.floor(
                                      allListMovies.length / moviesPerPage + 1
                                  )
                        }
                        size="large"
                        color="secondary"
                        onChange={handlePageChange}
                        page={page}
                    />
                </Stack>
            </div>
        </div>
    );
};
export default ListDisplay;
