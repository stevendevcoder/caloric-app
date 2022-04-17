import React from 'react'

function Sign({handleChange, handleSubmit}) {
  return (
    <form className="campos" onSubmit={handleSubmit}>
			<label htmlFor="">Correo</label>
			<input type="email" name="email" onChange={handleChange} />
			<label htmlFor="">Contraseña</label>
			<input type="password" name="password" onChange={handleChange} />
      <input type="submit" onClick={handleSubmit} value="Iniciar Sesión" />
    </form>
  )
}

export default Sign