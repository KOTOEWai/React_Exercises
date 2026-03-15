

## 📑 Table of Contents


  * [JavaScript Skills](#javascript-skills)
  * [Function Declarations vs Arrow Functions](#function-declarations-vs-arrow-functions)
  * [Template Literals](#template-literals)
  * [Short Conditionals](#Short-Conditionals)
  * [Three Array Methods](#Three-Array-Methods)
  * [Object Tricks in JavaScript ](#Object-Tricks-in-JavaScript)
  * [Promises&Async/Await](#Promises&Async/Await)
  * [Optional Chaining (?.)&Nullish Coalescing (??)](#Optional-Chaining-(?.)&Nullish-Coalescing-(??))
  * [ES Modules](#ES-Modules)

  * [React Key Concepts](#react-key-concepts)
  * [What is React?](#what-is-react?)
  * [Component-based architecture](#Component-based-architecture)
  * [JSX](#JSX)
  * [FunctionalComponents](#FunctionalComponents)
  * [Props](#Props)
  * [VirtualDOM](#VirtualDOM)
  * [State](#State)
  * [EventHandling](#EventHandling)
  * [ConditionalRendering](#ConditionalRendering)
  * [Lists&Keys](#Lists&Keys)
  * [DataFlow](#DataFlow)



  * [Hooks](#Hooks)
  * [useState](#useState)
  * [useEffect](#useEffect)
  * [useContext](#useContext)
  * [useRef](#useRef)
  * [useMemo](#useMemo)
  * [useReducer](#useReducer)
  * [CustomHooks](#CustomHooks)
 
---

## JavaScript Skills

## Function Declarations vs Arrow Functions

React Component တွေကိုရေးတဲ့အခါ **Function Declaration** နဲ့ **Arrow Function** ဆိုပြီး အဓိကနည်းလမ်း (၂) မျိုးရှိပါတယ်။

---

### 1️⃣ Function Declarations (ရိုးရိုး Function ပုံစံ)

JavaScript ရဲ့ မူလ `function` keyword ကို သုံးပြီးရေးတဲ့ ပုံစံဖြစ်ပါတယ်။

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

####  အားသာချက်များ

* **Hoisting**

  * ဒီ function တွေကို file ရဲ့ ဘယ်နေရာမှာပဲ ရေးရေး၊ အပေါ်ဆုံးကနေ လှမ်းခေါ်သုံးလို့ ရပါတယ်။ JavaScript engine က code မ run ခင်မှ function တွေကို အပေါ်ဆုံးကို     ပို့ပေးထားလို့ ဖြစ်ပါတယ်။

* **Named Export အဆင်ပြေမှု**

  * `export default function App() {}` ဆိုပြီး တစ်ကြောင်းတည်းနဲ့ export လုပ်နိုင်ပါတယ်။

---

### 2️⃣ Arrow Functions (ES6 Modern Style)

Modern React code တွေမှာ အသုံးအများဆုံး ပုံစံဖြစ်ပြီး `const` / `let` နဲ့ ကြေညာရပါတယ်။

```js
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

**Shorthand Syntax (Implicit Return)**

```js
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

#### ✅ အားသာချက်များ

* **ကျစ်လျစ်မှု (Succinctness)**

  * Code ပိုတိုပြီး ဖတ်ရလွယ်ပါတယ်။
* **this binding ပြဿနာမရှိ**

  * Arrow function မှာ ကိုယ်ပိုင် `this` မရှိပါဘူး။
  * Hooks သုံးတဲ့ Modern React မှာ အထူးအရေးမကြီးတော့ပါဘူး။

---

### 📊 Comparison Table

| Feature         | Function Declaration      | Arrow Function       |
| --------------- | ------------------------- | -------------------- |
| Syntax          | `function A(){}`          | `const A = () => {}` |
| Hoisting        | ✅ ရပါတယ်                  | ❌ မရပါ               |
| Implicit Return | ❌ မရပါ                    | ✅ ရပါသည်             |
| Export          | `export default function` | `export const`       |

---

### 🔍 When to Use Which in React

**လက်တွေ့ အသုံးများပုံ**

* **Top-level Component**

  * `function App() {}` ကို အသုံးများ
* **Sub Components / map() ထဲမှာ သုံးမယ့် Component**

  * Arrow Function ကို အသုံးများ

#### ⚠️ Hoisting Error Example

```js
function App() {
  return (
    <>
      <ComponentA /> {/* OK */}
      <ComponentB /> {/* ❌ Error */}
    </>
  );
}

function ComponentA() {
  return <div>A</div>;
}

const ComponentB = () => <div>B</div>;
```



* Code ကို ကျစ်လျစ်ပြီး Modern ဖြစ်ချင်ရင် → **Arrow Function**
* ရိုးရိုးရှင်းရှင်း Traditional Style → **Function Declaration**

---

## Template Literals

Template Literals ဆိုတာ JavaScript (ES6) မှာ string တွေကို **backticks (`)** သုံးပြီးရေးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။
React မှာ Dynamic UI တည်ဆောက်တဲ့အခါ မဖြစ်မနေ သုံးရပါတယ်။

---

### Basic Syntax & Interpolation

**Traditional Way**

```js
const name = "Aung Aung";
const greeting = "Hello, " + name + "!";
```

**Template Literals (Modern Way)**

```js
const name = "Aung Aung";
const greeting = `Hello, ${name}!`;
```

---

### Multi-line Strings

```js
const bio = `
Name: Su Su
Role: Frontend Developer
Location: Yangon
`;
```

✔ `\n` မလို
✔ Enter ခေါက်ပြီး တိုက်ရိုက်ရေးနိုင်

---

### Expressions inside ${}

```js
const price = 100;
const tax = 0.05;

console.log(`Total: ${price + price * tax} MMK`);

const status = "online";
console.log(`User: ${status === 'online' ? '🟢 Active' : '🔴 Offline'}`);
```

---

### Practical Use Cases in React

####  Dynamic Props / Attributes

```js
function Profile({ userId }) {
  return <img src={`https://api.myapp.com/avatar/${userId}.jpg`} />;
}
```

#### B Dynamic Class Names

```js
const Button = ({ isPrimary }) => {
  return (
    <button className={`btn ${isPrimary ? 'btn-blue' : 'btn-gray'}`}>
      Click Me
    </button>
  );
};
```

---

* Arrow Function နဲ့ Function Declaration နှစ်မျိုးလုံး React Component အဖြစ် အသုံးပြုနိုင်ပါတယ်။
* Modern React မှာ **Arrow Function** ကို ပိုပြီး အသုံးများပါတယ်။
* Template Literals က Dynamic UI, Class Names, API URLs တွေအတွက် မဖြစ်မနေလိုအပ်ပါတယ်။
* `${}` နဲ့ JavaScript expression တွေကို string ထဲ တိုက်ရိုက်ထည့်နိုင်ပါတယ်။

---

## Short Conditionals


React development မှာ UI တစ်ခုကို အခြေအနေ (Condition) ပေါ်မူတည်ပြီး ပြချင်တဲ့အခါ (Conditional Rendering) ဒီ Operator တွေကို အသုံးများပါတယ်။


---

### Ternary Operator (condition ? true : false)

if...else ရဲ့ အတိုကောက်ဖြစ်ပါတယ်။ အခြေအနေတစ်ခု မှန်ရင် တစ်ခုပြ၊ မှားရင် နောက်တစ်ခုပြချင်တဲ့အခါ သုံးပါတယ်။

```js
const isLoggedIn = true;

// Basic usage
const status = isLoggedIn ? "Welcome Back!" : "Please Log In";

// React JSX usage
return (
  <div>
    {isLoggedIn ? <LogoutButton /> : <LoginButton />}
  </div>
);
```
### Logical AND (&&)

အခြေအနေတစ်ခု မှန်တဲ့အခါမှသာ UI ကို ပြချင်ပြီး၊ မှားရင် ဘာမှမပြချင်တဲ့အခါ သုံးပါတယ်။

```js

const hasMessages = true;

return (
  <div>
    <h1>Inbox</h1>
    {/* hasMessages မှန်မှသာ <span> ကို ပြပါမယ် */}
    {hasMessages && <span>You have new mail!</span>}
  </div>
);
```
### Logical OR (||)

သူကတော့ Default Value ပေးချင်တဲ့အခါ သုံးပါတယ်။ ရှေ့ကတန်ဖိုးက null, undefined, သို့မဟုတ် false ဖြစ်နေရင် နောက်ကတန်ဖိုးကို ယူပါတယ်။

```js
const userName = ""; // empty string is falsy

// userName မရှိရင် "Guest" ကို သုံးမယ်
const displayName = userName || "Guest";

console.log(`Welcome, ${displayName}`); // "Welcome, Guest"
```

Operator,                အသုံးပြုပုံ (Use Case),                   အဓိပ္ပာယ်

Ternary (? :),           If-Else ပုံစံ,                       မှန်ရင် ဒါလုပ်၊ မှားရင် ဟိုဟာလုပ်

AND (&&),                If ပုံစံ,                            မှန်မှသာ ဒါကိုပြ

OR (||),                 Default ပုံစံ,                       ရှေ့ကဟာ မရှိရင် (သို့) မှားရင် ဒါကိုယူ


---

Ternary Operator: "ဒါမှမဟုတ်ရင် ဟိုဟာ" လို့ ရွေးချယ်စရာ (၂) ခုရှိရင် သုံးပါ။ JSX ထဲမှာ logic ရေးဖို့ အကောင်းဆုံးပါ။

Short-circuit AND (&&): "မှန်မှပြမယ်" ဆိုတဲ့ logic တွေအတွက် သုံးပါ။ ဥပမာ- loading ပြီးမှ data ပြတာမျိုး။

Short-circuit OR (||): "မရှိရင် ဒါအစားထိုးမယ်" ဆိုတဲ့ default value သတ်မှတ်ဖို့ သုံးပါ။

---

## Three Array Methods

React မှာ data တွေကို UI အဖြစ် ပြောင်းလဲတဲ့အခါ မူရင်း data (original array) ကို မထိခိုက်စေဘဲ အသစ်တစ်ခု ထုတ်ပေးတဲ့ ဒီ method တွေကို အသုံးများပါတယ်။

---

### .map() (The UI Builder)

Array ထဲက item တစ်ခုချင်းစီကို ပုံစံပြောင်းပြီး array အသစ်တစ်ခု ထုတ်ပေးတာပါ။ React မှာ list တွေကို render လုပ်ဖို့ အသုံးအများဆုံး နည်းလမ်းဖြစ်ပါတယ်။

```js

const users = ["Aung Aung", "Su Su", "Kyaw Kyaw"];

// React ထဲမှာ UI list အဖြစ် ပြောင်းလဲခြင်း
const UserList = () => (
  <ul>
     {users.map((user,index)=>{
            <li key={index}>{user}</li>
     })}
  </ul>
);
```
---

### .filter() (The Searcher)

သတ်မှတ်ထားတဲ့ အခြေအနေနဲ့ ကိုက်ညီတဲ့ item တွေကိုပဲ ရွေးထုတ်ပြီး array အသစ်တစ်ခု ထုတ်ပေးတာပါ။ Search လုပ်တာ ဒါမှမဟုတ် Delete လုပ်တဲ့နေရာမှာ သုံးပါတယ်။

---

```js

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 }
];

// ဈေးနှုန်း ၆၀၀ အောက် ပစ္စည်းများကိုပဲ စစ်ထုတ်ခြင်း
const cheapItems = products.filter(item => item.price < 600);
// Result: Phone နဲ့ Tablet ပဲ ကျန်မယ်
```

---

### .reduce() (The Accumulator)

Array တစ်ခုလုံးမှာရှိတဲ့ data တွေကို စုပေါင်းပြီး တန်ဖိုးတစ်ခုတည်း (ဥပမာ- စုစုပေါင်းရလဒ်) ထွက်လာအောင် လုပ်တာပါ။ Shopping cart ထဲက ပစ္စည်းတွေရဲ့ စုစုပေါင်းဈေးနှုန်းကို တွက်တဲ့နေရာမှာ အသုံးများပါတယ်။

```js
const cart = [
  { item: "Apple", price: 10 },
  { item: "Orange", price: 15 },
  { item: "Banana", price: 5 }
];

const totalPrice = cart.reduce((total, item) => {
  return total + item.price;
}, 0); // 0 က စတင်ရေတွက်မည့် အစပျိုးတန်ဖိုး (Initial Value)

console.log(totalPrice); // 30
```
---

Method,                  ရည်ရွယ်ချက် (Purpose),             ရလဒ် (Return),             React Use Case

.map(),                   ပုံစံပြောင်းလဲရန်,                    Array အသစ်,                Lists render လုပ်ရန်

.filter(),                စစ်ထုတ်ရန်,                        Array အသစ်,               Search/Delete လုပ်ရန်

.reduce(),                ပေါင်းစည်းရန်,                      တန်ဖိုးတစ်ခုတည်း,             စုစုပေါင်း (Total) တွက်ရန်

---

---

.map(): UI ထဲမှာ list တွေပြချင်ရင် ဒါကိုပဲ သုံးရပါမယ်။ (Original array ကို မပြောင်းလဲပါ)။

.filter(): မလိုတဲ့ item တွေကို ဖယ်ထုတ်ချင်ရင် သုံးပါ။ (ဥပမာ- Delete button နှိပ်လိုက်တဲ့ item ကို ဖယ်ထုတ်တာမျိုး)။

.reduce(): Array ထဲက ကိန်းဂဏန်းတွေကို ပေါင်းချင်တာပဲဖြစ်ဖြစ်၊ data တွေကို တစ်ခုတည်းဖြစ်အောင် စုစည်းချင်ရင် သုံးပါ။

---

#  Object Tricks in JavaScript 

* Property Shorthand
* Destructuring
* Spread Operator

---

## 1️⃣ Property Shorthand

Object တစ်ခုထဲမှာ **key နာမည်နဲ့ variable နာမည် တူနေတဲ့အခါ** shorthand syntax ကို သုံးနိုင်ပါတယ်။

### Traditional Way

```js
const name = "Aung Aung";
const age = 22;

const user = {
  name: name,
  age: age,
};
```

### Property Shorthand (Modern)

```js
const name = "Aung Aung";
const age = 22;

const user = {
  name,
  age,
};
```

### ✅ React Use Case

```js
function createUser(name, email) {
  return { name, email };
}
```

✔ Code ပိုတို
✔ ဖတ်ရလွယ်
✔ Modern JavaScript Style

---

## 2️⃣ Object Destructuring

Object ထဲက value တွေကို **variable အနေနဲ့ ခွဲထုတ်ယူခြင်း** ဖြစ်ပါတယ်။
React မှာ props, state, hooks တွေမှာ နေ့တိုင်းသုံးရပါတယ်။

### Without Destructuring

```js
function Profile(props) {
  return <h1>{props.name} - {props.age}</h1>;
}
```

### With Destructuring (Recommended)

```js
function Profile({ name, age }) {
  return <h1>{name} - {age}</h1>;
}
```

### Destructuring with Default Values

```js
function Profile({ name = "Guest", age = 0 }) {
  return <p>{name} ({age})</p>;
}
```

### Destructuring Nested Objects

```js
const user = {
  profile: {
    username: "susu",
    role: "admin",
  },
};

const { profile: { username, role } } = user;
```

---

## 3️⃣ Spread Operator (`...`)

Spread Operator ကို object သို့ array ကို **copy**, **merge**, **update** လုပ်တဲ့အခါ အသုံးပြုပါတယ်။
React state update မှာ အရမ်းအရေးကြီးပါတယ်။

---

### A Copy Object (Immutability)

```js
const user = { name: "Aung", age: 22 };
const newUser = { ...user };
```

✔ Original object မပျက်
✔ React state update အတွက် မဖြစ်မနေလိုအပ်

---

###  Update Object Property

```js
const user = { name: "Aung", age: 22 };

const updatedUser = {
  ...user,
  age: 23,
};
```

---

### Merge Objects

```js
const auth = { isLoggedIn: true };
const profile = { name: "Aung" };

const user = { ...auth, ...profile };
```

---

### D React State Update Example

```js
const [user, setUser] = useState({ name: "Aung", age: 22 });

setUser(prev => ({
  ...prev,
  age: 23,
}));
```

✔ Correct React Pattern
❌ `user.age = 23` (Do NOT do this)

---

## ⚠️ Common Mistakes

```js
const user = { name: "Aung" };
const copy = user; // ❌ same reference
```

Correct way:

```js
const copy = { ...user }; // ✅ new object
```

---



* **Property Shorthand** → Object ရေးတဲ့အခါ code ကို တိုစေတယ်
* **Destructuring** → Props / State / Hooks ကို သန့်ရှင်းအောင်ရေးနိုင်
* **Spread Operator** → React state ကို safe update လုပ်နိုင်
---


# Promises&Async/Await 

Promises နဲ့ Async / Await က JavaScript မှာ **asynchronous code** (API call, data fetching, timer, etc.) တွေကို handle လုပ်ဖို့ အရေးကြီးဆုံး concept တွေပါ။ React / Next.js မှာ API ခေါ်တဲ့အခါ မဖြစ်မနေ သိထားရပါမယ်။

---

## 1. What is Asynchronous JavaScript?

JavaScript က **single-threaded** language ဖြစ်ပါတယ်။ ဒါပေမဲ့ API call လို အချိန်ယူတဲ့ အလုပ်တွေကို asynchronous နဲ့ run လုပ်နိုင်ပါတယ်။

ဥပမာ –

* API မှ data ယူခြင်း
* setTimeout
* File / Database access

အဲ့ဒီလိုအလုပ်တွေကို **Promise / Async-Await** နဲ့ ကိုင်တွယ်ပါတယ်။

---

## 2. Promise ဆိုတာဘာလဲ?

Promise ဆိုတာ **အနာဂတ်မှာ result တစ်ခု return ပြန်ပေးမယ့် object** တစ်ခုပါ။

Promise မှာ state 3 ခုရှိပါတယ် –

* **Pending** → အလုပ်လုပ်နေဆဲ
* **Fulfilled** → အောင်မြင်ပြီး result ရပြီ
* **Rejected** → error ဖြစ်သွားပြီ

### Basic Promise Example

```js
const fetchData = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Something went wrong");
  }
});
```

### Using `.then()` and `.catch()`

```js
fetchData
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

➡️ Promise chain လုပ်ရင် code က အနည်းငယ်ရှုပ်နိုင်ပါတယ်။

---

## 3. Promise Chaining

```js
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

❌ Problem: `.then()` များလာရင် **readability မကောင်းတော့** ပါဘူး။

ဒီအတွက် Async / Await ကို သုံးပါတယ်။

---

## 4. Async / Await ဆိုတာဘာလဲ?

Async / Await က Promise ကို **sync code လို ဖတ်လို့ရအောင်** ရေးနိုင်စေပါတယ်။

* `async` → function တစ်ခုကို async function ဖြစ်အောင်လုပ်
* `await` → Promise ပြီးဆုံးတဲ့အထိ စောင့်

### Basic Async / Await Example

```js
async function fetchUser() {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  console.log(data);
}
```

➡️ Code က `.then()` ထက် ပိုရှင်းပါတယ်။

---

## 5. Error Handling with try / catch

Async / Await မှာ error ကို `try...catch` နဲ့ handle လုပ်ပါတယ်။

```js
async function fetchUser() {
  try {
    const res = await fetch("https://api.example.com/user");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching user", error);
  }
}
```

---

## 6. Using Async / Await in React (useEffect)

React မှာ API call ကို `useEffect` ထဲမှာ အများဆုံး သုံးပါတယ်။

```js
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://api.example.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 7. Multiple Promises (Promise.all)

တစ်ချိန်တည်း API များစွာ ခေါ်ချင်ရင် `Promise.all()` သုံးပါတယ်။

```js
async function fetchAll() {
  const [users, posts] = await Promise.all([
    fetch("/users").then((r) => r.json()),
    fetch("/posts").then((r) => r.json()),
  ]);

  console.log(users, posts);
}
```

---

## 8. Promise vs Async / Await (Comparison)

| Feature        | Promise (.then) | Async / Await |
| -------------- | --------------- | ------------- |
| Readability    | Medium          | High          |
| Error Handling | .catch()        | try / catch   |
| React Usage    | Rare now        | Very common   |
| Clean Code     | ❌               | ✅             |

---



* Promise က asynchronous result ကို ကိုယ်စားပြုတဲ့ object ဖြစ်ပါတယ်
* `.then()` / `.catch()` နဲ့ Promise ကို handle လုပ်နိုင်ပါတယ်
* Async / Await က Promise ကို **ပိုရှင်းလင်းစွာ** ရေးနိုင်စေပါတယ်
* React / Next.js မှာ **Async / Await + try/catch** ကို အများဆုံး သုံးပါတယ်
* API fetching, server actions, data loading အတွက် မဖြစ်မနေ သိထားရပါမယ်

---


# Optional Chaining (?.)&Nullish Coalescing (??)

Optional Chaining (`?.`) နဲ့ Nullish Coalescing (`??`) က **modern JavaScript (ES2020)** features ဖြစ်ပြီး React / Next.js မှာ **runtime error မဖြစ်အောင်** ကာကွယ်ပေးနိုင်တဲ့ အရမ်းအရေးကြီးတဲ့ syntax တွေပါ။

---

## 1. Why do we need them?

React မှာ API data တွေ fetch လုပ်တဲ့အခါ —

* data မလာသေးခင် `undefined` ဖြစ်နိုင်တယ်
* nested object တွေထဲက property ကို access လုပ်တဲ့အခါ error ဖြစ်နိုင်တယ်

```js
// ❌ Error ဖြစ်နိုင်
console.log(user.profile.name);
```

`user` သို့မဟုတ် `profile` က `undefined` ဖြစ်နေရင် app crash ဖြစ်သွားပါမယ် ❌

ဒီပြဿနာကို **Optional Chaining** နဲ့ ဖြေရှင်းပါတယ်။

---

## 2. Optional Chaining (?.) ဆိုတာဘာလဲ?

Optional Chaining (`?.`) က
👉 **object / array / function က null or undefined ဖြစ်ရင် error မထုတ်ဘဲ undefined ပြန်ပေးတဲ့ operator** ဖြစ်ပါတယ်။

### Basic Example

```js
const user = {
  profile: {
    name: "Aung Aung",
  },
};

console.log(user?.profile?.name); // "Aung Aung"
console.log(user?.address?.city); // undefined (❌ error မဖြစ်)
```

---

## 3. Without vs With Optional Chaining

### ❌ Old Way (Defensive Code)

```js
if (user && user.profile && user.profile.name) {
  console.log(user.profile.name);
}
```

### ✅ Modern Way

```js
console.log(user?.profile?.name);
```

➡️ Code ပိုတို၊ ပိုဖတ်လွယ် 👍

---

## 4. Optional Chaining with Arrays

```js
const users = [];

console.log(users[0]?.name); // undefined
```

Array empty ဖြစ်နေလည်း error မဖြစ်ပါဘူး။

---

## 5. Optional Chaining with Functions

```js
const user = {
  sayHello: () => "Hello",
};

console.log(user.sayHello?.()); // "Hello"
console.log(user.sayBye?.());   // undefined
```

Function မရှိရင်လည်း error မဖြစ်ပါဘူး။

---

## 6. Real Use Case in React

```js
function Profile({ user }) {
  return (
    <div>
      <h1>{user?.profile?.name}</h1>
      <p>{user?.profile?.email}</p>
    </div>
  );
}
```

➡️ API data မလာသေးခင် render လုပ်လည်း crash မဖြစ်ပါဘူး ✅

---

## 7. Nullish Coalescing (??) ဆိုတာဘာလဲ?

Nullish Coalescing (`??`) က
👉 **value က null သို့မဟုတ် undefined ဖြစ်မှသာ default value သုံးပေးတဲ့ operator** ဖြစ်ပါတယ်။

### Basic Example

```js
const username = null;

console.log(username ?? "Guest"); // "Guest"
```

---

## 8. ?? vs || (Important Difference)

### Using OR (||)

```js
const count = 0;
console.log(count || 10); // 10 ❌ (မလိုချင်တဲ့ result)
```

### Using Nullish Coalescing (??)

```js
const count = 0;
console.log(count ?? 10); // 0 ✅ (correct)
```

➡️ `||` က falsy values (`0`, `""`, `false`) ကိုလည်း default သတ်မှတ်တယ်
➡️ `??` က **null / undefined** သာ default သတ်မှတ်တယ်

---

## 9. Using ?? in React Components

```js
function Counter({ value }) {
  return <p>Count: {value ?? 0}</p>;
}
```

`value` မပေးရင် 0 ပြမယ်၊ 0 ကိုပေးရင်လည်း 0 ကိုပဲပြမယ် ✅

---

## 10. Combining ?. and ?? (Very Common)

```js
const city = user?.address?.city ?? "Unknown";
```

➡️ Safe access + default value = Perfect combo 🔥

---



* `?.` → null / undefined ဖြစ်နိုင်တဲ့ object ကို **safe access** လုပ်ဖို့
* `??` → null / undefined ဖြစ်မှသာ **default value** ပေးဖို့
* React / Next.js မှာ API data render လုပ်တဲ့အခါ မဖြစ်မနေ သုံးသင့်
* `||` ထက် `??` က **ပိုမှန်ကန်တဲ့ default logic** ဖြစ်တတ်

---

# ES Modules

ES Modules (ESM) ဆိုတာ JavaScript မှာ **code ကို file အလိုက် ခွဲရေးပြီး ပြန်အသုံးချနိုင်အောင်** လုပ်ပေးတဲ့ modern module system ဖြစ်ပါတယ်။ React / Next.js မှာ **default standard** အဖြစ် အသုံးပြုနေပါတယ်။

---

## 1. Why ES Modules?

Project ကြီးလာတာနဲ့အမျှ file တစ်ဖိုင်ထဲမှာ code အားလုံးရေးရင် —

* မဖတ်လွယ်
* maintain ခက်
* bug ပြန်ရှာရခက်

ES Modules က code ကို **reusable, maintainable, scalable** ဖြစ်အောင် ကူညီပေးပါတယ်။

---

## 2. Export ဆိုတာဘာလဲ?

`export` က **ဒီ file ထဲက code ကို အပြင်က file တွေမှာ သုံးလို့ရအောင် ထုတ်ပေးခြင်း** ဖြစ်ပါတယ်။

ES Modules မှာ export အမျိုးအစား ၂ မျိုးရှိပါတယ် –

* **Named Export**
* **Default Export**

---

## 3. Named Export

### Syntax

```js
export const name = "Aung Aung";
export const age = 20;
```

or

```js
const name = "Aung Aung";
const age = 20;

export { name, age };
```

### Import Named Exports

```js
import { name, age } from "./user";
```

⚠️ **Name တူရပါမယ်** (rename ချင်ရင် `as` သုံးနိုင်)

```js
import { name as userName } from "./user";
```

---

## 4. Default Export

File တစ်ဖိုင်မှာ **default export တစ်ခုပဲ ရနိုင်ပါတယ်**။

### Syntax

```js
export default function User() {
  return "User Component";
}
```

or

```js
const User = () => "User Component";
export default User;
```

### Import Default Export

```js
import User from "./User";
```

✅ Name ကို ကြိုက်သလိုပေးလို့ရပါတယ်

---

## 5. Named vs Default (Comparison)

| Feature          | Named Export | Default Export |
| ---------------- | ------------ | -------------- |
| Exports per file | Multiple     | Only one       |
| Import name      | Must match   | Any name       |
| Auto-complete    | Better       | Normal         |
| React usage      | utils, hooks | components     |

---

## 6. Exporting React Components

### Recommended Pattern

```js
export default function Button() {
  return <button>Click</button>;
}
```

Usage:

```js
import Button from "@/components/Button";
```

---

## 7. Exporting Utilities / Helpers

```js
export function formatPrice(price) {
  return `${price} MMK`;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
```

Import:

```js
import { formatPrice, formatDate } from "@/utils/format";
```

---

## 8. Re-exporting (Barrel Files)

Project ကြီးရင် import လိုင်းတွေရှုပ်နိုင်ပါတယ်။

```js
// components/index.js
export { default as Button } from "./Button";
export { default as Card } from "./Card";
```

Usage:

```js
import { Button, Card } from "@/components";
```

➡️ Cleaner imports 👍

---

## 9. Common Mistakes

❌ Named export ကို default import နဲ့ ခေါ်ခြင်း

```js
import User from "./user"; // Error
```

✅ Correct

```js
import { User } from "./user";
```

---

## 10. ES Modules in Node.js / Next.js

* Next.js → ES Modules **default support**
* Node.js → `"type": "module"` in `package.json`

```json
{
  "type": "module"
}
```

---


* ES Modules = modern JavaScript module system
* `export` → code ကို အပြင်မှာ သုံးလို့ရအောင် ထုတ်ပေး
* `import` → အခြား file က code ကို ယူသုံး
* React Components → `export default`
* Utils / Hooks → `named export`
* Clean architecture အတွက် မဖြစ်မနေ သိထားရမယ်

---

## React Key Concepts

# What is React?
```
React ဆိုတာ ကမ္ဘာပေါ်မှာ လူသုံးအများဆုံးနဲ့ နာမည်အကြီးဆုံး JavaScript Library တစ်ခုဖြစ်ပါတယ်။
သူ့ကို Facebook (Meta) က ၂၀၁၃ ခုနှစ်မှာ စတင်ထုတ်လုပ်ခဲ့တာဖြစ်ပြီး၊ Website တွေရဲ့ 
User Interface (UI) တွေကို အလွယ်တကူ တည်ဆောက်ဖို့အတွက် အသုံးပြုပါတယ်။


၁။ Component-Based (အစိတ်အပိုင်းလေးများဖြင့် တည်ဆောက်ခြင်း)
React ရဲ့ အားသာချက်က Website တစ်ခုလုံးကို အစိတ်အပိုင်းလေးတွေ (Components) အဖြစ် ခွဲပစ်လိုက်တာပါ။

ဥပမာ- Website တစ်ခုမှာ Header တစ်ခု၊ Sidebar တစ်ခု၊ Footer တစ်ခု စသဖြင့် ရှိမယ်ဆိုရင် အဲဒါတွေကို
 သီးခြားစီ Component တစ်ခုချင်းစီအဖြစ် ရေးလို့ရပါတယ်။

ပြီးမှ အဲဒီ Component လေးတွေကို အရုပ်ဆက်သလို ပြန်တွဲလိုက်တာပါ။ အစိတ်အပိုင်းတစ်ခုကို တစ်ခါရေးထားပြီး
နေရာတော်တော်များများမှာ ပြန်သုံးလို့ရတာ (Reusability) က React ရဲ့ အသက်ပါ။

၂။ Declarative (ဘာဖြစ်ချင်လဲဆိုတာပဲ ပြောဖို့လိုခြင်း)
ရိုးရိုး JavaScript နဲ့ဆိုရင် UI ပြောင်းလဲဖို့အတွက် "ဘာကိုနှိပ်ရင် ဘာဖြစ်ရမယ်" ဆိုတာကို အဆင့်ဆင့် ရေးရပါတယ်။ 
ဒါကို Imperative လို့ ခေါ်ပါတယ်။ React မှာတော့ "ငါ့ရဲ့ Website State က ဒီလိုဖြစ်နေရင် UI က ဒီလိုပုံစံ ပေါ်နေရမယ်" လို့ပဲ
ပြောထားလိုက်ရုံပါပဲ။ အနောက်ကနေ လိုအပ်တဲ့ ပြောင်းလဲမှုတွေကို React က အလိုအလျောက် လုပ်ပေးသွားတာပါ။

၃။ Virtual DOM (အလုပ်လုပ်ပုံ မြန်ဆန်ခြင်း)
Website တစ်ခုမှာ တစ်ခုခု ပြောင်းလဲသွားတိုင်း Website တစ်ခုလုံးကို Refresh လုပ်နေရင် အရမ်းနှေးပါတယ်။
React က Virtual DOM ဆိုတဲ့ နည်းပညာကို သုံးပါတယ်။ သူက လက်ရှိ Website ရဲ့ ပုံတူပွားတစ်ခုကို Memory ထဲမှာ သိမ်းထားပြီး၊
တကယ်ပြောင်းလဲသွားတဲ့ အစိတ်အပိုင်းလေးကိုပဲ ရွေးပြီး Update လုပ်ပေးတာကြောင့် Website တွေက အရမ်းကို မြန်ဆန်နေတာဖြစ်ပါတယ်။
```

---

# Component-based architecture

```
Component-based architecture ဆိုတာ Website တစ်ခုလုံးကို စာမျက်နှာအကြီးကြီးတစ်ခုအနေနဲ့ မစဉ်းစားဘဲ သေးငယ်ပြီး 
သီးခြားစီရှိတဲ့ အစိတ်အပိုင်းလေးတွေ (Components) အဖြစ် ခွဲထုတ်ပြီး တည်ဆောက်တဲ့ နည်းလမ်းဖြစ်ပါတယ်။



Component-Based Architecture
React ရဲ့ အဓိက အခြေခံသဘောတရားမှာ Website တစ်ခုကို Lego တုံးလေးတွေလို အပိုင်းပိုင်းခွဲပြီး
 ပြန်လည် စုစည်းတည်ဆောက်ခြင်း ဖြစ်ပါတယ်။

1. Component ဆိုတာ ဘာလဲ?

Component ဆိုတာ UI ရဲ့ အစိတ်အပိုင်းတစ်ခုကို ကိုယ်စားပြုတဲ့ JavaScript Function တစ်ခု ဖြစ်ပါတယ်။
၎င်းတွင် ကိုယ်ပိုင် Logic၊ Styles နှင့် Structure (JSX) များ ပါဝင်ပါတယ်။

Atomic Components: အသေးဆုံး အစိတ်အပိုင်းများ (ဥပမာ - Button, Input, Icon)

Molecule Components: အသေးလေးများ စုပေါင်းထားခြင်း (ဥပမာ - Search Bar = Input + Button)

Organism Components: အပိုင်းအစကြီးများ (ဥပမာ - Navbar, Footer, Sidebar)

2. အဓိက အားသာချက်များ (Benefits)

Reusability (ပြန်လည်အသုံးပြုနိုင်ခြင်း): Button တစ်ခုကို Component အဖြစ် တစ်ခါရေးထားလျှင်
 Website တစ်ခုလုံး၏ မည်သည့်နေရာတွင်မဆို ပြန်ခေါ်သုံးနိုင်ပါတယ်။

Predictability (ခန့်မှန်းရလွယ်ကူခြင်း): Component တစ်ခုချင်းစီက သီးခြားစီ အလုပ်လုပ်သောကြောင့် 
တစ်နေရာတွင် ပြင်လိုက်လျှင် အခြားမဆိုင်သော နေရာများတွင် Error တက်နိုင်ခြေ နည်းပါးသွားပါတယ်။

Maintainability (ထိန်းသိမ်းရလွယ်ကူခြင်း): Code များ ရှုပ်ထွေးမလာဘဲ လိုအပ်သည့် အစိတ်အပိုင်းကိုသာ 
သွားရောက်ပြင်ဆင်ရန် လွယ်ကူစေပါတယ်။

Separation of Concerns: Component တစ်ခုသည် ၎င်းနှင့်ဆိုင်သော အလုပ်တစ်ခုကိုသာ အာရုံစိုက် လုပ်ဆောင်ပါတယ်။

3. Data Flow (Prop Drilling)
Component-based architecture တွင် Data များသည် Parent (အပေါ်) မှ Child (အောက်)
 သို့ တစ်ဖက်သတ် စီးဆင်းပါတယ်။ ၎င်းကို Props ဟု ခေါ်ပါတယ်။

4. Practical Structure
React Project တစ်ခုတွင် Component များကို အောက်ပါအတိုင်း စုစည်းလေ့ရှိသည်-


src/
 ├── components/
 │    ├── Button.js
 │    ├── Card.js
 │    └── Navbar.js
 ├── App.js
 └── index.js
 

Component-based architecture ဆိုတာ Website ကို အပိုင်းအစလေးတွေ ခွဲထုတ်လိုက်တာပါ။
ဒါမှသာ code ရေးရတာ ပိုမြန်လာမယ်၊ တစ်ခါရေးထားတာကို နေရာတိုင်းမှာ ပြန်သုံးလို့ရမယ်၊
ပြီးတော့ error ရှာရတာလည်း ပိုလွယ်ကူစေမှာ ဖြစ်ပါတယ်။

```
# JSX

```

JSX ဆိုတာ JavaScript XML ရဲ့ အတိုကောက်ဖြစ်ပါတယ်။ ၎င်းဟာ JavaScript ဖိုင်ထဲမှာ
HTML ပုံစံ Syntax တွေကို တိုက်ရိုက်ရေးသားနိုင်အောင် ပြုလုပ်ပေးတဲ့ Extension တစ်ခု ဖြစ်ပါတယ်။

React မှာ UI (User Interface) တွေကို တည်ဆောက်တဲ့အခါ JSX ကို မဖြစ်မနေ သုံးရပါတယ်။

JSX (JavaScript XML)JSX က UI structure ကို မြင်သာအောင် ကူညီပေးပါတယ်။ 
၎င်းဟာ Browser က တိုက်ရိုက်နားလည်တဲ့ code မဟုတ်ဘဲ Babel ကဲ့သို့သော Compiler
များကနေတစ်ဆင့် ရိုးရိုး JavaScript (React.createElement) အဖြစ် ပြောင်းလဲပေးရပါတယ်။

1. JSX ၏ အခြေခံ စည်းမျဉ်းများ (Basic Rules)JSX ကို ရေးသားတဲ့အခါ အောက်ပါအချက်တွေကို လိုက်နာရပါမယ်

Single Parent Element: JSX ရဲ့ return ပြန်တဲ့နေရာမှာ အပြင်ဘက်ဆုံးက
Element တစ်ခုတည်း (ဥပမာ- <div> သို့မဟုတ် Fragment <>) နဲ့ ပတ်ထားရပါမယ်။

CamelCase Properties: HTML attributes တွေကို camelCase ပုံစံ ပြောင်းရေးရပါတယ်။

class အစား className

onclick အစား onClick

tabindex အစား tabIndex

Closing Tags: Tags အားလုံးမှာ ပိတ်တဲ့ tag ပါရပါမယ်။ (<img> ကို <img /> ဟု ရေးရပါမယ်)။

2. Embedding Expressions (JavaScript ထည့်သွင်းခြင်း)

JSX ထဲမှာ JavaScript variable တွေ၊ logic တွေကို သုံးချင်ရင် Curly braces { } ကို အသုံးပြုရပါတယ်။

```js

const name = "Aung Aung";
const element = <h1>Hello, {name}</h1>;

```

3. JSX vs. HTMLJSX က HTML နဲ့ ဆင်တူပေမယ့် အလုပ်လုပ်ပုံ ကွာခြားချက်အချို့ ရှိပါတယ်။

```

Feature,                   HTML,                            JSX
------------------------------------------------------------------------------------------
Attribute Name,    -        class,                    -      className                    - 
                   -                                  -                                   -
Inline Style,      -        "color: red" (String)     -     {{ color: 'red' }} (Object)   -
                   -                                  -                                   -
JavaScript,        -        သီးသန့်ရေးရသည်,            -     { } ဖြင့် တိုက်ရိုက် ရေးနိုင်သည်      -
                   -                                  -                                   -
Self-closing,      -        <br> ရသည်,               -     <br /> ဟု ပိတ်ရသည်            -
-------------------------------------------------------------------------------------------
```

4. Fragment ဆိုတာ ဘာလဲ? (<> </>)

React မှာ Element တွေကို return ပြန်တဲ့အခါ extra <div> တွေ အလကား မတိုးလာစေချင်ရင် Fragment ကို သုံးနိုင်ပါတယ်။

```js

return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);

```
JSX ဆိုတာ JavaScript ထဲမှာ HTML ရေးတာပါ။Logic တွေ သုံးချင်ရင် Curly Braces { } ထဲမှာ ရေးပါ။
အပြင်ဘက်ဆုံးမှာ Element တစ်ခုတည်းနဲ့ အုပ်ထားဖို့ မမေ့ပါနဲ့။HTML အဟောင်းနဲ့ မတူဘဲ className နဲ့ camelCase တွေကို သတိထား သုံးပေးပါ။

---

# FunctionalComponents

React ရဲ့ Functional Components ဆိုတာ ရိုးရိုးရှင်းရှင်းပြောရရင် JavaScript Function တစ်ခုပါပဲ။
အရင်တုန်းက Class Components တွေကို အသုံးများခဲ့ကြပေမဲ့ အခုနောက်ပိုင်း React Development မှာ
Functional Components + Hooks က Standard ဖြစ်နေပါပြီ။



၁။ Functional Component ဆိုတာ ဘာလဲ?

Functional Component ဆိုတာ Props (data) တွေကို input အနေနဲ့ လက်ခံပြီး UI (JSX) ကို
 output အနေနဲ့ ပြန်ထုတ်ပေးတဲ့ function တစ်ခုပါ။

သူ့ရဲ့ အဓိက အားသာချက်တွေကတော့:

ရိုးရှင်းတယ်: Code ရေးရတာ နည်းပြီး ဖတ်ရတာ လွယ်တယ်။

Performance ကောင်းတယ်: Class components တွေထက် ပိုပေါ့ပါးတယ်။

Hooks သုံးလို့ရတယ်: useState, useEffect စတဲ့ Hooks တွေနဲ့ state တွေကို စီမံခန့်ခွဲနိုင်တယ်။

၂။ ပုံစံ (Syntax)

Functional Component ကို ပုံစံနှစ်မျိုးနဲ့ ရေးလေ့ရှိပါတယ်။

ပုံမှန် Function ပုံစံ:

```js

function Welcome() {
  return <h1>မင်္ဂလာပါ ခင်ဗျာ</h1>;
}
```
Arrow Function ပုံစံ (အသုံးအများဆုံး):

```js

const Welcome = () => {
  return <h1>မင်္ဂလာပါ ခင်ဗျာ</h1>;
};
```

၃။ Props အသုံးပြုပုံ
Component တစ်ခုကနေ တစ်ခုကို data ပေးပို့ချင်ရင် Props ကို သုံးပါတယ်။

```js
const Greeting = (props) => {
  return <h1>နေကောင်းလား {props.name}?</h1>;
};


// အသုံးပြုပုံ
<Greeting name="Kyaw Kyaw" />
```

၄။ State စီမံခန့်ခွဲခြင်း (Hooks)

အရင်က Functional Component တွေမှာ State သိမ်းလို့မရခဲ့ပေမဲ့ အခုတော့ Hooks တွေကြောင့် အကုန်လုပ်လို့ရနေပါပြီ။

ဥပမာ-

```js

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // initial value က 0

  return (
    <div>
      <p>နှိပ်လိုက်တဲ့အကြိမ်ရေ: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        နှိပ်ပါ
      </button>
    </div>
  );
};
```


Functional Components တွေဟာ:

Stateless ဖြစ်နိုင်သလို (Props သက်သက်သုံးရင်)၊

Stateful လည်း ဖြစ်နိုင်ပါတယ် (Hooks သုံးရင်)။

---

# Props

Props ဆိုတာ "Properties" ရဲ့ အတိုကောက်ဖြစ်ပြီး Component တစ်ခုကနေ နောက်တစ်ခုကို
(အထူးသဖြင့် Parent မှ Child သို့) Data ပေးပို့ရာမှာ သုံးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။

နားလည်လွယ်အောင် အချက် ၃ ချက်နဲ့ အတိုဆုံး မှတ်နိုင်ပါတယ်:

၁။ ပေးပို့ပုံ (Pass like HTML attributes)

HTML tag တွေမှာ src သို့မဟုတ် href သုံးသလိုမျိုးပဲ Component မှာလည်း attribute တစ်ခုအနေနဲ့ ပေးပို့ရပါတယ်။

```js
<Greeting name="Aung Aung" age="20" />
```

၂။ လက်ခံပုံ (Receive as an Object)

Functional Component မှာ props တွေကို function ရဲ့ parameter အနေနဲ့ လက်ခံရပါတယ်။ ၎င်းသည် object တစ်ခု ဖြစ်ပါတယ်။

```js
const Greeting = (props) => {
  return <h1>မင်္ဂလာပါ {props.name}</h1>;
};

```

၃။ အဓိက စည်းမျဉ်း (Read-Only)

Props တွေက Read-Only (Immutable) ဖြစ်ပါတယ်။ ဆိုလိုတာက Child Component ကနေ သူ့ဆီကို ရောက်လာတဲ့ Props တန်ဖိုးကို ပြင်ခွင့်မရှိပါဘူး။ Data ကို လက်ခံပြီး ပြသဖို့ပဲ သုံးရပါတယ်။

```js
// Parent Component
function App() {
  return (
    <div>
      <UserCard name="Su Su" job="Designer" />
      <UserCard name="Kyaw Kyaw" job="Developer" />
    </div>
  );
}

// Child Component
function UserCard(props) {
  return (
    <div style={{ border: '1px solid black' }}>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
    </div>
  );
}
```
[UseFull Link For Pros](https://www.robinwieruch.de/react-pass-props-to-component/)

---
# VirtualDOM
```

Virtual DOM (VDOM) ဆိုတာ အစစ်အမှန် Browser DOM ရဲ့ ပေါ့ပါးတဲ့ Copy (ကိုယ်ပွား) တစ်ခု ဖြစ်ပါတယ်။
 React က Performance မြန်အောင် ဒီနည်းလမ်းကို သုံးတာပါ။

ဒါကို နားလည်ဖို့ အောက်ပါ အဆင့် ၃ ဆင့်ကို ကြည့်ပါ-

၁။ ဘာလို့ လိုတာလဲ? (The Problem)

Browser ရဲ့ Real DOM က အရမ်းလေးပါတယ်။ ဥပမာ- List တစ်ခုထဲမှာ စာသားလေးတစ်ခုပဲ
ပြောင်းချင်ရင်တောင် Browser က UI တစ်ခုလုံးကို ပြန်ဆွဲ (Re-render) ဖို့ ကြိုးစားတတ်ပါတယ်။
ဒါက Website ကို လေးစေပါတယ်။


၂။ သူက ဘယ်လို အလုပ်လုပ်သလဲ? (The Process)

React က အဆင့် ၃ ဆင့်နဲ့ အလုပ်လုပ်ပါတယ်-

Render: Data ပြောင်းလဲသွားတဲ့အခါ React က Virtual DOM အသစ်တစ်ခုကို အရင်ဆောက်ပါတယ်။

Diffing: အရင်ရှိနေတဲ့ Virtual DOM အဟောင်းနဲ့ အသစ်ကို နှိုင်းယှဉ်ပါတယ်။ 
ဘယ်နေရာတွေ ပြောင်းသွားသလဲဆိုတာကို ရှာတာပါ။

Reconciliation (Update): ပြောင်းလဲသွားတဲ့ အစိတ်အပိုင်း (နမူနာ: စာသားလေး တစ်ကြောင်းတည်း) ကိုပဲ 
Real DOM မှာ သွားပြင်ပါတယ်။ တစ်ခုလုံးကို ပြန်မဆွဲတော့ပါဘူး။

၃။ အဓိက အားသာချက်များ

Speed: Real DOM ကို တိုက်ရိုက်မထိဘဲ Memory ပေါ်မှာတင် တွက်ချက်တာမို့ ပိုမြန်ပါတယ်။

Efficiency: တကယ်ပြောင်းလဲသွားတဲ့ နေရာလေးတွေကိုပဲ Update လုပ်ပေးပါတယ်။

Declarative: Programmer အနေနဲ့ ဘယ်နေရာကို ပြင်ရမယ်ဆိုတာ လိုက်ပြောနေစရာမလိုဘဲ 
Data ပြောင်းလိုက်တာနဲ့ UI က အလိုအလျောက် လိုက်ပြောင်းပေးပါတယ်။

ဥပမာ ပေးရရင်: စာအုပ်တစ်အုပ်လုံးမှာ စာလုံးတစ်လုံး မှားနေလို့ တစ်အုပ်လုံးကို အသစ်ပြန်ရိုက်တာက Real DOM ပါ။ 
စာလုံးမှားတဲ့ စာမျက်နှာကိုပဲ ရှာပြီး ခဲဖျက်နဲ့ဖျက်၊ အမှန်ပြန်ရေးတာက Virtual DOM ရဲ့ အလုပ်လုပ်ပုံမျိုး ဖြစ်ပါတယ်။
```
---

# State
```


React မှာ State ဆိုတာ Component တစ်ခုရဲ့ ကိုယ်ပိုင်အချက်အလက် (Internal Data) ကို 
သိမ်းဆည်းထားတဲ့ နေရာတစ်ခု ဖြစ်ပါတယ်။

သူ့ကို အရိုးရှင်းဆုံး ရှင်းပြရရင် Component တစ်ခုရဲ့ "မှတ်ဉာဏ်" (Memory) လို့ ခေါ်နိုင်ပါတယ်။

 ၁။ State ရဲ့ အဓိက အလုပ်လုပ်ပုံ
State ထဲမှာ ရှိတဲ့ Data တစ်ခုခု ပြောင်းလဲသွားတာနဲ့ React က အဲဒီ Component ကို Re-render လုပ်ပေးပါတယ်။ 
ဆိုလိုတာက Screen ပေါ်မှာ UI ကို အလိုအလျောက် Update လုပ်ပေးတာပါ။

 ၂။ Functional Component မှာ State ကို ဘယ်လိုသုံးမလဲ?
Functional Component မှာ State သုံးဖို့အတွက် useState ဆိုတဲ့ Hook ကို သုံးရပါတယ်။

const [stateName, setStateFunction] = useState(initialValue);


၃။ ဥပမာ - Counter (ဂဏန်းတိုးခြင်း)

ဒီဥပမာမှာ count ဆိုတဲ့ State က လက်ရှိဂဏန်းကို မှတ်ထားမှာဖြစ်ပြီး၊ setCount က အဲဒီဂဏန်းကို ပြောင်းလဲပေးမှာပါ။

```js
import React, { useState } from 'react';

function Counter() {
  // count ဆိုတဲ့ state ကို 0 နဲ့ စတင်သတ်မှတ်တယ်
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>လက်ရှိအရေအတွက်: {count}</p>
      
      {/* ခလုတ်နှိပ်လိုက်ရင် setCount ကနေတစ်ဆင့် state ကို ပြောင်းတယ် */}
      <button onClick={() => setCount(count + 1)}>
        တိုးရန်
      </button>
    </div>
  );
}
```

* State က Component ရဲ့ အတွင်းပိုင်း data ဖြစ်တယ်။

* State ပြောင်းရင် UI က Auto update ဖြစ်တယ်။

* State ကို တိုက်ရိုက်မပြင်ရဘူး (count = 5 လို့ မရေးရဘူး)၊ အမြဲတမ်း set function (setCount(5)) ကိုပဲ သုံးရမယ်။



---

# EventHandling

**Event Handling** ဆိုတာ React component ထဲမှာ **user actions** (click, input change, submit, key press…) တွေကို ဖမ်းယူပြီး logic run ပေးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။ React ရဲ့ event system ကို **Synthetic Events** လို့ ခေါ်ပါတယ်။

---

## 1. React Events ဆိုတာဘာလဲ?

React မှာ HTML DOM events တွေနဲ့ ဆင်တူပေမယ့် —

* Event name တွေကို **camelCase** သုံးရပါတယ် (`onClick`, `onChange`)
* Event handler ကို **function reference** အနေနဲ့ပဲ ပေးရပါတယ်

---

## 2. Basic Event Handling

### Button Click

```jsx
function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

❌ မလုပ်ရတဲ့အရာ

```jsx
<button onClick={handleClick()}>Click</button> // ❌ immediately run
```

---

## 3. Inline Event Handlers

```jsx
<button onClick={() => console.log("Clicked")}>Click</button>
```

➡️ Simple logic အတွက် OK
➡️ Performance-sensitive နေရာတွေမှာ `useCallback` သုံးသင့်

---

## 4. Event Object (SyntheticEvent)

```jsx
function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
}
```

* `e` = SyntheticEvent
* Cross-browser compatible

---

## 5. Handling Forms (onSubmit)

```jsx
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

➡️ `preventDefault()` မခေါ်ရင် page refresh ဖြစ်မယ် ❌

---

## 6. Passing Arguments to Event Handlers

```jsx
<button onClick={() => handleDelete(id)}>Delete</button>
```

```js
function handleDelete(id) {
  console.log(id);
}
```

---

## 7. Event Handling with State

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

## 8. Keyboard Events

```jsx
<input
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
    }
  }}
/>
```

Common keyboard events:

* `onKeyDown`
* `onKeyUp`
* `onKeyPress`

---

## 9. Mouse Events

* `onClick`
* `onDoubleClick`
* `onMouseEnter`
* `onMouseLeave`

```jsx
<div onMouseEnter={() => console.log("Hover")}>Hover me</div>
```

---

## 10. Event Bubbling & stopPropagation

React events bubble up by default.

```jsx
function App() {
  return (
    <div onClick={() => console.log("Parent")}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("Child");
        }}
      >
        Click
      </button>
    </div>
  );
}
```

---

## 11. Event Handling Best Practices

✅ Use handler functions
✅ Keep logic small
✅ Use `useCallback` for heavy components

❌ Inline heavy logic
❌ Calling function instead of passing reference

---



* React events = camelCase
* Function reference only
* `e` = SyntheticEvent
* `preventDefault()` & `stopPropagation()` အရေးကြီး

---
# ConditionalRendering 

**Conditional Rendering** ဆိုတာ React component ထဲမှာ **condition (အခြေအနေ)** အပေါ်မူတည်ပြီး UI ကို ပြ/မပြ ဆုံးဖြတ်ပေးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။

React မှာ `if`, `&&`, `?: (ternary)`၊ function return စတဲ့ JavaScript နည်းလမ်းတွေကို သုံးပြီး render ကို ထိန်းချုပ်နိုင်ပါတယ်။

---

## 1. Why Conditional Rendering?

UI တစ်ခုမှာ အောက်ပါအခြေအနေတွေ အမြဲကြုံရပါတယ်။

* Login ဖြစ်/မဖြစ်
* Data loading ဖြစ်/မဖြစ်
* Error ရှိ/မရှိ
* Role (admin / user) အလိုက် UI မတူခြင်း

➡️ ဒီလိုအခြေအနေတွေကို handle လုပ်ဖို့ Conditional Rendering ကို သုံးပါတယ် ✅


---


## 2. Using if / else (Outside JSX)

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in</h1>;
}
```

➡️ Logic ရှင်းပြီး ဖတ်ရလွယ်
➡️ Complex conditions အတွက် သင့်တော်

---

## 3. Using Ternary Operator (?:)

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
  );
}
```

➡️ JSX ထဲမှာ တိုတိုနဲ့ ရေးချင်တဲ့အခါ သုံး

⚠️ Nested ternary များရင် ဖတ်ရခက် ❌

---

## 4. Using Logical AND (&&)

Condition true ဖြစ်ရင်ပဲ render လုပ်ချင်တဲ့အခါ သုံးပါတယ်။

```jsx
function Notification({ hasMessage }) {
  return <>{hasMessage && <p>You have a new message</p>}</n}
```

⚠️ `0` value နဲ့ သတိထား

```jsx
{count && <p>{count}</p>} // count = 0 → render မဖြစ် ❌
```

---

## 5. Using Logical OR (||)

Default value ပြချင်တဲ့အခါ သုံးပါတယ်။

```jsx
<p>{username || "Guest"}</p>
```

⚠️ `""` , `0` တွေ false အဖြစ်သတ်မှတ်ခံရနိုင်

---

## 6. Conditional Rendering with State

```jsx
function Loader() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? <p>Loading...</p> : <p>Data Loaded</p>}
    </>
  );
}
```

---

## 7. Conditional Rendering with Functions

```jsx
function Status({ status }) {
  const renderStatus = () => {
    if (status === "success") return <p>✅ Success</p>;
    if (status === "error") return <p>❌ Error</p>;
    return <p>⏳ Loading</p>;
  };

  return <div>{renderStatus()}</div>;
}
```

➡️ Condition များတဲ့အခါ ဖတ်ရလွယ်

---

## 8. Conditional Rendering Lists

```jsx
function List({ items }) {
  if (items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

---

## 9. Hiding vs Unmounting Components

```jsx
{show && <Modal />}
```

➡️ `show = false` ဖြစ်ရင် component **unmount** ဖြစ်

CSS hide vs conditional rendering

* `display: none` → component still exists
* Conditional rendering → component removed

---

## 10. Common Mistakes

❌ Nested ternary များလွန်းခြင်း

❌ `&&` နဲ့ falsy values မစဉ်းစားခြင်း

❌ JSX ထဲမှာ if/else တိုက်ရိုက်သုံးခြင်း

---


* Conditional Rendering = UI control by condition
* `if` → complex logic
* `?:` → simple conditions
* `&&` → show/hide
* Code readability ကို အမြဲ ဦးစားပေး

---


# Lists&Keys 

**Lists & Keys** ဆိုတာ React မှာ **array data** ကို UI list အနေနဲ့ render လုပ်တဲ့အခါ မဖြစ်မနေ သိထားရမယ့် concept ဖြစ်ပါတယ်။ အထူးသဖြင့် performance နဲ့ bug မဖြစ်အောင် `key` ကို မှန်ကန်စွာ သုံးဖို့ အရေးကြီးပါတယ်။

---

## 1. Why Lists & Keys?

Real-world React apps တွေမှာ —

* Todo list
* Users list
* Products list
* Messages list

လို data တွေကို array အနေနဲ့ ရလာပြီး UI ထဲ render လုပ်ရပါတယ်။

➡️ ဒီအတွက် `map()` + `key` ကို သုံးပါတယ် ✅

---

## 2. Rendering Lists with map()

```jsx
function UserList() {
  const users = ["Aung Aung", "Su Su", "Kyaw Kyaw"];

  return (
    <ul>
      {users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  );
}
```

⚠️ ဒီ code မှာ **key မပါတာကြောင့် warning ထွက်မယ်** ❌

---

## 3. Using Keys (Required)

```jsx
function UserList() {
  const users = ["Aung Aung", "Su Su", "Kyaw Kyaw"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

➡️ Warning မရှိတော့ပါဘူး ✅

---

## 4. What is a Key?

`key` ဆိုတာ React ကို —

> “ဒီ list item က ဘယ် item ဖြစ်တယ်”

လို့ သိအောင် ပြောပေးတဲ့ **unique identifier** ဖြစ်ပါတယ်။

React က re-render အချိန်မှာ —

* ဘာကို update လုပ်မလဲ
* ဘာကို remove လုပ်မလဲ
* ဘာကို add လုပ်မလဲ

ကို `key` အပေါ် မူတည်ပြီး ဆုံးဖြတ်ပါတယ်။

---

## 5. Best Key: Unique ID

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

✅ Database ID
✅ UUID

---

## 6. Using index as key (When OK / Not OK)

### ⚠️ Allowed (Rare cases)

```js
items.map((item, index) => <li key={index}>{item}</li>);
```

OK ဖြစ်တဲ့အခြေအနေများ

* List order မပြောင်း
* Item မ add / remove
* Static list

### ❌ Not Recommended

* Dynamic list
* Sort / filter
* Insert / delete

➡️ Bugs & UI issues ဖြစ်နိုင် ❌

---

## 7. Rendering Complex Lists

```jsx
function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} MMK</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 8. Conditional Rendering with Lists

```jsx
{items.length === 0 ? (
  <p>No items found</p>
) : (
  items.map(item => <Item key={item.id} {...item} />)
)}
```

---

## 9. Keys Are Not Props

```jsx
<Item key={item.id} name={item.name} />
```

❗ `key` ကို component ထဲမှာ access မလုပ်နိုင်ပါ

```js
function Item(props) {
  console.log(props.key); // ❌ undefined
}
```

➡️ ID ကို prop အနေနဲ့ သီးသန့် ပို့ရပါမယ်

---

## 10. Common Mistakes

❌ key မပေးခြင်း

❌ index ကို dynamic list မှာ သုံးခြင်း

❌ non-unique key သုံးခြင်း

---



* Lists = `map()`
* Keys = unique identifier
* Stable keys = better performance
* Index key ကို သတိထား

---
# DataFlow 

React မှာ **Data Flow** ဆိုတာ  

 **data (state / props) တွေက Component တွေအကြား ဘယ်လို လမ်းကြောင်းနဲ့ သွားလာသလဲ**  
ဆိုတာကို ပြောတာပါ။

React ရဲ့ အဓိက အယူအဆတစ်ခုက  
> **One-way (Unidirectional) Data Flow** ဖြစ်ပါတယ်။

---

## 1. One-Way Data Flow ဆိုတာဘာလဲ?

React မှာ data တွေဟာ  
**Parent Component → Child Component** ကိုသာ ဆင်းသွားနိုင်ပါတယ်။

❌ Child က Parent ကို တိုက်ရိုက် data ပြန်မပို့နိုင်ပါ  
✅ Callback function ကို အသုံးပြုပြီး ပြန်ပို့ရပါတယ်

---

## 2. Parent → Child (Props)

Parent Component က data ကို  
**props** အနေနဲ့ Child Component ဆီ ပို့ပါတယ်။

### Example

```js
function Parent() {
  const name = "Aung Aung";

  return <Child name={name} />;
}

function Child(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
* Props က read-only ဖြစ်ပါတယ်
* Child component မှာ props ကို ပြင်လို့မရပါ

## 3. Child → Parent (Callback Functions)

React မှာ data flow က one-way ဖြစ်လို့
Child က Parent ကို data ပြန်ပို့ချင်ရင်
function ကို props အနေနဲ့ ပို့ ရပါတယ်။


```js
function Parent() {
  const handleMessage = (msg) => {
    console.log(msg);
  };

  return <Child sendMessage={handleMessage} />;
}

function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello from Child")}>
      Send
    </button>
  );
}
```
* ဒါကို Lifting State Up လို့ ခေါ်ပါတယ်

## 4. Data Flow with useContext

Props ကို အဆင့်ဆင့် မပို့ချင်ရင်
Context API ကို သုံးနိုင်ပါတယ်။

```js
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  return <Content />;
}

function Content() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
 ```


## 5. Data Flow with State Management Libraries

App ကြီးလာတဲ့အခါ
props + context နဲ့ မလွယ်တော့ပါဘူး။

ဒီအချိန်မှာ-

Redux

Zustand

Recoil

Jotai

လို library တွေ သုံးပါတယ်။

```
Store
 ↓
Components
 ↑ (actions)
 ```

## Common Mistakes ⚠️

❌ Props ကို child မှာ modify လုပ်ခြင်း
❌ State ကို wrong component မှာထားခြင်း
❌ Unnecessary prop drilling
❌ Global state ကို အလွန်အကျွံ သုံးခြင်း


React မှာ One-way Data Flow ကို သုံးတယ်
Data → props နဲ့ အောက်ဆင်း
Events → callback နဲ့ အပေါ်တက်
Shared data → Lifting State Up
App ကြီးရင် → Context / State Management
---


## Hooks

# useState  

`useState` ဆိုတာ React Hooks ထဲက **အခြေခံအကျဆုံးနဲ့ အရေးကြီးဆုံး Hook** ဖြစ်ပြီး component ထဲမှာ **state (data)** ကို သိမ်းဆည်းပြီး update လုပ်ဖို့ အသုံးပြုပါတယ်။ Functional Components တွေမှာ state ကို သုံးနိုင်အောင် React 16.8 မှ စတင်မိတ်ဆက်ခဲ့ပါတယ်။

---

## 1. Why do we need useState?

JavaScript variable တစ်ခုကို ပြောင်းလိုက်ရင် UI မပြောင်းပါဘူး ❌

React မှာ UI ကို ပြောင်းချင်ရင် **state change** လုပ်ရပါတယ်။

```js
let count = 0;
count = count + 1; // UI မပြောင်း
```

ဒီပြဿနာကို `useState` နဲ့ ဖြေရှင်းပါတယ် ✅

---

## 2. Basic Syntax

```js
import { useState } from "react";

const [state, setState] = useState(initialValue);
```

* `state` → လက်ရှိတန်ဖိုး
* `setState` → state ကို update လုပ်တဲ့ function
* `initialValue` → စတင်တန်ဖိုး

---

## 3. Simple Counter Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

➡️ `setCount` ကို ခေါ်လိုက်တာနဲ့ component က **re-render** ဖြစ်ပြီး UI ပြောင်းပါတယ်။

---

## 4. Updating State Correctly

### ❌ Wrong Way

```js
setCount(count + 1);
setCount(count + 1);
```

### ✅ Correct Way (Functional Update)

```js
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

➡️ Previous state ကို အခြေခံပြီး update လုပ်တဲ့အခါ **functional form** ကို သုံးပါ။

---

## 5. useState with Objects

```jsx
const [user, setUser] = useState({
  name: "Aung Aung",
  age: 20,
});

setUser({
  ...user,
  age: 21,
});
```

⚠️ Object state ကို update လုပ်တဲ့အခါ **spread operator (`...`) မဖြစ်မနေ သုံးရပါမယ်**။

---

## 6. useState with Arrays

```jsx
const [todos, setTodos] = useState([]);

setTodos([...todos, "Learn React"]);
```

➡️ State ကို **mutate မလုပ်ဘဲ** new array ပြန်ဖန်တီးရပါတယ်။

---

## 7. Multiple useState Hooks

Component တစ်ခုထဲမှာ `useState` ကို အကြိမ်များစွာ သုံးနိုင်ပါတယ်။

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);
```

---

## 8. Common Mistakes

❌ Direct mutation

```js
user.age = 30;
setUser(user); // ❌
```

✅ Correct

```js
setUser({ ...user, age: 30 });
```

---

## 9. useState vs Props

| Feature  | useState  | Props        |
| -------- | --------- | ------------ |
| Mutable  | Yes       | No           |
| Owned by | Component | Parent       |
| Purpose  | UI state  | Data passing |

---


* `useState` က component ရဲ့ data ကို manage လုပ်ဖို့ သုံး
* State change → UI re-render
* Object / Array state update လုပ်ရင် spread operator သုံး
* Previous state ကို သုံးတဲ့အခါ functional update သုံး

---


# useEffect

`useEffect` ဆိုတာ React Hooks ထဲက **side effects** တွေကို handle လုပ်ဖို့အတွက် အသုံးပြုတဲ့ hook ဖြစ်ပါတယ်။ Data fetching, DOM interaction, subscriptions, timers စတာတွေကို component render ပြီးနောက် run ချင်တဲ့အခါ `useEffect` ကို သုံးပါတယ်။

---

## 1. Side Effect ဆိုတာဘာလဲ?

React component ရဲ့ **pure render logic (Component တစ်ခုဟာ သူ့ဆီကို ပေးလိုက်တဲ့ Inputs (Props, State, Context) အပေါ်မှာပဲ မူတည်ပြီး Output (JSX) ကို ထုတ်ပေးရမယ်ဆိုတဲ့ အယူအဆဖြစ်ပါတယ်။) မဟုတ်တဲ့ အလုပ်တွေ** ကို side effects လို့ ခေါ်ပါတယ်။

ဥပမာ –

* API call လုပ်ခြင်း
```js
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []); // [] ပါလို့ တစ်ကြိမ်ပဲ ခေါ်ပါမယ်
```
* document title ပြောင်းခြင်း
```js
   useEffect(() => {
  document.title = `နှိပ်လိုက်သည့်အကြိမ် - ${count}`;
}, [count]); // count ပြောင်းတိုင်း title လိုက်ပြောင်းပေးမယ်
```
* event listener တပ်ခြင်း

```js
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  
  window.addEventListener('resize', handleResize);

  // Cleanup: Component ပျောက်သွားရင် listener ကို ပြန်ဖြုတ်မယ်
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

* setTimeout / setInterval သုံးခြင်း
```js
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("၅ စက္ကန့် ပြည့်သွားပါပြီ");
  }, 5000);

  return () => clearTimeout(timer); // Cleanup
}, []);
```
---

## 2. Basic Syntax

```js
import { useEffect } from "react";

useEffect(() => {
  // side effect code
}, [dependencies]);
```

* Callback function → effect logic
* Dependency array → effect ကို ဘယ်အချိန် run မလဲ ဆုံးဖြတ်

---

## 3. useEffect Without Dependency Array

```js
useEffect(() => {
  console.log("Component rendered");
});
```

➡️ Component render **တိုင်း run** ဖြစ်ပါတယ် (re-render အားလုံး) ❌

---

## 4. useEffect with Empty Dependency Array

```js
useEffect(() => {
  console.log("Component mounted");
}, []);
```

➡️ Component **mount ဖြစ်တဲ့အချိန်တစ်ခါပဲ run** ဖြစ်ပါတယ် ✅

API call တွေအတွက် အများဆုံး သုံးပါတယ်။

---

## 5. useEffect with Dependencies

```jsx
useEffect(() => {
  console.log("Count changed", count);
}, [count]);
```

➡️ `count` ပြောင်းတဲ့အချိန်တိုင်း effect run ဖြစ်ပါတယ်။

---
```
ပုံစံ,                                                    အလုပ်လုပ်ပုံ
--------------------------------------------------------------------------------------------------------------------
Array မပါလျှင် useEffect(() => {...}),                    Render ဖြစ်တိုင်း (ခဏခဏ) အလုပ်လုပ်မယ်။                       

"Array အလွတ် useEffect(() => {...}, [])",              Component စတင်ပေါ်လာချိန် (Mount) တစ်ကြိမ်တည်း ပဲ အလုပ်လုပ်မယ်။  

"Variable ပါလျှင် useEffect(() => {...}, [count])",       Component ပေါ်ချိန်နဲ့ count တန်ဖိုး ပြောင်းလဲတိုင်း အလုပ်လုပ်မယ်။
```

## 6. Data Fetching Example

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.example.com/users");
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 7. Cleanup Function

Effect ထဲမှာ return ပြန်ပေးတဲ့ function ကို **cleanup function** လို့ ခေါ်ပါတယ်။

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

➡️ Component unmount ဖြစ်တဲ့အခါ cleanup run ဖြစ်ပါတယ် ✅

---

## 8. useEffect vs useState

| Feature  | useEffect                  | useState         |
| -------- | -------------------------- | ---------------- |
| Purpose  | Side effects               | State management |
| Triggers | Render / dependency change | setState         |
| Returns  | Optional cleanup           | State + setter   |

---

## 9. Common Mistakes

❌ Dependency မထည့်ခြင်း

```js
useEffect(() => {
  setCount(count + 1);
}, []); // ❌ stale value
```

✅ Correct

```js
useEffect(() => {
  setCount(prev => prev + 1);
}, []);
```

---

## 10. When NOT to use useEffect

* Simple derived state
* Props → UI mapping only

React 18 မှာ unnecessary effects တွေကို ရှောင်သင့်ပါတယ်။

---


# useContext

`useContext` ဆိုတာ React Hooks ထဲက **prop drilling ကိုရှောင်ပြီး data ကို global အနေနဲ့ share လုပ်ဖို့** အသုံးပြုတဲ့ hook ဖြစ်ပါတယ်။ Theme, Auth user, language, settings စတဲ့ data တွေကို component များစွာမှာ သုံးရတဲ့အခါ အရမ်းအသုံးဝင်ပါတယ်။

---

## 1. Problem: Prop Drilling

Component တစ်ခုက data ကို အောက်ခြေ component တွေထိ ဆက်တိုက် ပို့ရတဲ့အခါ **prop drilling** ဖြစ်ပါတယ်။

```jsx
<App>
  <Layout user={user}>
    <Header user={user} />
  </Layout>
</App>
```

➡️ Component များလာတာနဲ့ code ရှုပ်လာပါတယ် ❌

---

## 2. Solution: Context API

React Context က data ကို **tree တစ်ခုလုံးမှာ share** လုပ်နိုင်အောင် ကူညီပေးပါတယ်။

* Provider → data ပေး
* Consumer / useContext → data ယူ

---

## 3. Creating Context

```js
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

## 4. Providing Context Value

```jsx
import { ThemeContext } from "./ThemeContext";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Layout />
    </ThemeContext.Provider>
  );
}
```

➡️ Provider ထဲက children အားလုံးက value ကို access လုပ်နိုင်ပါတယ် ✅

---

## 5. Consuming Context with useContext

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const theme = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}
```

---

## 6. useContext with Object Value

```jsx
<ThemeContext.Provider value={{ theme: "dark", toggleTheme }}>
```

```js
const { theme, toggleTheme } = useContext(ThemeContext);
```

➡️ Real projects မှာ object value ကို အများဆုံး သုံးပါတယ်။

---

## 7. Example: Auth Context

```jsx
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
```

Usage:

```js
const { user, setUser } = useContext(AuthContext);
```

---

## 8. useContext vs Props

| Feature       | useContext    | Props          |
| ------------- | ------------- | -------------- |
| Prop drilling | ❌ Avoided     | ❌ Exists       |
| Scope         | Global (tree) | Parent → child |
| Best for      | Theme, Auth   | Component data |

---

## 9. Common Mistakes

❌ Overusing Context

* Frequently changing data (animations, form inputs)

❌ Using Context instead of state management blindly

---

## 10. When to use useContext

✅ Theme (dark / light)
✅ Auth user info
✅ Language (i18n)
✅ App-wide settings

❌ Highly dynamic data

---


* `useContext` = global state sharing
* Solves prop drilling
* Use Provider + useContext
* Perfect for app-wide data
* Not a replacement for all state management

---



# useRef

`useRef` ဆိုတာ React Hooks ထဲက **DOM elements ကို တိုက်ရိုက် access လုပ်ဖို့** နဲ့ **re-render မဖြစ်ဘဲ value ကို သိမ်းထားဖို့** အသုံးပြုတဲ့ hook ဖြစ်ပါတယ်။ Focus control, timers, previous values စတာတွေမှာ အရမ်းအသုံးဝင်ပါတယ်။

---

## 1. Why useRef?

`useState` နဲ့ value ပြောင်းတိုင်း component က re-render ဖြစ်ပါတယ်။

တစ်ချို့အခြေအနေတွေမှာ —

* UI မပြောင်းချင်
* value ကို သိမ်းထားချင်

ဆိုရင် `useRef` ကို သုံးပါတယ်။

---

## 2. Basic Syntax

```js
import { useRef } from "react";

const ref = useRef(initialValue);
```

* `ref.current` ထဲမှာ value သိမ်းပါတယ်
* `ref.current` ပြောင်းလဲရင် **re-render မဖြစ်ပါဘူး**

---

## 3. Accessing DOM Elements

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```

➡️ DOM ကို **querySelector မသုံးဘဲ** safe access လုပ်နိုင်ပါတယ် ✅

---

## 4. useRef vs useState

| Feature          | useRef              | useState |
| ---------------- | ------------------- | -------- |
| Causes re-render | ❌ No                | ✅ Yes    |
| Stores value     | ✅ Yes               | ✅ Yes    |
| UI update        | ❌ No                | ✅ Yes    |
| Best for         | DOM, mutable values | UI state |

---

## 5. Storing Mutable Values (Timer Example)

```js
const timerRef = useRef(null);

useEffect(() => {
  timerRef.current = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timerRef.current);
}, []);
```

➡️ Timer ID ကို state မသုံးဘဲ သိမ်းထားနိုင်ပါတယ် 👍

---

## 6. Keeping Previous Value

```js
function Counter({ count }) {
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <p>
      Now: {count}, Before: {prevCount.current}
    </p>
  );
}
```

➡️ Previous props / state ကို သိမ်းထားနိုင်ပါတယ် ✅

---

## 7. Common Mistakes

❌ UI update အတွက် useRef သုံးခြင်း

```js
ref.current = ref.current + 1; // UI မပြောင်း
```

✅ UI ပြောင်းချင်ရင် `useState` သုံးပါ

---

## 8. When to use useRef

✅ DOM focus / scroll
✅ Timers (setInterval / setTimeout)
✅ External libraries
✅ Previous value storage

❌ UI rendering logic

---


* `useRef` = mutable value storage without re-render
* `.current` ထဲမှာ value သိမ်း
* DOM access အတွက် perfect
* UI state အတွက် မသုံး

---
# useMemo

`useMemo` ဆိုတာ React Hooks ထဲက **expensive calculation တွေကို memoize (cache) လုပ်ပြီး performance optimize** ဖို့ အသုံးပြုတဲ့ hook ဖြစ်ပါတယ်။ Re-render ဖြစ်တိုင်း calculation ပြန်မလုပ်ဘဲ dependency ပြောင်းမှသာ ပြန်တွက်စေပါတယ်။

---

## 1. Why useMemo?

Component re-render ဖြစ်တိုင်း function / calculation တွေ ပြန် run ဖြစ်ရင် —

* Performance ကျ
* UI lag ဖြစ်

အထူးသဖြင့် **large arrays, heavy calculations** တွေမှာ `useMemo` ကို သုံးသင့်ပါတယ်။

---

## 2. Basic Syntax


```js
import { useMemo } from "react";

const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

* First argument → calculation function
* Second argument → dependency array


---

## 3. Simple Example (Without useMemo)

```jsx
function Sum({ numbers }) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return <p>Total: {total}</p>;
}
```

➡️ Parent re-render ဖြစ်တိုင်း `reduce` ပြန် run ဖြစ်ပါတယ် ❌

---

## 4. Optimized with useMemo

```jsx
import { useMemo } from "react";

function Sum({ numbers }) {
  const total = useMemo(() => {
    return numbers.reduce((sum, n) => sum + n, 0);
  }, [numbers]);

  return <p>Total: {total}</p>;
}
```

➡️ `numbers` မပြောင်းရင် calculation **cache ထဲက value ကိုပဲ သုံးပါတယ်** ✅

---

## 5. useMemo with Filtering (Common React Case)

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

➡️ Large list filtering မှာ performance ကောင်းပါတယ် 👍

---

## 6. useMemo vs Normal Variable

| Feature                   | Normal Variable | useMemo |
| ------------------------- | --------------- | ------- |
| Recalculated on re-render | ✅ Yes           | ❌ No    |
| Cached value              | ❌ No            | ✅ Yes   |
| Performance optimized     | ❌               | ✅       |

---

## 7. useMemo vs useCallback

| Feature  | useMemo           | useCallback    |
| -------- | ----------------- | -------------- |
| Returns  | Value             | Function       |
| Purpose  | Cache calculation | Cache function |
| Use case | Derived data      | Event handlers |

---

## 8. Common Mistakes

❌ Overusing useMemo

```js
const name = useMemo(() => "Aung Aung", []); // ❌ unnecessary
```

➡️ Cheap calculation တွေအတွက် မလိုအပ်ပါဘူး

---

## 9. When to use useMemo

✅ Expensive calculations
✅ Large lists (filter, sort, map)
✅ Derived data from props/state

❌ Simple values
❌ Premature optimization

---


* `useMemo` = memoize value
* Dependency မပြောင်းရင် calculation ပြန်မလုပ်
* Performance optimization အတွက် သုံး
* Overuse မလုပ်

---

✅ Best Practices

* Measure performance first
* Use only when needed
* Keep dependency array accurate
---


# useReducer

`useReducer` ဆိုတာ React Hooks ထဲက **complex state logic** (state များများ၊ update rule ရှုပ်တဲ့အချိန်) ကို စနစ်တကျ ကိုင်တွယ်ဖို့ အသုံးပြုတဲ့ hook ဖြစ်ပါတယ်။ Redux လို concept နဲ့ ဆင်တူပေမယ့် React အတွင်းမှာပဲ သုံးနိုင်ပါတယ်။

---

## 1. Why useReducer?

`useState` က simple state တွေအတွက် အရမ်းကောင်းပေမယ့် —

* State fields များလာရင်
* Update logic ရှုပ်လာရင်
* State change rules တိတိကျကျ ထိန်းချင်ရင်

➡️ `useReducer` က ပိုသင့်တော်ပါတယ် ✅

---

## 2. Basic Concept

`useReducer` မှာ အဓိက အစိတ်အပိုင်း ၃ ခုရှိပါတယ်။

1. **State** – current data
2. **Action** – ဘာလုပ်မလဲဆိုတဲ့ instruction
3. **Reducer** – action အပေါ်မူတည်ပြီး state အသစ်ကို return ပြန်ပေးတဲ့ function

---

## 3. Basic Syntax

```js
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

---

## 4. How it works (Step by Step)

1. User clicks button
2. `dispatch({ type: "increment" })` ကို ခေါ်
3. React က reducer ကို `(state, action)` နဲ့ run
4. Reducer က state အသစ် return
5. Component re-render

---

## 5. Action Object Pattern

Action တွေကို object အနေနဲ့ သုံးတာက best practice ဖြစ်ပါတယ်။

```js
{ type: "add", payload: 5 }
```

Reducer:

```js
case "add":
  return { count: state.count + action.payload };
```

---

## 6. useReducer vs useState

| Feature             | useState | useReducer |
| ------------------- | -------- | ---------- |
| Simple state        | ✅        | ❌ Overkill |
| Complex logic       | ❌        | ✅          |
| Multiple fields     | ❌        | ✅          |
| Predictable updates | ❌        | ✅          |

---

## 7. useReducer with Multiple State Fields

```js
const initialState = {
  count: 0,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, loading: true };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "stop":
      return { ...state, loading: false };
    default:
      return state;
  }
}
```

---

## 8. useReducer + useContext (Global State)

```js
const StateContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Child />
    </StateContext.Provider>
  );
}
```

➡️ Redux မသုံးပဲ Global State တည်ဆောက်နိုင်ပါတယ် ✅

---

## 9. Common Mistakes

❌ Reducer ထဲမှာ state ကို mutate လုပ်ခြင်း

```js
state.count++; // ❌
```

✅ Always return new state

```js
return { ...state, count: state.count + 1 };
```

---

## 10. When to use useReducer


✅ Form state
✅ Complex UI logic
✅ Multiple related states

❌ Simple toggle state
❌ One-line updates

---
* `useReducer` = predictable state management
* Complex logic အတွက် best choice
* Redux concept ကို နားလည်အောင် ကူညီပေးတယ်
* `useContext` နဲ့ တွဲသုံးရင် powerful
---


# CustomHooks

**Custom Hook** ဆိုတာ React Hooks (`useState`, `useEffect`, etc.) တွေကို ပေါင်းပြီး **logic ကို reusable ဖြစ်အောင် ပြန်ရေးထားတဲ့ function** တစ်ခုဖြစ်ပါတယ်။

UI ကို မထိဘဲ **logic only** ကို share လုပ်ချင်တဲ့အခါ Custom Hooks ကို သုံးပါတယ်။

---

## 1. Why Custom Hooks?

React App ကြီးလာတာနဲ့အမျှ —

* Same logic ကို component များစွာမှာ copy/paste လုပ်နေရတာ ❌
* Code မရှင်းတော့ဘူး ❌

➡️ Custom Hooks သုံးရင်

* Logic reuse လုပ်နိုင်တယ် ✅
* Component သန့်ရှင်းတယ် ✅
* Maintain လုပ်ရလွယ်တယ် ✅

---

## 2. Custom Hook Rules

Custom Hook တစ်ခုက **Hook rules** ကို လိုက်နာရပါတယ်။

1. Function name က **`use` နဲ့ စရမယ်** (`useFetch`, `useCounter`)
2. React Hooks တွေကို **top-level မှာသာ ခေါ်ရမယ်**
3. Condition / loop ထဲမှာ hook မခေါ်ရ ❌

---

## 3. Basic Custom Hook Example

### useCounter

```js
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
```

### Usage

```js
function Counter() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
```

---

## 4. Custom Hook with useEffect

### useOnlineStatus

```js
import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return online;
}
```

### Usage

```js
function Status() {
  const online = useOnlineStatus();
  return <p>{online ? "🟢 Online" : "🔴 Offline"}</p>;
}
```

---

## 5. Custom Hook for Data Fetching

### useFetch

```js
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```

---

## 6. Custom Hooks vs Components

| Feature      | Custom Hook | Component |
| ------------ | ----------- | --------- |
| Return JSX   | ❌ No        | ✅ Yes     |
| Logic reuse  | ✅           | ❌         |
| UI rendering | ❌           | ✅         |

---

## 7. Sharing State vs Sharing Logic

⚠️ Custom Hook ကို component နှစ်ခုမှာ သုံးရင်

```js
const a = useCounter();
const b = useCounter();
```

➡️ **State မတူပါဘူး** (separate instances)

➡️ Logic only shared, state not shared

State shared ချင်ရင် → `useContext` / global store

---

## 8. Common Mistakes

❌ Custom Hook name မှာ `use` မပါတာ

❌ Hook ထဲက JSX return လုပ်ခြင်း

❌ Hook ကို condition ထဲမှာ ခေါ်ခြင်း

---

## 9. When to create Custom Hook

✅ Same logic reused 2+ components
✅ Complex hook logic
✅ Cleaner components

❌ One-time simple logic

---



* Custom Hook = reusable logic
* `use` prefix မဖြစ်မနေလို
* UI မပါရ
* Clean & scalable React apps အတွက် အရေးကြီး

---
