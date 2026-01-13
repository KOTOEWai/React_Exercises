

## 📑 Table of Contents

  * [JavaScript Skills](#javascript-skills)
  * [Function Declarations vs Arrow Functions](#function-declarations-vs-arrow-functions)
  * [Template Literals](#template-literals)
  * [Short Conditionals](#Short-Conditionals)
  * [Three Array Methods](#Three-Array-Methods)
  * [Object Tricks in JavaScript ](#Object-Tricks-in-JavaScript )
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


