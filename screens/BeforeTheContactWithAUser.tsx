import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const BeforeTheContactWithAUser = () => {
  return (
    <View style={styles.beforeTheContactWithAUser}>
      <Image
        style={styles.beforeTheContactWithAUserChild}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={styles.frameParent}>
        <LinearGradient
          style={styles.addFundsWrapper}
          locations={[0, 1]}
          colors={["#d83c87", "#d83c87"]}
        >
          <Text style={styles.addFunds}>Add funds</Text>
        </LinearGradient>
        <View style={styles.transferWrapper}>
          <Text style={styles.transfer}>Transfer</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <View style={styles.chooseOneOfTheOptionsBeloParent}>
          <Text style={styles.chooseOneOfContainer}>
            <Text style={styles.chooseOneOf}>{`Choose one of the options below
`}</Text>
            <Text style={styles.toTopUp}>to top up your balance</Text>
          </Text>
          <View style={styles.frame1}>
            <View style={styles.frame2}>
              <View style={styles.frame3}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame.png")}
                />
                <Text style={styles.card}>Card</Text>
              </View>
              <View style={styles.wallet}>
                <Image
                  style={styles.walletChild}
                  contentFit="cover"
                  source={require("../assets/group-335.png")}
                />
                <Text style={styles.card}>Wallet</Text>
              </View>
              <View style={styles.walletParent}>
                <View style={styles.wallet2}>
                  <Image
                    style={styles.walletChild}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Text style={styles.card}>Other</Text>
                </View>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/group-340.png")}
                />
              </View>
            </View>
            <View style={styles.appleParent}>
              <View style={styles.apple}>
                <Image
                  style={styles.walletChild}
                  contentFit="cover"
                  source={require("../assets/group-3351.png")}
                />
                <Text style={styles.card}>Apple Pay</Text>
              </View>
              <View style={styles.google}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame1.png")}
                />
                <Text style={styles.card}>Google Pay</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frame4}>
        <View style={styles.wallet3}>
          <View style={styles.frame5}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/united-kingdom.png")}
            />
            <Text style={styles.gbp}>GBP</Text>
          </View>
          <Image
            style={styles.iconlyregularlightarrowD}
            contentFit="cover"
            source={require("../assets/iconlyregularlightarrow--down-2.png")}
          />
        </View>
      </View>
      <View style={styles.frame6}>
        <Text style={styles.text}>£0</Text>
      </View>
      <View style={styles.frame7}>
        <View style={styles.frame8}>
          <View style={styles.frame9}>
            <View style={styles.frame10}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-88.png")}
              />
              <View style={styles.frameInner} />
            </View>
            <View style={styles.frame11}>
              <View style={styles.statusBar}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <View style={styles.frame12}>
                  <Image
                    style={styles.excludeIcon}
                    contentFit="cover"
                    source={require("../assets/exclude.png")}
                  />
                  <Image
                    style={styles.excludeIcon1}
                    contentFit="cover"
                    source={require("../assets/exclude1.png")}
                  />
                  <Image
                    style={styles.groupIcon}
                    contentFit="cover"
                    source={require("../assets/group.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frame13}>
            <View style={styles.addingMoney}>
              <Image
                style={styles.vuesaxlineararrowDownIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowdown.png")}
              />
              <Text style={styles.addingMoney1}>Adding money</Text>
            </View>
            <Image
              style={styles.frameIcon2}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  beforeTheContactWithAUserChild: {
    position: "absolute",
    top: 729,
    left: 222,
    width: 266,
    height: 266,
    display: "none",
  },
  addFunds: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
    color: Color.colorWhite,
    textAlign: "left",
  },
  addFundsWrapper: {
    flex: 1,
    borderRadius: Border.br_3xs,
    height: 56,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  transfer: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
    color: Color.colorWhite,
    textAlign: "center",
  },
  transferWrapper: {
    flex: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    height: 56,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 13,
  },
  frameParent: {
    position: "absolute",
    top: 288,
    left: 24,
    width: 345,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  chooseOneOf: {
    fontFamily: FontFamily.satoshi,
  },
  toTopUp: {
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
  },
  chooseOneOfContainer: {
    position: "relative",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frameIcon: {
    position: "relative",
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  card: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.satoshi,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 8,
  },
  frame3: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(166, 108, 255, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 87,
    height: 36,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_8xs,
  },
  walletChild: {
    position: "relative",
    width: 26,
    height: 26,
  },
  wallet: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 95,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_8xs,
  },
  wallet2: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 92,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_8xs,
  },
  frameChild: {
    position: "relative",
    width: 16,
    height: 4,
    marginLeft: -82,
  },
  walletParent: {
    width: 92,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  apple: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 119,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_8xs,
  },
  google: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 128,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_8xs,
  },
  appleParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 32,
  },
  chooseOneOfTheOptionsBeloParent: {
    width: 290,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    position: "absolute",
    top: 436,
    left: -90,
    width: 432,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  gbp: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
    color: Color.colorWhite,
    textAlign: "center",
    marginLeft: 6,
  },
  frame5: {
    width: 62,
    height: 26,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyregularlightarrowD: {
    position: "relative",
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  wallet3: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 101,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: Padding.p_8xs,
  },
  frame4: {
    position: "absolute",
    top: 352,
    left: -90,
    width: 337,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_61xl,
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
    color: "#525252",
    textAlign: "center",
  },
  frame6: {
    position: "absolute",
    top: 270,
    left: -90,
    width: 343,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameItem: {
    position: "absolute",
    top: 0,
    left: 221,
    width: 283,
    height: 283,
  },
  frameInner: {
    position: "relative",
    width: 100,
    height: 100,
  },
  frame10: {
    alignSelf: "stretch",
    position: "relative",
    height: 283,
    overflow: "hidden",
  },
  vectorIcon1: {
    position: "relative",
    width: 28,
    height: 11,
  },
  excludeIcon: {
    position: "relative",
    width: 17,
    height: 11,
  },
  excludeIcon1: {
    position: "relative",
    width: 15,
    height: 11,
    marginLeft: 5,
  },
  groupIcon: {
    position: "relative",
    width: 24,
    height: 11,
    marginLeft: 5,
  },
  frame12: {
    width: 67,
    height: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 219,
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame11: {
    width: 331,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -202,
  },
  frame9: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  vuesaxlineararrowDownIcon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  addingMoney1: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.satoshi,
    color: Color.colorWhite,
    textAlign: "center",
    marginLeft: 96,
  },
  addingMoney: {
    width: 232,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameIcon2: {
    position: "relative",
    width: 186,
    height: 17,
    overflow: "hidden",
    marginTop: 47,
  },
  frame13: {
    width: 232,
    height: 88,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -148,
  },
  frame8: {
    width: 504,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame7: {
    position: "absolute",
    top: -59,
    left: -90,
    width: 615,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  beforeTheContactWithAUser: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default BeforeTheContactWithAUser;
