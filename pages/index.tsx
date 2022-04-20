import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return <h1>{t('homepage.mainTitle')}</h1>;
};

export default Home;
