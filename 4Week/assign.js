import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, Switch, TouchableOpacity, Alert, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const SKILLS = [
  { id: '1', title: 'The 11x Trick',  category: 'Math',         icon: '🔢', bg: '#EEEDFE', tc: '#3C3489' },
  { id: '2', title: 'Word: Sonder',   category: 'Language',     icon: '📖', bg: '#E1F5EE', tc: '#085041' },
  { id: '3', title: 'Bowline Knot',   category: 'Survival',     icon: '🪢', bg: '#FAEEDA', tc: '#633806' },
  { id: '4', title: 'Memory Palace',  category: 'Memory',       icon: '🧠', bg: '#E6F1FB', tc: '#0C447C' },
  { id: '5', title: 'Box Breathing',  category: 'Wellness',     icon: '🌬️', bg: '#FAECE7', tc: '#712B13' },
  { id: '6', title: 'Pomodoro Timer', category: 'Productivity', icon: '⏱️', bg: '#EAF3DE', tc: '#27500A' },
];

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const App = () => {
  const [streak, setStreak] = useState(7);
  const [reminder, setReminder] = useState(false);
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F4F0' }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={s.screen}>

        {/* Header */}
        <View style={s.headerRow}>
          <View>
            <Text style={s.title}>Daily Brain Drop</Text>
            <Text style={s.sub}>{new Date().toDateString()}</Text>
          </View>
          <View style={s.streakBadge}>
            <Text style={{ fontSize: 20 }}>🔥</Text>
            <Text style={s.streakNum}>{streak}</Text>
            <Text style={s.streakLbl}>day streak</Text>
          </View>
        </View>

        {/* Today's Skill */}
        <View style={s.card}>
          <Text style={s.label}>TODAY'S SKILL</Text>
          <View style={s.skillRow}>
            <View style={[s.icon, { backgroundColor: '#EEEDFE' }]}>
              <Text style={{ fontSize: 24 }}>🧠</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.skillTitle}>The 11x Trick</Text>
              <Text style={s.skillDesc}>Multiply any 2-digit number by 11 instantly.</Text>
            </View>
          </View>
          <TouchableOpacity style={s.btn} onPress={() => Alert.alert('Starting!', 'The 11x Trick')}>
            <Text style={s.btnText}>Start Learning →</Text>
          </TouchableOpacity>
        </View>

        {/* Streak Week */}
        <View style={s.card}>
          <Text style={s.label}>THIS WEEK</Text>
          <View style={s.dotsRow}>
            {DAYS.map((d, i) => (
              <View key={i} style={[s.dot, i < todayIdx && { backgroundColor: '#E1F5EE' }, i === todayIdx && s.dotToday]}>
                <Text style={[s.dotText, i < todayIdx && { color: '#085041' }, i === todayIdx && { color: '#3C3489' }]}>{d}</Text>
              </View>
            ))}
          </View>
          <View style={s.statsRow}>
            {[{ n: streak, l: 'Streak' }, { n: 12, l: 'Skills' }, { n: 4, l: 'Topics' }].map((item, i) => (
              <View key={i} style={s.statBox}>
                <Text style={s.statNum}>{item.n}</Text>
                <Text style={s.statLbl}>{item.l}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Reminder Switch */}
        <View style={s.card}>
          <View style={s.reminderRow}>
            <Text style={s.skillTitle}>Daily reminder</Text>
            <Switch value={reminder} onValueChange={(v) => { setReminder(v); Alert.alert(v ? '🔔 ON' : '🔕 OFF'); }} />
          </View>
        </View>

        {/* Recent Skills FlatList */}
        <View style={s.card}>
          <Text style={s.label}>RECENT SKILLS</Text>
          <FlatList
            data={SKILLS}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#E8E6DF' }} />}
            renderItem={({ item }) => (
              <TouchableOpacity style={s.row} onPress={() => Alert.alert(item.title, item.category)}>
                <View style={[s.icon, { backgroundColor: item.bg }]}>
                  <Text style={{ fontSize: 16 }}>{item.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={s.skillTitle}>{item.title}</Text>
                  <Text style={s.skillDesc}>{item.category}</Text>
                </View>
                <View style={[s.pill, { backgroundColor: item.bg }]}>
                  <Text style={[s.pillText, { color: item.tc }]}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  screen:      { padding: 16, paddingBottom: 40 },
  headerRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title:       { fontSize: 20, fontWeight: '600', color: '#2C2C2A' },
  sub:         { fontSize: 12, color: '#888780', marginTop: 2 },
  streakBadge: { backgroundColor: '#FAEEDA', borderRadius: 12, padding: 10, alignItems: 'center' },
  streakNum:   { fontSize: 20, fontWeight: '700', color: '#633806' },
  streakLbl:   { fontSize: 10, color: '#854F0B' },
  card:        { backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 14, borderWidth: 0.5, borderColor: '#E8E6DF' },
  label:       { fontSize: 10, fontWeight: '600', color: '#888780', letterSpacing: 0.8, marginBottom: 10 },
  skillRow:    { flexDirection: 'row', gap: 12, marginBottom: 12 },
  icon:        { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  skillTitle:  { fontSize: 14, fontWeight: '500', color: '#2C2C2A', marginBottom: 2 },
  skillDesc:   { fontSize: 12, color: '#5F5E5A' },
  btn:         { backgroundColor: '#185FA5', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  btnText:     { color: '#fff', fontSize: 14, fontWeight: '600' },
  dotsRow:     { flexDirection: 'row', gap: 6, marginBottom: 14 },
  dot:         { width: 34, height: 34, borderRadius: 8, backgroundColor: '#F1EFE8', alignItems: 'center', justifyContent: 'center' },
  dotToday:    { backgroundColor: '#EEEDFE', borderWidth: 1.5, borderColor: '#534AB7' },
  dotText:     { fontSize: 11, fontWeight: '500', color: '#888780' },
  statsRow:    { flexDirection: 'row', gap: 10 },
  statBox:     { flex: 1, backgroundColor: '#F5F4F0', borderRadius: 10, padding: 10, alignItems: 'center' },
  statNum:     { fontSize: 20, fontWeight: '600', color: '#2C2C2A' },
  statLbl:     { fontSize: 10, color: '#888780', marginTop: 2 },
  reminderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  row:         { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 },
  pill:        { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  pillText:    { fontSize: 11, fontWeight: '500' },
});

export default App;