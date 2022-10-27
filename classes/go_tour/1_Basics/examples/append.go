package main

import "fmt"

func main() {
	var s []int
	printSlice(s)

	// append works on nil
	s = append(s, 0)
	printSlice(s)

	// Slice grows as needed
	s = append(s, 1)
	printSlice(s)

	// Adding more than one elme at a time

	s = append(s, 2, 3, 4, 5, 6)
	printSlice(s)

}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
