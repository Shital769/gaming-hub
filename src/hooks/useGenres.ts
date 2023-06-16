// import genres from "../data/genres";
import useData from "./useData";

//fetching genres
export interface Genre {
  // image_background(image_background: any): string;
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

//To call the data from the application directly, we use the below function and use data from "/src/data/genres.ts"

// const useGenres = () => {
//   {data: genres, isLoading: false, console.error(:null);
//   }
// }

export default useGenres;
