import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Settings from '../routes/settings';
import ViewSpace from '../routes/view-space';
import Search from '../routes/search';
import Favorites from "../routes/favorites";
import SearchResults from '../routes/search-results';
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";
import { HomePage, HomePageVariant } from '../routes/homePage';
import LocationSearchPage from '../routes/locationSearchPage';
import RecentlyViewedPage from '../routes/recentlyViewedPage';
import { createBrowserHistory } from "history";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NewSpacePage from '../routes/newSpace';
import Homebar from './homebar';

const history = createBrowserHistory();
const spaces = require('../study-spaces.json');
let newSpaces = JSON.parse(localStorage.getItem('customSpaces'));
let allSpaces = newSpaces ? spaces.data.concat(newSpaces.data) : spaces;
let recentlyViewedSpaces = JSON.parse(localStorage.getItem('recentlyViewedSpaces'));

const Wrapper = styled.div`
    height : 100%;
    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 300ms, transform 300ms;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transform: scale(0.97);
        transition: opacity 300ms, transform 300ms;
    }

    div.transition-group {
        position: relative;
    }

    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
    }
`;

function clearAllLocalData() {
    localStorage.setItem('userPresets', JSON.stringify({
        "data": []
    }));
    localStorage.setItem('customSpaces', JSON.stringify({
        "data": []
    }));
    localStorage.setItem('favoriteSpaces', JSON.stringify({
        "data": []
    }));
    localStorage.setItem('recentlyViewedSpaces', JSON.stringify({
        "data": []
    }));
}

function Container({ location, ...props }) {
    const [showVariant, setShowVariant] = useState(0);

    useEffect(() => {
        newSpaces = JSON.parse(localStorage.getItem('customSpaces'));
        allSpaces = newSpaces ? spaces.data.concat(newSpaces.data) : spaces;
        recentlyViewedSpaces = JSON.parse(localStorage.getItem('recentlyViewedSpaces'));
    })

    return (
        <Wrapper>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={'fade'}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route path="/search-results" component={SearchResults} />
                            <Route path="/favorites" render={() => <Favorites />} />
                            <Route path="/settings">
                                <Settings handleClick={clearAllLocalData} logOut={props.logOut} />
                            </Route>
                            <Route path="/view-space" component={ViewSpace} />
                            <Route path="/search">
                                <Search data={allSpaces} />
                            </Route>
                            <Route path="/location-search">
                                <LocationSearchPage data={allSpaces} />
                            </Route>
                            <Route path="/recently-viewed">
                                <RecentlyViewedPage data={recentlyViewedSpaces.data} />
                            </Route>
                            <Route path="/new-space">
                                <NewSpacePage />
                            </Route>
                            <Route path="/homeAlt" render={() => {setShowVariant(true); return (<HomePageVariant history={history} data={allSpaces} />)}} />
                            <Route path="/home" render={() => {setShowVariant(false); return (<HomePage history={history} data={allSpaces} />)}} />
                            <Route exact path="/" >
                                {showVariant
                                    ? <Redirect to="/homeAlt" />
                                    : <HomePage history={history} data={allSpaces} />
                                }
                            </Route>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
            <Homebar />
        </Wrapper>
    );
}

export default withRouter(Container);
