import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import CreatePage from "./pages/CreatePage";

function App() {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreatePage />} />
				</Routes>
		</div>
	);
}

export default App;