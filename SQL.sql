    CREATE TABLE users (
    user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    duck_name VARCHAR(20)
);

CREATE TABLE posts (
    post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  	post_title VARCHAR(65),
  	post_content VARCHAR(1000),
    user_id INTEGER REFERENCES users(user_id),
    post_created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    post_id INTEGER REFERENCES posts(post_id),
    user_id INTEGER REFERENCES users(user_id),
    comment_content TEXT,
    post_created timestamp not null default CURRENT_TIMESTAMP
);

INSERT INTO
    users (duck_name)
VALUES
    (
        'Blue duck'
    ),
    (
        'Dave duck'
    ),
    (
        'Brown duck'
    ),
    (
        'Orange duck'
    ),
    (
        'Yellow duck'
    ),
    (
        'Red duck'
    ),
    (
        'Blue duck'
    ),
    (
        'Green duck'
    ),
    (
        'Purple duck'
    );
    
    INSERT INTO
    posts (post_title, post_content, user_id) 
VALUES
    (
        
        'Struggling with React, Its well ard',
      	'post content', 1 
      	
    ),
     (
        
        'Struggling with CSS',
      	'post content', 2 
      	
    ),
     (
        
        'Struggling with HTML',
      	'post content', 1 
      	
    );
    
 INSERT INTO
    comments (post_id, user_id, comment_content)
 VALUES
   (
     	1, 5 , 'look at the React docs'
     ),
    (
     	1, 5 , 'Research use State'
     ),
     (
     	3, 5 , 'look at the HTML docs'
     );
 

    

