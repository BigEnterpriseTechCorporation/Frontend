import { AuthProvider } from "./auth";
import { MainMenu } from '@/__generate/MainMenu'

export default function Context(){
  return <AuthProvider>
    <MainMenu/>
  </AuthProvider>
}