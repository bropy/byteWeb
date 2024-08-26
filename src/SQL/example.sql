-- закинути в бд щоб мати тестові данні
INSERT INTO roles (name) VALUES 
('user'), 
('developer'), 
('admin'), 
('publisher');

INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('Vlad', 'password123', 'Vlad@example.com', 'John', 'Doe', '1990-01-01'),
('Bob', 'password456', 'Bob@example.com', 'Jane', 'Doe', '1992-02-02');

INSERT INTO user_roles (user_id, role_id) VALUES
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM roles WHERE name = 'admin')),
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM roles WHERE name = 'developer')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM roles WHERE name = 'user'));

-- Insert profiles
INSERT INTO profiles (nickname, avatar, description,country,status user_id) VALUES 
('Vladi4eck', 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg', 'Hello, I am Vlad!', (SELECT id FROM users WHERE login = 'Vlad')),
('BobMarley22', 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg', 'Hello, I am Bob!', (SELECT id FROM users WHERE login = 'Bob'));

INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM users WHERE login = 'Bob')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM users WHERE login = 'Vlad'));

--seeder 2
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('Alice', 'securePass789', 'alice@example.com', 'Alice', 'Johnson', '1995-03-15'),
('Charlie', 'strongPass321', 'charlie@example.com', 'Charles', 'Smith', '1988-07-22');

-- Insert user roles
INSERT INTO user_roles (user_id, role_id) VALUES
((SELECT id FROM users WHERE login = 'Alice'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Alice'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Charlie'), (SELECT id FROM roles WHERE name = 'user')),
((SELECT id FROM users WHERE login = 'Charlie'), (SELECT id FROM roles WHERE name = 'user'));

-- Insert profiles
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES 
('AliceInWonderland', 'https://example.com/alice_avatar.jpg', 'Curiouser and curiouser!', 'Wonderland', 'Down the rabbit hole', (SELECT id FROM users WHERE login = 'Alice')),
('CharlieChaplin', 'https://example.com/charlie_avatar.jpg', 'Making the world laugh!', 'Comedyland', 'Silent but hilarious', (SELECT id FROM users WHERE login = 'Charlie'));

-- Insert friends
INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'Alice'), (SELECT id FROM users WHERE login = 'Charlie')),
((SELECT id FROM users WHERE login = 'Charlie'), (SELECT id FROM users WHERE login = 'Alice'));
--3
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES 
('Luna', 'moonlight123', 'luna@example.com', 'Luna', 'Lovegood', '1999-05-13'),
('Neko', 'purr456', 'neko@example.com', 'Neko', 'Chan', '2001-09-22'),
('Zephyr', 'windRider789', 'zephyr@example.com', 'Zephyr', 'Breeze', '1997-03-30'),
('Pixel', 'bit8byte16', 'pixel@example.com', 'Pixel', 'Art', '2000-12-01'),
('Nova', 'starBurst567', 'nova@example.com', 'Nova', 'Blast', '1996-07-17');

-- Insert user roles
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u, roles r
WHERE u.login IN ('Luna', 'Neko', 'Zephyr', 'Pixel', 'Nova') AND r.name = 'user';

-- Insert profiles
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES 
('MoonChild', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', 'Dreamer and stargazer', 'Dreamland', 'Lost in the stars', (SELECT id FROM users WHERE login = 'Luna')),
('CatWhiskers', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', 'Meow meow!', 'Catlandia', 'Purrfection achieved', (SELECT id FROM users WHERE login = 'Neko')),
('WindWalker', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 'Riding the breeze', 'Cloudtopia', 'Floating on air', (SELECT id FROM users WHERE login = 'Zephyr')),
('8BitWonder', 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c', 'Retro gaming enthusiast', 'Arcadia', 'Game On!', (SELECT id FROM users WHERE login = 'Pixel')),
('StarChild', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2', 'Cosmic explorer', 'Nebula Nine', 'Supernova energy', (SELECT id FROM users WHERE login = 'Nova'));

-- Insert some random friendships
INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'Luna'), (SELECT id FROM users WHERE login = 'Neko')),
((SELECT id FROM users WHERE login = 'Neko'), (SELECT id FROM users WHERE login = 'Luna')),
((SELECT id FROM users WHERE login = 'Zephyr'), (SELECT id FROM users WHERE login = 'Pixel')),
((SELECT id FROM users WHERE login = 'Pixel'), (SELECT id FROM users WHERE login = 'Zephyr')),
((SELECT id FROM users WHERE login = 'Nova'), (SELECT id FROM users WHERE login = 'Luna')),
((SELECT id FROM users WHERE login = 'Luna'), (SELECT id FROM users WHERE login = 'Nova'));
--4
-- Insert users (including companies as developers)
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES
('valve', 'hashed_password', 'contact@valvesoftware.com', 'Valve', 'Software', '1996-08-24'),
('cdprojekt', 'hashed_password', 'contact@cdprojekt.com', 'CD', 'Projekt', '1994-05-01'),
('rockstar', 'hashed_password', 'contact@rockstargames.com', 'Rockstar', 'Games', '1998-12-01'),
('maxim4ick', 'hashed_password', 'max.pro@gmail.com', 'Max', 'Druhenko', '1990-07-15');

-- Insert profiles (associated with users, including companies with logos as avatars)
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES
('Valve Corp', 'valve_logo.png', 'Creators of Half-Life', 'USA', 'Active', (SELECT id FROM users WHERE login = 'valve')),
('CD Projekt Red', 'cdprojekt_logo.png', 'Creators of The Witcher', 'Poland', 'Active', (SELECT id FROM users WHERE login = 'cdprojekt')),
('Rockstar Games', 'rockstar_logo.png', 'Creators of GTA V', 'USA', 'Active', (SELECT id FROM users WHERE login = 'rockstar')),
('JohnD', 'johnd_avatar.png', 'Just a gamer', 'UK', 'Online', (SELECT id FROM users WHERE login = 'maxim4ick'));

-- Insert games
-- Insert users (including companies as developers)
INSERT INTO users (login, password, email, first_name, last_name, birth_date) VALUES
('valve', 'hashed_password', 'contact@valvesoftware.com', 'Valve', 'Software', '1996-08-24'),
('cdprojekt', 'hashed_password', 'contact@cdprojekt.com', 'CD', 'Projekt', '1994-05-01'),
('rockstar', 'hashed_password', 'contact@rockstargames.com', 'Rockstar', 'Games', '1998-12-01'),
('maxim4ick', 'hashed_password', 'john.doe@gmail.com', 'John', 'Doe', '1990-07-15');

-- Insert profiles (associated with users, including companies with logos as avatars)
INSERT INTO profiles (nickname, avatar, description, country, status, user_id) VALUES
('Valve Corp', 'valve_logo.png', 'Creators of Half-Life', 'USA', 'Active', (SELECT id FROM users WHERE login = 'valve')),
('CD Projekt Red', 'cdprojekt_logo.png', 'Creators of The Witcher', 'Poland', 'Active', (SELECT id FROM users WHERE login = 'cdprojekt')),
('Rockstar Games', 'rockstar_logo.png', 'Creators of GTA V', 'USA', 'Active', (SELECT id FROM users WHERE login = 'rockstar')),
('JohnD', 'johnd_avatar.png', 'Just a gamer', 'UK', 'Online', (SELECT id FROM users WHERE login = 'maxim4ick'));

-- Insert games
INSERT INTO games (title, description, source, release_date, price, approved, publisher_id) VALUES
('Half-Life', 'A science fiction first-person shooter.', 'source_code_url', '1998-11-19', 9.99, true, (SELECT id FROM users WHERE login = 'valve')),
('The Witcher 3', 'An action role-playing game.', 'source_code_url', '2015-05-19', 39.99, true, (SELECT id FROM users WHERE login = 'cdprojekt')),
('GTA V', 'An open-world action-adventure game.', 'source_code_url', '2013-09-17', 29.99, true, (SELECT id FROM users WHERE login = 'rockstar'));

-- Insert game developers (many-to-many relationship)
INSERT INTO game_developers (game_id, developer_id) VALUES
((SELECT id FROM games WHERE title = 'Half-Life'), (SELECT id FROM users WHERE login = 'valve')),
((SELECT id FROM games WHERE title = 'The Witcher 3'), (SELECT id FROM users WHERE login = 'cdprojekt')),
((SELECT id FROM games WHERE title = 'GTA V'), (SELECT id FROM users WHERE login = 'rockstar'));

-- Insert user games (library)
INSERT INTO user_games (game_id, user_id, playtime_hours, last_played, status) VALUES
((SELECT id FROM games WHERE title = 'Half-Life'), (SELECT id FROM users WHERE login = 'maxim4ick'), 20.5, '2024-08-01', 'owned'),
((SELECT id FROM games WHERE title = 'The Witcher 3'), (SELECT id FROM users WHERE login = 'maxim4ick'), 50.0, '2024-07-30', 'owned'),
((SELECT id FROM games WHERE title = 'GTA V'), (SELECT id FROM users WHERE login = 'maxim4ick'), 10.0, '2024-08-10', 'owned');

-- Insert friends (many-to-many relationship)
INSERT INTO friends (user_id, friend_id) VALUES
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'valve')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'cdprojekt')),
((SELECT id FROM users WHERE login = 'maxim4ick'), (SELECT id FROM users WHERE login = 'rockstar'));
