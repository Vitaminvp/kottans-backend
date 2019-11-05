# Kottans-backend 😺
Backend Course. The course contains basics of backend development: fundamentals of NodeJS or Golang and backend frameworks as well as necessary computer science basics, network and protocols, database fundamentals etc.

___
## 🚦 NodeJS Basics 1  

| [learnyounode](node_basic_1/learnyounode/learnyounode.png) | [functional-javascript-workshop](node_basic_1/functional-javascript-workshop/functional-javascript-workshop.png) | [stream adventure](node_basic_1/stream-adventure/stream-adventure.png) |

**Reflections**
 - **It wasn\'t as easy 🎉 as I thought 😐**
 - **Maybe need to read some theoretical materials at first**

## 📝 Memory Management

**Questions ❓**
 - **What's going to happen if program reaches maximum limit of stack ?**
    - *If the maximum stack size has been reached, we have a stack overflow and the program receives a Segmentation Fault. While the mapped stack area expands to meet demand, it does not shrink back when the stack gets smaller. Like the federal budget, it only expands.*
 - **What's going to happen if program requests a big (more then 128KB) memory allocation on heap ?**
    - *If you request a large block of memory via malloc(), the C library will create such an anonymous mapping instead of using heap memory.*
 - **What's the difference between Text and Data memory segments ?**
    - *The **Data segment**, on the other hand, holds the contents for static variables initialized in source code. This memory area is not anonymous. It maps the part of the program's binary image that contains the initial static values given in source code.
    Even though the data segment maps a file, it is a private memory mapping, which means that updates to memory are not reflected in the underlying file.*
    - *The string lives in the **Text segment**, which is read-only and stores all of your code in addition to tidbits like string literals. The text segment also maps your binary file in memory, but writes to this area earn your program a Segmentation Fault. This helps prevent pointer bugs, though not as effectively as avoiding C in the first place.*
    - *A **Text segment** contains read-only code and data. A **Data segment** contains data that may be both readable and writable.*
```
5603bacc2000-5603bacd7000 r-xp 00000000 08:06 133600           /usr/lib/gnome-settings-daemon/gsd-power
5603baed7000-5603baed8000 r--p 00015000 08:06 133600           /usr/lib/gnome-settings-daemon/gsd-power
5603baed8000-5603baed9000 rw-p 00016000 08:06 133600           /usr/lib/gnome-settings-daemon/gsd-power
5603bbeae000-5603bc1e2000 rw-p 00000000 00:00 0                [heap]
7f61d0000000-7f61d0021000 rw-p 00000000 00:00 0
7f61d0021000-7f61d4000000 ---p 00000000 00:00 0
7f61d6db6000-7f61d6dc1000 r-xp 00000000 08:06 399238           /lib/x86_64-linux-gnu/libnss_files-2.27.so
7f61d6dc1000-7f61d6fc0000 ---p 0000b000 08:06 399238           /lib/x86_64-linux-gnu/libnss_files-2.27.so
7f61d6fc0000-7f61d6fc1000 r--p 0000a000 08:06 399238           /lib/x86_64-linux-gnu/libnss_files-2.27.so
...
7ffcf0e6a000-7ffcf0e8b000 rw-p 00000000 00:00 0                [stack]
7ffcf0fe5000-7ffcf0fe8000 r--p 00000000 00:00 0                [vvar]
7ffcf0fe8000-7ffcf0fe9000 r-xp 00000000 00:00 0                [vdso]
ffffffffff600000-ffffffffff601000 r-xp 00000000 00:00 0        [vsyscall]
```
Heap - `5603bbeae000-5603bc1e2000`,
stack - `7ffcf0e6a000-7ffcf0e8b000`,
MMS - `7f61d6db6000-7f61d6dc1000`.

## 🕸 TCP. UDP. Network 🕷

| [Internet 101](task_networks/how_the_internet_works.png) | [Networking for Web Developers](task_networks/networking_for_web_developers.png) |

**Subtask**

| [Demo](https://vitaminvp.github.io/kottans-backend/) | [Code base](https://github.com/Vitaminvp/kottans-backend/tree/master/task_networks/sniffer) |

**`Reviewed and approved by` [@ByMyself](https://github.com/Vitaminvp)**

**Reflections**
 - **Almost 🧛‍♂️🧛‍♀️ Halloween 🧟‍♂️ 🧟‍♀️**

## 📬 Http & Https 🕊

**Practice**

***Exploring GitHub API.***

 - `curl https://api.github.com/users/vitaminvp`
 - `curl -i https://api.github.com/users/vitaminvp`
 - `curl https://api.github.com/gists/starred`
 - `curl --user "vitaminvp:BLABLABLA" https://api.github.com/gists/starred`
 - `curl --user "vitaminvp:*****" https://api.github.com/gists/starred`
 - `curl --user "vitaminvp" https://api.github.com/gists/starred`
 - `curl -i https://api.github.com/orgs/kottans/repos`
 - `curl -H 'Authorization: token *****' https://api.github.com/repos/vitaminvp/kottans-backend/issues -d '{"title": "Test issue", "body": "test issue body"}'`

**Questions ❓**
1. Name at least three possible negative consequences of not using https.
    - **Integrity** - *Man In The Middle Attackers* could read or modify any requests
    - **Privacy** - eavesdropping passwords and private information
    - **Identification** - changing your destination server to phishing
    - **Trustability** - site could be not recommended to visit by browser
1. Explain the main idea behind public key cryptography in few sentences.
    - If anyone, even you, encrypts data with your *public-key*, only you can decrypt it with your *private key*.
      If you encrypt data with your *private key*, anyone can decrypt it, but this serves as a proof that you encrypted it: it’s “digitally signed” by you.
1. You are creating an application for pet clinic. You need to implement the following functionality:
    - add new pet (including name, age, breed, owner's name, medical history)
        - request `POST` `/pets` `{name,age,breed,owner,medicalHistory}` ⤸ 
        - response `status 201` `{id}`
    - search pet by name
        - request `GET` `/pets?name=<name>` ⤸ 
        - response `status 200` `{petId,name,age,breed,owner,medicalHistory}`
    - change name of an existing pet
        - request `PUT/PATCH` `/pets/<petId>` `{name: newName}` ⤸ 
        - response `status 200` `{petId,newName,age,breed,owner,medicalHistory}`
    - add new info about pet's health
        - request `PUT/PATCH` `/pets/<petId>` `{medicalHistory: newMedicalHistory}` ⤸ 
        - response `status 200` `{petId,newName,age,breed,owner,newMedicalHistory}`
    - assign a pet to a particular doctor in the clinic
        - request `PUT/PATCH` `/pets/<petId>` `{doctorId}` ⤸ 
        - response `status 200` `{id,newName,age,breed,owner,newMedicalHistory,doctorId}`
    - register an appointment for a pet. This request should include info about pet, doctor and appointment date and time.
        - request `POST` `/visit` `{petId,doctorId,dateTime}` ⤸ 
        - response `status 201` `{visitId,petId,doctorId,dateTime}`

## 🏞 Patterns 👷

| [Software Architecture & Design](patterns/software_architecture_design.png) |

**Reflections**
 - **I thought I would die ☠, ⬆ so boring 🛌 video️** 
 
## 🏗 Data Structures 🚧

## 🗃 File System 📁

**Practical Task**
 - `mkdir file_system` `touch secret.txt` `echo "secret" > secret.txt` `printf " text" >> secret.txt`
 - `chmod u+x,o+r secret.txt`
 
    | [secret.txt](file_system/secret.txt)| [file_system_task.js](file_system/file_system_task.js) |

## 🏃 Runtime and Ecosystem 🕰
