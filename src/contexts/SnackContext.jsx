import React, { useContext, createContext } from "react";
import { notification } from 'antd';

const SnackContext = createContext();

const SnackProvider = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (msg, desc, position) => {
        api.info({
            message: msg,
            description: desc,
            placement: position,
        });
    };

    const errorNotification = (msg, desc, position) => {
        api.error({
            message: msg,
            description: desc,
            placement: position,
        });
    };

    const successNotification = (msg, desc, position) => {
        api.success({
            message: msg,
            description: desc,
            placement: position,
        });
    };

    return (
        <SnackContext.Provider
            value={{ successNotification, openNotification, errorNotification }}
        >
            {contextHolder}
            {children}
        </SnackContext.Provider>
    )
}
export default SnackProvider;

export const useSnackContext = () => useContext(SnackContext)


