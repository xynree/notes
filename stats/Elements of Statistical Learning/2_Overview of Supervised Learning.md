
##### 2.1 Introduction

- First 3 examples in intro have some components in common:
	- Inputs: set of variables which are measured or preset
	- Outputs: Data which is influenced by inputs
	- Goal: Use inputs to predict the outputs
- This exercise is called "supervised learning"
- Inputs are also called "predictors" or "Independent variables" or "features"
- Outputs are called "responses" or "dependent variables"

##### 2.2 Variable types and terminology

- Quantitive measurement: Some measurements are bigger than others. Measurements close in value are close in nature.
- Qualitative ('Categorical' or 'Discrete') measurement: There is a finite set of outputs with no explicit ordering (Enum type)
- Types of prediction tasks:
	- regression: predicting quantitative outputs
	- classification: predicting qualitative outputs
- There is a third variable type: "ordered categorical" : inputs such as `small`, `medium`, `large` where there is an ordering between values but a metric/numerical notion doesn't make sense.
- Qualitative variables are typically represented numerically by codes
	- Easiest with binary case: 0 or 1
	- Dummy variables: K-level qualitative variable represented by a vector of K binary variables or bits - only one of which is on at a time. for example:
		- Sedan: `(1,0,0)`
		- SUV: `(0,1,0)`
		- Truck: `(0,0,1)`
	- Using a dummy variable for this makes each category equally distinct.
- We typically denote inputs by the symbol `X` If `X` is a vector, access its components by subscripts: `Xj`
- Quantitative outputs: `Y`
- Qualitative outputs: `G` (group)
- Generic values uppercased, observed values are lowercase
- Matrices are represented by <b>bold</b> uppercase letters: a set of N input p-vectorsrepresented by the matrix <b>X</b>
- hats are used for predictions: $$ \hat{Y} $$ is the prediction of Y

##### 2.3 Two Simple approaches to prediction: Least Squares and Nearest Neighbors
