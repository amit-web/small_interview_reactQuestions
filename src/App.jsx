import "./App.css";
import Corousel from "./components/corousel/Corousel";
import DynamicCheckbox from "./components/DynamicCheckboxCounter/DynamicCheckbox";
import InfiniteVirtualizedList from "./components/VirtualizedList/InfiniteVirtualizedList";
//import VirtualizedList from "./components/VirtualizedList/VirtualizedList";
// import AboutUs from "./components/tabNavigation/AboutUs";
// import Contact from "./components/tabNavigation/Contact";
// import Home from "./components/tabNavigation/Home";
// import Register from "./components/tabNavigation/Register";
// import DropdownMenu from "./components/Dropdown/DropdownMenu";
// import SignUp from "./components/formvalidation/SignUp";
// import Memoization from "./components/MemoizationExample/Memoization";
//import RoutingExample from "./components/tabNavigation/RoutingExample";
// import MainModal from './components/modlComponent/MainModal';
// import Modal from "./components/modlComponent/Modal";
//import DebauncedSearch from "./components/DebauncedSearchBar/DebauncedSearch";
// import Counter from "./components/counter/Counter";
// import FetcchApi from "./components/FetchDataAPI/FetcchApi";
// import Todomain from "./components/Todomain";

// import {createBrowserRouter,RouterProvider}  from "react-router-dom"
function App() {
  // const router = createBrowserRouter([
  //      {
  //       path:"/",
  //       element:<RoutingExample/>,
  //       children:[
  //         {
  //           path:"home",
  //           element:<Home/>
  //          },
  //         {
  //           path:"contact",
  //           element:<Contact/>
  //          },
  //          {
  //           path:"register",
  //           element:<Register/>
  //          },
  //          {
  //           path:"about",
  //           element:<AboutUs/>
  //          }
  //       ]
  //      },

  // ])
  return (
    <>
      <div>
        {/* <Todomain /> */}
        {/* <Counter/> */}
        {/* <FetcchApi/> */}
        {/* <DebauncedSearch/> */}
        {/* <MainModal/> */}
        {/* <SignUp/> */}
        {/* <DropdownMenu/> */}
        {/* <Memoization/> */}
        {/* <RouterProvider router={router}>
            <RoutingExample/>
        </RouterProvider> */}
        {/*         
        <Corousel/> */}
        {/* <DynamicCheckbox /> */}
        {/* <VirtualizedList/> */}
        <InfiniteVirtualizedList/>
      </div>
    </>
  );
}

export default App;
