import {StyleSheet} from 'react-native';
export const DARK1 = '#000';
export const DARK2 = '#313235';
export const BORDERBOX = 15;
export const BORDERCIRCLE = 50;
export const PRIMARY1 = '#0099FF';
export const PRIMARY2 = '#6DC3FD';
export const PRIMARY3 = '#9CD7FE';
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
    backgroundColor: PRIMARY3,
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
  flexWrap: {
    flexWrap: 'wrap',
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
  glass: {
    backgroundColor: 'rgba( 232, 244, 253, 0.4)',
    borderRadius: BORDERBOX,
    padding: BORDERBOX,
    height: 150,
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
    fontFamily: 'Nunito-Bold',
  },
  h2: {
    color: DARK1,
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
  },
  h3: {
    color: DARK1,
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
  },
  p1: {
    color: DARK1,
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
  p2: {
    color: DARK1,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  p3: {
    color: DARK1,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  p3: {
    color: DARK1,
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
  p4: {
    color: DARK1,
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
  },
  p5: {
    color: DARK1,
    fontSize: 8,
    fontFamily: 'Nunito-Regular',
  },
  p5: {
    color: DARK1,
    fontSize: 6,
    fontFamily: 'Nunito-Regular',
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
});
export default styles;
