import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StatusBar, SafeAreaView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const themeColors = {
    primary: "#4A90E2", // Xanh dương sáng
    secondary: "#50C878", // Xanh lá pastel
    background: "#F5F5F5", // Xám nhạt
    text: "#333333", // Xám đậm
    tabInactive: "#A0A0A0",
};

const ScreenOne = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <Image 
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGzfu79uTh2wKPlEF12sJp1-0SWm1koIEag&s" }} 
            style={{ width: 200, height: 150, marginBottom: 10 }} 
        />
        <Text style={{ color: themeColors.text, fontSize: 18 }}>CHO BẠN</Text>
    </View>
);

const ScreenTwo = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <Image 
            source={{ uri: "https://lh7-us.googleusercontent.com/zJy5PkAXt7aWym8ppYtbKMDv6bRlXZl9JWsKrYK6A0lE_8iH_6lRQfnsYVz-90KjS0DsWsjduM95Fa0EvfATbDOQanpcp7fuMwsfMem-AHntflKtORPPv0DWtpzeGDV8dKYwnwejE6LmAseNB23Ndnc" }} 
            style={{ width: 200, height: 150, marginBottom: 10 }} 
        />
        <Text style={{ color: themeColors.text, fontSize: 18 }}>TRỰC TIẾP</Text>
    </View>
);

const ScreenThree = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <Image 
            source={{ uri: "https://cdn.tgdd.vn/Files/2020/06/22/1264808/game-tren-dien-thoai-android-hay-nhat-nam-2018-244470_800x449.jpg" }} 
            style={{ width: 200, height: 150, marginBottom: 10 }} 
        />
        <Text style={{ color: themeColors.text, fontSize: 18 }}>TRÒ CHƠI</Text>
    </View>
);

const TopTab = createMaterialTopTabNavigator();

function TopTabScreen() {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: themeColors.primary },
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: themeColors.tabInactive,
                tabBarIndicatorStyle: { backgroundColor: "#ffffff" },
            }}
        >
            <TopTab.Screen name="CHO BẠN" component={ScreenOne} />
            <TopTab.Screen name="TRỰC TIẾP" component={ScreenTwo} />
            <TopTab.Screen name="TRÒ CHƠI" component={ScreenThree} />
        </TopTab.Navigator>
    );
}

const HomeScreen = () => <TopTabScreen />;

const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <Text style={{ color: themeColors.text, fontSize: 18 }}>Settings Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <Text style={{ color: themeColors.text, fontSize: 18 }}>Profile Screen</Text>
    </View>
);

const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
            <StatusBar barStyle="dark-content" backgroundColor={themeColors.primary} />
            <NavigationContainer>
                <BottomTab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            if (route.name === "Home") {
                                iconName = "home-outline";
                            } else if (route.name === "Settings") {
                                iconName = "settings-outline";
                            } else if (route.name === "Profile") {
                                iconName = "person-outline";
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: themeColors.primary,
                        tabBarInactiveTintColor: themeColors.tabInactive,
                        tabBarStyle: {
                            backgroundColor: "#ffffff",
                            borderTopWidth: 0,
                            height: 65,
                            borderRadius: 15,
                            margin: 10,
                            shadowColor: "black",
                            shadowOpacity: 0.1,
                            shadowRadius: 10,
                        },
                        headerShown: false,
                    })}
                >
                    <BottomTab.Screen name="Home" component={HomeScreen} />
                    <BottomTab.Screen name="Profile" component={ProfileScreen} />
                    <BottomTab.Screen name="Settings" component={SettingsScreen} />
                </BottomTab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
