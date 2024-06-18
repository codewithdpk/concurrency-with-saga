import { Suspense, useEffect } from "react";
import "./App.css";
import BreedTable from "./components/BreedTable";
import AppLoader from "./components/Loader";
import { Button, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { breedsFetchStarted } from "./redux/breedSlice";

function App() {
  const dispatch = useDispatch();

  // @ts-ignore
  const appState = useSelector((state) => state.breeds);

  useEffect(() => {
    dispatch(breedsFetchStarted());
  }, []);

  return (
    <div className="App">
      <Header as="h2">All Breeds</Header>

      {appState.status === "loading" ? (
        <AppLoader />
      ) : (
        <Suspense fallback={<AppLoader />}>
          <BreedTable />
        </Suspense>
      )}
    </div>
  );
}

export default App;
