# Epic Move
## Background and Motivations
### The Acquisition
### Cost, cost, cost
### Duplication and outlier usage patterns

## Services Migrated
### Swift
#### Sheer size
#### Sharding
#### Storage Metadata
### Cassandra
#### Docker
#### Mix of ancient versions
#### Migration strategies
##### Lift-and-ship
##### Streaming
#### Really helps if you know what you're doing when it comes to Cassandra
### Redis
#### Can be really easy if the data is ephemeral... Is it reallllly ephemeral?
### Postgres
### Compute

## Our Journey vs. Your Journey

## Research
### Amazon has new tools aimed at making this easier. Check them out.
### Consider alternate strategies
#### Glacier
#### S3 Infrequent Access Storage
#### Drive round trips?
#### Do you REALLY need all the data?
### Beware egress costs
#### It may make sense to audit data on AMZ compute to save money

## Design
### Keep it simple, stupid
#### Avoid temptations to complicate migration to solve other outstanding problems
### Open-source replacements for S3 are not as robust as S3. Especially if you're a dick.
#### Determine and test your replacement object store early and test it often.
#### Don't forget to test both for your egress scale and your steady-state scale
#### Make sure your selected object store will support the number of files and total amount of storage you want to store
#### Remember, you know have to be responsible for making sure your data is well replicated
### Know how you're going to audit the data
#### Decide this up front
#### Be careful not to under estimate the confiedence required before the orgainization feels comfortable deleting all of a customers data
### Migration strategy will definitely vary by service type. May even vary within a service type

## Prepare
### Optimize the network layer
#### You're now dealing with at least 2 distinct networks. Repeat optimization as necessary
#### If you use a VPC ... figure out how you're going to connect to your new cloud. Consider implications of this choice.
### Find and track the right metrics to provide confidence that the current plan is the right one
### Take meastures to prevent the migration process from obscuring visibility into the over all health of the application

## Execute
### Prototype and test the entire migration/audit/deletion process as soon as possible
#### Design, implement and dry-run as soon as possible
### Tech Debt
#### Avoid complicating application code with migration logic as possible
##### Accept defeat early
#### The migration will take time, so start there and while that's in progress, work on the other parts of the process
### Focus on the data that will yield the biggest return for the least amount of effort first
### Beware of data gravity
### It's going to take longer than you think
### Dual-writes are not a viable strategy
### Incrementally delete data until you trust your migration process. It's better to delete some of the data than none of the data
#### 1-off issues and the ghost of bugs past will haunt you and prevent you from deleting ALL the data

## Re-evaluate
### Know your bottlenecks and how to work around them
#### Different systems will present problems at different times; be adaptable. Just keep swimming
### Deletions are the real deliverable
### It's going to take longer than you think
#### Be prepared to cycle teams on and off the project to limit fatigue and spread knowledge

## Hindsight is 20/20
### Anything you can do in place and incrementally, you should.
### If you ever think you might have to do this kind of migration, be willing to pay more for your engineers early on. The mistakes affordable engineers make will cost you later.
### Large migrations can easily become a scapegoat.
### The business is the customer. Deletes are the deliverable. This will be a high-visibility project that is likely to make everyone angry: your customers, sales, support, customer success, the business. People are also likely to think it should be achivable much faster.

## Tools
### dnsmasq
### pgbouncer
### stunnel
### twemproxy

## The people
- Jessi Abrahams
- Eric Alexander
- Dave Barboza
- George Bedocs
- Matt Bittarelli
- David Block
- Josh Bodah
- Gordon Carroll
- Liam Curtis
- Jonathan DePrizio
- Ben Depoint
- Ryan Fleisher
- Greg Gage
- Robert Gibbons
- Andy Gomez
- Eugene Gorelik
- Justin G???
- Ethan Hathaway
- Ken Hoffmann
- Michael Hoydis
- James Lawrence
- Anthony Mangano
- Chris Matysik
- Austin McChord
- Laura Miyakawa
- Spencer Morten??
- Arron Norwell
- Gen Ohata
- Zack Olson
- Ben Povlich
- Jonathan Russell
- Jim Salem
- David Song
- Dinhduy Tran
- Steve Ulman
- Keith Webber
- Manni Wood
- Josh Woodward
- Desmond Yeung
- Mikhael ???

- Richard?
- Simon Watson?
- Steve Burgess?
- Jamie Francese?
- Andrew ??
