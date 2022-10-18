package main

import "fmt"

func main() {
	sum := 0
	sumtwo := 1
	for i := 0; i < 100; i++ {
		sum += i
	}
	for sumtwo < 300 {
		sumtwo += sumtwo
	}

	fmt.Println(sumtwo)
}
