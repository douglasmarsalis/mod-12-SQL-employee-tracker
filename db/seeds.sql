INSERT INTO departments (department_name)
VALUES
('Marketing'),
('Production'),
('Risk Management'),
('Technology'),
('Engineering'),
('Human Resourses'),
('Operations'),
('Product Management'),
('Quality Assurance'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('CEO (El Hefe)', 100000, 1),
('VP (Little Hefe)', 80000, 1),
('Manager', 60000, 10),
('Web Dev Front End', 40000, 4),
('Web Dev Back End', 50000, 4),
('Web Dev Full Stack', 70000, 4),
('Office Worker', 35000, 10),
('Secretary', 20000, 7),
('Janitor', 24000, 7),
('Tea Lady', 15000, 7);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Armand', 'Hammer', 1, NULL),
('Bea', 'Minor', 1, NULL),
('Barb E.', 'Dahl', 1, NULL),
('Biff', 'Wellington', 2, 2),
('Charity', 'Case', 2, 2),
('Harry', 'Pitts', 3, 3),
('Chris P.', 'Bacon', 3, 3),
('Dan', 'Druff', 4, 4),
('Earl E.', 'Bird', 4, 4),
('Fanny', 'Hurts', 5, 5),
('Gene', 'Poole', 5, 5),
('Harry', 'Beard', 6, 6),
('Iona', 'Ford', 6, 6),
('Kerry', 'Oki', 7, 7),
('Les', 'Moore', 7, 7),
('Liv', 'Long', 8, 8),
('Missy', 'Sippy', 8, 8),
('Mo', 'Lester', 9, 9),
('Olive', 'Yew', 9, 9),
('Pearl E.', 'Gates', 10, 10),
('Ray', 'Gunn', 10, 10),
('Tad', 'Pohl', 10, 10),
('Wanna', 'Hickey', 10, 10);
