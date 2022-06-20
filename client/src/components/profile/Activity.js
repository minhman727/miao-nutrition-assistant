import { Box, Circle, HStack, Heading, Icon, Text, VStack } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";

import Colors from "../../styles/colors";
import { Pressable } from "react-native";
import React from "react";
import { Subtitle } from "../general/typography/Subtitle";

export const Activity = () => {
  const [user, setUser] = React.useState({ activity: "Always" });
  const handleActivitySelected = React.useCallback((key) => {
    setUser({ ...user, activity: key });
  }, []);

  return (
    <Box {...boxStyle}>
      <VStack alignItems="center" space={space.m}>
        <HStack justifyContent="space-between" w="100%">
          {Object.entries(listItems).map(([key, value], index) => (
            <Pressable key={key} onPress={() => handleActivitySelected(key)}>
              <VStack alignItems="center" space={1}>
                <Element icon={value.icon} isSelected={key === user.activity} />
                <Text color={key === user.activity ? "black" : "muted.200"}>
                  {index + 1}
                </Text>
              </VStack>
            </Pressable>
          ))}
        </HStack>
        <VStack alignItems="center" space={1}>
          <Heading size="sm">{listItems[user.activity].title}</Heading>
          <Text color={Colors.textLight} textAlign="center">{listItems[user.activity].description}</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

const listItems = {
  Rarely: {
    title: "Không hoặc ít vận động",
    description: "Hoạt động hàng ngày thông thường",
    icon: { as: MaterialCommunityIcons, name: "human-handsdown" },
  },
  Occasionally: {
    title: "Vận động nhẹ",
    description: "Hoạt động hàng ngày thông thường và tập luyện 1-3 ngày/tuần ",
    icon: { as: MaterialCommunityIcons, name: "human-handsup" },
  },
  Sometimes: {
    title: "Vận động vừa",
    description: "Tập luyện 3-5 ngày/tuần",
    icon: { as: MaterialCommunityIcons, name: "walk" },
  },
  Normally: {
    title: "Năng động",
    description: "Tập luyện 6-7 ngày/tuần",
    icon: { as: MaterialCommunityIcons, name: "run" },
  },
  Always: {
    title: "Rất năng động",
    description: "Hoạt động nặng và tập luyện 2 lần/ngày",
    icon: { as: MaterialCommunityIcons, name: "run-fast" },
  },
};

const Element = ({ icon, isSelected }) => (
  <Circle size="sm" bg={isSelected ? "primary.500" : "muted.200"}>
    <Icon size="sm" color="white" as={icon.as} name={icon.name} />
  </Circle>
);
