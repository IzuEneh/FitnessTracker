import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { DateTime } from "luxon";

import WeekDayTile from "../components/WeekDayTile";

function DashboardScreen(props: any) {
	const now = DateTime.now();
	const daysOfTheWeek = [];
	for (let day = 0; day < 7; day++) {
		daysOfTheWeek.push(<WeekDayTile day={day} />);
	}
	return (
		<View style={styles.container}>
			<Text style={[styles.dateSection, styles.defaultSectionVals]}>
				{now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
			</Text>
			<View style={[styles.weekSection, styles.defaultSectionVals]}>
				{daysOfTheWeek}
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
		flexDirection: "row",
	},
	overViewSection: {
		backgroundColor: "grey",
		flex: 1,
	},
});

export default DashboardScreen;
