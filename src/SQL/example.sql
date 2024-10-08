--ВЖЕ НЕ ЮЗАЄМО СІДЕРИ

-- Roles
INSERT INTO roles (name) VALUES 
('user'), 
('developer'), 
('admin'), 
('publisher');

-- Users
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('Vlad', 'encryptedPass123', 'vlad.gamer@example.com', 'Vlad', 'Ivanov', '1990-01-01'),
('Bob', 'hashedPassword456', 'bob.builder@example.com', 'Bob', 'Marley', '1992-02-02'),
('Alice', 'securePass789', 'alice.wonder@example.com', 'Alice', 'Johnson', '1995-03-15'),
('Charlie', 'strongPass321', 'charlie.chaplin@example.com', 'Charles', 'Smith', '1988-07-22'),
('Luna', 'moonlight123', 'luna.lovegood@example.com', 'Luna', 'Lovegood', '1999-05-13'),
('Neko', 'purr456', 'neko.chan@example.com', 'Neko', 'Chan', '2001-09-22'),
('Zephyr', 'windRider789', 'zephyr.breeze@example.com', 'Zephyr', 'Breeze', '1997-03-30'),
('Pixel', 'bit8byte16', 'pixel.art@example.com', 'Pixel', 'Art', '2000-12-01'),
('Nova', 'starBurst567', 'nova.blast@example.com', 'Nova', 'Blast', '1996-07-17'),
('valve', 'valvePass098', 'contact@valvesoftware.com', 'Valve', 'Software', '1996-08-24'),
('cdprojekt', 'cdprojektPass876', 'contact@cdprojekt.com', 'CD', 'Projekt', '1994-05-01'),
('rockstar', 'rockstarPass654', 'contact@rockstargames.com', 'Rockstar', 'Games', '1998-12-01'),
('maxim4ick', 'maxiSecure123', 'max.pro@example.com', 'Max', 'Druhenko', '1990-07-15');

-- User Roles
INSERT INTO user_roles (user_id, role_id) VALUES
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM roles WHERE name = 'admin')),
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM roles WHERE name = 'developer')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Alice'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Charlie'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Luna'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Neko'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Zephyr'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Pixel'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Nova'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'valve'), (SELECT id FROM roles WHERE name = 'publisher')),
((SELECT id FROM users WHERE login = 'cdprojekt'), (SELECT id FROM roles WHERE name = 'publisher')),
((SELECT id FROM users WHERE login = 'rockstar'), (SELECT id FROM roles WHERE name = 'publisher')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM roles WHERE name = 'user'));

-- Profiles
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES 
('Vladi4eck', 'https://i.pinimg.com/564x/bb/db/bc/bbdbbc4200dcb84408ef066dbf4a4d5b.jpg', 'Gaming enthusiast and code wizard.', 'Ukraine', 'Online', (SELECT id FROM users WHERE login = 'Vlad')),
('BobBuilder', 'https://i.pinimg.com/736x/39/82/6f/39826f8bc97826f04ff882daffa5201f.jpg', 'Lets build it together!', 'USA', 'Building', (SELECT id FROM users WHERE login = 'Bob')),
('AliceInWonderland', 'https://i.pinimg.com/564x/68/23/fb/6823fb65e748610a090cfab39f1816da.jpg', 'Curiouser and curiouser!', 'Wonderland', 'Exploring', (SELECT id FROM users WHERE login = 'Alice')),
('CharlieChaplin', 'https://i.pinimg.com/736x/d5/6a/07/d56a07969eca5cd6d3803449d02bd795.jpg', 'Making the world laugh!', 'UK', 'Silent but hilarious', (SELECT id FROM users WHERE login = 'Charlie')),
('MoonChild', 'https://i.pinimg.com/564x/0e/8e/0f/0e8e0fc0d9d1819464d825bcc128f0f5.jpg', 'Dreamer and stargazer', 'Dreamland', 'Lost in the stars', (SELECT id FROM users WHERE login = 'Luna')),
('CatWhiskers', 'https://i.pinimg.com/736x/f8/69/0d/f8690d1906328490bd2ea4926c494e43.jpg', 'Meow meow!', 'Catlandia', 'Purrfection achieved', (SELECT id FROM users WHERE login = 'Neko')),
('WindWalker', 'https://i.pinimg.com/736x/2d/f9/52/2df95275dc3a0fd5d07c353bf44b4925.jpg', 'Riding the breeze', 'Cloudtopia', 'Floating on air', (SELECT id FROM users WHERE login = 'Zephyr')),
('8BitWonder', 'https://i.pinimg.com/736x/b3/a9/a1/b3a9a1a7bb77d69ed38ae1ff136a4e19.jpg', 'Retro gaming enthusiast', 'Arcadia', 'Game On!', (SELECT id FROM users WHERE login = 'Pixel')),
('StarChild', 'https://i.pinimg.com/564x/c7/30/39/c730394c9596327258d188ac4028bcb0.jpg', 'Cosmic explorer', 'Nebula Nine', 'Supernova energy', (SELECT id FROM users WHERE login = 'Nova')),
('Valve Corp', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Valve-logo.png/240px-Valve-logo.png', 'Creators of Half-Life', 'USA', 'Active', (SELECT id FROM users WHERE login = 'valve')),
('CD Projekt Red', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/CD_Projekt_logo.svg/220px-CD_Projekt_logo.svg.png', 'Creators of The Witcher', 'Poland', 'Active', (SELECT id FROM users WHERE login = 'cdprojekt')),
('Rockstar Games', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/220px-Rockstar_Games_Logo.svg.png', 'Creators of GTA V', 'USA', 'Active', (SELECT id FROM users WHERE login = 'rockstar')),
('MaxPro', 'https://i.pinimg.com/564x/24/c1/56/24c15640d6fffa73a743bca65789c5dc.jpg', 'Just a gamer', 'Ukraine', 'Online', (SELECT id FROM users WHERE login = 'maxim4ick'));

-- Friends
INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM users WHERE login = 'Bob')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM users WHERE login = 'Vlad')),
((SELECT id FROM users WHERE login = 'Alice'), (SELECT id FROM users WHERE login = 'Charlie')),
((SELECT id FROM users WHERE login = 'Charlie'), (SELECT id FROM users WHERE login = 'Alice')),
((SELECT id FROM users WHERE login = 'Luna'), (SELECT id FROM users WHERE login = 'Neko')),
((SELECT id FROM users WHERE login = 'Neko'), (SELECT id FROM users WHERE login = 'Luna')),
((SELECT id FROM users WHERE login = 'Zephyr'), (SELECT id FROM users WHERE login = 'Pixel')),
((SELECT id FROM users WHERE login = 'Pixel'), (SELECT id FROM users WHERE login = 'Zephyr')),
((SELECT id FROM users WHERE login = 'Nova'), (SELECT id FROM users WHERE login = 'Luna')),
((SELECT id FROM users WHERE login = 'Luna'), (SELECT id FROM users WHERE login = 'Nova'));

-- Games
INSERT INTO games (title, description, avatar, source, release_date, price, approved, publisher_id) VALUES
('Half-Life', 'A science fiction first-person shooter.', 'https://cdn2.steamgriddb.com/hero_thumb/65c0277ea758218c418ef9580692af22.jpg', 'https://github.com/ValveSoftware/source-code', '1998-11-19', 9.99, true, (SELECT id FROM users WHERE login = 'valve')),
('The Witcher 3', 'An action role-playing game.', 'https://pcbuildsonabudget.com/wp-content/uploads/2016/01/the-witcher-3-wild-hunt-banner.png', 'https://github.com/CDProjekt/source-code', '2015-05-19', 39.99, true, (SELECT id FROM users WHERE login = 'cdprojekt')),
('GTA V', 'An open-world action-adventure game.', 'https://gamemag.ru/images/cache/News/News84263/ad3c20f3bf-2_1390x600.jpg', 'https://github.com/RockstarGames/source-code', '2013-09-17', 29.99, true, (SELECT id FROM users WHERE login = 'rockstar'));

-- Game Developers (Many-to-Many relationship)
INSERT INTO game_developers (game_id, developer_id) VALUES
((SELECT id FROM games WHERE title = 'Half-Life'), (SELECT id FROM users WHERE login = 'valve')),
((SELECT id FROM games WHERE title = 'The Witcher 3'), (SELECT id FROM users WHERE login = 'cdprojekt')),
((SELECT id FROM games WHERE title = 'GTA V'), (SELECT id FROM users WHERE login = 'rockstar'));
-- Achievements
INSERT INTO achievements (game_id, name, instruction, image) VALUES
((SELECT id FROM games WHERE title = 'Half-Life'), 'Crowbar Master', 'Kill 100 enemies with the crowbar', 'https://static.wikia.nocookie.net/left4dead/images/2/29/Achievement_Gnome_Alone.png'),
((SELECT id FROM games WHERE title = 'Half-Life'), 'Scientist Savior', 'Save all scientists in the game', 'https://i.imgur.com/2345678.png'),
((SELECT id FROM games WHERE title = 'The Witcher 3'), 'Monster Slayer', 'Kill 1000 monsters', 'https://bg3.wiki/w/images/4/48/Paladin_Oath_of_Vengeance.png'),
((SELECT id FROM games WHERE title = 'The Witcher 3'), 'Gwent Master', 'Win 50 Gwent games', 'https://gamedaim.com/wp-content/uploads/2022/03/Immortal-Dota-2-MMR-800x450.jpg'),
((SELECT id FROM games WHERE title = 'GTA V'), 'Los Santos Kingpin', 'Complete all heists', 'https://png.klev.club/uploads/posts/2024-05/png-klev-club-v0b7-p-rekrut-dota-2-png-10.png'),
((SELECT id FROM games WHERE title = 'GTA V'), 'Stunt Driver', 'Complete all stunt jumps', 'https://vice-online.com/uploads/monthly_2023_07/GTAV9.png.cffcc65047c28cf74368f4a028086cc0.png');

-- User Games (Library)
-- Update Library (User Games)
INSERT INTO user_games (game_id, user_id, playtime_hours, last_played, status, avatar, total) VALUES
((SELECT id FROM games WHERE title = 'Half-Life'), 
 (SELECT id FROM users WHERE login = 'maxim4ick'), 
 20.5, '2024-08-01', 'owned', 
 (SELECT avatar FROM games WHERE title = 'Half-Life'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'Half-Life'))),

((SELECT id FROM games WHERE title = 'The Witcher 3'), 
 (SELECT id FROM users WHERE login = 'maxim4ick'), 
 50.0, '2024-07-30', 'owned', 
 (SELECT avatar FROM games WHERE title = 'The Witcher 3'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'The Witcher 3'))),

((SELECT id FROM games WHERE title = 'GTA V'), 
 (SELECT id FROM users WHERE login = 'maxim4ick'), 
 15.2, '2024-08-15', 'owned', 
 (SELECT avatar FROM games WHERE title = 'GTA V'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'GTA V')));

-- Update User Game Achievements
INSERT INTO user_game_achievements (user_game_id, achievement_id, earned_at, avatar, total) VALUES
((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'Half-Life') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Crowbar Master'), 
 '2024-08-01 14:30:00', 
 (SELECT avatar FROM games WHERE title = 'Half-Life'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'Half-Life'))),

((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'The Witcher 3') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Monster Slayer'), 
 '2024-07-30 20:15:00', 
 (SELECT avatar FROM games WHERE title = 'The Witcher 3'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'The Witcher 3'))),

((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'GTA V') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Los Santos Kingpin'), 
 '2024-08-15 18:45:00', 
 (SELECT avatar FROM games WHERE title = 'GTA V'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'GTA V')));


-- Achievements

 --
 -- Friends for maxim4ick
INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Vlad')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Bob')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Alice')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Charlie')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Luna')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Neko')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Zephyr')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Pixel')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'Nova'));

-- Creative Works for maxim4ick
INSERT INTO creativeWorks (name, profile_id, game_id, text, cover, likes, dislikes, award, date) VALUES
('Half-Life: A New Era', (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'Half-Life'), 'A deep dive into the world of Half-Life.', 'https://media.moddb.com/images/games/1/13/12496/1085332-ep2_outland_060023.jpg', 120, 5, 10, CURRENT_TIMESTAMP),
('GTA V: The Ultimate Guide', (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'GTA V'), 'All you need to know to rule Los Santos.', 'https://www.metalbridges.com/wp-content/uploads/2013/10/grand-theft-auto-v-screenshots-6.jpg', 98, 3, 7, CURRENT_TIMESTAMP);

-- Guides for maxim4ick
INSERT INTO guide (name, text, cover, likes, dislikes, award, profile_id, game_id, date) VALUES
('The Witcher 3: Monster Hunting 101', 'Tips and tricks for becoming a top monster slayer.', 'https://www.dsogaming.com/wp-content/uploads/2015/03/igrashka.org_14272306796.jpeg', 150, 2, 12, (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'The Witcher 3'), CURRENT_TIMESTAMP);

-- Reviews for maxim4ick
INSERT INTO reviews (name, profile_id, game_id, text, cover, likes, dislikes, award, date, mark) VALUES
('Half-Life: A Timeless Classic', (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'Half-Life'), 'Why Half-Life remains a benchmark in FPS games.', 'https://cdn.mobygames.com/screenshots/12202035-half-life-windows-shooting-some-soldiers-with-the-attached-grena.jpg', 85, 4, 9, CURRENT_TIMESTAMP, 9);

-- Screenshots for maxim4ick
INSERT INTO screenshot (name, likes, dislikes, award, description, source, profile_id, game_id, date) VALUES
('GTA V Stunt Jump', 200, 10, 15, 'Epic stunt in Los Santos.', 'https://img.gta5-mods.com/q95/images/ingame-screenshot/8409b8-Image1.jpg', (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'GTA V'), CURRENT_TIMESTAMP);

-- Videos for maxim4ick
INSERT INTO video (name, description, source, likes, dislikes, award, profile_id, game_id, date) VALUES
('The Witcher 3: Best Moments', 'Compilation of the best moments in The Witcher 3.', 'https://www.youtube.com/watch?v=wJg9fs5jgeI', 350, 12, 25, (SELECT id FROM profiles WHERE nickname = 'MaxPro'), (SELECT id FROM games WHERE title = 'The Witcher 3'), CURRENT_TIMESTAMP);
--minecraft added
-- New Publisher
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('mojang', 'mojangPass123', 'contact@mojang.com', 'Mojang', 'Studios', '2000-05-17');

-- New Game
INSERT INTO games (title, description, avatar, source, release_date, price, approved, publisher_id) VALUES
('Minecraft', 'A sandbox game that allows players to build and explore their own worlds.', 'https://gaming-cdn.com/images/news/articles/7191/cover/minecraft-gets-a-new-artwork-cover66856ea7d02ad.jpg', 'https://github.com/Mojang/Minecraft', '2011-11-18', 26.95, true, (SELECT id FROM users WHERE login = 'mojang'));

-- New Achievements
INSERT INTO achievements (game_id, name, instruction, image) VALUES
((SELECT id FROM games WHERE title = 'Minecraft'), 'Master Builder', 'Build 100 different structures', 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1672970/b6e5c117c5ed58aec4b85e18dfc52fc2cbb0c0fb.jpg'),
((SELECT id FROM games WHERE title = 'Minecraft'), 'Ender Dragon Slayer', 'Defeat the Ender Dragon', 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/1672970/0789757fa37bffff919770ed06dd47fc0796c31e.jpg');

-- User Game (Library) for Minecraft
INSERT INTO user_games (game_id, user_id, playtime_hours, last_played, status, avatar, total) VALUES
((SELECT id FROM games WHERE title = 'Minecraft'), 
 (SELECT id FROM users WHERE login = 'maxim4ick'), 
 30.0, '2024-08-28', 'owned', 
 (SELECT avatar FROM games WHERE title = 'Minecraft'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'Minecraft')));

-- User Game Achievements for Minecraft
INSERT INTO user_game_achievements (user_game_id, achievement_id, earned_at, avatar, total) VALUES
((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'Minecraft') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Master Builder'), 
 '2024-08-28 12:00:00', 
 (SELECT avatar FROM games WHERE title = 'Minecraft'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'Minecraft'))),

((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'Minecraft') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Ender Dragon Slayer'), 
 '2024-08-28 14:00:00', 
 (SELECT avatar FROM games WHERE title = 'Minecraft'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'Minecraft')));


-- New Game sims
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('ea', 'eaSecurePass456', 'contact@ea.com', 'Electronic', 'Arts', '1982-05-28');

-- Assign the publisher role to Electronic Arts
INSERT INTO user_roles (user_id, role_id) VALUES
((SELECT id FROM users WHERE login = 'ea'), (SELECT id FROM roles WHERE name = 'publisher'));

-- Create a profile for Electronic Arts
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES 
('EA Games', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/220px-Electronic-Arts-Logo.svg.png', 'Electronic Arts Inc. is an American video game company headquartered in Redwood City, California.', 'USA', 'Active', (SELECT id FROM users WHERE login = 'ea'));

-- Add The Sims game
INSERT INTO games (title, description, avatar, source, release_date, price, approved, publisher_id) VALUES
('The Sims', 'A life simulation game developed by Maxis and published by Electronic Arts.', 'https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop16x9.575p.png', 'https://www.ea.com/games/the-sims', '2000-02-04', 49.99, true, (SELECT id FROM users WHERE login = 'ea'));

-- Add achievements for The Sims
INSERT INTO achievements (game_id, name, instruction, image) VALUES
((SELECT id FROM games WHERE title = 'The Sims'), 'Master Architect', 'Build a house with 10 rooms or more', 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/226037991/original/f6f4c571fcb7affeb69b32077f9fb5ba6333f7ce/build-you-a-playable-the-sims-4-house-or-lot.jpeg'),
((SELECT id FROM games WHERE title = 'The Sims'), 'Social Butterfly', 'Make 50 friends', 'https://64.media.tumblr.com/5473ce7b2c4cdeacbf14997654876ae5/95147e0c715c49e9-52/s1280x1920/5a659b6cb328b92bbed94b2da3c40755751f8db6.png'),
((SELECT id FROM games WHERE title = 'The Sims'), 'Career Guru', 'Reach the top of your career', 'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc0NDU1NjIxNjkyMDQwNTUy/sims-4-careers.png');

-- Add The Sims to maxim4ick's library
INSERT INTO user_games (game_id, user_id, playtime_hours, last_played, status, avatar, total) VALUES
((SELECT id FROM games WHERE title = 'The Sims'), 
 (SELECT id FROM users WHERE login = 'maxim4ick'), 
 45.0, '2024-08-30', 'owned', 
 (SELECT avatar FROM games WHERE title = 'The Sims'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'The Sims')));

-- Add achievements for maxim4ick in The Sims
INSERT INTO user_game_achievements (user_game_id, achievement_id, earned_at, avatar, total) VALUES
((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'The Sims') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Master Architect' AND game_id = (SELECT id FROM games WHERE title = 'The Sims')), 
 '2024-08-30 10:00:00', 
 (SELECT avatar FROM games WHERE title = 'The Sims'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'The Sims'))),

((SELECT id FROM user_games WHERE game_id = (SELECT id FROM games WHERE title = 'The Sims') 
 AND user_id = (SELECT id FROM users WHERE login = 'maxim4ick')),
 (SELECT id FROM achievements WHERE name = 'Social Butterfly' AND game_id = (SELECT id FROM games WHERE title = 'The Sims')), 
 '2024-08-30 11:30:00', 
 (SELECT avatar FROM games WHERE title = 'The Sims'),
 (SELECT COUNT(*) FROM achievements WHERE game_id = (SELECT id FROM games WHERE title = 'The Sims')));

-- Add The Sims to game developers (assuming EA is also considered a developer)
INSERT INTO game_developers (game_id, developer_id) VALUES
((SELECT id FROM games WHERE title = 'The Sims'), (SELECT id FROM users WHERE login = 'ea'));
