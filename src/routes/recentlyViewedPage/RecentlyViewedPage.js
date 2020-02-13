import React, {useState} from 'react';
import { Topbar } from '../../components';

const RecentlyViewedPage = () => {
    const [noResults, setNoResults] = useState(false);

    return (
        <div>
            <Topbar title='Recently Viewed' hasBack/>
        </div>
    );
}

export default RecentlyViewedPage;