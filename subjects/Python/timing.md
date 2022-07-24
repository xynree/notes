# TIMING (notes on docs)

- Time Module (import time)

    - time.perf_counter() starts a counter
        - define a start time and end time + calculate difference to get the execution time
    - monotonic(): time value of a monotonic clock
        - returns a float: value of monotonic in fractional seconds.
        - start_time = time.monotonic()
        - end_time = time.monotonic()
    - time.sleep(10): wait 10 seconds

    - from threading import Timer
        - r = Timer(1.0, Arg, (arg,arg))
            -how long to wait(in sec), function to call, props to pass in
        - t.start()
