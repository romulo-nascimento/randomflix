import Image from 'next/image'

import styles from './styles.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Image
                className={styles.image}
                src={`/assets/images/bigbangtheory_${Math.floor(Math.random() * 18) + 1 }.png`}
                layout="fill"
                objectFit="cover"
            />
        </div>
    )
}

export default Sidebar