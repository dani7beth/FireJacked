
require 'faker'

#admins 

Admin.create(name:"admin1", first_name:Faker::Name.first_name, last_name:Faker::Name.last_name, phone:Faker::PhoneNumber.cell_phone, speciality:Faker::Job.key_skill, email: "admin1@test.com", password:"123456")
admin = Admin.find(1)
puts "created email: #{admin.email}"
    exercise1=admin.exercises.create(name: "", description: " ", category: "Barbell Strength/Power", activity: "Deadlift", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise2=admin.exercises.create(name: "", description: " ", category: "Barbell Strength/Power", activity: "Back Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise3=admin.exercises.create(name: "", description: " ", category: "Barbell Strength/Power", activity: "Bench Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise4=admin.exercises.create(name: "", description: " ", category: "Barbell Strength/Power", activity: "Front Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise5=admin.exercises.create(name: "", description: " ", category: "KettleBell Strength/Power", activity: "Clean", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise6=admin.exercises.create(name: "", description: " ", category: "KettleBell Strength/Power", activity: "Clean & Jerk", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise7=admin.exercises.create(name: "", description: " ", category: "KettleBell Strength/Power", activity: "Snatch", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise8=admin.exercises.create(name: "", description: " ", category: "KettleBell Strength/Power", activity: "Strict Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise9=admin.exercises.create(name: "", description: " ", category: "Cardio-Respiratory Power", activity: "Row", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise10=admin.exercises.create(name: "", description: " ", category: "Cardio-Respiratory Power", activity: "Ski", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise11=admin.exercises.create(name: "", description: " ", category: "Cardio-Respiratory Power", activity: "Assault", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise12=admin.exercises.create(name: "", description: "All the following movements done with a barbell with good technique and form unbroken without setting the bar down: Deadlift + Bent Row + Hang Clean + Front Squat + Push Press +Back Squat", category: "Power/Strength Endurance", activity: "Standard BB Complex", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise13=admin.exercises.create(name: "", description: " ", category: "Power/Strength Endurance", activity: "100 Max KB Snatch", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise14=admin.exercises.create(name: "", description: " ", category: "Power/Strength Endurance", activity: "Pull-Up (Strict)", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise15=admin.exercises.create(name: "", description: " ", category: "Power/Strength Endurance", activity: "MAX Rep BW Back Squat", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise16=admin.exercises.create(name: "", description: " ", category: "Power/Strength Endurance", activity: "MAX Rep BW Bench Press", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise17=admin.exercises.create(name: "", description: " ", category: "Power/Strength Endurance", activity: "MAX REP KB Swing @ 50% BW", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise18=admin.exercises.create(name: "", description: " ", category: "Power Endurance", activity: "BW CAL ROW", image: "https://picsum.photos/200/300.jpg", how_to_video: "")
    exercise19=admin.exercises.create(name: "", description: " ", category: "GYM Endurance", activity: "60 Min Row", image: "https://picsum.photos/200/300.jpg", how_to_video: "")

    exercise1.levels.create(name: "Initiated", multiplier:2, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise1.levels.create(name: "Committed", multiplier:2.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise1.levels.create(name: "Proven", multiplier:2.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise2.levels.create(name: "Initiated", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise2.levels.create(name: "Committed", multiplier:2, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise2.levels.create(name: "Proven", multiplier:2.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise3.levels.create(name: "Initiated", multiplier:1.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise3.levels.create(name: "Committed", multiplier:1.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise3.levels.create(name: "Proven", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise4.levels.create(name: "Initiated", multiplier:1.25, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise4.levels.create(name: "Committed", multiplier:1.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise4.levels.create(name: "Proven", multiplier:1.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise5.levels.create(name: "Initiated", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise5.levels.create(name: "Committed", multiplier:0.75, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise5.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise6.levels.create(name: "Initiated", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise6.levels.create(name: "Committed", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise6.levels.create(name: "Proven", multiplier:0.7, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise7.levels.create(name: "Initiated", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise7.levels.create(name: "Committed", multiplier:0.5, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise7.levels.create(name: "Proven", multiplier:0.7, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise8.levels.create(name: "Initiated", multiplier:0.3, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise8.levels.create(name: "Committed", multiplier:0.4, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise8.levels.create(name: "Proven", multiplier:0.6, metric:"Pounds",measurement: "Bodyweight", reps: 0,timeframe:0,sets:0)
    exercise9.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    exercise9.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    exercise9.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    exercise10.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    exercise10.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    exercise10.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    exercise11.levels.create(name: "Initiated", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:105,sets:0)
    exercise11.levels.create(name: "Committed", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:90,sets:0)
    exercise11.levels.create(name: "Proven", multiplier:0.25, metric:"calories",measurement: "Bodyweight", reps: 0,timeframe:85,sets:0)
    exercise12.levels.create(name: "Initiated", multiplier:2, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    exercise12.levels.create(name: "Committed", multiplier:4, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    exercise12.levels.create(name: "Proven", multiplier:6, metric:"Each Movement",measurement: "-", reps: 0,timeframe:0,sets:0)
    exercise13.levels.create(name: "Initiated", multiplier:0.2, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    exercise13.levels.create(name: "Committed", multiplier:0.3, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    exercise13.levels.create(name: "Proven", multiplier:0.4, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 100,timeframe:300,sets:0)
    exercise14.levels.create(name: "Initiated", multiplier:0, metric:"Each",measurement: "", reps: 10,timeframe:0,sets:0)
    exercise14.levels.create(name: "Committed", multiplier:0, metric:"Each",measurement: "", reps: 15,timeframe:0,sets:0)
    exercise14.levels.create(name: "Proven", multiplier:0, metric:"Each",measurement: "", reps: 20,timeframe:0,sets:0)
    exercise15.levels.create(name: "Initiated", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 25,timeframe:0,sets:0)
    exercise15.levels.create(name: "Committed", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 50,timeframe:0,sets:0)
    exercise15.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 75,timeframe:0,sets:0)
    exercise16.levels.create(name: "Initiated", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 10,timeframe:0,sets:0)
    exercise16.levels.create(name: "Committed", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 15,timeframe:0,sets:0)
    exercise16.levels.create(name: "Proven", multiplier:1, metric:"Pounds",measurement: "Bodyweight", reps: 20,timeframe:0,sets:0)
    exercise17.levels.create(name: "Initiated", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 25,timeframe:0,sets:0)
    exercise17.levels.create(name: "Committed", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 50,timeframe:0,sets:0)
    exercise17.levels.create(name: "Proven", multiplier:0.5, metric:"KettleBall Weight",measurement: "Bodyweight", reps: 75,timeframe:0,sets:0)
    exercise18.levels.create(name: "Initiated", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:660,sets:0)
    exercise18.levels.create(name: "Committed", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:600,sets:0)
    exercise18.levels.create(name: "Proven", multiplier:1, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:540,sets:0)
    exercise19.levels.create(name: "Initiated", multiplier:4, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)
    exercise19.levels.create(name: "Committed", multiplier:4.5, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)
    exercise19.levels.create(name: "Proven", multiplier:5, metric:"Calories",measurement: "Bodyweight", reps: 0,timeframe:3600,sets:0)

#users

5.times do |j|
  User.create(
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
  user = User.find(j+1)
    puts "created user email: #{user.email}"
    20.times do 
      submit = user.submissions.create(completed:Faker::Boolean.boolean(true_ratio: 0.8), name: "", video_upload: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", level_id: rand(1...57))
    end
end

15.times do
  Comment.create(submission_id:rand(1..15), admin_id:1, body:Faker::Movies::PrincessBride.quote )
end

#submissions
#comments
puts "seeded"
