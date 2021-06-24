/*  
    Given three numbers x, y, and p, compute (xˆy) % p. (This is
    modular exponentiation.)
    Here, x is the base, y is exponent, and p is the modulus.
    Modular exponentiation is a type of exponentiation performed
    over a modulus, which is useful in computer science and used in
    the field of public-key encryption algorithms.
    At first, this problem seems simple. Calculating this is a one-line
    solution, as shown here:

    1  function modularExponentiation ( base, exponent, modulus ) {
    2          return Math.pow(base,exponent) % modulus;
    3  }

    This does exactly what the question asks. However, it cannot handle large exponents.
    Remember that this is implemented with encryption algorithms.
    In strong cryptography, the base is often at least 256 bit (78 digits).
    Consider this case, for example:

    Base: 6x10^77 , Exponent: 27, Modulus: 497
    In this case, (6x10^77)^27 is a very large number and cannot be stored
    in a 32-bit floating point.
    There is another approach, which involves some math. One must
    observe the following mathematical property:
    For arbitrary a and b,
    c % m = (a  b) % m
    c % m = [(a % m)  (b % m)] % m
    Using this mathematical property, you can iterate 1 to the
    exponent, recalculating each time by multiplying the current
    modulus value with the last.
    Here is the pseudocode:
    1  Set value = 1, current exponent = 0.
    2  Increment current exponent by 1.
    3  Set value = (base  value) mod modulus until current exponent is reached exponent
    Example: Base: 4, Exponent: 3, Modulus: 5
    4ˆ3 % 5 = 64 % 5 = 4
    value = (lastValue x base ) % modulus:
    value = (1 x 4) % 5 = 4 % 5 = 4
    value = (4 x 4) % 5 = 16 % 5 = 1
    value = (1 x 4) % 5 = 4 % 5 = 4
*/
