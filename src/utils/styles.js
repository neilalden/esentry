import {Dimensions, StyleSheet} from 'react-native';
export const NUNITOBOLD = 'Nunito-Bold';
export const NUNITOREGULAR = 'Nunito-Regular';
export const LIGHT1 = '#FFF';
export const DARK1 = '#000';
export const DARK2 = '#313235';
export const BORDERBOX = 15;
export const BORDERCIRCLE = 500;
export const PRIMARY1 = '#0099FF';
export const PRIMARY2 = '#6DC3FD';
export const PRIMARY3 = '#9CD7FE';
export const SUCCESS = 'lightgreen';
export const WARNING = 'gold';
export const DANGER = 'red';
export const WINDOWWIDTH =
  Dimensions.get('window').width < 450 ? Dimensions.get('window').width : 450;

export const COLOR0 = [
  '#007399',
  '#248f8f',
  '#00b36b',
  '#33cc00',
  '#99cc00',
  '#b3b300',
  '#b39800',
  '#b37400',
  '#b33000',
  '#800000',
];
export const COLOR10 = [
  '#0099cc',
  '#33cccc',
  '#00ff99',
  '#66ff33',
  '#ccff33',
  'yellow',
  'gold',
  'orange',
  '#ff4500',
  'red',
];
const styles = StyleSheet.create({
  headerContainer: {
    height: 250,
  },
  jumbotronNavContainer: {
    flexDirection: 'row',
  },
  jumbotronNavButtonContainer: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jumbotronNavButton: {
    height: 15,
    width: 15,
    borderRadius: BORDERCIRCLE,
    backgroundColor: PRIMARY2,
  },
  jumbotronNavButtonActive: {
    height: 15,
    width: 30,
    borderRadius: BORDERCIRCLE,
    backgroundColor: PRIMARY1,
  },
  loadingContainer: {
    height: '110%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    margin: 15,
  },
  selfCenter: {
    alignSelf: 'center',
  },
  viewCenter: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  jCenter: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  coverImage: {
    flex: 1,
    height: 300,
    width: '100%',
    position: 'absolute',
  },
  mapCoverImage: {
    height: 300,
    width: WINDOWWIDTH,
    position: 'absolute',
  },
  glass: {
    backgroundColor: 'rgba( 232, 244, 253, 0.4)',
    borderRadius: BORDERBOX,
    padding: BORDERBOX,
  },
  light1: {
    color: LIGHT1,
  },
  backgroundColorPrimary1: {
    backgroundColor: PRIMARY1,
  },
  backgroundColorPrimary2: {
    backgroundColor: PRIMARY2,
  },
  backgroundColorPrimary3: {
    backgroundColor: PRIMARY3,
  },
  backgroundColorSuccess: {
    backgroundColor: SUCCESS,
  },
  backgroundColorDanger: {
    backgroundColor: DANGER,
  },
  backgroundColorWarning: {
    backgroundColor: WARNING,
  },
  backgroundColorLight: {
    backgroundColor: LIGHT1,
  },
  pt1: {
    paddingTop: 2,
  },
  pt2: {
    paddingTop: 4,
  },
  pt3: {
    paddingTop: 6,
  },
  pt4: {
    paddingTop: 8,
  },
  pt5: {
    paddingTop: 10,
  },
  pt6: {
    paddingTop: 12,
  },
  pb1: {
    paddingBottom: 2,
  },
  pb2: {
    paddingBottom: 4,
  },
  pb3: {
    paddingBottom: 6,
  },
  pb4: {
    paddingBottom: 8,
  },
  pb5: {
    paddingBottom: 10,
  },
  pb6: {
    paddingBottom: 12,
  },
  pr1: {
    paddingRight: 2,
  },
  pr2: {
    paddingRight: 4,
  },
  pr3: {
    paddingRight: 6,
  },
  pr4: {
    paddingRight: 8,
  },
  pr5: {
    paddingRight: 10,
  },
  pr6: {
    paddingRight: 12,
  },
  pl6: {
    paddingLeft: 12,
  },
  pl1: {
    paddingLeft: 2,
  },
  pl2: {
    paddingLeft: 4,
  },
  pl3: {
    paddingLeft: 6,
  },
  pl4: {
    paddingLeft: 8,
  },
  pl5: {
    paddingLeft: 10,
  },
  pl6: {
    paddingLeft: 12,
  },
  pv1: {
    paddingVertical: 2,
  },
  pv2: {
    paddingVertical: 4,
  },
  pv3: {
    paddingVertical: 6,
  },
  pv4: {
    paddingVertical: 8,
  },
  pv5: {
    paddingVertical: 10,
  },
  pv6: {
    paddingVertical: 12,
  },
  ph1: {
    paddingHorizontal: 2,
  },
  ph2: {
    paddingHorizontal: 4,
  },
  ph3: {
    paddingHorizontal: 6,
  },
  ph4: {
    paddingHorizontal: 8,
  },
  ph5: {
    paddingHorizontal: 10,
  },
  ph6: {
    paddingHorizontal: 12,
  },
  mt1: {
    marginTop: 2,
  },
  mt2: {
    marginTop: 4,
  },
  mt3: {
    marginTop: 6,
  },
  mt4: {
    marginTop: 8,
  },
  mt5: {
    marginTop: 10,
  },
  mt6: {
    marginTop: 12,
  },
  mb1: {
    marginBottom: 2,
  },
  mb2: {
    marginBottom: 4,
  },
  mb3: {
    marginBottom: 6,
  },
  mb4: {
    marginBottom: 8,
  },
  mb5: {
    marginBottom: 10,
  },
  mb6: {
    marginBottom: 12,
  },
  mr1: {
    marginRight: 2,
  },
  mr2: {
    marginRight: 4,
  },
  mr3: {
    marginRight: 6,
  },
  mr4: {
    marginRight: 8,
  },
  mr5: {
    marginRight: 10,
  },
  mr6: {
    marginRight: 12,
  },
  ml1: {
    marginLeft: 2,
  },
  ml2: {
    marginLeft: 4,
  },
  ml3: {
    marginLeft: 6,
  },
  ml4: {
    marginLeft: 8,
  },
  ml5: {
    marginLeft: 10,
  },
  ml6: {
    marginLeft: 12,
  },
  mv1: {
    marginVertical: 2,
  },
  mv2: {
    marginVertical: 4,
  },
  mv3: {
    marginVertical: 6,
  },
  mv4: {
    marginVertical: 8,
  },
  mv5: {
    marginVertical: 10,
  },
  mv6: {
    marginVertical: 12,
  },
  mh1: {
    marginHorizontal: 2,
  },
  mh2: {
    marginHorizontal: 4,
  },
  mh3: {
    marginHorizontal: 6,
  },
  mh4: {
    marginHorizontal: 8,
  },
  mh5: {
    marginHorizontal: 10,
  },
  mh6: {
    marginHorizontal: 12,
  },
  h1: {
    color: DARK1,
    fontSize: 48,
    fontFamily: NUNITOBOLD,
  },
  h2: {
    color: DARK1,
    fontSize: 28,
    fontFamily: NUNITOBOLD,
  },
  h3: {
    color: DARK1,
    fontSize: 24,
    fontFamily: NUNITOBOLD,
  },
  h4: {
    color: DARK1,
    fontSize: 20,
    fontFamily: NUNITOBOLD,
  },
  h5: {
    color: DARK1,
    fontSize: 18,
    fontFamily: NUNITOBOLD,
  },
  h6: {
    color: DARK1,
    fontSize: 16,
    fontFamily: NUNITOBOLD,
  },
  p1: {
    color: DARK1,
    fontSize: 18,
    fontFamily: NUNITOREGULAR,
  },
  p2: {
    color: DARK1,
    fontSize: 16,
    fontFamily: NUNITOREGULAR,
  },
  p3: {
    color: DARK1,
    fontSize: 14,
    fontFamily: NUNITOREGULAR,
  },
  p3: {
    color: DARK1,
    fontSize: 12,
    fontFamily: NUNITOREGULAR,
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  brBox: {
    borderRadius: BORDERBOX,
  },
  brCircle: {
    borderRadius: BORDERCIRCLE,
  },
});
export default styles;
