# kottans-backend 😺
Backend Course. The course contains basics of backend development: fundamentals of NodeJS or Golang and backend frameworks as well as necessary computer science basics, network and protocols, database fundamentals etc.

___
## 🚦 NodeJS Basics 1  

| [learnyounode](node_basic_1/learnyounode/learnyounode.png) | [functional-javascript-workshop](node_basic_1/functional-javascript-workshop/functional-javascript-workshop.png) | [stream adventure](node_basic_1/stream-adventure/stream-adventure.png) |

**Reflections**
 - **It wasn\'t as easy 🎉 as I thought 😐**
 - **Maybe need to read some theoretical materials before**

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

**Reflections**
 - **Almost 🧛‍♂️🧛‍♀️ Halloween 🧟‍♂️ 🧟‍♀️**
