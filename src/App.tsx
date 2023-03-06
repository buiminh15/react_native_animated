import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Item from './components/Item';

const PADDING = 20;
export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export interface IData {
  categoryName: string;
  data: IPost[] | ITodo[];
}

function App(): JSX.Element {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('title');
  const [data, setData] = useState<IData[] | null>(null);
  console.log('📢 [App.tsx:29]', data);
  useEffect(() => {
    (async () => {
      try {
        const fetchData = async () => {
          const posts = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
          );
          return await posts.json();
        };
        const fetchTodos = async () => {
          const todos = await fetch(
            'https://jsonplaceholder.typicode.com/todos',
          );
          return await todos.json();
        };

        const todos = await fetchTodos();
        const posts = await fetchData();
        setData([
          {categoryName: 'Todo Category', data: todos},
          {categoryName: 'Post Category', data: posts},
        ]);
      } catch (error) {
        console.error;
      }
    })();
  }, []);

  // const handleItemClick = useCallback((title: string) => {
  //   setTitle(title);
  // }, []);
  const handleItemClick = (title: string) => {
    setTitle(title);
  };

  const renderItem = useCallback(
    ({item}: {item: IData}) => (
      <Item key={item.id} item={item} handleClick={handleItemClick} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[styles.text, isGreen && styles.greenText]}
        onPress={() => setIsGreen(!isGreen)}>
        {title}
      </Text>
      <FlatList
        contentContainerStyle={{flex: 1}}
        data={data}
        keyExtractor={el => el.categoryName}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f3f3f',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  greenText: {
    color: 'green',
  },
  linearGradient: {flex: 1, paddingHorizontal: PADDING, paddingTop: PADDING},
  adidasContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer: {
    flex: 1,
  },
  img: {
    transform: [{rotate: '18deg'}],
  },
  item: {
    backgroundColor: '#A6BACB',
    marginBottom: 10,
  },
});

export default App;
