import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

//fetching genres
export interface Genre {
  // image_background(image_background: any): string;
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs, for 24hr data will be fresh, so no request will be made to the backened genres
    initialData: genres,
    // initialData: {count:genres.length, results:genres}
  });

//To call the data from the application directly, we use the below function and use data from "/src/data/genres.ts"

// const useGenres = () => {
//   {data: genres, isLoading: false, console.error(:null);
//   }
// }

export default useGenres;
