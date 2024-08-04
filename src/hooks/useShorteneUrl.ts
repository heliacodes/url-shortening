//   this is for the bitly api
import axios from "axios";
import { useMutation } from "react-query";

interface BitlyResponse {
  link: string;
}

const useShortenUrl = (onSuccess: (shortenedUrl: string) => void) => {
  return useMutation(
    async (longUrl: string): Promise<string> => {
      const response = await axios.post<BitlyResponse>(
        "https://api-ssl.bitly.com/v4/shorten",
        { long_url: longUrl },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `9202561a9c497dea3865ea2cdc3c9c3baea12340`,
          },
        }
      );
      return response.data.link;
    },
    {
      onSuccess: (data) => onSuccess(data),
    }
  );
};

export default useShortenUrl;
