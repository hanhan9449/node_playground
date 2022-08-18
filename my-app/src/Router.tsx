import {BrowserRouter, RouteObject, useRoutes} from 'react-router-dom'
import { Bar } from './pages/Bar'
import { Baz } from './pages/Baz'
import { Foo } from './pages/Foo'
const router: RouteObject[] = [
    {
        element: <Foo/>,
        index: true,
        path: 'Foo'
    },
    {
        element: <Bar/>,
        path: 'Bar'
    },
    {
        element: <Baz/>,
        path: 'Baz'
    },
]

export function CRouter() {
    const routes = useRoutes(router)

    return <>
        {routes}
    </>
}