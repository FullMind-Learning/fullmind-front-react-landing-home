import '../../shared/css/bootstrap.min.css'
import '../../../node_modules/animate.css/animate.css'
import '../../shared/css/boxicons.min.css'
import '../../shared/css/flaticon.css'
import "../../shared/css/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '../../shared/css/style.css'
import '../../shared/css/responsive.css'
import '../../shared/css/rtl.css'

// Multicolor if you want this color comment out 
// import '../public/css/colors/brink-pink-style.css'
// import '../public/css/colors/pink-style.css'
// import '../public/css/colors/purple-style.css'

import Layout from './Layout/Layout'


import { Provider } from 'react-redux'
import { useStore } from '../../store'

export default function FullMindApp({ Component, pageProps }) {
    const store = useStore(pageProps)

    return (
        <Provider store={store}>
            <Layout />
            <Component {...pageProps} />
        </Provider>
    )
}