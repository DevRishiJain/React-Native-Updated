import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const AfterAUserFillsTheInfo = () => {
  return (
    <View style={styles.afterAUserFillsTheInfo}>
      <Image
        style={styles.afterAUserFillsTheInfoChild}
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
                  source={require("../assets/group-3352.png")}
                />
                <Text style={styles.card}>Apple Pay</Text>
              </View>
              <View style={styles.google}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame4.png")}
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
        <Text style={styles.text}>£50</Text>
      </View>
      <View style={styles.frame7}>
        <View style={styles.frame8}>
          <View style={styles.frame8}>
            <Image
              style={styles.frameIcon2}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
            <View style={styles.frame10}>
              <View style={styles.statusBar}>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector1.png")}
                />
                <View style={styles.frame11}>
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
          <View style={styles.frame12}>
            <View style={styles.addingMoney}>
              <Image
                style={styles.vuesaxlineararrowDownIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowdown.png")}
              />
              <Text style={styles.addingMoney1}>Adding money</Text>
            </View>
            <Image
              style={styles.frameIcon3}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frame13}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-89.png")}
        />
        <View style={styles.frame14}>
          <View style={styles.frameInner} />
          <LinearGradient
            style={styles.continueWrapper}
            locations={[0, 1]}
            colors={["#6f16e1", "#a055ff"]}
          >
            <Text style={styles.continue}>Continue</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  afterAUserFillsTheInfoChild: {
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
    borderRadius: Border.br_3xs,
    width: 166,
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 166,
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
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  chooseOneOf: {
    fontWeight: "500",
    fontFamily: FontFamily.pPNeueMontreal,
    color: "#8d8d8d",
  },
  toTopUp: {
    fontWeight: "700",
    fontFamily: FontFamily.pPNeueMontreal,
    color: Color.colorWhite,
  },
  chooseOneOfContainer: {
    position: "relative",
    fontSize: FontSize.size_sm,
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
    fontWeight: "500",
    fontFamily: FontFamily.pPNeueMontreal,
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
    borderStyle: "solid",
    borderColor: "#a66cff",
    borderWidth: 1,
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
    opacity: 0.5,
    marginLeft: 8,
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
    opacity: 0.5,
    marginLeft: 8,
  },
  frame2: {
    width: 290,
    height: 36,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    marginLeft: 8,
  },
  appleParent: {
    width: 255,
    height: 37,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    opacity: 0.5,
    marginTop: 12,
  },
  frame1: {
    width: 290,
    height: 85,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 34,
  },
  chooseOneOfTheOptionsBeloParent: {
    width: 290,
    height: 146,
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
    fontWeight: "700",
    fontFamily: FontFamily.pPNeueMontreal,
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
    fontWeight: "700",
    fontFamily: FontFamily.pPNeueMontreal,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame6: {
    position: "absolute",
    top: 270,
    left: -90,
    width: 365,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon2: {
    position: "relative",
    width: 504,
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
  frame11: {
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
  frame10: {
    width: 331,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -202,
  },
  frame8: {
    width: 504,
    height: 283,
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
    fontWeight: "500",
    fontFamily: FontFamily.pPNeueMontreal,
    color: Color.colorWhite,
    textAlign: "center",
    marginLeft: 102,
  },
  addingMoney: {
    width: 227,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameIcon3: {
    position: "relative",
    width: 186,
    height: 17,
    overflow: "hidden",
    marginTop: 57,
  },
  frame12: {
    width: 227,
    height: 98,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -158,
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
  frameItem: {
    position: "relative",
    width: 283,
    height: 283,
  },
  frameInner: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 133,
    height: 5,
    marginTop: 128,
  },
  continue: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.pPNeueMontreal,
    color: Color.colorWhite,
    textAlign: "left",
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    width: 95,
    height: 50,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 142,
    paddingVertical: 0,
    backgroundColor: "transparent",
    marginTop: -133,
  },
  frame14: {
    width: 345,
    height: 133,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: -169,
  },
  frame13: {
    position: "absolute",
    top: 703,
    left: -90,
    width: 459,
    height: 283,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  afterAUserFillsTheInfo: {
    position: "relative",
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AfterAUserFillsTheInfo;
