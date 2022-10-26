import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { DateTime } from "luxon";

function DashboardScreen(props: any) {
	const now = DateTime.now();
	return (
		<View style={styles.container}>
			<Text style={[styles.dateSection, styles.defaultSectionVals]}>
				{now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
			</Text>
			<View style={[styles.weekSection, styles.defaultSectionVals]}>
				<Text>Week day tiles section</Text>
			</View>
			<View style={[styles.overViewSection, styles.defaultSectionVals]}>
				<Text>Workout Overview section</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS == "ios" ? 50 : 30,
	},
	defaultSectionVals: {
		padding: 20,
	},
	dateSection: {
		height: "10%",
		fontSize: 36,
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
