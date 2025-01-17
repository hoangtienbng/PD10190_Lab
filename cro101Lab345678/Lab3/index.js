import React from "react";
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

// Định nghĩa hàm `colorText` và `styleText`
const colorText = (color) => ({ color });
const styleText = (styleObj) => styleObj;


const ViewComponent = () => {


  return (

    <View>

      <TextInput
      value={name}></TextInput>
      <View style={styles.container}>
        {/* Line 1 */}
        <Text style={styles.baseText}>
          Em vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('red')]}>vàng đỏ</Text> anh vào đời bằng{' '}
          <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
        </Text>

        {/* Line 2 */}
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{' '}
          <Text style={[styles.boldText, styleText({ fontSize: 20 }), styles.italicText]}>
            mùi đất{' '}
          </Text>
          và{' '}
          <Text style={[styleText({ fontSize: 10 }), styles.italicText]}>
            bàng hoa dại mọc trước nhà
          </Text>
        </Text>

        {/* Line 3 */}
        <Text
          style={[
            styles.baseText,
            styles.italicText,
            styles.boldText,
            colorText('gray'),
          ]}
        >
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

        {/* Line 4 */}
        <Text style={[styles.baseText]}>
          Lý trí em là{' '}
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}
          >
            công cụ{' '}
          </Text>
          còn trái tim anh là{' '}
          <Text
            style={styleText({
              textDecorationLine: 'underline',
              letterSpacing: 20,
              fontWeight: 'bold',
            })}
          >
            động cơ{' '}
          </Text>
        </Text>

        {/* Line 5 */}
        <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>

        {/* Line 6 */}
        <Text
          style={[
            styles.baseText,
            styleText({
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'orange',
            }),
          ]}
        >
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>

        {/* Line 7 */}
        <Text
          style={[
            styles.baseText,
            styleText({ fontWeight: 'bold', color: 'black' }),
          ]}
        >
          Em vào đời bằng{' '}
          <Text style={colorText('white')}>mây trắng</Text> em vào đời bằng{' '}
          <Text style={colorText('yellow')}>nắng xanh</Text>
        </Text>

        {/* Line 8 */}
        <Text
          style={[
            styles.baseText,
            styleText({ fontWeight: 'bold', color: 'black' }),
          ]}
        >
          Em vào đời bằng{' '}
          <Text style={colorText('white')}>vắng anh</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
});

export default ViewComponent;