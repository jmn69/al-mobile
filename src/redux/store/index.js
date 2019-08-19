import storeProd from './store.prod';
import storeDev from './store.dev';
import {ENV} from 'react-native-dotenv';

export default (ENV === 'production' ? storeProd : storeDev);
