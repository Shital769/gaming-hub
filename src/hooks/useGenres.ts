import genres from "../data/genres";
export interface Genre {
  // image_background(image_background: any): string;
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
