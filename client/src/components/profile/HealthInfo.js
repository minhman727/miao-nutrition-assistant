import { Divider, HStack, Icon, Pressable, Text, VStack } from "native-base";
import { EdittingUserState$, UserState$ } from "../../redux/selectors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { boxStyle, space } from "../../styles/layout";
import { useDispatch, useSelector } from "react-redux";

import BirthdayModalBody from "./modals/BirthdayModalBody";
import Colors from "../../styles/colors";
import { GenderModalBody } from "./modals/GenderModalBody";
import { ProfileEditingModal } from "./modals/ProfileEditingModal";
import React from "react";
import { WeightHeightModalBody } from "./modals/WeightHeightModalBody";
import moment from "moment";
import { showProfileEditingModal } from "./../../redux/actions/modalAction";

export const HealthInfo = ({ user, setUser }) => {
  const [userTemp, setUserTemp] = React.useState(user);
  const isEditting = useSelector(EdittingUserState$);

  const listItems = {
    gender: {
      title: "Giới tính",
      icon: { as: Ionicons, name: "person" },
      value: userData.gender === "Female" ? "Nữ" : "Nam",
      component: (
        <GenderModalBody userTemp={userTemp} setUserTemp={setUserTemp} />
      ),
    },
    weight: {
      title: "Cân nặng",
      icon: { as: MaterialCommunityIcons, name: "scale-bathroom" },
      value: 45 + " kg",
      component: (
        <WeightHeightModalBody
          user={userTemp}
          setUser={setUserTemp}
          unit="kg"
        />
      ),
    },
    height: {
      title: "Chiều cao",
      icon: { as: MaterialCommunityIcons, name: "human-male-height" },
      value: 154 + " cm",
      component: (
        <WeightHeightModalBody
          userTemp={userTemp}
          setUserTemp={setUserTemp}
          unit="cm"
        />
      ),
    },
    birthday: {
      title: "Ngày sinh",
      icon: { as: MaterialCommunityIcons, name: "cake-variant" },
      value: moment(userTemp.birthday).format("DD/MM/YYYY"),
      component: (
        <BirthdayModalBody userTemp={userTemp} setUserTemp={setUserTemp} />
      ),
    },
  };

  const handleOnChangeProfile = React.useCallback(
    (payload) => {
      dispatch(showProfileEditingModal(payload));
    },
    [dispatch]
  );

  return (
    <VStack {...boxStyle}>
      {Object.entries(listItems).map(([key, value], index) => (
        <Pressable
          key={key}
          onPress={() =>
            isEditting
              ? handleOnChangeProfile({
                  component: value.component,
                  title: value.title,
                })
              : null
          }
        >
          <TextElement
            title={value.title}
            text={value.value}
            icon={value.icon}
            isDivide={index < Object.entries(listItems).length - 1}
          />
        </Pressable>
      ))}
      <ProfileEditingModal userTemp={userTemp} setUser={setUser} />
    </VStack>
  );
};

const TextElement = ({ title, text, icon, isDivide }) => {
  return (
    <>
      <HStack alignItems="center" justifyContent="space-between">
        <HStack space={space.s} alignItems="center">
          <Icon
            size="xs"
            color={Colors.primary}
            as={icon.as}
            name={icon.name}
          />
          <Text fontWeight="bold">{title}</Text>
        </HStack>
        <Text>{text}</Text>
      </HStack>
      {isDivide ? (
        <Divider
          my="2.5"
          _light={{
            bg: Colors.backgroundProgress,
          }}
        />
      ) : null}
    </>
  );
};
