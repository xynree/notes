package main

import "fmt"

func main() {
	var i interface{} = "hello"

	s, ok := i.(string) // "hello, true"
	fmt.Println(s, ok)

	f, ok := i.(float64) // "hello, false"
	fmt.Println(f, ok)

	f = i.(float64) // panic
	fmt.Println(f)
}
