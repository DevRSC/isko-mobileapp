import { Text, Pressable } from "react-native";

const MyFancyButton = (props) => {
  return (
    <Pressable className='component bg-violet-500 hover:bg-violet-600 active:bg-violet-700'>
      <Text className='font-bold component-active:font-extrabold' {...props}>
        {props.children}
      </Text>
    </Pressable>
  );
};

export default MyFancyButton;
