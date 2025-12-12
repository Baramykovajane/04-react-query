import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/movieService";

export function useMovies(query: string, page: number) {
  return useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),

    enabled: !!query,
    placeholderData: (prev) => prev,
  });
}
