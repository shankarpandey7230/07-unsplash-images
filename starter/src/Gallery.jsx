import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url =
  "https://api.unsplash.com/search/photos?client_id=7J-v3FjJ5PlVWeD9-z5zNQpZ4UsS4I4oEaVt96kb6Z4&query=office";
const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  console.log(response);
  return <h2>Gallery</h2>;
};

export default Gallery;
