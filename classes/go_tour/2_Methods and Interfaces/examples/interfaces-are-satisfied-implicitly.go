package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

// This method means type T implements interface I
// But doesn't need to be explicitly declared
func (t T) M() {
	fmt.Println(t.S)
}

func main() {
	var i I = T{"Hello"}
	i.M()
}
