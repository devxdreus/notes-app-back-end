const { nanoid } = require("nanoid");
const notes = require("./notes");

// store new note
const addNoteHandler = (request, h) => {
  // get request data
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  // tambahkan note
  notes.push(newNote);

  // cek apakah note berhasil ditambahkan
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: "fail",
    message: "Catatan gagal ditambahkan",
  });
  response.code(500);
  return response;
};

// get all notes
const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

// get single note
const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: "success",
      data: { note },
    };
  }

  return h
    .response({
      status: "fail",
      message: "Catatan tidak ditemukan",
    })
    .code(404);
};

// edit single note
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    return h
      .response({
        status: "success",
        message: "Catatan berhasil diperbarui",
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Gagal memperbarui catatan. Id tidak ditemukan",
    })
    .code(404);
};

// delete note
const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);

    return h
      .response({
        status: "success",
        message: "Catatan berhasil dihapus",
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Catatan gagal dihapus. Id tidak ditemukan",
    })
    .code(404);
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
