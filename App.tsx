import { config } from '@gluestack-ui/config';
import {  GluestackUIProvider, RepeatIcon, Text, View } from '@gluestack-ui/themed';


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
                <Text>English</Text>
                  <RepeatIcon></RepeatIcon>
                <Text>Portuguese</Text>
            </View>
        </View>
    </View>
  );
};


// https://libretranslate.com/?source=en&target=pt&q=hello+world
