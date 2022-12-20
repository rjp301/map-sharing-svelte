migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6vwru02ru5g1lt6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "md5sryym",
    "name": "user_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6vwru02ru5g1lt6")

  // remove
  collection.schema.removeField("md5sryym")

  return dao.saveCollection(collection)
})
