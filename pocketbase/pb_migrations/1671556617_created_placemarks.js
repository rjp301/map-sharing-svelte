migrate((db) => {
  const collection = new Collection({
    "id": "qo8sxdfrkkzz1cv",
    "created": "2022-12-20 17:16:57.470Z",
    "updated": "2022-12-20 17:16:57.470Z",
    "name": "placemarks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zo9vzcke",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uayqk1ct",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6j5cmcej",
        "name": "geometry",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "w7xhcmqv",
        "name": "complete",
        "type": "bool",
        "required": true,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qo8sxdfrkkzz1cv");

  return dao.deleteCollection(collection);
})
