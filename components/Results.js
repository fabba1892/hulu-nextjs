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

// resultsto tmdb api serverSide to get the genre
// thumbnail and fetch of data working
// thumbnail objects render lazy loading images out da box, and p tags of name
// now see thumbUp release date mvie vote count etc
// style the movi name hover etc
// grid cols when going to bigger screen
// now have support for 4k movbile desktp scrns
// yarn add react-flip-move animation is working

