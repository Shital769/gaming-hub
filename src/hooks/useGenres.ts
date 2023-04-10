import useData from "./useData";

export interface Genre {
  // image_background(image_background: any): string;
  id: number;
  name: string;
  image_background: string
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
