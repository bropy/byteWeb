import { useState, useMemo } from 'react'

import CollapsibleFilter from './CollapsibleFilter'
import Select from '../layouts/Select'
import GamePresentationTile from './GamePresentationTile'
import GamePresentationTable from './GamePresentationTable'
import Modal from './Modal'

import mainStyle from '../../styles/MainStyle.module.css'
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
        playTime: '669',
        image: '',
        url: '/apps/1'
    },
    {
        id: 2,
        title: 'The Witcher 3: Wild Hunt',
        type: 'Ігри',
        genre: ['Рольові', 'Пригоди'],
        players: ['Самітна гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '1450',
        image: '',
        url: '/apps/2'
    },
    {
        id: 3,
        title: 'FIFA 21',
        type: 'Ігри',
        genre: ['Спортивні'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '340',
        image: '',
        url: '/apps/3'
    },
    {
        id: 4,
        title: 'Stardew Valley',
        type: 'Ігри',
        genre: ['Симулятор', 'Інді'],
        players: ['Самітна гра', 'Кооперативна гра'],
        hardwareSupport: ['Бажано мати контроллер'],
        playTime: '960',
        image: '',
        url: '/apps/4'
    },
    {
        id: 5,
        title: 'VRChat',
        type: 'Програми',
        genre: ['Кооперативні', 'Соціальні'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['ВР'],
        playTime: '3200',
        image: '',
        url: '/apps/5'
    },
    {
        id: 6,
        title: 'Blender',
        type: 'Інструменти',
        genre: [''],
        players: [''],
        hardwareSupport: [''],
        playTime: '240',
        image: '',
        url: '/apps/6'
    },
    {
        id: 7,
        title: 'Assetto Corsa',
        type: 'Ігри',
        genre: ['Перегони', 'Симулятор'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: ['Бажано мати контроллер'],
        playTime: '520',
        image: '',
        url: '/apps/7'
    },
    {
        id: 8,
        title: 'Rocket League',
        type: 'Ігри',
        genre: ['Спортивні', 'Перегони'],
        players: ['Багатокористувацька гра', 'Кооперативна гра'],
        hardwareSupport: ['Повна підтримка контроллерів'],
        playTime: '0',
        image: '',
        url: '/apps/8'
    },
    {
        id: 9,
        title: 'Apex Legends',
        type: 'Ігри',
        genre: ['Бойовик'],
        players: ['Багатокористувацька гра'],
        hardwareSupport: [''],
        playTime: '1350',
        image: '',
        url: '/apps/9'
    },
    {
        id: 10,
        title: 'Sid Meier’s Civilization VI',
        type: 'Ігри',
        genre: ['Стратегія'],
        players: ['Самітна гра', 'Багатокористувацька гра'],
        hardwareSupport: [''],
        playTime: '1100',
        image: '',
        url: '/apps/10'
    }
];


export default function Content () {
    // Filter
    const [typeFilter, setTypeFilter] = useState([]);
    const [genreFilter, setGenreFilter] = useState([]);
    const [playersFilter, setPlayersFilter] = useState([]);
    const [hardwareSupportFilter, setHardwareSupportFilter] = useState([]);
    const [gameStateFilter, setGameStateFilter] = useState([]);

    const uniqueTypes = useMemo(() => [...new Set(productsMock.map(product => product.type))], [productsMock]);

    const uniqueGenres = useMemo(() => {
        return [...new Set(productsMock.flatMap(product => product.genre).filter(Boolean))];
    }, [productsMock]);

    const uniquePlayers = useMemo(() => {
        return [...new Set(productsMock.flatMap(product => product.players).filter(Boolean))];
    }, [productsMock]);

    const uniqueHardwareSupport = useMemo(() => {
        return [...new Set(productsMock.flatMap(product => product.hardwareSupport).filter(Boolean))];
    }, [productsMock]);

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
                || (gameStateFilter.includes('Не зіграні') && game.playTime == 0))
        );
    });

    // Sort
    const [sortOrder, setSortOrder] = useState('alphabetical'); 

    const sortedGames = useMemo(() => {
        const sorted = [...filteredGames];
        if (sortOrder === 'alphabetical') {
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === 'playtime') {
            return sorted.sort((a, b) => parseInt(b.playTime) - parseInt(a.playTime)); 
        }
        return sorted;
    }, [filteredGames, sortOrder]);

    // Games Presentation
    const [isTile, setIsTile] = useState(true);

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

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
            <div className={`${positioning.row} ${styles.marginTop}`}>
                <div className={`${positioning.column} ${positioning.dynamic} ${positioning.marginRight20}`}>
                    {/*<div className={`${positioning.column} ${positioning.border} ${text.alignCenter}`}>
                        <br/><br/><br/>
                        NEWS
                        <br/><br/><br/><br/>
                    </div>*/}
                    <div className={`${positioning.column} ${styles.marginTop}`}>
                        <div className={`${text.textMedium} ${text.uppercase} ${text.fontWeight800}`}>
                            Усі
                        </div>
                        <div className={`${styles.panel} ${positioning.justifyBetween} 
                            ${positioning.marginVertical20}`}>
                            <div className={`${positioning.row} ${positioning.alignCenter}`}>
                                <div className={`${positioning.marginRight20} ${text.textSmall} ${text.uppercase} 
                                    ${text.fontWeight800}`}>
                                    Сортувати за:
                                </div>
                                <div className={styles.select}>
                                    <Select
                                        options={[
                                            { label: 'за алфавітом', value: 'alphabetical' },
                                            { label: 'за часом гри', value: 'playtime' },
                                        ]}
                                        value={sortOrder}
                                        onChange={(selectedValue) => {
                                            setSortOrder(selectedValue);
                                        }}
                                    />
                                </div>  
                            </div>
                            <div className={`${positioning.row} ${positioning.justifyBetween} ${positioning.alignCenter}`}>
                                <div className={`${positioning.row} ${positioning.alignCenter}`}>
                                    <div className={`${mainStyle.interactive} ${positioning.marginRight20}`}
                                        onClick={() => setIsTile(true)}>
                                        <svg className={`${styles.presentationSign} ${isTile && styles.presentationSignActive}`} 
                                            viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9227 1.53906H1.53809V16.9237H16.9227V1.53906Z" 
                                                stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M16.9227 23.0762H1.53809V38.4608H16.9227V23.0762Z" 
                                                stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M38.4618 1.53906H23.0771V16.9237H38.4618V1.53906Z" 
                                                stroke-miterlimit="10" stroke-linejoin="round"/>
                                            <path d="M38.4618 23.0762H23.0771V38.4608H38.4618V23.0762Z" 
                                                stroke-miterlimit="10" stroke-linejoin="round"/>         
                                        </svg>
                                    </div>
                                    <div className={`${mainStyle.interactive}`}
                                        onClick={() => setIsTile(false)}>
                                        <svg className={`${styles.presentationSign} ${!isTile && styles.presentationSignActive}`} 
                                            viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 1H41" />
                                            <path d="M1 1H6" />
                                            <path d="M11 16H41" />
                                            <path d="M1 16H6" />
                                            <path d="M11 31H41" />
                                            <path d="M1 31H6" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={`${mainStyle.interactive} ${positioning.marginLeft20}`}
                                    onClick={() => setIsModalOpen(true)}>
                                    <svg className={`${styles.presentationSign} ${styles.filterSign}`} 
                                        viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666992 3.16602C0.666992 1.78531 1.78628 0.666016 3.16699 0.666016H14.8337C16.2144 0.666016 17.3337 1.78531 17.3337 3.16602V4.14232C17.3337 4.80537 17.0702 5.44125 16.6014 5.91009L11.7444 10.7671C11.5882 10.9234 11.5003 11.1353 11.5003 11.3563V13.309C11.5003 13.972 11.2369 14.6079 10.7681 15.0768L8.93307 16.9118C8.03533 17.8095 6.50033 17.1737 6.50033 15.9041V11.3563C6.50033 11.1353 6.41253 10.9234 6.25625 10.7671L1.39923 5.91009C0.930384 5.44125 0.666992 4.80537 0.666992 4.14232V3.16602Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={`${positioning.marginTop20} 
                            ${isTile ? styles.gameListTile : styles.gameListTable}`}>
                            {sortedGames.length > 0 && (sortedGames.map((game) => (
                                <div key={game.id}>
                                    {isTile ? 
                                    <GamePresentationTile game={game} /> : 
                                    <GamePresentationTable game={game} /> 
                                    }
                                </div>
                            )))}
                            {isTile ? 
                                <div className={`${mainStyle.interactive}`}
                                    onClick={() => window.location.href = '/store'}>
                                    <div className={styles.gameImage}
                                        style={{backgroundImage: 'url(images/move_to_store.svg)'}}/>
                                </div>
                                :
                                <div className={`${mainStyle.interactive}`}
                                    onClick={() => window.location.href = '/store'}>
                                    <div className={`${styles.gameImage} ${styles.gameImageTable} ${styles.storeElement}`}
                                        style={{backgroundImage: `url(${'images/move_to_store.svg'})`}}/>
                                </div>
                            }
                        </div>
                    </div>            
                </div>

                <div className={`${positioning.column} ${text.textSmall} 
                    ${text.fontWeight600} ${styles.filters}`}>
                    <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                        Фільтри
                    </div>
                    <div className={positioning.marginTop20}>
                        {uniqueTypes.map(type => (
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
                        items={uniqueGenres}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={genreFilter}
                        setItemsFilter={setGenreFilter}
                    />
                    <hr/>
                    <CollapsibleFilter 
                        title='Гравці'
                        items={uniquePlayers}
                        handleFilterChange={handleFilterChange}
                        itemsFilter={playersFilter}
                        setItemsFilter={setPlayersFilter}
                    />
                    <hr/>
                    <CollapsibleFilter 
                        title='Підтримка пристроїв'
                        items={uniqueHardwareSupport}
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

                {/* TODO: FIX Modal*/}
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={closeModal}>
                    <div className={`${positioning.column} ${text.textSmall} 
                        ${text.fontWeight600} ${styles.filters} ${styles.popupFilters}`}>
                        <div className={`${text.textMediumSmall} ${text.uppercase} ${text.fontWeight800}`}>
                            Фільтри
                        </div>
                        <div className={positioning.marginTop20}>
                            {uniqueTypes.map(type => (
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
                            items={uniqueGenres}
                            handleFilterChange={handleFilterChange}
                            itemsFilter={genreFilter}
                            setItemsFilter={setGenreFilter}
                        />
                        <hr/>
                        <CollapsibleFilter 
                            title='Гравці'
                            items={uniquePlayers}
                            handleFilterChange={handleFilterChange}
                            itemsFilter={playersFilter}
                            setItemsFilter={setPlayersFilter}
                        />
                        <hr/>
                        <CollapsibleFilter 
                            title='Підтримка пристроїв'
                            items={uniqueHardwareSupport}
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
                </ Modal>
            </div>
        </div>
    );
}