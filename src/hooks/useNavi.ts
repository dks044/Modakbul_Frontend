import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParam = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export const useNavi = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  return navigation;
};
