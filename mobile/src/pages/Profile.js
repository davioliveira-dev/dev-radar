import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ route }) {
  const { githubUsername }  = route.params;

  return (
    <>
    <WebView source={{ uri: `https://github.com/${githubUsername}` }} style={{flex: 1}} />
    </>
  );
}

export default Profile;