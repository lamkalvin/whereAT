import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Settings from '../routes/settings';
import ViewSpace from '../routes/view-space';
import Search from '../routes/search';
import Favorites from "../routes/favorites";
import SearchResults from '../routes/search-results';
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import LandingPage from '../routes/landingPage';
import HomePage from '../routes/homePage';
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
let favoriteSpaces = JSON.parse(localStorage.getItem('favoriteSpaces'));

const Wrapper = styled.div`
    height : 100%;
    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
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
}

function Container({ location, ...props }) {

    useEffect(() => {
        newSpaces = JSON.parse(localStorage.getItem('customSpaces'));
        allSpaces = newSpaces ? spaces.data.concat(newSpaces.data) : spaces;
        favoriteSpaces = JSON.parse(localStorage.getItem('favoriteSpaces'));
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
                                <div>
                                    <Route path="/search-results" render={() => <SearchResults data={spaces.data[0]} />} />
                                    <Route path="/favorites" render={() => <Favorites />} />
                                    <Route path="/settings">
                                        <Settings handleClick={clearAllLocalData} logOut={props.logOut} />
                                    </Route>
                                    <Route path="/view-space" component={ViewSpace} />
                                    <Route path="/search">
                                        <Search />
                                    </Route>
                                    <Route path="/location-search">
                                        <LocationSearchPage data={allSpaces} />
                                    </Route>
                                    <Route path="/recently-viewed">
                                        <RecentlyViewedPage data={spaces.data[0]} />
                                    </Route>
                                    <Route path="/new-space">
                                        <NewSpacePage />
                                    </Route>
                                    <Route exact path="/" render={() => <HomePage history={history} data={allSpaces}/>} />
                                </div>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
            <Homebar />
        </Wrapper>
    );
}

export default withRouter(Container);
