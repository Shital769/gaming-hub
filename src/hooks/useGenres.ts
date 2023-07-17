import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import  Genre  from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    //24 hrs, for 24hr data will be fresh, so no request will be made to the backened genres
    initialData: { count: genres.length, results: genres, next: null },
  });

//To call the data from the application directly, we use the below function and use data from "/src/data/genres.ts"

// const useGenres = () => {
//   {data: genres, isLoading: false, console.error(:null);
//   }
// }

export default useGenres;
