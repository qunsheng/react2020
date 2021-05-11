var Cosmic = require('cosmicjs');

async function getUser (userSlug, bucket) {
    console.log("userSlug: ", userSlug)
    try {
      const userObject = await bucket.getObjects({
          query: {
              type: 'users',
              slug: userSlug
          },
          limit: 1,
          props: 'id,content,metadata'
      });
      return userObject.objects.map(aUser => {
          return aUser;
      }).pop();
    } catch (err) {
      console.log(err);
    }
}

async function editMetafield (bucket, id, metaObject) {
    try {
      const params = {
        id: id,
        key: metaObject.key,
        value: metaObject.value
      }
      return await bucket.editObjectMetafield(params);
    } catch (err) {
      console.log("error: ", err);
      return null;
    }
  
}  

async function process (cosmicConfig, userSlug) {
  const api = Cosmic();
  const bucket = api.bucket(cosmicConfig);

  const user = await getUser (userSlug, bucket);
  console.log("user: ", user);
  const metaObject = {key: 'title', value: 'New Title from test 3'};
  const result = await editMetafield (bucket, user.id, metaObject);
  console.log("result: ", result);

}

const cosmicImpl = (cosmicConfig, userSlug) => {
    console.log("cosmic impl cosmicConfig: ", cosmicConfig);
    process(cosmicConfig, userSlug);
}

module.exports = cosmicImpl;