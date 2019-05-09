import React from "react"
import useForm from "react-hook-form"
import gql from "graphql-tag"
import { useMutation } from "react-apollo-hooks"

const INSERT_FORM_COMPRA = gql`
  mutation insertFormCompra(
    $nombre: String!
    $telefono: String!
    $mail: String!
    $direccion: String!
    $comuna: String!
    $comentarios: String!
  ) {
    insertFormCompra(
      nombre: $nombre
      telefono: $telefono
      mail: $mail
      direccion: $direccion
      comuna: $comuna
      comentarios: $comentarios
    ) {
      nombre
      telefono
      mail
      direccion
      comuna
      comentarios
    }
  }
`

export default function FormCompraProp() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    insertForm({
      variables: data,
      update: (proxy, mutationResult) => {
        /* your custom update logic */
        document.getElementById("form-compra").reset()
        alert(mutationResult)
      },
    })
  }
  const insertForm = useMutation(INSERT_FORM_COMPRA)

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="form-compra">
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
            htmlFor="Mail"
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
            htmlFor="direccion"
            className="is-family-code is-size-5 is-size-6-mobile"
          >
            Dirección:
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="direccion"
              ref={register({ required: true })}
            />
            {errors.direccion && "Por favor ingrese su direccion"}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="column is-paddingless is-12">
          <label
            htmlFor="comuna"
            className="is-family-code is-size-5 is-size-6-mobile"
          >
            Comuna:
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="comuna"
              ref={register({ required: true })}
            />
            {errors.comuna && "Por favor ingrese su comuna"}
          </div>
        </div>
      </div>
      <div className="field">
        <div className="column is-paddingless is-12">
          <label
            htmlFor="comentarios"
            className="is-family-code is-size-5 is-size-6-mobile"
          >
            Comentarios:
          </label>
          <div className="control">
            <textarea
              type="text"
              className="textarea"
              name="comentarios"
              rows="4"
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
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
