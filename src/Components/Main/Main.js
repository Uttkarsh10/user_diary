import React from 'react'
import styles from './Main.module.css';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import diaryImage from '../../Images/diary-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import DiaryEntry from '../Diary/DiaryEntry';
import { useDispatch, useSelector } from 'react-redux';
import { entrydisplayActions } from '../../store/entrydisplay-slice';

function Main() {
  // const [data,setData] = useState(false);
  const dispatch = useDispatch();
  const showEntry = useSelector(state => state.entrydisplay.show);

  const AddEntry = () => {
    dispatch(entrydisplayActions.toggle());
    // setData(!data);
  }

  return (
    <div style={{backgroundImage : `url(${diaryImage})`, backgroundRepeat : "no-repeat", backgroundSize : "cover"}} className={styles.main}>
        <Header/>

        {!showEntry && 
          <div>
            <div className={styles['main-text']}>My Diary</div>
            <div className={styles['main-subtext']}>Organize your thoughts or record daily events!<br/>
                  <span style={{position:"relative", right:"48px"}}>Beacuse Life is better with journals</span>
            </div>
            <div className={styles['main-link']} onClick={AddEntry}>Get Started <FontAwesomeIcon icon={faArrowRight} /></div>
          </div>
        }

        {showEntry && <DiaryEntry/>}

        <Footer />
    </div>
  )
}

export default Main
