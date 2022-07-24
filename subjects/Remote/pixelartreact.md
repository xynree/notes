# NOTES on Remote Library: Pixel Art React Master

- A tool that helps you generate pixel art

- Notes:
    - They are using React class components so it's hard to understand
    - Redux library hooks:
        - { connect }
        - { bindActionCreators }
        - { useSelector }
        - { useDispatch }
    - Folder Structure:
        - Store: Actions + Reducers
            - actionCreators return types, and some other data
            - Reducers seem to hold expensive functions? returns functions with specific arguments
        - Utils: Utility functions
