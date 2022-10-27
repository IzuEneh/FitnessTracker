import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { DateTime } from "luxon";

import WeekDayTile from "../components/WeekDayTile";

function DashboardScreen(props: any) {
	const now = DateTime.now();
	return (
		<View style={styles.container}>
			<Text style={[styles.dateSection, styles.defaultSectionVals]}>
				{now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
			</Text>
			<View style={[styles.weekSection, styles.defaultSectionVals]}>
				<WeekDayTile />
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
		paddingVertical: 10,
	},
	overViewSection: {
		backgroundColor: "grey",
		flex: 1,
	},
});

export default DashboardScreen;
