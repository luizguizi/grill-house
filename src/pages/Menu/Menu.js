import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>
              <h1>Menu</h1>
            </div>
          <div className={styles.container}>
           
              <div className={styles.option}>
              <div className={styles.food_2}></div>
              <div className={styles.menu}>
                    <h2>CHICKEN</h2>
                    <span>Chiken with salad </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>The Gold Chicken</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Chicken with sauce</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              <div className={styles.menu}>
                    <h2>SLIDES</h2>
                    <span>Potato Fries </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>Mushrooms</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Roasted Brocoli</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              </div>
              <div className={styles.option}>
              <div className={styles.food_3}></div>
              <div className={styles.menu}>
                    <h2>BEEF</h2>
                    <span>Prime Steak </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>Steak Beef</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Entrecôte</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              <div className={styles.menu}>
                    <h2>DRINKS</h2>
                    <span>Soft Drink </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>Beer</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Cine Glass</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              </div>
              <div className={styles.option}>
              <div className={styles.food_1}></div>
              <div className={styles.menu}>
                    <h2>PORK</h2>
                    <span>Pork Cheeks </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>Iberian Special Cut</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Pork Chop</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              <div className={styles.menu}>
                    <h2>DESSERTS</h2>
                    <span>Cheesecake </span>< span className={styles.price}>R$10.00 </span><br />
                      <span>Tiramisu</span><span className={styles.price}>R$10.00 </span><br />
                      <span>Chocolate Mousse</span><span className={styles.price}>R$10.00 </span><br />
              </div>
              </div>
          </div>
    </div>
  )
}

export default Menu