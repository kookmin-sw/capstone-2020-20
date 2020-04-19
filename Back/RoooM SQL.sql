create schema rooom;

use rooom;

drop table if exists user_name;
create table user_name (
	user varchar(9),
    concept	varchar(9),
    value	varchar(50),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists user_myroom;
create table user_myroom (
	user varchar(9),
    concept	varchar(9),
    value	varchar(50),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_name;
create table room_name (
	user varchar(30),
    concept	varchar(30),
    value	varchar(50),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_colorcode;
create table room_colorcode (
	user varchar(9),
    concept	varchar(9),
    value	varchar(30),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_created;
create table room_created (
	user varchar(9),
    concept	varchar(9),
    value	varchar(30),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

# 룸 소개내용
drop table if exists room_exp;
create table room_exp (
	user varchar(9),
    concept	varchar(9),
    value	varchar(255),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_leader;
create table room_leader (
	user varchar(9),
    concept	varchar(9),
    value	varchar(9),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_members;
create table room_member (
	user varchar(9),
    concept	varchar(9),
    value	varchar(9),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_topic;
create table room_topic (
	user varchar(9),
    concept	varchar(9),
    value	varchar(50),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists room_file;
create table room_File (
	user varchar(9),
    concept	varchar(9),
    value	varchar(255),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists topic_name;
create table topic_name (
	user varchar(9),
    concept	varchar(9),
    value	varchar(200),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists file_name;
create table file_name (
	user varchar(9),
    concept	varchar(50),
    value	varchar(100),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists file_type;
create table file_type (
	user varchar(9),
    concept	varchar(50),
    value	varchar(50),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists file_size;
create table file_size (
	user varchar(9),
    concept	varchar(50),
    value	varchar(100),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists file_uploader;
create table file_uploader (
	user varchar(9),
    concept	varchar(50),
    value	varchar(9),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

# 파일 다운로드 링크(S3)
drop table if exists file_downolad;
create table file_download (
	user varchar(9),
    concept	varchar(50),
    value	varchar(255),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);

drop table if exists alarm;
create table alarm (
		user varchar(9),
    concept	varchar(50),
    value	varchar(255),
    statement	varchar(1),
    registered	varchar(30),
    
    primary key (concept)
);