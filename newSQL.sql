CREATE TABLE posts (
    post_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  	post_title VARCHAR(80),
  	post_content VARCHAR(1000),
    duck_name VARCHAR(40),
    post_created timestamp not null default CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    comment_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    post_id INTEGER REFERENCES posts(post_id),
    duck_name VARCHAR(40),
    comment_content TEXT,
    post_created timestamp not null default CURRENT_TIMESTAMP
);

    
    INSERT INTO
    posts (post_title, post_content, duck_name) 
VALUES
    (
        
        'Struggling with React, Its well ard!',
      	'I am having a very rough time understand props and how they can just magic around everywhere like they were made by Gandalf. It just makes no sense to me sometimes, I feel I would have more luck if this was in the context of a particularly good fantasy novel such as Wise Mans Fear.', 'Blue Ducky'
      	
    ),
     (
        
        'Struggling with CSS',
      	'Who created CSS? What is this utter, utter monstrosity. I have seen horror films that have given me less PTSD than these CSS rules of chaos. Sometimes I wake up in a cold sweat, and I am not sure if my div classes are in my flex boxes or my flex boxes are in my div classes and my pictures have eyes where their noses are supposed to be and my buttons are just notwhere near where the the user is looking please dear internet Lords help me out.', 'Dave the Duck'
      	
    ),
     (
        
        'Struggling with the sudden change of pace after 15 years of a different career',
      	'Hello Anon Ducks! I started off strong and now I just feel like my brain is turning into an assorted pile of over-boiled mashed potato and over-steamed vegetable. I have spent so long delivering lectures on the best way to make toad in the hole with bananas instead of sausages and it is all I have known for most of my adult life. Suddenly, my banana toad in the hole is irrelevant! And I have got props coming out my this, and callbacks coming out my that, and my ears are bleeding javascript! How are you guys coping with this sudden and beautiful change in your daily lives? Much love, Other Anon Duck', 'Yellow Duck' 
      	
    );
    
 INSERT INTO
    comments (post_id, duck_name, comment_content)
 VALUES
   (
     	1, 'Anon Duck' , 'look at the React docs my dude, that is what they are there for'
     ),
    (
     	1, 'Kanye Duck' , 'Research use State, stop posting on forums and start learning. You can kinda sidestep a lot of the CSS by just googling and robbing buttons and things from the internet, like a proper developer.'
     ),
     (
     	3, 'Trenchfoot Duck' , 'look at the freecodecamp website it has so much on there! I hear you on the brainmelt, I wake up and I swear I see HTML on my pillow that has leaked out my ear'
     );
 

    

