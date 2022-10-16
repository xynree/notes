package main

import "fmt"

var c, python, java bool // declares variables with "null definitions" -- equivalent to zero or false

func main() {
	var i int
	fmt.Println(i, c, python, java)
}
