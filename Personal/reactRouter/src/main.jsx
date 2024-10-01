import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Root, { 
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact,{
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact,{
  action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    //  Move the contacts route to be a child of the root route
    children: [
      {
      //  { index:true } instead of { path: "" }. That tells the router to match and render this route when the user is at the parent route's exact path, so there are no other child routes to render in the <Outlet>
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,// jab user fav karega to ye action
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
