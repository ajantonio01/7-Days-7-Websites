const logPanel = document.querySelector('div');

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

class Customer {
    constructor(dbName) {
        this.dbName = dbName;
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. \
        Such and such feature will not be available.");
        }
    }


    /**
     * Remove all rows from the database
     * @memberof Customer
     */
    removeAllRows = () => {
        //Opens the database
        const request = indexedDB.open(this.dbName, 2);

        request.onerror = (event) => {
            console.log('removeAllRows - Database error: ', event.target.error.code,
                " - ", event.target.error.message);
        };

        request.onsuccess = (event) => {
            console.log('Deleting all customers...');
            const db = event.target.result;
            const txn = db.transaction('customers', 'readwrite');
            txn.onerror = (event) => {
                console.log('removeAllRows - Txn error: ', event.target.error.code,
                    " - ", event.target.error.message);
            };
            txn.oncomplete = (event) => {
                console.log('All rows removed!');
            };
            const objectStore = txn.objectStore('customers');
            const getAllKeysRequest = objectStore.getAllKeys();
            getAllKeysRequest.onsuccess = (event) => {
                getAllKeysRequest.result.forEach(key => {
                    objectStore.delete(key);
                });
            }
        }
    }

    /**
     * Populate the Customer database with an initial set of customer data
     * @param {[object]} customerData Data to add
     * @memberof Customer
     */
    initialLoad = (customerData) => {
        const request = indexedDB.open(this.dbName, 2);

        request.onerror = (event) => {
            console.log('initialLoad - Database error: ', event.target.error.code,
                " - ", event.target.error.message);
        };

        request.onupgradeneeded = (event) => {
            console.log('Populating customers...');
            const db = event.target.result;
            const objectStore = db.createObjectStore('customers', { keyPath: 'userid' });
            objectStore.onerror = (event) => {
                console.log('initialLoad - objectStore error: ', event.target.error.code,
                    " - ", event.target.error.message);
            };


            // Create an index to search customers by name and email
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });

            // Populate the database with the initial set of rows



            customerData.forEach(function (customer) {
                objectStore.put(customer);
            });

            db.close();
        };

        request.onsuccess = (event) => {
            let p = document.createElement('p');
            p.innerText = time + '  -  ' + 'Populating the database with data completed';
            logPanel.appendChild(p);
            document.body.appendChild(logPanel);
        }
    }
}

// Web page event handlers
const DBNAME = 'customer_db';



const queryDB = () => {

}

/**
 * Clear all customer data from the database
 */
const clearDB = () => {
    console.log('Delete all rows from the Customers database');
    let customer = new Customer(DBNAME);
    customer.removeAllRows();
}

/**
 * Add customer data to the database
 */


const loadDB = () => {

    // Customers to add to initially populate the database with
    let p = document.createElement('p');
    p.innerText = time + '  -  ' + 'Load the Customers database';
    logPanel.appendChild(p);
    document.body.appendChild(logPanel);

    const customerData = [
        { userid: '444', name: 'Bill', email: 'bill@company.com' },
        { userid: '555', name: 'Donna', email: 'donna@home.org' }
    ];

    let customer = new Customer(DBNAME);
    customer.initialLoad(customerData);

}