require 'faker'

Admin.destroy_all
User.destroy_all

categories = ['Barbell Strength/Power', 'KettleBell Strength/Power', 'Cardio-Respiratory Power', 'Power/Strength Endurance', 'Power Endurance', 'GYM Endurance']
#admins 

Admin.create(name:"admin1", first_name:Faker::Name.first_name, last_name:Faker::Name.last_name, phone:Faker::PhoneNumber.cell_phone, speciality:Faker::Job.key_skill, email: "admin1@test.com", password:"123456", image:"https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg")
admin = Admin.first()
puts "created email: #{admin.email}"
    exercise1=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?", 
    category: "Barbell Strength/Power", activity: "Deadlift", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise2=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?", 
    category: "Barbell Strength/Power", activity: "Back Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise3=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Barbell Strength/Power", activity: "Bench Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise4=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?", 
    category: "Barbell Strength/Power", activity: "Front Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise5=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "KettleBell Strength/Power", activity: "Clean", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise6=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "KettleBell Strength/Power", activity: "Clean & Jerk", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise7=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "KettleBell Strength/Power", activity: "Snatch", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise8=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "KettleBell Strength/Power", activity: "Strict Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise9=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Cardio-Respiratory Power", activity: "Row", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise10=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Cardio-Respiratory Power", activity: "Ski", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise11=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Cardio-Respiratory Power", activity: "Assault", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise12=admin.exercises.create(name: "", description: "All the following movements done with a barbell with good technique and form unbroken without setting the bar down: Deadlift + Bent Row + Hang Clean + Front Squat + Push Press +Back Squat", category: "Power/Strength Endurance", activity: "Standard BB Complex", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise13=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power/Strength Endurance", activity: "100 Max KB Snatch", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise14=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power/Strength Endurance", activity: "Pull-Up (Strict)", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise15=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power/Strength Endurance", activity: "MAX Rep BW Back Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise16=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power/Strength Endurance", activity: "MAX Rep BW Bench Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise17=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power/Strength Endurance", activity: "MAX REP KB Swing @ 50% BW", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise18=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "Power Endurance", activity: "BW CAL ROW", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    exercise19=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
     category: "GYM Endurance", activity: "60 Min Row", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    # 100.times do 
    #   exercise20=admin.exercises.create(name: "", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?",
    #    category: categories.sample, activity: "Extra Activity to Show how infinitie Scroll works", image: "https://picsum.photos/200/300.jpg", how_to_video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    # end

    level1_e1 = exercise1.levels.create(name: "Initiated", multiplier:2, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e1 = exercise1.levels.create(name: "Committed", multiplier:2.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e1 = exercise1.levels.create(name: "Proven", multiplier:2.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e2 = exercise2.levels.create(name: "Initiated", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e2 = exercise2.levels.create(name: "Committed", multiplier:2, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e2 = exercise2.levels.create(name: "Proven", multiplier:2.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e3 = exercise3.levels.create(name: "Initiated", multiplier:1.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e3 = exercise3.levels.create(name: "Committed", multiplier:1.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e3 = exercise3.levels.create(name: "Proven", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e4 = exercise4.levels.create(name: "Initiated", multiplier:1.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e4 = exercise4.levels.create(name: "Committed", multiplier:1.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e4 = exercise4.levels.create(name: "Proven", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e5 = exercise5.levels.create(name: "Initiated", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e5 = exercise5.levels.create(name: "Committed", multiplier:0.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e5 = exercise5.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e6 = exercise6.levels.create(name: "Initiated", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e6 = exercise6.levels.create(name: "Committed", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e6 = exercise6.levels.create(name: "Proven", multiplier:0.7, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e7 = exercise7.levels.create(name: "Initiated", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e7 = exercise7.levels.create(name: "Committed", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e7 = exercise7.levels.create(name: "Proven", multiplier:0.7, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e8 = exercise8.levels.create(name: "Initiated", multiplier:0.3, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level2_e8 = exercise8.levels.create(name: "Committed", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level3_e8 = exercise8.levels.create(name: "Proven", multiplier:0.6, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    level1_e9 = exercise9.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    level2_e9 = exercise9.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    level3_e9 = exercise9.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    level1_e10 = exercise10.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    level2_e10 = exercise10.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    level3_e10 = exercise10.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    level1_e11 = exercise11.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    level2_e11 = exercise11.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    level3_e11 = exercise11.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    level1_e12 = exercise12.levels.create(name: "Initiated", multiplier:2, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    level2_e12 = exercise12.levels.create(name: "Committed", multiplier:4, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    level3_e12 = exercise12.levels.create(name: "Proven", multiplier:6, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    level1_e13 = exercise13.levels.create(name: "Initiated", multiplier:0.2, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    level2_e13 = exercise13.levels.create(name: "Committed", multiplier:0.3, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    level3_e13 = exercise13.levels.create(name: "Proven", multiplier:0.4, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    level1_e14 = exercise14.levels.create(name: "Initiated", multiplier:0, metric:"Each",measurement: "-", reps: 10,timeframe:0,sets:0)
    level2_e14 = exercise14.levels.create(name: "Committed", multiplier:0, metric:"Each",measurement: "-", reps: 15,timeframe:0,sets:0)
    level3_e14 = exercise14.levels.create(name: "Proven", multiplier:0, metric:"Each",measurement: "-", reps: 20,timeframe:0,sets:0)
    level1_e15 = exercise15.levels.create(name: "Initiated", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 25,timeframe:0,sets:0)
    level2_e15 = exercise15.levels.create(name: "Committed", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 50,timeframe:0,sets:0)
    level3_e15 = exercise15.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 75,timeframe:0,sets:0)
    level1_e16 = exercise16.levels.create(name: "Initiated", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 10,timeframe:0,sets:0)
    level2_e16 = exercise16.levels.create(name: "Committed", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 15,timeframe:0,sets:0)
    level3_e16 = exercise16.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 20,timeframe:0,sets:0)
    level1_e17 = exercise17.levels.create(name: "Initiated", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 25,timeframe:0,sets:0)
    level2_e17 = exercise17.levels.create(name: "Committed", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 50,timeframe:0,sets:0)
    level3_e17 = exercise17.levels.create(name: "Proven", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 75,timeframe:0,sets:0)
    level1_e18 = exercise18.levels.create(name: "Initiated", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:660,sets:0)
    level2_e18 = exercise18.levels.create(name: "Committed", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:600,sets:0)
    level3_e18 = exercise18.levels.create(name: "Proven", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:540,sets:0)
    level1_e19 = exercise19.levels.create(name: "Initiated", multiplier:4, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)
    level2_e19 = exercise19.levels.create(name: "Committed", multiplier:4.5, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)
    level3_e19 = exercise19.levels.create(name: "Proven", multiplier:5, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)

#users

5.times do |j|
  user = User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    weight: rand(100..300),
    height: rand(163..199),
    gender: Faker::Gender.binary_type,
    about: Faker::Movies::PrincessBride.quote,
    age: rand(18..65),
    image: 'https://picsum.photos/200',
    email: "user#{j}@test.com", 
    password: '123456')
    # user = User.find(j+1)
    puts "created user email: #{user.email}"
    # 20.times do 

    #LEVEL 1
    #level 1 - Approved
    @sub1 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e1.id, status: 'Approved')
    @sub2 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e2.id, status: 'Approved')
    @sub3 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e3.id, status: 'Approved')
    @sub4 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e4.id, status: 'Approved')
    @sub5 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e5.id, status: 'Approved')
    @sub6 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e6.id, status: 'Approved')
    @sub7 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e7.id, status: 'Approved')
    @sub8 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e8.id, status: 'Approved')
    @sub9 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e9.id, status: 'Approved')
    @sub10 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e10.id, status: 'Approved')
    @sub11 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e11.id, status: 'Approved')
    @sub12 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e12.id, status: 'Approved')

    #level 1 - Pending
    @sub13 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e13.id, status: 'Pending')
    @sub14 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e14.id, status: 'Pending')

    #level 1 - Not Approved
    @sub15 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level1_e15.id, status: 'Not Approved')


    #LEVEL 2

    #level 2 - Approved
    @sub16 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e1.id, status: 'Approved')
    @sub17 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e2.id, status: 'Approved')
    @sub18 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e3.id, status: 'Approved')
    @sub19 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e4.id, status: 'Approved')
    @sub20 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e5.id, status: 'Approved')
    @sub21 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e6.id, status: 'Approved')
    @sub22 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e7.id, status: 'Approved')
    @sub23 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e8.id, status: 'Approved')
    @sub24 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e9.id, status: 'Approved')

    #level 2 - Pending

    @sub25 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e10.id, status: 'Pending')
    @sub26 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e11.id, status: 'Pending')

    #level 2 - Not Approved
    @sub27 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level2_e12.id, status: 'Not Approved')

    #LEVEL 3
    #level 3 - Approved
    @sub28 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e1.id, status: 'Approved')
    @sub29 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e2.id, status: 'Approved')
    @sub30 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e3.id, status: 'Approved')
    @sub31 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e4.id, status: 'Approved')
    @sub32 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e5.id, status: 'Approved')
    

    #level 3 - Pending
    @sub33 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e6.id, status: 'Pending')
    @sub34 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e7.id, status: 'Pending')
    @sub35 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e8.id, status: 'Pending')

    #level 3 - Not Approved
    @sub36 = user.submissions.create(completed:false, name: "Faker::Movies::PrincessBride.quote", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: level3_e9.id, status: 'Approved')

    # end

end

2.times do @sub1.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub2.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub3.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub4.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub5.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub6.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub7.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub8.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub9.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub10.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub11.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub12.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub13.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub14.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub15.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub16.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub17.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub18.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub19.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub20.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub21.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub22.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub23.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub24.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub25.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub26.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub27.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub28.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub29.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub30.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub31.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub32.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub33.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub34.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub35.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end
2.times do @sub36.comments.create(admin_id:Admin.first().id, body:Faker::Movies::PrincessBride.quote) end



#submissions
#comments
puts "seeded"