import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const {children} = props;

  const [isLogin, setIsLogin] = useState(false); // false: chưa đăng nhập

  return (
    <AppContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </AppContext.Provider>
  );
};
