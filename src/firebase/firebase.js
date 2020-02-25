import * as firebase from 'firebase';
import moment from 'moment';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // const convertArray = (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     });
// //     return expenses;
// // };

// // database.ref('expenses').on('value', (snapshot) => {
// //     console.log(convertArray(snapshot));
// // }, (e) => {
// //     console.log('We have an error', e);
// // });

// // setTimeout(() => {
// //     database.ref('expenses').push({
// //     description: 'Party',
// //     note: 'Here is my fourth expense',
// //     amount: 40000,
// //     createdAt: moment().format('MMM DD YYYY')
// //     });
// // }, 7000);

// // database.ref().set('expenses');

// // database.ref('expenses').push({
// //     description: 'DVD with a movie',
// //     note: 'Here is my first expense',
// //     amount: 1500,
// //     createdAt: moment().format('MMM DD YYYY')
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'My first note',
// //     body: 'This is my note'
// // }, {
// //     id: '456gh',
// //     title: 'Another note',
// //     body: 'This is my note'
// // }];

// // database.ref().set(notes);

// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with fetching ', e);
// // });

// // database.ref().on('value', (snapshot) => {
// //     console.log(`${snapshot.val().name} is a  ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
// // }, (e) => {
// //     console.log('Error with fetching ', e);
// // });

// // setTimeout(() => {
// //     database.ref().update({
// //         name: 'Mike'
// //     });
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off();
// // }, 7000);

// // database.ref('location').once('value')
// // .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// // }).catch((e) => {
// //     console.log('We\'ve got an error here ' + e);
// // });

// // database.ref().set({
// //     name: 'Volodymyr Zherebetskyi',
// //     age: 28,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: "Salt Lake City",
// //         country: "USA"
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch((e) => {
// //     console.log('This failed', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // let isSingleRef = database.ref('isSingle');

// // isSingleRef.remove().then(() => {
// //     console.log('remove succeeded');
// // }).catch((e) => {
// //     console.log('remove failed', e.message);
// // });
