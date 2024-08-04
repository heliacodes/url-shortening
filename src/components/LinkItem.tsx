import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  longUrl: string;
  shortUrl: string;
  onDelete: () => void;
}

const LinkItem = ({ longUrl, shortUrl, onDelete }: Props) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    //returns a promise
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container bg-white rounded-lg p-3 my-3 shadow-md sm:flex sm:items-center sm:justify-between sm:px-6">
      <div className="flex items-center gap-1">
        <p className="w-[95%] mx-auto overflow-hidden whitespace-nowrap text-ellipsis pb-2">
          {longUrl}
        </p>
        <button onClick={onDelete}>
          <MdDeleteOutline color="gray" />
        </button>
      </div>
      <hr className="w-full text-gray mb-1 sm:hidden " />
      <div className="w-[95%] mx-auto sm:flex sm:items-center sm:justify-end gap-2">
        <a href="" className="text-cyan  font-semibold">
          {shortUrl}
        </a>

        {copySuccess ? (
          <button
            disabled
            className="w-full sm:w-[18%] rounded-lg mt-2 bg-darkViolet text-white  text-sm font-semibold py-2 transition-all duration-200"
          >
            Copied!
          </button>
        ) : (
          <button
            onClick={handleCopy}
            className="button w-full sm:w-24 rounded-lg mt-2"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default LinkItem;
