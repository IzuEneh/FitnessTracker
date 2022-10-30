import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface exerciseProps {
	name: string;
	lastLift: number;
	sets: number;
	reps: number;
	restMinutes: number;
	restSeconds: number;
}
function ExercisePreview(props: exerciseProps) {
	return (
		<View style={styles.exercise}>
			<View style={styles.exerciseLeft}>
				<Text style={styles.exerciseMainText}>{props.name}</Text>
				<Text>LastLift: {props.lastLift}</Text>
			</View>
			<View style={styles.exerciseRight}>
				<Text style={styles.exerciseMainText}>
					{props.sets} x {props.reps}
				</Text>
				<Text>
					Rest Time: {props.restMinutes}m {props.restSeconds}s
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	exercise: {
		marginVertical: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	exerciseLeft: {},
	exerciseRight: {},
	exerciseMainText: {
		fontSize: 22,
		marginBottom: 5,
	},
});

export default ExercisePreview;
