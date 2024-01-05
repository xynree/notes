# CS75 (Summer 2012) Lecture: Scalability -- David Malan
[Link To Video Here](https://www.youtube.com/watch?v=-W9F__D3oY4)

## What features in a web hosting service?
- HTTPS for secure encrypted data
- Large companies don't want to use a shared host 
- VPS: Virtual Private Server
  - Get your own copy of the server
  - Web hosting will still have access to your data
- You can host your own server
- VPS's get "chopped up" into smaller units

## How to go about scaling your site?
- Vertical Scaling
  - RAM, CPU, Disk Space
  - Buy more resources
  - Can't scale forever
- What to do with available hardware?
- More cores
- SATA, ATA drives, SSD
- Horizontal Scaling
  - Get multiple cheaper servers to build
  - How to direct data between servers?
    - Load Balancer (man in the middle)
      - Sends private server address to load balancer instead of public address (helps with privacy)
      - How does the load balancer get the data to the backend servers?
      - Drawback: Needs bidrectional communication
    - Round Robin (just split up each request to different server/IP each time)
      - Drawback: Could be unbalanced
      - Caching can also contribute to this problem

## Shared Session State
- Sessions are temporary to the machine
- Changing server breaks this state, each separate server now has a separate session
- Solution: Keep another server that is used specifically to hold session states
  - Could we put the sessions in the load balancer/server?
  - Weakness: What if this session machine breaks? All servers would go down
- RAID: Redundant array of independent disks
  - Assumes there are multiple hard drives
  - "Stripes" data across them: Writes the data to all the drives
  - Redundancy: Mirrors requests across drives
- We could use a database to store the data
- How to mitigate risk of single file server going down
  - Get 2 servers and sync them

## Sticky Sessions
- How to guarantee you will end up on the same server each time you visit a site?
- Storing things in Cookies?
  - Store ID of server to the cookie
  - Security concerns: Instead hash the server so they can't spoof the cookie
- in-memory caching used to optimize reads vs writes
- Memory engine - heap engine

## Security
- TCP-80 in
- 443 for SSL
- 22 - SSH
- Load balancer can perhaps take the SSL encryption and then web servers don't need to be encrypted
