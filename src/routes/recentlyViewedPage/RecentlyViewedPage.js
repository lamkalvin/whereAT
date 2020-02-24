import React from 'react';
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
    return <Link key={i}
      to={{ state: { data: space }, pathname: "/view-space" }}
      style={{ textDecoration: "none", color: "#000000" }}
    >
      <StudySpaceCard
        index={i}
        data={space}
        hasRemove={false}
      />
    </Link>;
  });
}

const NoResults = () => (
  <div style={{ width: '100%', margin: 'auto', textAlign: 'center', marginTop: '350px' }}>
      <h5>No recently viewed spaces <span role="img" aria-label="scream">😱</span>
        <br /> Check out a space and see it here!
      </h5>
  </div>
)

const RecentlyViewedPage = (props) => {

  return (
    <div style={{marginBottom: '50px'}}>
      <Topbar title='Recently Viewed' hasBack />
      {props.data.length > 0 ? recentlyViewedListToHtml(props.data) : <NoResults />}
    </div>
  );
}

export default RecentlyViewedPage;
