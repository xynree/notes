# Performance vs Scalability

- Service is scalable if it has increased performance proportionately to the resources added
- Performance PROBLEM: System slow for a single user
- Scalability PROBLEM: System fast for single user, system slow under heavy load

## A Word on Scalability

- Increasing performance in general means serving more units of work, but can also be to handle larger units of work
- Introducing redundancy is a first line of defense
- A service is scalable if adding resources to facilitate redundancy does not cause loss of performance
- Scalability CANNOT be an after thought!
  - Apps and platforms have to be designed with scaling in mind