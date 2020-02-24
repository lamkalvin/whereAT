import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../../components';

/**
 * Improvements:
 *  - Put this function in a shared file b/c it's copied from Favorites screen.
 */
function recentlyViewedListToHtml(data) {
  data = data.reverse();
  return data.map((space, i) => {
    return <Link to={{ state: { data : space }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }}>
      <StudySpaceCard
        index={i}
        data={space}
        hasRemove={false}
      />
    </Link>;
  });
}

const NoResults = () => (
  <div style={{width: '100%', margin: 'auto', textAlign: 'center', marginTop: '350px'}}><h2>No results found.</h2></div>
)

const RecentlyViewedPage = (props) => {
    console.log(props.data)

    return (
        <div>
            <Topbar title='Recently Viewed' hasBack/>
            {props.data.length > 0 ? recentlyViewedListToHtml(props.data) : <NoResults />}
        </div>
    );
}

export default RecentlyViewedPage;
