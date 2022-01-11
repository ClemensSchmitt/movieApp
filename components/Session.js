import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Pressable, AsyncStorage} from 'react-native';
import {proxy, useSnapshot} from "valtio";

const state = proxy({
    email: "default",
});

export default state;