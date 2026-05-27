<h1 align='center'>ideaBucket</h1>
<p align='center'>Taskmanager for your hobbies</p>

![React](https://img.shields.io/badge/React-61DAFB?style=plastic&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=plastic&logo=capacitor&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=plastic&logo=vercel&logoColor=white)
![KFC](https://img.shields.io/badge/KFC-F40027?style=plastic&logo=kfc&logoColor=white)

---

# Strategy of Usage

## Tasks

- Create Tasks
- When a task is started it has a certain close deadline
- Tasks can but don't have to be planed to a specific date
  - they can have an expiration date tho

## Buckets

- tasks can be added to buckets
- buckets are like kinda like lists filled with tasks to a specific topic
  - for example hobbys, chores, friends, work. anything really
- when bored you can pull a random task out of your bucket
  ![[ideaBucket.excalidraw]]

## Team Bucket

- You can set up premade decentralized team buckets using a random pc u dont need or use!
- Team buckets are buckets that multiple people can add tasks to
- Team buckets have leaderboards to boost competitiveness to do tasks

# App Parts

- ✅ Main
  - active tasks
    - pause
    - remove
    - finish
  - Task closest to expire
  - Give me random task button
- ✅ New
  - ✅ Sub menu Task
    - Task Name
    - Task description
    - which Bucket
    - expiration date
    - duration
  - ✅ Sub Menu Bucket
    - Bucket name
    - Bucket color
    - display as pinned / important
    - toggle shared bucket
      - server domain
      - server port (insert default port)
- ✅ Buckets
  - View Buckets (Pinned Buckets on top)
  - View Tasks inside Bucket
  - analytics
    - percentage of compleated
    - tasks compleated vs remaining
    - days since bucket creation
    - time spent on tasks
  - on shared Buckets
    - whitelist (optional)
    - password (optional)
    - leaderboard
- ✅ Settings
  - username / usertag
    - needed for shared buckets
    - for example "@user" or "@leaftea"
  - update
    - current version title
    - link to github release page
  - data management
    - export data as json
    - import data from json
    - delete all data / clear saved data
