/**
 * Created by rajatmareclbeck on 06/07/18.
 */
import {createStackNavigator} from "react-navigation";
import Screen from './Screen'
const Navigator = createStackNavigator({
    screen: {
        screen:Screen,
        navigationOptions: ({ navigation }) => ({
            title: `Profile'`,
        }),
    }

});

export default Navigator