import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import OtpResend from './OtpResend';
import styles from '../../styles/components/CashTransferStyles/CountdownTimer.style';
function CountdownTimer({ navigation,phoneNumber }) {
  const [remainingTime, setRemainingTime] = useState(200); // 10 seconds for testing
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(interval);
        setTimerFinished(true); // Set timerFinished to true when the timer is done
      }
    }, 1000); // Update the timer every second

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [remainingTime]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <View>
       <Text style={styles.counterText}>Didn’t receive the code?</Text>
      {!timerFinished &&
      
      <View style={styles.containerView}>
      <Text style={styles.textRequest}>Request new one in</Text>
      <Text style={styles.counter}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </Text>
      </View>
     
}
{timerFinished && 
<View>

<Pressable onPress={() => OtpResend({ navigation,phoneNumber })}>
  <Text style={styles.textResend}>ReSend OTP</Text>

</Pressable>
</View>
}

    </View>
  );
}

export default CountdownTimer;
