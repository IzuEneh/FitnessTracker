import { Info } from "luxon";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface WorkdayProps {
	day: number;
}

function WeekDayTile(props: WorkdayProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{Info.weekdays("short")[props.day]}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 100,
		backgroundColor: "grey",
		borderColor: "black",
		borderWidth: 2,
		borderRadius: 15,
		alignItems: "center",
		padding: 10,
	},
	text: {
		fontSize: 20,
	},
});
export default WeekDayTile;
