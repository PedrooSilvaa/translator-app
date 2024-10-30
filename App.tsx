import { config } from '@gluestack-ui/config';
import {  Box, ClockIcon, CloseIcon, GluestackUIProvider, RepeatIcon, Text, View } from '@gluestack-ui/themed';
import { Button, TextInput, Touchable, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}
const Home = () => {
  return <Container />;
};
const Container = () => {
  return (
    <View>
        {/* Header */}
        <View bgColor='#003366' height={100} display='flex' alignItems='center' justifyContent='flex-end' paddingBottom={20}>
          <Text color='white' fontSize={18} fontWeight='$medium'>Language Translator</Text>
        </View>

        {/* Main */}
        <View paddingTop={200} display='flex' flexDirection='column' alignItems='center'>
          {/* Idiomas */}
            <View bgColor='#E3E3E3' width={"75%"} borderRadius={50} height={50} display='flex' flexDirection='row' alignItems='center' justifyContent='space-around'>
                <Text fontSize={20}>English</Text>
                  <RepeatIcon></RepeatIcon>
                <Text fontSize={20}>Portuguese</Text>
            </View>

            <View bgColor='#E3E3E3' width={"75%"} height={216} borderRadius={16} marginTop={20} justifyContent='space-between' padding={10}>
                <View display='flex' >
                  <View paddingHorizontal={10} display='flex' flexDirection='row' justifyContent='space-between'>
                    <Text fontSize={25}>English</Text>
                    <CloseIcon width={20} height={20}></CloseIcon>
                  </View>
                  <View paddingHorizontal={20} paddingTop={16}>
                    <TextInput placeholder='Enter text here...'></TextInput>
                  </View>
                </View>
                <View paddingHorizontal={10} alignItems='flex-end'>
                  <TouchableOpacity>
                    <Box bgColor='#FF6600' borderRadius={100} width={108} height={47} alignItems='center' justifyContent='center'>
                        <Text color='white'>Translate</Text>
                    </Box>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
};


// https://libretranslate.com/?source=en&target=pt&q=hello+world
