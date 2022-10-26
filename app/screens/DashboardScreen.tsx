import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

function DashboardScreen(props: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.dateSection}>Today's Date</Text>
			<View style={styles.weekSection}>
				<Text>Week day tiles section</Text>
			</View>
			<View style={styles.overViewSection}>
				<Text>Workout Overview section</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: Platform.OS == "ios" ? 50 : 30,
		paddingBottom: 0,
	},
	dateSection: {
		height: "10%",
		backgroundColor: "red",
	},
	weekSection: {
		height: "20%",
		backgroundColor: "dodgerblue",
	},
	overViewSection: {
		backgroundColor: "grey",
		flex: 1,
	},
});

export default DashboardScreen;
