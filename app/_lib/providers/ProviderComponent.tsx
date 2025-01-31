import { store } from '@/redux/store'
import React, { FC } from 'react'
import { Provider } from 'react-redux'

const ProviderComponent:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderComponent
