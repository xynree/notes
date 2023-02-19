# Decorators
[^1]: https://www.youtube.com/watch?v=bRAcWk9S-6g

- Optional
- Can be attached to classs=es, methods, accessors, properties, parameters
- Experimental (turn on on tsconfig)
- One use is to wrap a timing function to see how long things take to run.

```ts:class/parameters
@ObjectType()
class Recipe {
    @Field (type => ID)
    id: string;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    creationDate: Date;

    @Field(type => [String])
    ingredients: string[];
}
```

```ts:method
function g() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('can be used to override stuff in your function')
    }
}

class C{
    @g()
    method() {
        console.log('this doesn't get printed')
    }
}
```

