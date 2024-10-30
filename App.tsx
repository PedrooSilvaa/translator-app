import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text, View } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
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
        <View bgColor='#003366' height={100} display='flex' alignItems='center' justifyContent='flex-end' paddingBottom={20}>
          <Text color='white' fontSize={18} fontWeight='$medium'>Language Translator</Text>
        </View>
    </View>
  );
};
