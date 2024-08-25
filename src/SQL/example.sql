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
INSERT INTO profiles (nickname, avatar, description, user_id) VALUES 
('Vladi4eck', 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg', 'Hello, I am Vlad!', (SELECT id FROM users WHERE login = 'Vlad')),
('BobMarley22', 'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg', 'Hello, I am Bob!', (SELECT id FROM users WHERE login = 'Bob'));

INSERT INTO friends (user_id, friend_id) VALUES 
((SELECT id FROM users WHERE login = 'Vlad'), (SELECT id FROM users WHERE login = 'Bob')),
((SELECT id FROM users WHERE login = 'Bob'), (SELECT id FROM users WHERE login = 'Vlad'));
