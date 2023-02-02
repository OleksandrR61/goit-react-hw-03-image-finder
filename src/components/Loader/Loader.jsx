import { MagnifyingGlass } from  'react-loader-spinner';

import styles from './Loader.module.css';

export const Loader = () => (
    <div className={styles.layout}>
        <MagnifyingGlass
            visible={true}
            height="160"
            width="160"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#fff'
            color = '#3f51b5'
        />
    </div>
)