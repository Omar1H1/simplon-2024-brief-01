
J'ai crée un "component" Offers.jsx et j'ai importer useState Hook 

```jsx
import { useState } from "react";
```
---

En suite J'ai déclaré le "state" avec [Array Destructuing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 

```jsx
const [toggle, setToggle] = useState(false);
```
---

Apres J'ai crée un JSX élément "Button" avec Onclick evénement pour modifié le "State" dynamiquement

``` jsx
<button onClick={() => setToggle(!toggle)} className="btn-toggle">

Voir les tarifs

</button>
```
---

Finalement j'ai utilité le "Logical AND (&&)"  opérateur afin d'afficher conditionnellement les tarifs :

```jsx
{toggle && montre qqchose};
```

Au départ toggle a la valuer "false" comme on a annoncé dans le "useState(false)", en cliquant le "Button" on peut changer le valeur entre false et true "afficher et non afficher" les tarifs.

---
un moyen pour amélioré mon code c'est de créer une function "handleClick" pour rendre notre fonction ré-utilisable dans d'autre composant de notre application et c'est l’avantage de utiliser react.   