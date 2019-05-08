import React from "react"
import useForm from "react-hook-form"
import gql from "graphql-tag"
import { useMutation } from "react-apollo-hooks"

const INSERT_FORM_CONTACTO = gql`
  mutation insertFormContacto(
    $nombre: String!
    $telefono: String!
    $mail: String!
    $mensaje: String!
    $categoria: String!
  ) {
    insertFormContacto(
      nombre: $nombre
      telefono: $telefono
      mail: $mail
      mensaje: $mensaje
      categoria: $categoria
    ) {
      nombre
      telefono
      mail
      mensaje
      categoria
    }
  }
`

export default function formContacto({ formulario }) {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    insertForm({
      variables: data,
    })
    document.getElementById("form-contacto").reset()
    alert("Mensaje Enviado")
  }
  const insertForm = useMutation(INSERT_FORM_CONTACTO)

  return (
    <div>
      <form
        id="form-contacto"
        onSubmit={handleSubmit(onSubmit)}
        style={{ paddingTop: `40px` }}
      >
        <input
          type="hidden"
          value={formulario}
          ref={register}
          name="categoria"
        />
        <div className="field">
          <div className="column  is-paddingless is-12">
            <label
              htmlFor="nombre"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Nombre:
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="nombre"
                ref={register({ required: true })}
              />
              {errors.nombre && "Por favor ingrese su nombre"}
            </div>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="column is-6-mobile is-paddingless">
            <label
              htmlFor="telefono"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Teléfono:
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="telefono"
                ref={register({ required: true })}
              />
              {errors.telefono && "Por favor ingrese su telefono"}
            </div>
          </div>
          <div
            className="column is-1 is-hidden-mobile is-paddingless"
            style={{ width: `30px` }}
          />
          <div className="column is-6-mobile is-paddingless">
            <label
              htmlFor="mail"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Mail:
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="mail"
                ref={register({ required: true })}
              />
              {errors.mail && "Por favor ingrese su mail"}
            </div>
          </div>
        </div>
        <div className="field">
          <div className="column is-paddingless is-12">
            <label
              htmlFor="mensaje"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Mensaje:
            </label>
            <div className="control">
              <textarea
                type="text"
                className="textarea"
                name="mensaje"
                rows="6"
                ref={register}
              />
            </div>
          </div>
        </div>
        <div className="field" style={{ padding: `30px 0px 40px` }}>
          <div className="column is-paddingless is-12">
            <div className="control">
              <button
                type="submit"
                className="has-text-white is-fullwidth is-radiusless is-size-5 is-size-6-touch button is-black is-uppercase is-large"
              >
                enviar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
