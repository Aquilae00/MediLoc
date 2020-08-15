drop database garudahack_project;
create database if not exists garudahack_project;
use garudahack_project;

-- center
drop table if exists center;
create table center (
	center_id int primary key auto_increment,
    center_name varchar(150) not null,
    center_longitude decimal not null,
    center_latitude decimal not null,
    center_manpower int(11) not null);
    
    
-- area
drop table if exists area;
create table area (
	area_id int primary key auto_increment,
    area_name varchar(150) not null,
    area_longitude decimal not null,
    area_latitude decimal not null,
    area_total_population int(11),
    center_id int default null,
    CONSTRAINT fk_area_center foreign key (center_id) references center (center_id));

