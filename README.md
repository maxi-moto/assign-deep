# Assign Deep

assignDeep() is a simple javascript function similar to Object.assign(). The
main difference is that, like the name suggests, assignDeep deeply copies/merges
objects where as Object.assign() is shallow.

# Benchmarks
There are benchmarks included, however their validity is questionable.

The comparison is between three other methods of cloning deep, which each have
their own drawbacks.

Benchmarks may easily be run through the npm scripts in package.json.
yarn benchmark
npm run benchmark

## JSON.parse/stringify
This is how the Object.assign on MDN says to tackle cloning deep. This is the
fastest method according to the benchmarks.

## Lodash cloneDeep
This is a very common method to deeply clone. It is a good comparison for simply
cloing objects, however, it does not merge multiple sources into the target. It
does not accomplish all that assignDeep does. Still, assignDeep, according to
the benchmarks on my machine, was faster.

## Lodash merge
This is probably the best comparison. It has the same functionality as
assignDeep. From the benchmarks, it runs much slower than assignDeep.

## Lodash assign and extend
The assign and extend functions from lodash were not compared due to the fact
that they do not deeply clone.

# Note
I don't think there's much reason to use this, especially if you have lodash
already included in a project. The benchmarks show that it's slightly faster
than the lodash options, but the speed up is miniscule and (if you include the
entire lodash library) lodash has much more to offer.

Still feel free to use this and contribute!
