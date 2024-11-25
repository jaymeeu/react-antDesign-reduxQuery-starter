import React, { Suspense, lazy } from 'react'
import { ProtectedRoutes } from './ProtectedRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from '@/components/Loading'
import { ConfigProvider } from 'antd'
import SnackProvider from '@/contexts/SnackContext'
import Home from '@/pages/Home'


export const Routing = () => {
    const isModeDark = false

    const LazyLoad = ({ children }) => (
        <Suspense fallback={(<Loading />)}>
            {children}
        </Suspense>
    )

    const Check = lazy(() => import('@/pages/Check'))

    const routes = [
        // customer routes
        { path: "/overview", element: <Check />, isProtected: true, },
    ]

    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Montserrat",
                    colorPrimary: '#26A66B',
                },
                components: {
                    Table: {
                        headerBg: isModeDark && "rgb(71,85,105)",
                        headerColor: isModeDark && "rgba(255, 255, 255, 0.95)",
                        colorBgContainer: isModeDark && "rgb(79, 94, 114)",
                        colorText: isModeDark && "rgba(255, 255, 255, 0.88)",
                        rowHoverBg: isModeDark ? "rgb(71,85,105)" : "#dcdcdc"
                    },
                    Switch: {
                        handleBg: "#05021a"
                    },
                },
            }}
        >

            <SnackProvider>
                <div className='bg-white dark:bg-gray-700'>

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ProtectedRoutes />} >
                                {
                                    routes.map(({ path, element, isProtected }, i) => {
                                        // Logic to handle the route rendering
                                        if (isProtected) {
                                            return (
                                                <Route
                                                    key={i}
                                                    path={path}
                                                    element={
                                                        <LazyLoad>{element}</LazyLoad>
                                                    }
                                                />
                                            );
                                        }
                                    }
                                    )
                                }
                            </Route>

                            <Route path="/login" element={<Home />} />
                            <Route path="*" element={<>404</>} />
                        </Routes>

                    </BrowserRouter>
                </div>
            </SnackProvider>
        </ConfigProvider>
    )
}