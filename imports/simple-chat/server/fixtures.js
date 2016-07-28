import { Users } from './../lib/users/collection';
import { Messages } from './../lib/messages/collection';
import { Channels } from './../lib/channels/collection';
/*
Meteor.startup(() => {
    Users.remove({});
    Messages.remove({});
    Channels.remove({});

    const usersCount = 5;
    const users = [];
    const messagesCount = 15;

    Accounts.createUser({
        email: 'mys.sterowiec@gmail.com',
        password: 'admin123'
    });

    const mys = Users.findOne({
        'emails.address': 'mys.sterowiec@gmail.com'
    });

    Accounts.createUser({
        email: 'diabeuster@gmail.com',
        password: 'admin123'
    });

    const diabeu = Users.findOne({
        'emails.address': 'diabeuster@gmail.com'
    });

    Channels.insert({
        name: 'General',
        authorId: mys._id,
        users: [{
            id: diabeu._id,
            addedAt: new Date
        }]
    });

    for (let i = 0; i < usersCount; i++) {
        const fuser = Fake.user({
            fields: ['name', 'username', 'email']
        });

        Accounts.createUser({
            email: fuser.email,
            password: fuser.name
        });

        users.push(fuser.email);

        for (let j = 0; j < messagesCount; j++) {
            const text = Fake.sentence(15);
            const author = Users.findOne({
                'emails.address': users[i]
            });

            Messages.insert({
                text,
                author: {
                    id: author._id,
                    name: author.emails[0].address
                },
                recipient: {
                    id: mys._id,
                    name: mys.emails[0].address
                }
            });
        }
    }
});
*/
