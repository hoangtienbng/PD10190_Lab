import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './Lab83/ListUser';
import EditUserScreen from './Lab83/UpdateUser';
import UserDetailScreen from './Lab83/UserDetailScreen';
import CreateUserScreen from './Lab83/CreateUser';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Danh sách người dùng' }} />
        <Stack.Screen name="EditUser" component={EditUserScreen} options={{ title: 'Chỉnh sửa người dùng' }} />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{ title: 'Tạo người dùng' }} />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: 'Chi tiết người dùng' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


