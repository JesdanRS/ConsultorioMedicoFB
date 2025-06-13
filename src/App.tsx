import {
  Brain,
  Stethoscope,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Activity,
  Scan,
  Microscope,
  Zap,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { AppointmentScheduler } from "./components/AppointmentScheduler";
import { ProfessionalCalendar } from "./components/ProfessionalCalendar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl shadow-lg">
                <img
                  src="original_logo_transparent 2[1].png" // Reemplaza con la ruta correcta
                  alt="Logo"
                  className="h-16 w-16 rounded-2xl object-cover transition-transform hover:scale-110 duration-300"
                />{" "}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  Dr. Fabian Said Aranibar Bernal
                </h1>
                <p className="text-sm text-emerald-600 font-medium">
                  Neurocirujano Especialista
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="#curriculum"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Curriculum
              </a>
              <a
                href="#servicios"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Servicios
              </a>
              <a
                href="#agendar"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Agendar Cita
              </a>
              <a
                href="#calendario"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Calendario
              </a>
              <a
                href="#contacto"
                className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Carta de Presentación */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Consulta Virtual Disponible
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                    Bienvenido a mi
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                      {" "}
                      Consultorio Virtual
                    </span>
                  </h2>
                </div>

                <div className="prose prose-lg text-slate-600 mb-8">
                  <p className="mb-4">
                    Con más de una década de experiencia en neurocirugía,
                    ofrezco atención médica especializada combinando la más alta
                    formación académica internacional con tecnología de
                    vanguardia.
                  </p>
                  <p className="mb-4">
                    Mi compromiso es brindar el mejor cuidado neurológico a cada
                    paciente, respaldado por mi formación en prestigiosas
                    instituciones de Bolivia, Italia y España.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => (window.location.href = "#agendar")}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Consulta
                  </button>
                  <button
                    onClick={() => (window.location.href = "tel:+59176517453")}
                    className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contactar Ahora
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-12 lg:p-16 flex items-center justify-center ">
                <div className="w-full max-w-md">
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-emerald-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-full h-80 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <img
                        src="/image.png"
                        alt="Dr. Fabian Bernal - Neurocirujano Especialista"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-slate-800 font-semibold">
                        Dr. Fabian Bernal
                      </p>
                      <p className="text-emerald-600 text-sm">
                        Especialista en Neurocirugía
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Formación Académica
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Una trayectoria académica internacional que respalda la excelencia
              en atención neurológica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pregrado */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl w-fit mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                Medicina Cirujano
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-700">
                    Universidad Franz Tamayo (UNIFRANZ)
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-700">Bolivia</span>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Formación médica integral con sólidos fundamentos en ciencias
                básicas y clínicas.
              </p>
            </div>

            {/* Postgrado */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl w-fit mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                Postgrado Cirujia
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-600 mr-3" />
                  <span className="text-slate-700">
                    Universidad La Sapienza de Roma
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-cyan-600 mr-3" />
                    <span className="text-slate-700">Italia</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Especialización avanzada en técnicas europeas de neurología y
                neurocirugía.
              </p>
            </div>

            {/* Especialidad */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-4 rounded-2xl w-fit mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">
                Especialidad en Neurocirugía
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-700">
                    Universitat de Barcelona
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-slate-700">España</span>
                </div>
              </div>
              <p className="text-slate-600 mt-4">
                Especialización de élite en neurocirugía con técnicas
                mínimamente invasivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Servicios Clínicos
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Servicios integrales de neurocirugía con tecnología de vanguardia
              y atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Neurocirugías Generales */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-2xl w-fit mb-6" >
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4 ">
                Neurocirugías Generales
              </h4>
              <p className="text-slate-600 mb-4">
                Procedimientos neuroquirúrgicos especializados con técnicas
                mínimamente invasivas y alta precisión.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Disponible</span>
              </div>
            </div>

            {/* Quirófano */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl w-fit mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                Quirófano Especializado
              </h4>
              <p className="text-slate-600 mb-4">
                Quirófano equipado con tecnología de última generación para
                procedimientos neuroquirúrgicos complejos.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  Equipamiento Avanzado
                </span>
              </div>
            </div>

            {/* Tomografía */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-4 rounded-2xl w-fit mb-6">
                <Scan className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                Tomografía
              </h4>
              <p className="text-slate-600 mb-4">
                Estudios tomográficos de alta resolución para diagnóstico
                preciso de patologías neurológicas.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Alta Resolución</span>
              </div>
            </div>

            {/* Resonancia Magnética */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 p-4 rounded-2xl w-fit mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                Resonancia Magnética
              </h4>
              <p className="text-slate-600 mb-4">
                Estudios de resonancia magnética con contraste para evaluación
                detallada del sistema nervioso.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Imágenes Detalladas</span>
              </div>
            </div>

            {/* Rayos X */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 rounded-2xl w-fit mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Rayos X</h4>
              <p className="text-slate-600 mb-4">
                Radiografías especializadas para evaluación ósea y apoyo en
                diagnósticos neurológicos.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Diagnóstico Rápido</span>
              </div>
            </div>

            {/* Laboratorio */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 p-4 rounded-2xl w-fit mb-6">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                Laboratorio Clínico
              </h4>
              <p className="text-slate-600 mb-4">
                Análisis clínicos especializados para apoyo diagnóstico y
                seguimiento neurológico.
              </p>
              <div className="flex items-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Resultados Precisos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Scheduling Section */}
      <section id="agendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Agendar Consulta
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Programa tu cita de manera fácil y rápida. Selecciona la fecha, hora y tipo de consulta que mejor se adapte a tus necesidades.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <AppointmentScheduler />
          </div>
        </div>
      </section>

      {/* Professional Calendar Section */}
      <section id="calendario" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Calendario de Reservas
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visualiza y gestiona tus citas médicas de forma profesional. 
              Selecciona fechas disponibles y reserva tu horario preferido.
            </p>
          </div>

          <ProfessionalCalendar />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Contacto</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ¿Tienes preguntas? Contáctanos directamente. Estamos aquí para cuidar
              de tu salud neurológica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Teléfono
                  </h4>
                  <p className="text-slate-600">+591 76517453</p>
                  <p className="text-sm text-slate-500">
                    Disponible de Lunes a Viernes 8:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Email
                  </h4>
                  <p className="text-slate-600">fabian.bernal@gmail.com</p>
                  <p className="text-sm text-slate-500">
                    Respuesta en 24 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Horarios de Atención
                  </h4>
                  <div className="space-y-1 text-slate-600">
                    <p>Lunes - Jueves: 9:00 - 15:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                    <p>Emergencias: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">
                Contacto Directo
              </h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    title="Ingrese su nombre completo"
                    placeholder="Ej: Jorge Choque"
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    title="Ingrese su email"
                    placeholder="Ej: Jordan7Fer@gmail.com"
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    title="Ingrese su telefono"
                    placeholder="Ej: +591 67179820"
                    type="tel"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    title="Ingrese su mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Dr. Fabian Bernal</h4>
                  <p className="text-sm text-slate-400">
                    Neurocirujano Especialista
                  </p>
                </div>
              </div>
              <p className="text-slate-400">
                Atención neurológica especializada con formación internacional y
                tecnología de vanguardia.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Neurocirugías Generales</li>
                <li>Consulta Virtual</li>
                <li>Estudios de Imagen</li>
                <li>Laboratorio Clínico</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Información</h5>
              <ul className="space-y-2 text-slate-400">
                <li>Formación Internacional</li>
                <li>Especialidad en España</li>
                <li>Postgrado en Italia</li>
                <li>Medicina UNIFRANZ Bolivia</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; 2025 Dr. Fabian Bernal - Consultorio Virtual de
              Neurocirugía. Todos los derechos reservados Jesdan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;