// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import HomePage from './Pages/HomePage';
import EventsPage, { loader } from './Pages/EventsPage';
import EventDetailPage,{loader as eventDetailLoader} from './Pages/EventDetailPage';
import NewEventPage, {action as eventSubmitAction} from './Pages/NewEventPage';
import EditEventPage from './Pages/EditEventPage';
import EventLayout from "./Pages/EventLayout";
import ErrorPage from "./Pages/ErrorPage";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const router = createBrowserRouter([
    
    { path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {index:true,element:<HomePage/>},
        { path:'events',
          element:<EventLayout/>,
          children:[
            { index:true,
              element:<EventsPage/>, 
              // errorElement:<ErrorPage/>,
              loader:loader
            },
            { 
              path:':eventId',
              id:'event-detail',
              loader:eventDetailLoader,
              children:[
                {index:true,element:<EventDetailPage/>},
                {path:'edit',element:<EditEventPage/>}
              ]
            },
            {path:'new',element:<NewEventPage/>, action:eventSubmitAction},
            
        ]}
        
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
