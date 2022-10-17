INSERT INTO department (name)
VALUES
('Administration'),
('Finance'),
('Production'),
('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
('General Manager', 150000, 1),
('Accountant', 105000, 2),
('Music Engraver', 55000, 3),
('Graphic Designer', 55000, 3),
('Sales Associate', 40000, 4);

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES
('Tod', 'Super', NULL, 1),
('Francis', 'Price', 1, 2),
('Jonny', 'Williams', 1, 3),
('Claudia', 'Sunshine', 1, 3),
('Martha', 'Brady', 1, 4);