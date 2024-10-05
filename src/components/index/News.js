import React, { useState } from 'react';

import positioning from '../../styles/Positioning.module.css';
import text from '../../styles/Text.module.css';
import styles from '../../styles/index/News.module.css';

const newsItems = [
  {
    id: 1,
    title: 'Точна дата релізу S.T.A.L.K.E.R 2',
    content: 'Досліджуйте Чорнобильську Зону Відчуження повну небезпечних ворогів, смертельних аномалій та поту...',
    image: 'https://www.stalker2.com/_nuxt/img/assets/pages/home/media/preview/2212-x04.jpg'
  },
  {
    id: 2,
    title: 'Kingdom Come: Deliverance II',
    content: 'Продовження середньовічної RPG з реалістичним підходом до історії та геймплею...',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202408/1208/05a84ce968125d79fa36484c5a756a1c8d9b05622aae21c1.png'
  },
  {
    id: 3,
    title: 'Manor Lords',
    content: 'Середньовічна стратегія з елементами містобудування та тактичними боями...',
    image: 'https://images.squarespace-cdn.com/content/v1/5eb98d54a2c9a8275e6de2ab/1589700624875-AB2C5NDQ57E2RPLORSKQ/Lords_of_the_Manor_Wallpaper-16-9_res_4K.jpg'
  },
  {
    id: 4,
    title: 'Dwarf Fortress',
    content: 'Легендарна гра про управління фортецею гномів тепер з оновленою графікою...',
    image: 'https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava-1200-80.png'
  },
  {
    id: 5,
    title: 'Metal Gear Rising: Revengeance',
    content: 'Динамічний екшн у всесвіті Metal Gear з Райденом у головній ролі...',
    image: 'https://upload.wikimedia.org/wikipedia/ru/8/8c/Metal_Gear_Rising_Revengeance_Cover.jpg'
  }
];

export default function News({ isDesktop }) {
  const [openCard, setOpenCard] = useState(1);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? 1 : id);
  };

  return (
    <div id='news' className={`${positioning.container} ${positioning.row}`}>
      <div style={isDesktop ? { flex: 1 } : {}} />
      <div className={`${positioning.alignEnd} ${styles.container}`} style={{ flex: '3' }}>
        <div className={`${positioning.row} ${positioning.justifyBetween}`}>
          <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800} ${styles.textNews}`}>
            Новини Byte
          </div>
          <div className={`${positioning.row} ${positioning.justifyBetween} ${styles.alignSelfEnd}`}>
            <div>Переглянути більше новин</div>
            <div className={`${styles.arrowRight} ${styles.alignSelfCenter}`} />
          </div>
        </div>
        <br />
        <div className={`${positioning.row} ${positioning.justifyBetween}`}>
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.element} ${openCard === item.id ? styles.elementExpanded : styles.elementCollapsed}`}
              onClick={() => toggleCard(item.id)}
            >
              {openCard === item.id ? (
                <>
                  <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                    <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                      {item.title}
                    </div>
                    <div className={`${text.textMedium} ${text.fontWeight200}`}>
                      {item.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <br />
                  <div>{item.content}</div>
                  <br />
                  <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }} />
                </>
              ) : (
                <>
                  <div className={`${text.textMedium} ${text.fontWeight200}`}>
                    {item.id.toString().padStart(2, '0')}
                  </div>
                  <div className={`${styles.verticalText} ${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                    {item.title}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}