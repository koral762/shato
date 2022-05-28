import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { Gallery } from './pages/Gallery'

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
 
]