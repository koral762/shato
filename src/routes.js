import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { Gallery } from './pages/Gallery'
import { Availability } from './pages/Availability'

export const routes=[
    {
        path: '/',
        component: Home,
    },
 
    {
        path: '/ContactUs',
        component: ContactUs,
    },
    {
        path: '/gallery',
        component: Gallery,
    },
    {
        path: '/Availability',
        component: Availability,
    },
 
]