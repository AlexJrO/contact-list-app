import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  // Stores the current text typed in the search bar
  const [query, setQuery] = useState("");

  // Starter contact data for the app
  const contacts = [
    { id: "1", name: "Alice Johnson", phone: "555-0101" },
    { id: "2", name: "Bob Martinez", phone: "555-0102" },
    { id: "3", name: "Carol White", phone: "555-0103" },
    { id: "4", name: "David Lee", phone: "555-0104" },
    { id: "5", name: "Eva Brown", phone: "555-0105" },
    { id: "6", name: "Frank Wilson", phone: "555-0106" },
    { id: "7", name: "Grace Kim", phone: "555-0107" },
    { id: "8", name: "Henry Davis", phone: "555-0108" },
  ];

  // Filters contacts whose name includes the search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  // Renders one row of the contact list
  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        index % 2 === 0 ? styles.rowLight : styles.rowDark,
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Contacts</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={query}
        onChangeText={setQuery}
      />

      <Text style={styles.resultText}>
        {filteredContacts.length} contact(s) found
      </Text>

      {filteredContacts.length === 0 ? (
        <Text style={styles.noResults}>No contacts found</Text>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  resultText: {
    marginBottom: 10,
    color: "#555",
    fontSize: 14,
  },

  listContainer: {
    paddingBottom: 20,
  },

  row: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  rowLight: {
    backgroundColor: "#ffffff",
  },

  rowDark: {
    backgroundColor: "#eaeaea",
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },

  phone: {
    fontSize: 15,
    color: "#555",
  },

  noResults: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
});
