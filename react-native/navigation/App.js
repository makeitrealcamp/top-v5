import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

const Stack = createStackNavigator();

function Home({ navigation, name, lastname }) {
  const [token, setToken] = useState('');

  useEffect(() => {
    // AsyncStorage.setItem('token', 'asdfasdfasdfsd')

    AsyncStorage.getItem('token')
      .then(value => setToken(value))
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem('token');
    setToken('');
  }

  async function handleLogin() {
    const value = 'asdfasdfasdfsd';
    await AsyncStorage.setItem('token', 'asdfasdfasdfsd');
    setToken(value);
  }

  return (
    <View style={styles.container}>
      <Text>Hola {name} {lastname}</Text>
      <Text>{token}</Text>
      {
        !token ? (
          <Button
            title="login"
            onPress={handleLogin}
          />
        ) : (
          <>
            <Button
              title="Ver Posts"
              onPress={() => navigation.navigate('Posts')}
            />
            <Button
              title="Ver Perfil"
              onPress={() => navigation.navigate('Profile')}
            />
            <Button
              title="Logout"
              onPress={handleLogout}
            />
          </>
        )
      }
    </View>
  );
}

function Posts({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
      .then(({ data }) => setPosts(data));
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(value => {
        if(!value) {
          navigation.replace('Home')
        }
      })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Posts</Text>
      <Button
        title="Volver a home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ver Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Button
              title="Ver Detalles"
              onPress={() => navigation.navigate('Post', {
                id: item.id
              })}
            />
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

function Post({ route, navigation }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const { id } = route.params
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts/${id}`
    })
      .then(({ data }) => setPost(data))
  }, []);

  return (
    <View style={styles.container}>
      <Text>Post</Text>
      {post && (
        <>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </>
      )}
      <Button
        title="Ver Posts"
        onPress={() => navigation.navigate('Posts')}
      />
    </View>
  )
}

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="Volver a home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ver Posts"
        onPress={() => navigation.navigate('Posts')}
      />
    </View>
  )
}

export default function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(value => setToken(value))
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !token ? (
            <Stack.Screen name="Home">
              {props => (
                <Home {...props} name="Simon" lastname="Hoyos" />
              )}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Home">
                {props => (
                  <Home {...props} name="Simon" lastname="Hoyos" />
                )}
              </Stack.Screen>
              <Stack.Screen name="Posts" component={Posts} />
              <Stack.Screen name="Post" component={Post} />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  body: {
    fontSize: 16
  }
});
