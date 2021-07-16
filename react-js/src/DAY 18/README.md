### 1. Food-Calorie List
### Changes:

#### -> Re-usable component:
```{
  calorie_arr.map((item, index) => (
    <CalorieList key = {index} food={item.food} calories={item.calories} />
  ));
}
```

and

#### -> Conditional display using data received form props
in CalorieList.jsx
 ```     {
        props.calories >= 290 ? (
          <div>
            <br />
            !! High Calorie Food !!{" "}
          </div>
        ) : (
          ""
        );
      }
```
### Output:
![image](https://user-images.githubusercontent.com/81289215/125974853-a537d7c8-2e17-4b1a-ab91-3c9a17e6d2a9.png)


### 2. ChessBoard

#### -> Conditional statements used to display color differently depending upon the block's position, Odd or Even.

### Output
![image](https://user-images.githubusercontent.com/81289215/126011775-2e2efddb-dce5-4a1c-917f-0809c58926db.png)


