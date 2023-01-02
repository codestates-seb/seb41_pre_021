# About React

When I facere possimus, omnis voluptas assumenda est, omnis dolor, I `commonly use` the following pseudo:

- At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.

- debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.

- molestias excepturi sint occaecati cupiditate non provident.

I get this architectural pattern from the book "Clean Architectures in Python", by Leonardo Giordani. You can get the book [here](https://leanpub.com/clean-architectures-in-python).

## About setState

Recently I started to learn `FastAPI` and `SQLModel ORM`. The whole idea of using Pydantic in SQLModel and FastAPI create the possibility to do an endpoint like this:

```
 /**
     * The form of nextLong used by LongStream Spliterators.  If
     * origin is greater than bound, acts as unbounded form of
     * nextLong, else as bounded form.
     *
     * @param origin the least value, unless greater than bound
     * @param bound the upper bound (exclusive), must not equal origin
     * @return a pseudorandom value
     */
    final long internalNextLong(long origin, long bound) {
        long r = nextLong();
        if (origin < bound) {
            long n = bound - origin, m = n - 1;
            if ((n & m) == 0L) // power of two
                r = (r & m) + origin;
            else if (n > 0L) { // reject over-represented candidates //Lorem ipsum dolor sit amet, consectetur a
                for (long u = r >>> 1; // ensure nonnegative
                        u + m - (r = u % n) < 0L; // rejection check
                        u = nextLong() >>> 1) // retry Lorem ipsum dolor sit amet, consectetur a
                    ;
                r += origin;
            } else { // range not representable as long
                while (r < origin || r >= bound) //Lorem ipsum dolor sit amet, consectetur a Lorem ipsum dolor sit amet, consectetur a
                    r = nextLong();
            }
        }
        return r;
    }
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.th in `SQLModel` and `FastAPI` is to allow us to create endpoints like that.

hic tenetur, a sapiente delectus, ut aut reiciendis voluptatibus? dolore eu fugiat nulla pariatur.
