import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const signup = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");
  const router = useRouter();

  const { signUp } = useSignUp();

  const handleSignUp = async () => {
    const fullNumber = `${countryCode}${mobileNumber}`;
    try {
      await signUp!.create({
        phoneNumber: fullNumber,
      });
      signUp?.preparePhoneNumberVerification();
      router.push({
        pathname: "/verify/[phone]",
        params: { phone: fullNumber },
      });
    } catch (error) {
      console.error("error", JSON.stringify(error, null, 2));
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={80}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Lets Get started</Text>
        <Text style={defaultStyles.descriptionText}>
          Sign up to get started.Enter your details and we will get you started.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="C Code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile Number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>
        <Link href={"/login"} asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account?</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            mobileNumber !== "" ? styles.enable : styles.disable,
            { marginBottom: 20 },
          ]}
          onPress={handleSignUp}
        >
          <Text style={defaultStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginVertical: 40,
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enable: {
    backgroundColor: Colors.primary,
  },
  disable: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default signup;
