import React, {createContext, useContext} from "react"
function CreateContext ({children}){
  const UserInfosContext = createContext({
    nome: 'brendon'
  })
  return(
    <UserInfosContext.Provider value={{nome: 'brendon'}}>
      {children}
    </UserInfosContext.Provider>
  )
}
export default function App(){
  return(
    <CreateContext></CreateContext>
  )
}