import React, { Suspense, lazy } from 'react'
import { ProtectedRoutes } from './ProtectedRoutes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loading from '@/components/Loading'
import ToggleBtn from '@/components/ToggleBtn'
import { useTheme } from '@/contexts/ThemeContext'
import { ConfigProvider } from 'antd'
import SnackProvider from '@/contexts/SnackContext'
import Home from '@/pages/Home'


export const Routing = () => {
    const { isModeDark } = useTheme()

    const LazyLoad = ({children}) => (
        <Suspense fallback={(<Loading />)}>
           {children}
        </Suspense>
    )

    const Check = lazy(() => import('@/pages/Check'))

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
                                <Route path="" element={<Home/>} />
                                <Route path="/check" element={<LazyLoad><Check /></LazyLoad>} />
                            </Route>

                            <Route path="/home" element={<Home/>} />
                            {/* <Route path='/signup' element={<SignUp />} />
                            <Route path='/email-confirmation' element={<Confirmation />} />
                            <Route path='/forget-password' element={<ForgetPassword />} />
                            <Route path='/set-password/:email' element={<SetPassword />} />
                            <Route path='/user-set-password' element={<UserSetPassword />} /> */}
                            <Route path="*" element={<>404</>} />
                        </Routes>

                        <ToggleBtn />

                    </BrowserRouter>
                </div>
            </SnackProvider>
        </ConfigProvider>
    )
}