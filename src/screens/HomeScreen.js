import * as React from 'react';
import { Image, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { data } from '../api/fakeApi';

// Basic reusable components
const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);
const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);
const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32
    // borderRadius: "50%"
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 24,
    color: '#08060B',
  },
  title: {
    color: '#280D5F',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '600',
  },
});

// App-specific components
const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.avatar} />
    <Title style={woofCardStyles.title}>{props.name}</Title>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    width: 88,
    height: 112,
    padding: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#E7E3EB',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  title: {
    textAlign: 'center',
    paddingTop: 8,
  },
});

const WoofPost = (props) => (
  <View style={woofPostStyles.layout} >
    <Image source={{ uri: props.image }} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Text>{props.title}</Text>
      <Text style={woofPostStyles.description} numberOfLines={2}>{props.description}</Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    marginHorizontal: 24,
    flexDirection: 'row',
    marginVertical: 8,
  },
  image: {
    borderRadius: 12,
    flex: 1,
  },
  content: {
    flex: 2,
    padding: 12,
  },
  title: {},
  description: {
    fontSize: 12,
    marginTop: 4,
  },
});

// The screen rendering everything
export const HomeScreen = () => (
  <ScrollView>
    <Heading>Trending Woofs</Heading>
    <ScrollView horizontal>
      {data.woofs.map(woof => (
        <WoofCard
          key={woof.id}
          name={woof.name}
          avatar={woof.avatar}
        />
      ))}
    </ScrollView>

    {/* <Heading>New Woof Posts</Heading> */}
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Heading>New Woof Posts</Heading>
      {/* <Text style={{fontSize: 18}}>Foo</Text> */}
      <Button title='Go home' style={{
        fontSize: 18,
        height: 10
      }}/>
    </View>
    {data.posts.map(post => (
      <WoofPost key={post.id} image={post.image} title={post.title} description={post.description} />
    ))}
  </ScrollView>
);