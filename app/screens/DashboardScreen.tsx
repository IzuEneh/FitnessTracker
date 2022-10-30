import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Platform,
	ScrollView,
	Button,
	TouchableOpacity,
} from "react-native";
import { DateTime } from "luxon";
import Carousel from "react-native-snap-carousel";

import WeekDayTile from "../components/WeekDayTile";
import ExercisePreview from "../components/ExercisePreview";

function DashboardScreen(props: any) {
	const now = DateTime.now();

	const _renderItem = ({ item, index }: { item: number; index: number }) => {
		return <WeekDayTile day={item} />;
	};

	const exercises = Array.from(Array(7).keys()).map((x: number) => (
		<ExercisePreview
			key={x}
			name={`Exercise ${x + 1}`}
			lastLift={100 + 50 * x}
			sets={x + 3}
			reps={10}
			restMinutes={2}
			restSeconds={30}
		/>
	));

	return (
		<View style={styles.container}>
			<Text style={[styles.dateSection, styles.defaultSectionVals]}>
				{now.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
			</Text>
			<View style={styles.weekSection}>
				<Carousel
					ref={(c) => {}}
					data={Array.from(Array(7).keys())}
					renderItem={_renderItem}
					sliderWidth={250}
					itemWidth={100}
					windowSize={150}
				/>
			</View>
			<View style={[styles.overViewSection, styles.defaultSectionVals]}>
				<Text style={styles.overViewTitle}>Overview</Text>
				<ScrollView>{exercises}</ScrollView>
				<TouchableOpacity style={styles.startButton}>
					<Text style={styles.startButtonText}>Start</Text>
				</TouchableOpacity>
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
	overViewSection: {
		backgroundColor: "grey",
		flex: 1,
	},
	overViewTitle: {
		fontSize: 36,
	},
	startButton: {
		color: "white",
		backgroundColor: "#235789",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		height: 45,
		marginVertical: 10,
		borderRadius: 15,
	},
	startButtonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "700",
	},
	weekSection: {
		height: "20%",
		paddingVertical: 10,
		flexDirection: "row",
	},
});

export default DashboardScreen;
