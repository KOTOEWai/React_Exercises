

## 📑 Table of Contents

  * [JavaScript Skills](#javascript-skills)
  * [Function Declarations vs Arrow Functions](#function-declarations-vs-arrow-functions)
  * [Template Literals](#template-literals)
  * [Short Conditionals](#Short-Conditionals)
  * [Three Array Methods](#Three-Array-Methods)
  * [Object Tricks in JavaScript ](#Object-Tricks-in-JavaScript )
  * [Promises&Async/Await](#Promises&Async/Await)
  * [Optional Chaining (?.)&Nullish Coalescing (??)](#Optional-Chaining-(?.)&Nullish-Coalescing-(??))
  * [ES Modules](#ES-Modules)
  
  * [What is React?](#what-is-react?)
  * [Component-based architecture](#Component-based-architecture)
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

#### ✅ အားသာချက်များ

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

✅ **အနှစ်ချုပ်**

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

## 📌 Final Summary (အနှစ်ချုပ်)

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

## Summary (အနှစ်ချုပ်)

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

## Summary (အနှစ်ချုပ်)

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

## Summary (အနှစ်ချုပ်)

* ES Modules = modern JavaScript module system
* `export` → code ကို အပြင်မှာ သုံးလို့ရအောင် ထုတ်ပေး
* `import` → အခြား file က code ကို ယူသုံး
* React Components → `export default`
* Utils / Hooks → `named export`
* Clean architecture အတွက် မဖြစ်မနေ သိထားရမယ်

---

# What is React?
```
React ဆိုတာ ကမ္ဘာပေါ်မှာ လူသုံးအများဆုံးနဲ့ နာမည်အကြီးဆုံး JavaScript Library တစ်ခုဖြစ်ပါတယ်။
သူ့ကို Facebook (Meta) က ၂၀၁၃ ခုနှစ်မှာ စတင်ထုတ်လုပ်ခဲ့တာဖြစ်ပြီး၊ Website တွေရဲ့ User Interface (UI) တွေကို အလွယ်တကူ တည်ဆောက်ဖို့အတွက် အသုံးပြုပါတယ်။

React ရဲ့ အဓိက သဘောတရားတွေကို အရိုးရှင်းဆုံး မြန်မာလို ရှင်းပြပေးပါမယ်။

၁။ Component-Based (အစိတ်အပိုင်းလေးများဖြင့် တည်ဆောက်ခြင်း)
React ရဲ့ အားသာချက်က Website တစ်ခုလုံးကို အစိတ်အပိုင်းလေးတွေ (Components) အဖြစ် ခွဲပစ်လိုက်တာပါ။

ဥပမာ- Website တစ်ခုမှာ Header တစ်ခု၊ Sidebar တစ်ခု၊ Footer တစ်ခု စသဖြင့် ရှိမယ်ဆိုရင် အဲဒါတွေကို သီးခြားစီ Component တစ်ခုချင်းစီအဖြစ် ရေးလို့ရပါတယ်။

ပြီးမှ အဲဒီ Component လေးတွေကို အရုပ်ဆက်သလို ပြန်တွဲလိုက်တာပါ။ အစိတ်အပိုင်းတစ်ခုကို တစ်ခါရေးထားပြီး နေရာတော်တော်များများမှာ ပြန်သုံးလို့ရတာ (Reusability) က React ရဲ့ အသက်ပါ။

၂။ Declarative (ဘာဖြစ်ချင်လဲဆိုတာပဲ ပြောဖို့လိုခြင်း)
ရိုးရိုး JavaScript နဲ့ဆိုရင် UI ပြောင်းလဲဖို့အတွက် "ဘာကိုနှိပ်ရင် ဘာဖြစ်ရမယ်" ဆိုတာကို အဆင့်ဆင့် ရေးရပါတယ်။ ဒါကို Imperative လို့ ခေါ်ပါတယ်။ React မှာတော့ "ငါ့ရဲ့ Website State က ဒီလိုဖြစ်နေရင် UI က ဒီလိုပုံစံ ပေါ်နေရမယ်" လို့ပဲ ပြောထားလိုက်ရုံပါပဲ။ အနောက်ကနေ လိုအပ်တဲ့ ပြောင်းလဲမှုတွေကို React က အလိုအလျောက် လုပ်ပေးသွားတာပါ။

၃။ Virtual DOM (အလုပ်လုပ်ပုံ မြန်ဆန်ခြင်း)
Website တစ်ခုမှာ တစ်ခုခု ပြောင်းလဲသွားတိုင်း Website တစ်ခုလုံးကို Refresh လုပ်နေရင် အရမ်းနှေးပါတယ်။ React က Virtual DOM ဆိုတဲ့ နည်းပညာကို သုံးပါတယ်။ သူက လက်ရှိ Website ရဲ့ ပုံတူပွားတစ်ခုကို Memory ထဲမှာ သိမ်းထားပြီး၊ တကယ်ပြောင်းလဲသွားတဲ့ အစိတ်အပိုင်းလေးကိုပဲ ရွေးပြီး Update လုပ်ပေးတာကြောင့် Website တွေက အရမ်းကို မြန်ဆန်နေတာဖြစ်ပါတယ်။
```

---

# Component-based architecture

```
Component-based architecture ဆိုတာ Website တစ်ခုလုံးကို စာမျက်နှာအကြီးကြီးတစ်ခုအနေနဲ့ မစဉ်းစားဘဲ သေးငယ်ပြီး သီးခြားစီရှိတဲ့ အစိတ်အပိုင်းလေးတွေ (Components) အဖြစ် ခွဲထုတ်ပြီး တည်ဆောက်တဲ့ နည်းလမ်းဖြစ်ပါတယ်။



Component-Based Architecture
React ရဲ့ အဓိက အခြေခံသဘောတရားမှာ Website တစ်ခုကို Lego တုံးလေးတွေလို အပိုင်းပိုင်းခွဲပြီး ပြန်လည် စုစည်းတည်ဆောက်ခြင်း ဖြစ်ပါတယ်။

1. Component ဆိုတာ ဘာလဲ?
Component ဆိုတာ UI ရဲ့ အစိတ်အပိုင်းတစ်ခုကို ကိုယ်စားပြုတဲ့ JavaScript Function တစ်ခု ဖြစ်ပါတယ်။ ၎င်းတွင် ကိုယ်ပိုင် Logic၊ Styles နှင့် Structure (JSX) များ ပါဝင်ပါတယ်။

Atomic Components: အသေးဆုံး အစိတ်အပိုင်းများ (ဥပမာ - Button, Input, Icon)

Molecule Components: အသေးလေးများ စုပေါင်းထားခြင်း (ဥပမာ - Search Bar = Input + Button)

Organism Components: အပိုင်းအစကြီးများ (ဥပမာ - Navbar, Footer, Sidebar)

2. အဓိက အားသာချက်များ (Benefits)
Reusability (ပြန်လည်အသုံးပြုနိုင်ခြင်း): Button တစ်ခုကို Component အဖြစ် တစ်ခါရေးထားလျှင် Website တစ်ခုလုံး၏ မည်သည့်နေရာတွင်မဆို ပြန်ခေါ်သုံးနိုင်ပါတယ်။

Predictability (ခန့်မှန်းရလွယ်ကူခြင်း): Component တစ်ခုချင်းစီက သီးခြားစီ အလုပ်လုပ်သောကြောင့် တစ်နေရာတွင် ပြင်လိုက်လျှင် အခြားမဆိုင်သော နေရာများတွင် Error တက်နိုင်ခြေ နည်းပါးသွားပါတယ်။

Maintainability (ထိန်းသိမ်းရလွယ်ကူခြင်း): Code များ ရှုပ်ထွေးမလာဘဲ လိုအပ်သည့် အစိတ်အပိုင်းကိုသာ သွားရောက်ပြင်ဆင်ရန် လွယ်ကူစေပါတယ်။

Separation of Concerns: Component တစ်ခုသည် ၎င်းနှင့်ဆိုင်သော အလုပ်တစ်ခုကိုသာ အာရုံစိုက် လုပ်ဆောင်ပါတယ်။

3. Data Flow (Prop Drilling)
Component-based architecture တွင် Data များသည် Parent (အပေါ်) မှ Child (အောက်) သို့ တစ်ဖက်သတ် စီးဆင်းပါတယ်။ ၎င်းကို Props ဟု ခေါ်ပါတယ်။

4. Practical Structure
React Project တစ်ခုတွင် Component များကို အောက်ပါအတိုင်း စုစည်းလေ့ရှိသည်-


src/
 ├── components/
 │    ├── Button.js
 │    ├── Card.js
 │    └── Navbar.js
 ├── App.js
 └── index.js
 

အနှစ်ချုပ် (Myanmar Language)
Component-based architecture ဆိုတာ Website ကို အပိုင်းအစလေးတွေ ခွဲထုတ်လိုက်တာပါ။ ဒါမှသာ code ရေးရတာ ပိုမြန်လာမယ်၊ တစ်ခါရေးထားတာကို နေရာတိုင်းမှာ ပြန်သုံးလို့ရမယ်၊ ပြီးတော့ error ရှာရတာလည်း ပိုလွယ်ကူစေမှာ ဖြစ်ပါတယ်။

```
# JSX

```

JSX ဆိုတာ JavaScript XML ရဲ့ အတိုကောက်ဖြစ်ပါတယ်။ ၎င်းဟာ JavaScript ဖိုင်ထဲမှာ HTML ပုံစံ Syntax တွေကို တိုက်ရိုက်ရေးသားနိုင်အောင် ပြုလုပ်ပေးတဲ့ Extension တစ်ခု ဖြစ်ပါတယ်။

React မှာ UI (User Interface) တွေကို တည်ဆောက်တဲ့အခါ JSX ကို မဖြစ်မနေ သုံးရပါတယ်။

JSX (JavaScript XML)JSX က UI structure ကို မြင်သာအောင် ကူညီပေးပါတယ်။ 
၎င်းဟာ Browser က တိုက်ရိုက်နားလည်တဲ့ code မဟုတ်ဘဲ Babel ကဲ့သို့သော Compiler များကနေတစ်ဆင့် ရိုးရိုး JavaScript (React.createElement) အဖြစ် ပြောင်းလဲပေးရပါတယ်။

1. JSX ၏ အခြေခံ စည်းမျဉ်းများ (Basic Rules)JSX ကို ရေးသားတဲ့အခါ အောက်ပါအချက်တွေကို လိုက်နာရပါမယ်

Single Parent Element: JSX ရဲ့ return ပြန်တဲ့နေရာမှာ အပြင်ဘက်ဆုံးက Element တစ်ခုတည်း (ဥပမာ- <div> သို့မဟုတ် Fragment <>) နဲ့ ပတ်ထားရပါမယ်။

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
JSX ဆိုတာ JavaScript ထဲမှာ HTML ရေးတာပါ။Logic တွေ သုံးချင်ရင် Curly Braces { } ထဲမှာ ရေးပါ။အပြင်ဘက်ဆုံးမှာ Element တစ်ခုတည်းနဲ့ အုပ်ထားဖို့ မမေ့ပါနဲ့။HTML အဟောင်းနဲ့ မတူဘဲ className နဲ့ camelCase တွေကို သတိထား သုံးပေးပါ။

---


