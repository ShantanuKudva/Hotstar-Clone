import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import {
  QueryStartAtConstraint,
  collection,
  doc,
  getDocs,
  query,
  getDoc,
} from "firebase/firestore";

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieRef = collection(db, "movies");
        const querySnapshot = await getDocs(movieRef);

        // Create arrays for different types
        const recommends = [];
        const newDisney = [];
        const originals = [];
        const trending = [];

        querySnapshot.forEach((doc) => {
          const movie = doc.data();

          // Categorize movies based on the "type" field
          switch (movie.type) {
            case "recommend":
              recommends.push({ id: doc.id, ...movie });
              break;
            case "new":
              newDisney.push({ id: doc.id, ...movie });
              break;
            case "original":
              originals.push({ id: doc.id, ...movie });
              break;
            case "trending":
              trending.push({ id: doc.id, ...movie });
              break;
            default:
              // Handle other types or ignore
              break;
          }
        });

        // Dispatch the categorized movies to the Redux store
        dispatch(
          setMovies({
            recommended: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]); // Make sure to add dispatch as a dependency

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  background: url("/images/home-background.png");
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  background-size: cover;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
