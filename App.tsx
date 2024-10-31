import { config } from '@gluestack-ui/config';
import {  Box, CloseIcon, CopyIcon, GluestackUIProvider, RepeatIcon, ShareIcon, StarIcon, Text, View } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, Image } from 'react-native';

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

  const [text, setText] = useState();
  const [textTranslated, setTextTranslated] = useState();
  const [langCurrent, setLangCurrent] = useState("")
  const [langRequest, setLangRequest] = useState("")

  async function submitForm() {
    console.log(text);
    setLangCurrent("pt")
    setLangRequest("en")
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${langCurrent}|${langRequest}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    
    // Verifique se a tradução foi bem-sucedida
    if (data.responseStatus === 200) {
        setTextTranslated(data.responseData.translatedText);
    } else {
        console.error("Erro na tradução:", data.responseDetails);
    }

    console.log(data);
}

  useEffect(() => {
      submitForm();
  }, [text])

  return (
    <View display='flex' justifyContent='space-between' h={'$full'}> 
        {/* Header */}
        <View bgColor='#003366' height={100} display='flex' alignItems='center' justifyContent='flex-end' paddingBottom={20}>
          <Text color='white' fontSize={18} fontWeight='$medium'>Language Translator</Text>
        </View>

        {/* Main */}
        <View display='flex' flexDirection='column' alignItems='center' marginBottom={100}>
          {/* Idiomas */}
            <View bgColor='#E3E3E3' width={"75%"} borderRadius={50} height={50} display='flex' flexDirection='row' alignItems='center' justifyContent='space-around'>
                <Text fontSize={20}>Portuguese</Text>
                  <RepeatIcon></RepeatIcon>
                <Text fontSize={20}>English</Text>
            </View>

            <View bgColor='#E3E3E3' width={"75%"} height={150} borderRadius={16} marginTop={20} justifyContent='space-between' padding={10}>
                <View display='flex' >
                  <View paddingHorizontal={10} display='flex' flexDirection='row' justifyContent='space-between'>
                    <Text fontSize={25}>Português</Text>
                    <CloseIcon width={20} height={20}></CloseIcon>
                  </View>
                  <View paddingHorizontal={20} paddingTop={16}>
                    <TextInput style={{fontSize: 17}} placeholder='Enter text here...' onChangeText={(value) => {setText(value);} }></TextInput>
                  </View>
                </View>
                <View paddingHorizontal={10} alignItems='flex-end'>
                  <TouchableOpacity onPress={() => submitForm()}>
                    <Box bgColor='#FF6600' borderRadius={100} width={108} height={47} alignItems='center' justifyContent='center'>
                        <Text color='white'>Translate</Text>
                    </Box>
                  </TouchableOpacity>
                </View>
            </View>

            <View bgColor='#E3E3E3' width={"75%"} height={216} borderRadius={16} marginTop={20} justifyContent='space-between' padding={10}>
                <View display='flex' >
                  <View paddingHorizontal={10} display='flex' flexDirection='row' justifyContent='space-between'>
                    <Text fontSize={25}>Inglês</Text>
                  </View>
                  <View paddingHorizontal={20} paddingTop={16}>
                    <Text fontSize={17}>{textTranslated}</Text>
                  </View>
                </View>
                <View padding={10} display='flex' flexDirection='row' alignSelf='flex-end' gap={20}>
                  <CopyIcon></CopyIcon>
                  <ShareIcon></ShareIcon>
                  <StarIcon></StarIcon>
                </View>
            </View>
        </View>

        <View bgColor='#E3E3E3' height={100} justifyContent='center'>
            <View bgColor='#003366' w={70} h={70} alignItems='center' justifyContent='center' alignSelf='center' borderRadius={100}>
                <Image source={require('./assets/images/tranlateIcon.png')} style={{height:'50%', width:'50%'}}></Image>
            </View>
        </View>
    </View>
  );
};


// https://libretranslate.com/?source=en&target=pt&q=hello+world
