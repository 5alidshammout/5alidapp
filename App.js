import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Button title="Press button" />
			<Text style={styles.Text}>5alidshammout</Text>
			<StatusBar style="dark" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3bf',
		alignItems: 'center',
		justifyContent: 'center',
	},
	Text: {
		color: 'white',
		fontSize: 20,
	},
});
