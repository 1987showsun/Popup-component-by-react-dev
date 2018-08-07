# React Popup Component

## npm
```sh
  npm i react-popup-beta
```

## git
```sh
  https://github.com/1987showsun/Popup-component-by-react-dev
```

## <a href="https://1987showsun.github.io/Popup-component-by-react-dev/#/">Demo</a>

## Ex instructions:
```js

  import Popup    from 'react-popup-beta';

  <Popup 
      className    = "test"                        // default null
      windowSet    = "top"                         // default center
      addTrigger   = {{
          text        : "trigger slider top",      // default null
          style       : {"width":"123px"},         // default null
          className   : "123"                      // default null
      }}
      effects      = "slider"                      // fade / slider / zoom, default=fade
      autoClose    = "5000"                        // default does not automatically close
      display      = "show"                        // default "hide" , If you want to open the showable exhibition
      returnDisplay= { "function" }                // return popup state 
  >   
      {/* show popup content */}
  </Popup>
```


## Api
| api              | method                                                    | description                                 |
| ---------------- | --------------------------------------------------------- | ------------------------------------------- |
| className        | typeof Sting Name yourself                                | Name yourself,default null                  |
| windowSet        | windowSet="center","top","bottom"                         | show window set, default "center"           |
| addTrigger       | typeof Object                                             | object key "text","style","className", if text = null not show trigger button;className is trigger button class |
| effects          | effects   = "fade" / "slider" / "zoom"                    | popup window Animation , default=fade       |
| autoClose        | autoClose = "1000"                                        | will close timeout , default does not automatically close      |
| display          | display   = "show" / "hide"                               | Can control the initial window display status , default="hide" |
| returnDisplay    | return typeof function                                    | return popup state                          |
