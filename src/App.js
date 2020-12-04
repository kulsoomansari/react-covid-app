import './App.css';
import BookList from './Components/BookList';
import ThemeContextProvider from './context/ThemeContext';
// import Api from './Components/Api';
// import Main from './Main';
// import Covid from './Components/Covid'
function App() {
  return (
    <div>
   {/* <Covid /> */}
   {/* <Api />
   <Main /> */}
   <ThemeContextProvider>
     <BookList />
   </ThemeContextProvider>
    </div>
  );
}

export default App;
