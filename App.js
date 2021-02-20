import React, {Component} from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* ini konten */}
        <ScrollView style={styles.content}>

          {/* ini seacrh bar & promo bar */}
          <View style={{flexDirection: 'row', paddingHorizontal: 16, paddingTop: 15}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder="ketikkan sesuatu disini" style={{borderWidth: 1,borderColor: 'black', backgroundColor: 'white', borderRadius: 25, paddingLeft: 40, paddingRight: 30, height: 43}}/>
              <Image style={{position: 'absolute', top:9, left:8}} source={require('./assets/search.png')} /> 
            </View>
            <View style={{width:40, height:40, alignItems:'center', justifyContent: 'center'}}>
              <Image style={{ marginLeft:15, height: 31}} source={require('./assets/promo.png')} />
            </View>
          </View>

          {/* main gopay bar */}
          <View>
            <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 16, backgroundColor: 'blue', paddingHorizontal: 5, marginTop: 10, borderTopLeftRadius: 3, borderTopRightRadius: 3, alignItems: 'center'}}>
              <Image source={require('./assets/gopay.png')} />
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 50.000</Text>
            </View>
            <View style={{height: 80, backgroundColor: 'skyblue', marginHorizontal: 16, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/pay.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/nearby.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/topup.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 12}}>
                <Image  style={{height: 35, width: 35}} source={require('./assets/more.png')} />
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 2}}>More</Text>
              </View>
            </View>
          </View>

          {/* main konten */}
          <View style={{marginTop: 15, paddingHorizontal: 5}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>

              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-ride.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-RIDE</Text>
              </View>

              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-car.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-CAR</Text>
              </View>

              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-bluebird.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-BLUEBIRD</Text>
              </View>
              
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-food.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-FOOD</Text>
              </View>
              
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, width: '100%', flexWrap: 'wrap'}}>

              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-send.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-SEND</Text>
              </View>
              
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-deals.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-DEALS</Text>
              </View>
              
              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-pulsa.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>GO-PULSA</Text>
              </View>

              <View style={{width: `${100/4}%`, alignItems: 'center'}}>
                <View style={{width: 55, height: 55, borderWidth: 1, borderColor: 'black', borderRadius: 17, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/go-more.png')} />
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 11, marginTop: 5, textAlign: 'center'}}>MORE</Text>
              </View>

            </View>
          </View>
          <View style={{height: 17, backgroundColor: 'grey', marginTop: 15}}></View>

          {/* go news section */}
          <View style={{paddingTop: 15, paddingHorizontal: 16}}>
            {/* poster */}
            <View style={{position: 'relative'}}>
              <Image source={require('./assets/sepak-bola.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              {/* agar logo tidak terpotong */}
              <View style={{width: 55, height: 16, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./assets/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            {/* text */}
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>GO-NEWS</Text>
              <Text style={{fontSize: 14}}>Dimas Drajat selamatkan penalti, Timnas kalahkan Brunei</Text>
              {/* button */}
              <TouchableOpacity style={{backgroundColor: 'green', marginTop: 5, alignSelf: 'flex-end', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 6, marginBottom: 15}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>

          </View>

          {/* banner go-food section */}
          <View style={{padding: 16}}>
            {/* banner & logo */}
            <View style={{position: 'relative', width: '100%'}}>
              <Image source={require('./assets/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.15, borderRadius: 6}}></View>
              <View style={{width: 55, height: 16, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./assets/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
              {/* text & button */}
              <View style={{position: 'absolute', left: 0, bottom: 0, flexDirection: 'row', width: '100%', paddingHorizontal: 16, paddingBottom: 10}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 8}}>GO-FOOD BANNER</Text>
                  <Text style={{color: 'white'}}>ini adalah contoh food banner internal</Text>
                </View>
                <View>
                  <TouchableOpacity style={{backgroundColor: 'green', marginTop: 15, alignSelf: 'stretch', paddingHorizontal: 12, paddingVertical: 11, borderRadius: 6}}>
                  <Text style={{fontSize: 12, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderWidth: 1, borderColor: 'grey', marginTop: 16}}></View>
          </View>
          
        </ScrollView>

        {/* ini bottom bar */}
        <View style={styles.bottomBar}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/home-active.png')} />
            <Text style={{color: 'green'}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/order.png')} />
            <Text>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/help.png')} />
            <Text>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/inbox.png')} />
            <Text>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Image style={{marginBottom: 4, height: 26, width: 26 }} source={require('./assets/account.png')} />
            <Text>Account</Text>
          </View>
        </View>
        
      </View>
    );
  };
};

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: 'white',
    height: 54,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    backgroundColor: 'white',
  }
})
