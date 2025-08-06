
- Statistical learning includes:
	- Outcome measurement that we wish to predict based on a set of features
	- Training set of data which observe outcome and feature measurements for a set of objects
	- Using data we build prediction models 
- Supervisied learning problem 
	- Considered supervised because of the presence of the "outcome variable"
- Unsupervicsed learning problem
	- Observe only the features - no measurements of the outcome

##### example 1: email spam

- We have data from 4601 email messages to try and predict spam
- The true outcome `email` or `spam` is abailable along with frequencies of 57 most commonly occurring words and punctuation marks
- Considered a "classification" problem
- Learning methods decides which features to use 
	- for example: `if (%george < 0.6) & (%you > 1.5) then spam else email`

##### example 2: prostrate cancer

- examines correlation of antigen and a number of clinical measures
- goal is to predict log of antigen from a number of measurements
- This is considered a "regression" probelm because the outcome is quantatitive

##### example 3: handwritten digit recognition

- Using mail data, each image is a segment from a five digit zip code
- All images are 16.16 grayscale maps with same size and orientation
- Task: predict the identity of each image (number from 0 - 9) accurately
- Problem type: 'Classification' - error rate needs to be very low.
