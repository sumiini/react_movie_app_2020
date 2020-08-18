import React from "react";
import PropTypes from "prop-types";

// component가 state가 필요 없을 경우에는 class component가될 필요없다.

function Movie({id,year,title,summary,poster}){

    return <h5>{title}</h5>
}

Movie.propTpyes={
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;