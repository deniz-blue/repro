import { Button, Text, View, BackHandler } from "react-native";
import { ModalBottomSheet, BottomSheetProvider } from "@swmansion/react-native-bottom-sheet";
import { useEffect, useState } from "react";

export default function App() {
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const unsub = BackHandler.addEventListener("hardwareBackPress", () => {
			console.log("Back button pressed");
			setIndex(0);
			return true;
		});
		return () => unsub.remove();
	}, []);

	return (
		<BottomSheetProvider>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Button title="Open Bottom Sheet" onPress={() => setIndex(1)} />
				<ModalBottomSheet
					index={index}
					onIndexChange={setIndex}
					nativeOverlay
					surface={
						<View
							style={{
								flex: 1,
								backgroundColor: "white",
							}}
						/>
					}
				>
					<View>
						<Text style={{ margin: 60 }}>Bottom Sheet Content</Text>
					</View>
				</ModalBottomSheet>
			</View>
		</BottomSheetProvider>
	);
}
