   // Router.js
   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createNativeStackNavigator } from '@react-navigation/native-stack';
   import Bookconnect from "../screens/home";
   import ChatApp from "../screens/athena";
   import Navbar from "../components/navbar"; // Importe o Navbar
   import Cate from '../screens/cate';
   import Login from "../screens/login";
   import Favoritos from '../screens/favoritos';
   import Estante from '../screens/estante';
   import Sobre from '../screens/sobre';
   import NovaSenha from "../screens/nova-senha"
   // Importando todas as categorias
   import AutoAjuda from '../screens/categorias/AutoAjuda';
   import Biografias from '../screens/categorias/Biografias';
   import Ciencia from '../screens/categorias/Ciencia';
   import Culinaria from '../screens/categorias/Culinaria';
   import Ficcao from '../screens/categorias/Ficcao';
   import Filosofia from '../screens/categorias/Filosofia';
   import Historia from '../screens/categorias/Historia';
   import Infantil from '../screens/categorias/Infantil';
   import Negocios from '../screens/categorias/Negocios';
   import Religiao from '../screens/categorias/Religiao';
   import Romance from '../screens/categorias/Romance';
   import Saude from '../screens/categorias/Saude';
   import Suspense from '../screens/categorias/Suspense';
   import Terror from '../screens/categorias/Terror';
   import Turismo from '../screens/categorias/Turismo';
   import Arte from '../screens/categorias/Arte';
   import BookDetails from '../screens/bookdetail';
   import Chat from '../screens/chat';
   import Cadastro from '../screens/cadastro'
   import EsqueceuSenha from '../screens/esqueci-senha'

   const Stack = createNativeStackNavigator();

   export default function Router() {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">

         <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} // Oculta a barra de título
                />
          <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro} 
                    options={{ headerShown: false }} // Oculta a barra de título
                />
                <Stack.Screen 
                    name="EsqueceuSenha" 
                    component={EsqueceuSenha} 
                    options={{ headerShown: false }} // Oculta a barra de título
                />
                <Stack.Screen 
                    name="NovaSenha" 
                    component={NovaSenha} 
                    options={{ headerShown: false }} // Oculta a barra de título
                />

           <Stack.Screen 
             name="Bookconnect" 
             component={Bookconnect} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="ChatApp" 
             component={ChatApp} 
             options={{ headerShown: false }} 
           />
             <Stack.Screen 
             name="Chat" 
             component={Chat} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Categorias" 
             component={Cate} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Favoritos" 
             component={Favoritos} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Estante" 
             component={Estante} 
             options={{ headerShown: false }} 
           />
              <Stack.Screen 
             name="Sobre" 
             component={Sobre} 
             options={{ headerShown: false }} 
           />
           {/* Adicionando as telas de categorias */}
           <Stack.Screen 
             name="Arte" 
             component={Arte} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="AutoAjuda" 
             component={AutoAjuda} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Biografias" 
             component={Biografias} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Ciencia" 
             component={Ciencia} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Culinaria" 
             component={Culinaria} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Ficcao" 
             component={Ficcao} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Filosofia" 
             component={Filosofia} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Historia" 
             component={Historia} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Infantil" 
             component={Infantil} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Negocios" 
             component={Negocios} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Religiao" 
             component={Religiao} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Romance" 
             component={Romance} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Saude" 
             component={Saude} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Suspense" 
             component={Suspense} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Terror" 
             component={Terror} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="Turismo" 
             component={Turismo} 
             options={{ headerShown: false }} 
           />
           <Stack.Screen 
             name="BookDetails" 
             component={BookDetails} 
             options={{ headerShown: false }} 
           />
            
         </Stack.Navigator>
      
       </NavigationContainer>
     );
   }
   