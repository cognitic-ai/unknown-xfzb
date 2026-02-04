import * as AC from "@bacons/apple-colors";
import { Pressable, ScrollView, Text } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 16, gap: 12 }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: AC.label, marginBottom: 8 }}>
        Console Methods
      </Text>

      <LogButton
        title="console.log"
        color={AC.systemBlue}
        onPress={() => console.log("This is a log message")}
      />

      <LogButton
        title="console.info"
        color={AC.systemCyan}
        onPress={() => console.info("This is an info message")}
      />

      <LogButton
        title="console.warn"
        color={AC.systemOrange}
        onPress={() => console.warn("This is a warning message")}
      />

      <LogButton
        title="console.error"
        color={AC.systemRed}
        onPress={() => console.error("This is an error message")}
      />

      <LogButton
        title="console.debug"
        color={AC.systemPurple}
        onPress={() => console.debug("This is a debug message")}
      />

      <LogButton
        title="console.table"
        color={AC.systemGreen}
        onPress={() =>
          console.table([
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
          ])
        }
      />

      <LogButton
        title="console.group"
        color={AC.systemIndigo}
        onPress={() => {
          console.group("Group Label");
          console.log("Inside group 1");
          console.log("Inside group 2");
          console.groupEnd();
        }}
      />

      <LogButton
        title="console.time"
        color={AC.systemTeal}
        onPress={() => {
          console.time("timer");
          setTimeout(() => console.timeEnd("timer"), 100);
        }}
      />

      <LogButton
        title="console.count"
        color={AC.systemMint}
        onPress={() => console.count("button pressed")}
      />

      <LogButton
        title="console.assert (false)"
        color={AC.systemPink}
        onPress={() => console.assert(false, "Assertion failed!")}
      />

      <LogButton
        title="console.trace"
        color={AC.systemBrown}
        onPress={() => console.trace("Stack trace")}
      />

      <LogButton
        title="console.dir"
        color={AC.systemGray}
        onPress={() => console.dir({ nested: { object: { value: 42 } } })}
      />
    </ScrollView>
  );
}

function LogButton({
  title,
  color,
  onPress,
}: {
  title: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: color,
        padding: 16,
        borderRadius: 12,
        borderCurve: "continuous",
        opacity: pressed ? 0.8 : 1,
      })}
    >
      <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>{title}</Text>
    </Pressable>
  );
}
