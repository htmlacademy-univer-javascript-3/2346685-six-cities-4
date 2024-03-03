import MainPage from "./pages/main"
import type { MainParams } from "./pages/main";


function App({ placesCount }: MainParams): JSX.Element {
    return (
        <MainPage placesCount={placesCount} />
    )
}

export default App;