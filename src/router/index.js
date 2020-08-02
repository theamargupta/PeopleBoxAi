import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('../Container/Home'));
const Sidebar = React.lazy(() => import('../Components/Sidebar'));
const AddNote = React.lazy(() => import('../Container/AddNotesPage'));
const NotFound = React.lazy(() => import('../Container/NotFoundPage'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Sidebar Render={Home} />} />
        <Route
          exact
          path='/create'
          render={() => <Sidebar Render={AddNote} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
