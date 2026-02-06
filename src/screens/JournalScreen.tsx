import React, { useState } from 'react';
import { useStore } from '../store';
import { Button, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const JournalScreen = () => {
    const { selectedPet, careLogs } = useStore(state => ({
        selectedPet: state.selectedPet,
        careLogs: state.careLogs,
    }));
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('list');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const toggleViewMode = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'calendar' : 'list'));
    };

    const filteredLogs = careLogs.filter(log => 
        new Date(log.date).toDateString() === selectedDate.toDateString()
    );

    const renderItem = ({ item }) => (
        <View style={styles.logItem}>
            <Text>{item.activity}</Text>
            <Text>{new Date(item.date).toLocaleTimeString()}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Button title="Toggle View" onPress={toggleViewMode} />
            <CalendarPicker
                onDateChange={handleDateChange}
                selectedDate={selectedDate}
            />
            <View style={styles.buttonContainer}>
                <Button title="Previous Day" onPress={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate()-1)))} />
                <Button title="Next Day" onPress={() => handleDateChange(new Date(selectedDate.setDate(selectedDate.getDate()+1)))} />
            </View>
            {filteredLogs.length === 0 ? (
                <Text>No care logs for this date.</Text>
            ) : (
                <FlatList
                    data={filteredLogs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    logItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default JournalScreen;