import useData from "../useData";

export interface Genre {
  image_background(image_background: any): string | undefined;
  id: number;
  name: string;
}



const useGenres = () => useData<Genre>("/genres")
  

export default useGenres;
