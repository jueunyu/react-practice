import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<DayList />}/>
                <Route path="/day/:day" element={<Day />}/>
                <Route path="/empty" element={<EmptyPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;