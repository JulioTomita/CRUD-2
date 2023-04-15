import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => {

    return (
        <Switch>
            <Route exact path='/index.html'>
                PRODUTOS
            </Route>

            <Route exact path='/site2.html'>
                VENDAS
            </Route>

        </Switch>

    );
}