import Thumbnail from "./Thumbnail";
import Flipmove from "react-flip-move";

function Results({ results }) {
  return (
    <Flipmove
      className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 
    xl:grid-cols-4 3xl:flex flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </Flipmove>
  );
}

export default Results;
