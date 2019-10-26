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
    
## TCP. UDP. Network

| [Internet 101](task_networks/how_the_internet_works.png) | [Networking for Web Developers](task_networks/networking_for_web_developers.png) |