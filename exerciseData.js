const exercises = {
    "Chest": [
      {
        "name": "Push-Ups",
        "instructions": "Assume a high plank position with your hands slightly wider than shoulder-width apart. Lower your body until your chest almost touches the ground, then push yourself back up to the starting position.",
        "targetedMuscles": ["Chest", "Shoulders", "Triceps"]
      },
      {
        "name": "Dumbbell Bench Press",
        "instructions": "Lie on a bench with a dumbbell in each hand, positioned at chest level. Push the dumbbells upward until your arms are fully extended, then lower them back down to the starting position.",
        "targetedMuscles": ["Chest", "Shoulders", "Triceps"]
      },
      {
        "name": "Incline Push-Ups",
        "instructions": "Place your hands on an elevated surface, such as a bench or step, and assume a high plank position. Lower your body until your chest almost touches the elevated surface, then push yourself back up to the starting position.",
        "targetedMuscles": ["Upper Chest", "Shoulders", "Triceps"]
      },
      {
        "name": "Chest Press Machine",
        "instructions": "Sit on a chest press machine and position your hands on the handles. Push the handles forward until your arms are fully extended, then bring them back to the starting position by retracting your shoulder blades.",
        "targetedMuscles": ["Chest", "Shoulders", "Triceps"]
      },
      {
        "name": "Cable Chest Fly",
        "instructions": "Stand in the center of a cable machine, holding one handle in each hand. Extend your arms out to the sides, then bring them together in front of your chest, squeezing your pectoral muscles. Slowly return to the starting position.",
        "targetedMuscles": ["Chest"]
      }
    ],
    "Shoulder": [
      {
        "name": "Overhead Press",
        "instructions": "Stand with a barbell or dumbbells in front of your shoulders, palms facing forward. Press the weight upward until your arms are fully extended, then lower it back down to the starting position.",
        "targetedMuscles": ["Shoulders"]
      },
      {
        "name": "Dumbbell Lateral Raise",
        "instructions": "Stand with a dumbbell in each hand, palms facing your sides. Raise the dumbbells out to the sides until your arms are parallel to the ground, then lower them back down to the starting position.",
        "targetedMuscles": ["Shoulders"]
      },
      {
        "name": "Front Raise",
        "instructions": "Stand with a dumbbell in each hand, palms facing your thighs. Raise the dumbbells forward until your arms are parallel to the ground, then lower them back down to the starting position.",
        "targetedMuscles": ["Shoulders"]
      },
      {
        "name": "Seated Dumbbell Press",
        "instructions": "Sit on a bench with a dumbbell in each hand, positioned at shoulder level. Press the dumbbells upward until your arms are fully extended, then lower them back down to the starting position.",
        "targetedMuscles": ["Shoulders"]
      },
      {
        "name": "Arnold Press",
        "instructions": "Sit on a bench with a dumbbell in each hand, positioned at shoulder level with palms facing your body. Press the dumbbells upward, rotating your palms away from your body as you extend your arms. Reverse the motion to return to the starting position.",
        "targetedMuscles": ["Shoulders"]
      }
    ],
    "Biceps": [
      {
        "name": "Barbell Curl",
        "instructions": "Stand with a barbell in front of your thighs, palms facing forward. Curl the barbell upward, keeping your upper arms stationary, until your forearms are fully contracted. Lower the barbell back down to the starting position.",
        "targetedMuscles": ["Biceps"]
      },
      {
        "name": "Dumbbell Hammer Curl",
        "instructions": "Stand with a dumbbell in each hand, palms facing your sides. Curl the dumbbells upward while keeping your palms facing inward, until your forearms are fully contracted. Lower the dumbbells back down to the starting position.",
        "targetedMuscles": ["Biceps"]
      },
      {
        "name": "Preacher Curl",
        "instructions": "Sit on a preacher curl bench and position your upper arms against the angled pad. Grasp an EZ bar with an underhand grip and curl it upward, contracting your biceps. Lower the bar back down to the starting position.",
        "targetedMuscles": ["Biceps"]
      },
      {
        "name": "Cable Curl",
        "instructions": "Stand in the center of a cable machine, holding a handle in each hand, palms facing forward. Curl the handles upward, contracting your biceps. Slowly lower the handles back down to the starting position.",
        "targetedMuscles": ["Biceps"]
      },
      {
        "name": "Incline Dumbbell Curl",
        "instructions": "Sit on an incline bench with a dumbbell in each hand, palms facing forward. Curl the dumbbells upward, keeping your upper arms stationary, until your forearms are fully contracted. Lower the dumbbells back down to the starting position.",
        "targetedMuscles": ["Biceps"]
      }
    ],
    "Triceps": [
      {
        "name": "Tricep Pushdown",
        "instructions": "Stand in front of a cable machine with a straight bar attached to the high pulley. Grip the bar with your palms facing down and push it downward until your arms are fully extended. Return to the starting position by controlling the weight's ascent.",
        "targetedMuscles": ["Triceps"]
      },
      {
        "name": "Dips",
        "instructions": "Position yourself between parallel bars and hold onto the bars with your palms facing inward. Lower your body by bending your elbows until your upper arms are parallel to the ground, then push yourself back up to the starting position.",
        "targetedMuscles": ["Triceps", "Chest", "Shoulders"]
      },
      {
        "name": "Skull Crushers",
        "instructions": "Lie on a bench with a barbell or dumbbells in your hands, arms fully extended above your chest. Bend your elbows to lower the weight toward your forehead, keeping your upper arms stationary. Extend your arms to raise the weight back up to the starting position.",
        "targetedMuscles": ["Triceps"]
      },
      {
        "name": "Close-Grip Bench Press",
        "instructions": "Lie on a bench with a barbell in your hands, hands positioned closer than shoulder-width apart. Lower the barbell to your chest by bending your elbows, then press it back up to the starting position by extending your arms.",
        "targetedMuscles": ["Triceps", "Chest", "Shoulders"]
      },
      {
        "name": "Tricep Kickbacks",
        "instructions": "Hold a dumbbell in one hand and place the opposite knee and hand on a bench, keeping your back straight. Extend your arm backward, keeping your upper arm close to your side, until your arm is fully extended. Return to the starting position and repeat with the other arm.",
        "targetedMuscles": ["Triceps"]
      }
    ],
    "Legs": [
      {
        "name": "Squats",
        "instructions": "Stand with your feet shoulder-width apart and lower your body by bending your knees and hips, as if you're sitting back into a chair. Keep your chest up and back straight. Return to the starting position by extending your knees and hips.",
        "targetedMuscles": ["Quadriceps", "Hamstrings", "Glutes"]
      },
      {
        "name": "Lunges",
        "instructions": "Stand with your feet hip-width apart. Step forward with one leg, bending both knees to lower your body until your front thigh is parallel to the ground. Push off with your front leg to return to the starting position. Repeat with the other leg.",
        "targetedMuscles": ["Quadriceps", "Hamstrings", "Glutes"]
      },
      {
        "name": "Deadlifts",
        "instructions": "Stand with your feet hip-width apart and a barbell in front of you. Bend your knees and hips to lower your body, then grasp the barbell with an overhand grip. Lift the barbell by extending your knees and hips, keeping your back straight. Lower the barbell back down to the starting position.",
        "targetedMuscles": ["Quadriceps", "Hamstrings", "Glutes", "Back"]
      },
      {
        "name": "Leg Press",
        "instructions": "Sit on a leg press machine with your feet on the footplate, positioned hip-width apart. Push the footplate away from your body by extending your knees and hips, then return to the starting position by bending your knees and hips.",
        "targetedMuscles": ["Quadriceps", "Hamstrings", "Glutes"]
      },
      {
        "name": "Calf Raises",
        "instructions": "Stand on a step or elevated surface with your heels hanging off the edge. Rise up onto your toes, lifting your heels as high as possible. Lower your heels back down below the step's level. Repeat for the desired number of repetitions.",
        "targetedMuscles": ["Calves"]
      }
    ],
    "Back": [
      {
        "name": "Pull-Ups",
        "instructions": "Hang from a pull-up bar with your palms facing away from you. Pull yourself upward by engaging your back muscles until your chin is above the bar. Lower yourself back down to the starting position with control.",
        "targetedMuscles": ["Back", "Biceps"]
      },
      {
        "name": "Bent-Over Rows",
        "instructions": "Stand with your feet hip-width apart and a barbell or dumbbells in your hands, palms facing your thighs. Hinge forward at the hips, keeping your back straight, and row the weight toward your abdomen by squeezing your shoulder blades together. Lower the weight back down to the starting position.",
        "targetedMuscles": ["Back"]
      },
      {
        "name": "Lat Pulldowns",
        "instructions": "Sit at a lat pulldown machine with your thighs secured under the pads. Grasp the bar with a wide overhand grip, palms facing away from you. Pull the bar down toward your chest by engaging your lat muscles, then slowly release it back up to the starting position.",
        "targetedMuscles": ["Back", "Biceps"]
      },
      {
        "name": "Single-Arm Dumbbell Rows",
        "instructions": "Place one knee and the same-side hand on a bench, keeping your back straight. Hold a dumbbell in the opposite hand, letting it hang toward the ground. Pull the dumbbell upward by squeezing your back muscles, then lower it back down to the starting position. Repeat with the other arm.",
        "targetedMuscles": ["Back"]
      },
      {
        "name": "T-Bar Rows",
        "instructions": "Straddle a T-bar machine and grip the handles with both hands, palms facing each other. Bend your knees and lean forward until your upper body is at a 45-degree angle. Pull the handles toward your abdomen by squeezing your shoulder blades together, then slowly release them back to the starting position.",
        "targetedMuscles": ["Back"]
      }
    ],
    "Glute": [
      {
        "name": "Hip Thrusts",
        "instructions": "Sit on the ground with your back against a bench and a barbell positioned across your lap. Plant your feet firmly on the ground and lift your hips off the floor until your body forms a straight line from your knees to your shoulders. Lower your hips back down and repeat the movement.",
        "targetedMuscles": ["Glutes", "Hamstrings"]
      },
      {
        "name": "Bulgarian Split Squats",
        "instructions": "Stand a few feet in front of a bench and extend one leg backward, placing the top of your foot on the bench. Lower your body by bending your front knee until your thigh is parallel to the ground. Push through your front heel to return to the starting position. Repeat on the other leg.",
        "targetedMuscles": ["Glutes", "Quadriceps"]
      },
      {
        "name": "Glute Bridge",
        "instructions": "Lie on your back with your knees bent and feet flat on the ground. Lift your hips off the ground until your body forms a straight line from your knees to your shoulders. Squeeze your glutes at the top of the movement, then lower your hips back down to the starting position.",
        "targetedMuscles": ["Glutes", "Hamstrings"]
      },
      {
        "name": "Barbell Hip Thrusts",
        "instructions": "Sit on the ground with your back against a bench and a barbell positioned across your lap. Plant your feet firmly on the ground and lift your hips off the floor until your body forms a straight line from your knees to your shoulders. Lower your hips back down and repeat the movement.",
        "targetedMuscles": ["Glutes", "Hamstrings"]
      },
      {
        "name": "Sumo Squats",
        "instructions": "Stand with your feet wider than shoulder-width apart and toes pointed outwards. Lower your body by bending your knees and pushing your hips back, keeping your chest up. Return to the starting position by extending your knees and hips.",
        "targetedMuscles": ["Glutes", "Inner Thighs", "Quadriceps"]
      }
    ],
    "Abs": [
      {
        "name": "Crunches",
        "instructions": "Lie on your back with your knees bent and feet flat on the ground. Place your hands behind your head, keeping your elbows out to the sides. Curl your upper body forward, lifting your shoulders off the ground, then lower back down to the starting position.",
        "targetedMuscles": ["Rectus Abdominis"]
      },
      {
        "name": "Plank",
        "instructions": "Start in a high push-up position, then lower yourself onto your forearms. Engage your core, keeping your body in a straight line from head to toe. Hold this position for the desired amount of time, focusing on maintaining proper form.",
        "targetedMuscles": ["Transverse Abdominis", "Rectus Abdominis", "Obliques"]
      },
      {
        "name": "Russian Twists",
        "instructions": "Sit on the ground with your knees bent and feet lifted slightly off the ground. Lean back slightly and twist your torso to one side, touching the ground with your hands. Twist to the other side, alternating back and forth.",
        "targetedMuscles": ["Obliques"]
      },
      {
        "name": "Leg Raises",
        "instructions": "Lie on your back with your legs extended and hands by your sides or under your glutes for support. Lift your legs upward, keeping them straight, until they form a 90-degree angle with your torso. Lower them back down to the starting position with control.",
        "targetedMuscles": ["Rectus Abdominis", "Hip Flexors"]
      },
      {
        "name": "Mountain Climbers",
        "instructions": "Start in a high push-up position. Bring one knee toward your chest, then quickly switch legs, alternating back and forth as if you're running horizontally. Maintain a strong core and keep your hips down throughout the movement.",
        "targetedMuscles": ["Transverse Abdominis", "Rectus Abdominis", "Obliques", "Hip Flexors"]
      }
    ],
    "Calves": [
      {
        "name": "Standing Calf Raises",
        "instructions": "Stand on the edge of a step or raised surface with the balls of your feet firmly planted. Lower your heels as far as possible, then rise up onto your toes as high as you can. Pause at the top of the movement, then lower your heels back down and repeat.",
        "targetedMuscles": ["Calves"]
      },
      {
        "name": "Seated Calf Raises",
        "instructions": "Sit on a seated calf raise machine with your toes on the footplate and your knees bent at 90 degrees. Push through the balls of your feet to lift the weight upward, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Calves"]
      },
      {
        "name": "Single-Leg Calf Raises",
        "instructions": "Stand on one foot, with the other foot lifted slightly off the ground or resting on your calf. Push through the ball of your foot to rise up onto your toes, then slowly lower your heel back down to the starting position. Repeat on the other leg.",
        "targetedMuscles": ["Calves"]
      },
      {
        "name": "Jump Rope",
        "instructions": "Hold the handles of a jump rope and jump off the ground, allowing the rope to pass under your feet and over your head. Maintain a steady rhythm and try to jump continuously for a set duration or number of repetitions.",
        "targetedMuscles": ["Calves"]
      },
      {
        "name": "Box Jumps",
        "instructions": "Stand in front of a sturdy box or platform. Bend your knees, then explode upward, jumping onto the box and landing with both feet. Step back down and repeat the movement for the desired number of repetitions.",
        "targetedMuscles": ["Calves", "Quadriceps", "Hamstrings"]
      }
    ],
    "Forearm Flexors": [
      {
        "name": "Wrist Curls",
        "instructions": "Sit on a bench or stand with a dumbbell in one hand, palm facing upward. Rest your forearm on your thigh or a bench, with your wrist hanging over the edge. Curl your wrist upward, contracting your forearm muscles, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Forearm Flexors"]
      },
      {
        "name": "Reverse Curls",
        "instructions": "Hold a barbell or dumbbells in your hands, palms facing downward. Curl the weight upward by flexing your forearms, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Forearm Flexors"]
      },
      {
        "name": "Hammer Curls",
        "instructions": "Hold a dumbbell in each hand, palms facing your sides. Curl the dumbbells upward while keeping your palms facing inward, until your forearms are fully contracted. Lower the dumbbells back down to the starting position.",
        "targetedMuscles": ["Forearm Flexors"]
      },
      {
        "name": "Plate Pinches",
        "instructions": "Hold two weight plates together with your fingertips, smooth sides out. Pinch the plates together and hold for a set amount of time. Focus on squeezing your fingers and engaging your forearm muscles.",
        "targetedMuscles": ["Forearm Flexors"]
      },
      {
        "name": "Grip Squeezes",
        "instructions": "Hold a gripper or hand exerciser in one hand and squeeze it as tightly as you can for a set duration or number of repetitions. Repeat with the other hand.",
        "targetedMuscles": ["Forearm Flexors"]
      }
    ],
    "Forearm Extensors": [
      {
        "name": "Reverse Wrist Curls",
        "instructions": "Sit on a bench or stand with a dumbbell in one hand, palm facing downward. Rest your forearm on your thigh or a bench, with your wrist hanging over the edge. Curl your wrist upward, contracting your forearm extensors, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Forearm Extensors"]
      },
      {
        "name": "Wrist Extensions",
        "instructions": "Sit on a bench or stand with a dumbbell in one hand, palm facing downward. Rest your forearm on your thigh or a bench, with your wrist hanging over the edge. Extend your wrist upward, contracting your forearm extensors, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Forearm Extensors"]
      },
      {
        "name": "Finger Extensions",
        "instructions": "Place a rubber band or resistance band around your fingers. Spread your fingers apart against the resistance of the band, then slowly bring them back together. Repeat for the desired number of repetitions.",
        "targetedMuscles": ["Forearm Extensors"]
      },
      {
        "name": "Reverse Grip Curls",
        "instructions": "Hold a barbell or dumbbells in your hands, palms facing upward. Curl the weight upward by flexing your forearms, then slowly lower it back down to the starting position.",
        "targetedMuscles": ["Forearm Extensors"]
      },
      {
        "name": "Static Wrist Extension Holds",
        "instructions": "Sit or stand with a dumbbell in one hand, palm facing downward. Rest your forearm on your thigh or a bench, with your wrist hanging over the edge. Hold the dumbbell with a relaxed grip and maintain the position for a set duration. Repeat with the other hand.",
        "targetedMuscles": ["Forearm Extensors"]
      }
    ],
    "Cardio Training": [
        {
          "name": "Jumping Jacks",
          "instructions": "Stand with your feet together and arms by your sides. Jump your feet out to the sides while simultaneously raising your arms above your head. Quickly jump back to the starting position. Repeat for the desired number of repetitions.",
          "targetedMuscles": ["Full body cardiovascular exercise"]
        },
        {
          "name": "Running",
          "instructions": "Find a suitable running area such as a track, trail, or treadmill. Start running at a comfortable pace, focusing on maintaining good form and breathing rhythmically. You can adjust your speed and duration based on your fitness level and goals.",
          "targetedMuscles": ["Lower body muscles (quadriceps, hamstrings, calves)", "Core muscles"]
        },
        {
          "name": "Cycling",
          "instructions": "Find a stationary bike or go for a bike ride outdoors. Adjust the resistance or gears to a level that challenges you. Start pedaling at a moderate intensity, gradually increasing speed or resistance as desired. Maintain a steady pace and engage your leg muscles throughout the exercise.",
          "targetedMuscles": ["Quadriceps", "Hamstrings", "Glutes", "Calves"]
        },
        {
          "name": "High-Intensity Interval Training (HIIT)",
          "instructions": "Perform a series of high-intensity exercises (e.g., burpees, mountain climbers, high knees) for a short duration (e.g., 20-30 seconds), followed by a brief rest period (e.g., 10-15 seconds). Repeat this cycle for a set number of rounds or time.",
          "targetedMuscles": ["Full body cardiovascular exercise"]
        },
        {
          "name": "Jump Rope",
          "instructions": "Hold the handles of a jump rope and jump off the ground, allowing the rope to pass under your feet and over your head. Maintain a steady rhythm and try to jump continuously for a set duration or number of repetitions.",
          "targetedMuscles": ["Calves", "Quadriceps", "Hamstrings", "Shoulders", "Forearms"]
        }
      ]
  }
  