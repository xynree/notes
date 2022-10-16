package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

// := declares+assigns at same time
func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
