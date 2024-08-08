import { View, Text } from "react-native";
import React, { useEffect } from "react";

const crypto = () => {
  useEffect(() => {
    const listingCall = async () => {
      try {
        const res = await fetch("http://localhost:8081/api/listings");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    listingCall();
  }, []);

  return (
    <View>
      <Text>crypto</Text>
    </View>
  );
};

export default crypto;
