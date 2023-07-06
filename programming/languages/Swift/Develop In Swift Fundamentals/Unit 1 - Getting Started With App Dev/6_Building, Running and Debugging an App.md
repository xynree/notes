# 1.6 Building, Running and Debugging an App

- Scheme > Choose Device > Click Run button `>` or use Command-R to launch the app in Simulator
- Certain interactions depend on an actual physical device to run
- Simulator is run on Intel but iOS devices are built on ARM so test code on actual hardware

## Using a Personal Device

- Sign up for an apple developer account and you will be cable to run your iOS apps on one physical device
- Open XCode preferences > Accounts > + to add Apple ID
- Connect iOS device to your Mac and XCode will download the info from device and show as an entry in the Scheme menu
- XCode also gives option of deploying app over a network
- Connect Via Network in the Devices and Simulators window
  - You will now be able to build and run app wirelessly

## Debugging

- Error types: Warnings, compiler errors, bugs
- Warnings: Don't prevent program from compiling and running but generated when code is built
- Compiler Errors: Invalid code, etc. Prevents code from being executed
- Bug: Runtime error
- To start debugging, add a breakpoint to your code by clicking on the line number
- Program will pause at the breakpoint
- Check the debug area to inspect current variable values.
- Then use debug functions: Continue, Step over, Step Into, Step Out
