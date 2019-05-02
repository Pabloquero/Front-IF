import React from "react"
import PropTypes from "prop-types"

import * as yup from "yup"
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik"

const validations = yup.object().shape({
  nombre: yup.string().required("Por favor ingrese su nombre"),
})

export default function FormCompraProp({ handleSubmit, initialValues }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm>
        <div className="field">
          <div className="column  is-paddingless is-12">
            <label
              htmlFor="nombre"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Nombre:
            </label>
            <div className="control">
              <Field type="text" className="input" name="nombre" />
              <ErrorMessage component="span" name="nombre" />
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
              <Field type="text" className="input" name="telefono" />
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
              <Field type="text" className="input" name="mail" />
            </div>
          </div>
        </div>
        <div className="field">
          <div className="column is-paddingless is-12">
            <label
              htmlFor="direccion"
              className="is-family-code is-size-5 is-size-6-mobile"
            >
              Dirección de propiedad:
            </label>
            <div className="control">
              <Field type="text" className="input" name="direccion" />
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
              <Field type="text" className="input" name="comuna" />{" "}
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
              <Field
                type="text"
                className="textarea"
                name="comentarios"
                component="textarea"
                rows="6"
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
      </FormikForm>
    </Formik>
  )
}

FormCompraProp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
}
