/** 引入 antd 样式 */
import 'antd/dist/antd.css';
import '../styles/global.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
