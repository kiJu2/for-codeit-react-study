import "./App.css";
import { ToastProvider } from "./contexts/toast-context";
import CardListPage from "./pages/card-list.page";
import ToastContainer from "./components/toast-container";

function App() {
  return (
    <>
      <ToastProvider>
        <CardListPage />
        <ToastContainer />
      </ToastProvider>
    </>
  );
}

export default App;
