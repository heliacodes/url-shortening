import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useShortenUrl from "../hooks/useShorteneUrl";
import LinkItem from "./LinkItem";

const schema = z.object({
  url: z.string().url("Please add a  link"),
});

type FormData = z.infer<typeof schema>;

const LinkBox = () => {
  const [submittedUrls, setSubmittedUrls] = useState<string[]>(() => {
    const saved = localStorage.getItem("submittedUrls");
    return saved ? JSON.parse(saved) : [];
  });

  const [shortenedUrls, setShortenedUrls] = useState<string[]>(() => {
    const saved = localStorage.getItem("shortenedUrls");
    return saved ? JSON.parse(saved) : [];
  });

  const { mutate, isLoading } = useShortenUrl((data) => {
    setShortenedUrls((prevUrls) => {
      const updatedUrls = [...prevUrls, data];
      localStorage.setItem("shortenedUrls", JSON.stringify(updatedUrls));
      return updatedUrls;
    });
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setSubmittedUrls((prevUrls) => {
      const updatedUrls = [...prevUrls, data.url];
      localStorage.setItem("submittedUrls", JSON.stringify(updatedUrls));
      return updatedUrls;
    });
    mutate(data.url);
  };

  const handleDelete = (index : number) => {
    setSubmittedUrls((prevUrls) => {
      const updatedUrls = prevUrls.filter((_, i) => i !== index);
      localStorage.setItem("submittedUrls", JSON.stringify(updatedUrls));
      return updatedUrls;
    });

    setShortenedUrls((prevUrls) => {
      const updatedUrls = prevUrls.filter((_, i) => i !== index);
      localStorage.setItem("shortenedUrls", JSON.stringify(updatedUrls));
      return updatedUrls;
    });
  }

  return (
    <section className="max-h-[1000vh] w-full link-section py-5">
      <div className="h-32 sm:h-28 py-2 px-5 sm:py-3 sm:px-10 bg-darkViolet container relative rounded-lg">
        <div className="mx-auto w-full h-full flex-center max-sm:flex-col">
          <form
            className="w-full sm:flex sm:items-center sm:justify-between sm:gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative w-full">
              <input
                type="text"
                {...register("url")}
                placeholder="Shorten a link here..."
                className={`w-full text-sm text-grayViolet py-2 px-3 focus:ring-0 focus:outline-none rounded-md ${
                  errors.url
                    ? "border-red-500 placeholder:text-red"
                    : "border-gray-300"
                }`}
              />
              {errors.url && (
                <i className="text-red text-xs absolute top-full left-0 bottom-0">{errors.url.message}</i>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="button rounded-md px-5 text-nowrap max-sm:w-full font-extrabold max-sm:mt-6"
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4">
        {submittedUrls.map((url, index) => (
          <LinkItem key={index} longUrl={url} shortUrl={shortenedUrls[index]} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </section>
  );
};

export default LinkBox;
