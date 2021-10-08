import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './TELAS/PRINCIPAIS/HomeScreen';
import ExploreScreen from './TELAS/PRINCIPAIS/Simulados';
import TelaOBA from './TELAS/OBA/TelaOBA';
import TelaOBF from './TELAS/OBF/TelaOBF';
import TelaOBI from './TELAS/OBI/TelaOBI';
import TelaOBMEP from './TELAS/OBMEP/TelaOBMEP';
import TelaONC from './TELAS/ONC/TelaONC';
import TelaOBQ from './TELAS/OBQ/TelaOBQ';
import TelaONHB from './TELAS/ONHB/TelaONHB';
import CalendarioOBA from './TELAS/OBA/CalendarioOBA';
import CalendarioOBF from './TELAS/OBF/CalendarioOBF';
import CalendarioOBI from './TELAS/OBI/CalendarioOBI';
import CalendarioOBMEP from './TELAS/OBMEP/CalendarioOBMEP';
import CalendarioOBQ from './TELAS/OBQ/CalendarioOBQ';
import CalendarioONC from './TELAS/ONC/CalendarioONC';
import CalendarioONHB from './TELAS/ONHB/CalendarioONHB';
import ConteudosOBA from './TELAS/OBA/ConteudosOBA';
import ProvasOBA from './TELAS/OBA/ProvasOBA';
import VencedoresOBA from './TELAS/OBA/VencedoresOBA';
import ConteudosOBF from './TELAS/OBF/ConteudosOBF';
import ProvasOBF from './TELAS/OBF/ProvasOBF';
import VencedoresOBF from './TELAS/OBF/VencedoresOBF';
import ConteudosOBI from './TELAS/OBI/ConteudosOBI';
import ProvasOBI from './TELAS/OBI/ProvasOBI';
import VencedoresOBI from './TELAS/OBI/VencedoresOBI';
import ConteudosOBMEP from './TELAS/OBMEP/ConteudosOBMEP';
import ProvasOBMEP from './TELAS/OBMEP/ProvasOBMEP';
import VencedoresOBMEP from './TELAS/OBMEP/VencedoresOBMEP';
import ConteudosOBQ from './TELAS/OBQ/ConteudosOBQ';
import ProvasOBQ from './TELAS/OBQ/ProvasOBQ';
import VencedoresOBQ from './TELAS/OBQ/VencedoresOBQ';
import ConteudosONC from './TELAS/ONC/ConteudosONC';
import ProvasONC from './TELAS/ONC/ProvasONC';
import VencedoresONC from './TELAS/ONC/VencedoresONC';
import ConteudosONHB from './TELAS/ONHB/ConteudosONHB';
import ProvasONHB from './TELAS/ONHB/ProvasONHB';
import VencedoresONHB from './TELAS/ONHB/VencedoresONHB';
import SimuladoOBA from './TELAS/OBA/SimuladoOBA';
import SimuladoOBI from './TELAS/OBI/SimuladoOBI';
import SimuladoOBMEP from './TELAS/OBMEP/SimuladoOBMEP';
import SimuladoOBQ from './TELAS/OBQ/SimuladoOBQ';
import SimuladoONC from './TELAS/ONC/SimuladoONC';
import SimuladoONHB from './TELAS/ONHB/SimuladoONHB';
import Login from './TELAS/PRINCIPAIS/Login';
import Registro from './TELAS/PRINCIPAIS/Registro'
import Senha from './TELAS/PRINCIPAIS/Senha';
import Filtro from './TELAS/PRINCIPAIS/Filtro';
import ResultadoFiltro from './TELAS/PRINCIPAIS/ResultadoFiltro';
import FiltroUsuarios from './TELAS/PRINCIPAIS/FiltroUsuarios';
import FiltroQuestoes from './TELAS/PRINCIPAIS/FiltroQuestoes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {
    
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'HomeScreen':
      return 'Olimpíadas Brasileiras';
    case 'ExploreScreen':
      return 'Simulados';
    case 'TabStack':
      return 'Home';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: 'green',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Olímpiadas',
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'SIMULADOS',
        }}
      />
      <Tab.Screen
        name="QUESTÕES"
        component={FiltroQuestoes}
        options={{
          tabBarLabel: 'QUESTÕES',
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="TelaOBA">
      <Stack.Screen
        name="Olimpíadas Brasileiras"
        component={TabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="TelaOBA"
        component={TelaOBA}
        options={{
          title: 'OBA',
        }}
      />
      <Stack.Screen
        name="TelaOBF"
        component={TelaOBF}
        options={{
          title: 'OBF',
        }}
      />
      <Stack.Screen
        name="TelaOBI"
        component={TelaOBI}
        options={{
          title: 'OBI',
        }}
      />
      <Stack.Screen
        name="TelaOBMEP"
        component={TelaOBMEP}
        options={{
          title: 'OBMEP',
        }}
      />
      <Stack.Screen
        name="TelaONC"
        component={TelaONC}
        options={{
          title: 'ONC',
        }}
      />
      <Stack.Screen
        name="TelaOBQ"
        component={TelaOBQ}
        options={{
          title: 'OBQ',
        }}
      />
      <Stack.Screen
        name="TelaONHB"
        component={TelaONHB}
        options={{
          title: 'ONHB',
        }}
      />
      <Stack.Screen
        name="CalendarioOBA"
        component={CalendarioOBA}
        options={{
          title: 'Calendario OBA',
        }}
      />
      <Stack.Screen
        name="CalendarioOBF"
        component={CalendarioOBF}
        options={{
          title: 'Calendario OBF',
        }}
      />
      <Stack.Screen
        name="CalendarioOBI"
        component={CalendarioOBI}
        options={{
          title: 'Calendario OBI',
        }}
      />
      <Stack.Screen
        name="CalendarioOBMEP"
        component={CalendarioOBMEP}
        options={{
          title: 'Calendario OBMEP',
        }}
      />
      <Stack.Screen
        name="CalendarioOBQ"
        component={CalendarioOBQ}
        options={{
          title: 'Calendario OBQ',
        }}
      />
      <Stack.Screen
        name="CalendarioONC"
        component={CalendarioONC}
        options={{
          title: 'Calendario ONC',
        }}
      />
      <Stack.Screen
        name="CalendarioONHB"
        component={CalendarioONHB}
        options={{
          title: 'Calendario ONHB',
        }}
      />
      <Stack.Screen
        name="ConteudosOBA"
        component={ConteudosOBA}
        options={{
          title: 'Conteúdos OBA',
        }}
      />
      <Stack.Screen
        name="ProvasOBA"
        component={ProvasOBA}
        options={{
          title: 'ProvasOBA',
        }}
      />
      <Stack.Screen
        name="VencedoresOBA"
        component={VencedoresOBA}
        options={{
          title: 'Vencedores OBA',
        }}
      />
      <Stack.Screen
        name="ConteudosOBF"
        component={ConteudosOBF}
        options={{
          title: 'Conteúdos OBF',
        }}
      />
      <Stack.Screen
        name="ProvasOBF"
        component={ProvasOBF}
        options={{
          title: 'ProvasOBF',
        }}
      />
      <Stack.Screen
        name="VencedoresOBF"
        component={VencedoresOBF}
        options={{
          title: 'Vencedores OBF',
        }}
      />
      <Stack.Screen
        name="ConteudosOBI"
        component={ConteudosOBI}
        options={{
          title: 'Conteúdos OBI',
        }}
      />
      <Stack.Screen
        name="ProvasOBI"
        component={ProvasOBI}
        options={{
          title: 'ProvasOBI',
        }}
      />
      <Stack.Screen
        name="VencedoresOBI"
        component={VencedoresOBI}
        options={{
          title: 'Vencedores OBI',
        }}
      />
      <Stack.Screen
        name="ConteudosOBMEP"
        component={ConteudosOBMEP}
        options={{
          title: 'Conteúdos OBMEP',
        }}
      />
      <Stack.Screen
        name="ProvasOBMEP"
        component={ProvasOBMEP}
        options={{
          title: 'ProvasOBMEP',
        }}
      />
      <Stack.Screen
        name="VencedoresOBMEP"
        component={VencedoresOBMEP}
        options={{
          title: 'Vencedores OBMEP',
        }}
      />
      <Stack.Screen
        name="ConteudosOBQ"
        component={ConteudosOBQ}
        options={{
          title: 'Conteúdos OBQ',
        }}
      />
      <Stack.Screen
        name="ProvasOBQ"
        component={ProvasOBQ}
        options={{
          title: 'ProvasOBQ',
        }}
      />
      <Stack.Screen
        name="VencedoresOBQ"
        component={VencedoresOBQ}
        options={{
          title: 'Vencedores OBQ',
        }}
      />
      <Stack.Screen
        name="ConteudosONC"
        component={ConteudosONC}
        options={{
          title: 'Conteúdos ONC',
        }}
      />
      <Stack.Screen
        name="ProvasONC"
        component={ProvasONC}
        options={{
          title: 'ProvasONC',
        }}
      />
      <Stack.Screen
        name="VencedoresONC"
        component={VencedoresONC}
        options={{
          title: 'Vencedores ONC',
        }}
      />
      <Stack.Screen
        name="ConteudosONHB"
        component={ConteudosONHB}
        options={{
          title: 'Conteúdos ONHB',
        }}
      />
      <Stack.Screen
        name="ProvasONHB"
        component={ProvasONHB}
        options={{
          title: 'ProvasONHB',
        }}
      />
      <Stack.Screen
        name="VencedoresONHB"
        component={VencedoresONHB}
        options={{
          title: 'Vencedores ONHB',
        }}
      />
      <Stack.Screen
        name="SimuladoOBA"
        component={SimuladoOBA}
        options={{
          title: 'Simulado OBA',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          title: 'Registro',
        }}
      />
      <Stack.Screen
        name="Filtro"
        component={Filtro}
        options={{
          title: 'Filtro',
        }}
      />
      <Stack.Screen
        name="ResultadoFiltro"
        component={ResultadoFiltro}
        options={{
          title: 'Filtro Olimpíadas',
        }}
      />
      <Stack.Screen
        name="FiltroUsuarios"
        component={FiltroUsuarios}
        options={{
          title: 'Filtro Usuarios',
        }}
      />
      </Stack.Navigator>
  );
};
<Stack.Screen name="Login" options={{headerShown:false}} component={Login} />

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'VOLTAR'}}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{drawerLabel: ''}}
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;