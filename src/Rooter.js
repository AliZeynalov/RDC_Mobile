/**
 * Created by alizeynalov on 05/09/2017.
 */
import React, {Component} from 'react';
import {Scene, Stack, Router} from 'react-native-router-flux';
import EntryPage from './components/EntryPage';


export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Stack key="root">
                <Scene key="entryPage" component={EntryPage} hideNavBar initial/>
                {/*<Scene key="selectBranchAddress" component={SelectBranchAddress} hideNavBar/>*/}


                </Stack>
            </Router>

        );
    }
}