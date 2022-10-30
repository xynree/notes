package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y) // adds a function to a type
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
