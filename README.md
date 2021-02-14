## Reto +1

### What is this?

Hackathon project for minube social hack 2021

Platform to engage celebrities and commoners for a common cause. Celebrities offer first-hand experience and all benefits will go to NGOs.

### How to execute

#### Server

```
touch server/test.env
```

```
cd server && yarn && yarn watch
```

Listens on localhost:3001

#### Front

```
cd frontend && yarn && yarn dev
```

Listens on localhost:3000

#### Install stripe cli 

https://github.com/stripe/stripe-cli

```
source server/test.env && stripe listen --forward-to localhost:3001/webhook --api-key $STRIPE_API_KEY
``` 

