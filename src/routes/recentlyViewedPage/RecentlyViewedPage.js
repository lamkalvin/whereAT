import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../../components';

function handleClick() {
  console.log("Recently Viewed card clicked.");
}

/**
 * Improvements:
 *  - Put this function in a shared file b/c it's copied from Favorites screen.
 */
function recentlyViewedListToHtml(data) {
  console.log(data)
  return data.map((space, i) => {
    return <Link to={{ state: { data : space }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }}>
      <StudySpaceCard
        index={i}
        data={space}
        handleClick={handleClick}
        hasRemove={false}
      />
    </Link>;
  });
}

const RecentlyViewedPage = (props) => {
    const [noResults, setNoResults] = useState(false);
    console.log(props.data)

    return (
        <div>
            <Topbar title='Recently Viewed' hasBack/>
            {recentlyViewedListToHtml(props.data.data)}
        </div>
    );
}

export default RecentlyViewedPage;
