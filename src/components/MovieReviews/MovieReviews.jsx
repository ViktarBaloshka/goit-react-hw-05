import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../services/api";
import clsx from "clsx";
import s from "./MovieReviews.module.css";
export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMoviesReviews(moviesId);
        setReviews(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getReviews();
  }, [moviesId]);
  if (!reviews) return <p>Loading...</p>;
  return (
    <div className={clsx(s.containerReviews)}>
      <ul>
        {!reviews.length && <h2>No reviews</h2>}
        {reviews.map((item) => (
          <li key={item.id}>
            <p>
              <strong>Username: </strong>
              {item.author}
            </p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
