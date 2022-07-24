# React: Software Architecture
    - Course by Shaun Wassel
    - https://www.linkedin.com/learning/react-software-architecture/styling-with-server-side-rendering?u=57685729

- Server Side Rendering 
    - with Express sending React Components
    - Styled-Components
        - styled components package
            - <styled.h1>Title</styled.h1>
            - does not work the same way in backend
                - sheet.collectStyles(scrapes styles)
                    -<StaticRouter location={req.url}><App /></Staticrouter>
                    return res.send(data.replace('div id="rooot"></div>).replace('{{styles}}'.sheet.getStyleTags())
                    - in html: {{ styles}}
        - when apps are server-side rendered there are some caveats: no 'window', no 'document'. not in browser


-  State Management
    - How application handles data needs for loading, storing, persisting, sharing
    - State Management Tech
        - useState Hook
        - Context
        - Recoil
        - Redux
        - MobX
    - Different Sizes of State
        - State management depends on 
            - size and complexity of app
            - how many components share data
                - Small State
                    - useState, Context
                - Medium State
                    - Recoil
                - Large state
                    - Redux
                    - Mobex

   
   - Small State
        - Small State with UseState
            -Basic Counter / Increment counter + keep increment count
        - Small State with Context
            - How to share state w/o using Props?
                - {createContext} or useContext
                    - make CounterProvider.js
           ```js
                    import { counterContext} from './Countercontext';
                    import {useState }

                    export const CounterProvider = ({children}) => {
                    }

                    return <CounterContext.Provider value={{nuincrement, numberofClicksi}}>{children}</CounterContext.Provider>
            ```

            in component: 
            ```js
                import {createContext}
                export const Countercontext = createContext();

    const App = () => {
    return 
    <CounterProvider></CounterProvider>
              ```  

            - to access context inside components:
                - const {numberofClicks, increment} = CounterContext();
            - Only put things in context that need to be shared by multiple components.
    
    - Medium State
        - Recoil
            - must install recoil
            - wrap whole component in <RecoilRoot>
                - Recoil State:Atoms, Selectors
                    - Atoms
                        ```js: counterState.js
                        
                        import {atom } from 'recoil'

                        export const counterState = atom({
                        key: counterState,
                        default: 0;default
                        })
                        ```

                        - incrementByState.js
                        - const [numClicks, setClicks] = useRecoilState(counterState)
                    - Other things to know about state:
                        - useRecoilValue just gives value of state (no setState)
                        - Individual Atoms will always share its state
                        - 
                    - Selectors
                        - take values of Atoms and then transform or combine them
                            ```js
                                import {selector} from 'recoil';
                                export selector = selector({
                                key: 'selector',
                                get: ({get}) => {
                                const clicksData =  get(counterState);
                                const totalClicks = clicksData.reduce((sum, click)=> {
                                return sum + click.amount;
                                },0)}
                                return totalClicks;
                            ```



