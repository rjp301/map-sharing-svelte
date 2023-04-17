migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6vwru02ru5g1lt6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bw2tyzwd",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6vwru02ru5g1lt6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bw2tyzwd",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
