import { useState, useMemo } from 'react';

import CollapsibleFilter from './CollapsibleFilter'

import positioning from '../../styles/Positioning.module.css'
import text from '../../styles/Text.module.css'
import search from '../../styles/layouts/Search.module.css'
import styles from '../../styles/library/Content.module.css'


const productsMock = [
    {
        id: 1,
        title: 'Cyberpunk 2077',
        type: 'Ігри',
        genre: ['Рольові'],
        players: ['Самітна гра'],
        hardwareSupport: [''],
        playTime: '669'
    },
    {
        id: 2,
        title: 'The Witcher 3: Wild Hunt',
        type: 'Ігри',
        genre: ['Рольові', 'Пригоди'],
        players: ['Самітна гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '1450'
    },
    {
        id: 3,
        title: 'FIFA 21',
        type: 'Ігри',
        genre: ['Спортивні'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '340'
    },
    {
        id: 4,
        title: 'Stardew Valley',
        type: 'Ігри',
        genre: ['Симулятор', 'Інді'],
        players: ['Самітна гра', 'Кооперативна гра'],
        hardwareSupport: ['Бажано мати контроллер'],
        playTime: '960'
    },
    {
        id: 5,
        title: 'VRChat',
        type: 'Програми',
        genre: ['Кооперативні', 'Соціальні'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['ВР'],
        playTime: '3200'
    },
    {
        id: 6,
        title: 'Blender',
        type: 'Інструменти',
        genre: [''],
        players: [''],
        hardwareSupport: [''],
        playTime: '240'
    },
    {
        id: 7,
        title: 'Assetto Corsa',
        type: 'Ігри',
        genre: ['Перегони', 'Симулятор'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['Бажано мати контроллер'],
        playTime: '520'
    },
    {
        id: 8,
        title: 'Rocket League',
        type: 'Ігри',
        genre: ['Спортивні', 'Перегони'],
        players: ['Багатокористувацька гра', 'Кооперативна гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '780'
    },
    {
        id: 9,
        title: 'Apex Legends',
        type: 'Ігри',
        genre: ['Бойовик'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: [''],
        playTime: '1350'
    },
    {
        id: 10,
        title: 'Sid Meier’s Civilization VI',
        type: 'Ігри',
        genre: ['Стратегія'],
        players: ['Самітна гра', 'Багатокористувацька гра'],
        hardwareSupport: [''],
        playTime: '1100'
    }
];


export default function Content () {
    const [typeFilter, setTypeFilter] = useState([]);
    const [genreFilter, setGenreFilter] = useState([]);
    const [playersFilter, setPlayersFilter] = useState([]);
    const [hardwareSupportFilter, setHardwareSupportFilter] = useState([]);
    const [gameStateFilter, setGameStateFilter] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const typeCounts = useMemo(() => {
        return productsMock.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + 1;
            return acc;
        }, {});
    }, [productsMock]);

    const handleFilterChange = (filter, value) => {
        if (filter.includes(value)) {
            return filter.filter(item => item !== value);
        }
        return [...filter, value];
    };
    
    const filteredGames = productsMock.filter(game => {
        return (
            (typeFilter.length === 0 || typeFilter.includes(game.type)) &&
            (genreFilter.length === 0 || game.genre.some(genre => genreFilter.includes(genre))) &&
            (playersFilter.length === 0 || game.players.some(player => playersFilter.includes(player))) &&
            (hardwareSupportFilter.length === 0 || game.hardwareSupport.some(hw => hardwareSupportFilter.includes(hw))) &&
            (gameStateFilter.length === 0 
                || (gameStateFilter.includes('Зіграні') && game.playTime > 0) 
                || (gameStateFilter.includes('Не зіграні') && game.playTime === 0))
        );
    });

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`${positioning.container}`}>
            <div className={`${positioning.row} ${positioning.justifyEnd} ${text.fontWeight700}`}>
                <form className={search.form}>
                    <button type='submit'>
                        <div className={search.searchIcon} />
                    </button>
                    <input type='text' id='support_input' name='support_input' 
                        placeholder='Пошук' className={search.input} />
                </form>
            </div>
            <div className={`${positioning.border} ${positioning.row} ${styles.marginTop}`}>
                <div className={`${positioning.border} ${positioning.column} ${positioning.dynamic}`}>
                    News and Games
                    <div className={styles.gameList}>
                        {filteredGames.length ? (
                        filteredGames.map((game) => (
                            <div key={game.id} className={styles.gameItem}>
                                <h4>{game.title}</h4>
                                <p>Genre: {game.genre.join(', ')}</p>
                                <p>Players: {game.players.join(', ')}</p>
                                <p>Hardware Support: {game.hardwareSupport.join(', ')}</p>
                                <p>Play Time: {game.playTime} minutes</p>
                            </div>
                        ))
                        ) : (
                        <p>No games match the selected filters.</p>
                        )}
                    </div>
                </div>
                <div className={`${positioning.border} ${positioning.column} ${text.textSmall} 
                    ${text.fontWeight600} ${styles.filters}`}>
                    <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                        Фільтри
                    </div>
                    <div className={positioning.marginTop20}>
                        {['Ігри', 'Програми', 'Інструменти'].map(type => (
                            <label key={type}>
                                <div className={`${positioning.row} ${positioning.justifyBetween}`}>
                                    <div>
                                        <input type="checkbox" value={type} checked={typeFilter.includes(type)}
                                            onChange={() => setTypeFilter(handleFilterChange(typeFilter, type))}/>
                                        <span className={styles.checkmark}/>
                                        <div style={{ marginTop: '4px'}}>
                                            {type}
                                        </div>
                                    </div>
                                    <div className={`${text.fontWeight800}`}>
                                        {typeCounts[type] || 0}
                                    </div>
                                </div>     
                            </label>
                        ))}
                    </div>
                    <hr/>
                    <CollapsibleFilter 
                        title='Жанр'
                        items={['Бойовик', 'Пригоди', 'Казуальні ігри', 'Інді', 'Кооперативні', 'Перегони', 'Рольові', 
                            'Симулятор', 'Спортивні', 'Стратегія']}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={genreFilter}
                        setItemsFilter={setGenreFilter}
                    />
                    <hr/>
                    <CollapsibleFilter 
                        title='Гравці'
                        items={['Самітна гра', 'Багатокористувацька гра', 'Кооперативна гра']}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={playersFilter}
                        setItemsFilter={setPlayersFilter}
                    />
                    <hr/>
                    <CollapsibleFilter 
                        title='Підтримка пристроїв'
                        items={['Бажано мати контроллер', 'Повна підтримка контроллерів', 'ВР']}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={hardwareSupportFilter}
                        setItemsFilter={setHardwareSupportFilter}
                    />
                    <hr/>
                    <CollapsibleFilter 
                        title='Стан гри'
                        items={['Зіграні', 'Не зіграні']}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={gameStateFilter}
                        setItemsFilter={setGameStateFilter}
                    />
                </div>
            </div>
        </div>
    );
}