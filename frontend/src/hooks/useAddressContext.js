import { AddressContext } from "../context/AddressContext"
import { useContext } from "react"

export const useAddressContext = () => {
  const context = useContext(AddressContext)

  if(!context) {
    throw Error('useAddressContext must be used inside an AddressContextProvider')
  }

  return context
}