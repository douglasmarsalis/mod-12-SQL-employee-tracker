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
('Manager', 60000, 1),
('Web Dev Front End', 40000, 4),
('Web Dev Back End', 50000, 4),
('Web Dev Full Stack', 70000, 4)
('Janitor', 24000, 7),
('Tea Lady', 15000, 7)


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Armand', 'Hammer', 1, NULL),
('Bea', 'Minor', 1, NULL),
('Barb E.', 'Dahl', 1, NULL),
('Biff', 'Wellington'),
('Charity', 'Case'),
('Harry', 'Pitts'),
('Chris P.', 'Bacon'),
('Dan', 'Druff'),
('Earl E.', 'Bird'),
('Fanny', 'Hurts'),
('Gene', 'Poole'),
('Harry', 'Beard'),
('Iona', 'Ford'),
('Kerry', 'Oki'),
('Les', 'Moore'),
('Liv', 'Long'),
('Missy', 'Sippy'),
('Mo', 'Lester'),
('Olive', 'Yew'),
('Pearl E.', 'Gates'),
('Ray', 'Gunn'),
('Tad', 'Pohl'),
('Wanna', 'Hickey');
