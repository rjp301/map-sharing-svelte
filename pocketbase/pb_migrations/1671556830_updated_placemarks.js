migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qo8sxdfrkkzz1cv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k0emgudw",
    "name": "map_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "6vwru02ru5g1lt6",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qo8sxdfrkkzz1cv")

  // remove
  collection.schema.removeField("k0emgudw")

  return dao.saveCollection(collection)
})
