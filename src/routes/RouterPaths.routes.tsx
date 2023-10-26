import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import UserReposPage from '../pages/userReposPage/UserReposPage'


export const RouterPaths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<UserReposPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}