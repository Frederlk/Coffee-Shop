import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from 'react';
import { Header, Footer } from './_containers';
import * as flsForms from "./js/files/forms/forms";
import dynamicAdaptive from './hooks/dyncamicAdapt';
import { Spinner } from './_components'

const Page404 = lazy(() => import('./_pages/Page404')),
    HomePage = lazy(() => import('./_pages/HomePage')),
    OurCoffeePage = lazy(() => import('./_pages/OurCoffeePage')),
    PleasurePage = lazy(() => import('./_pages/PleasurePage')),
    ProductPage = lazy(() => import('./_pages/ProductPage'));


const App = () => {
    useEffect(() => {
        flsForms.formFieldsInit({ viewPass: false });
        flsForms.formSubmit();
        dynamicAdaptive();
    })

    return (
        <Router>
            <Header />
            <main className='page'>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path="our" element={<OurCoffeePage />} />
                        <Route path="pleasure" element={<PleasurePage />} />
                        <Route path="coffee/:id" element={< ProductPage />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    )
}

export default App