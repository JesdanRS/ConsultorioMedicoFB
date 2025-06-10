import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar as CalendarLucide,
} from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const consultationTypes = [
  { value: "primera-vez", label: "Primera Consulta" },
  { value: "seguimiento", label: "Consulta de Seguimiento" },
  { value: "segunda-opinion", label: "Segunda Opinión" },
  { value: "virtual", label: "Consulta Virtual" },
];

export function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [consultationType, setConsultationType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && consultationType && formData.name && formData.email && formData.phone) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log({
        date: selectedDate,
        time: selectedTime,
        type: consultationType,
        ...formData
      });
    }
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setSelectedTime("");
    setConsultationType("");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-full w-fit mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          ¡Cita Agendada Exitosamente!
        </h3>
        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl mb-6">
          <p className="text-slate-700 mb-2">
            <strong>Fecha:</strong> {selectedDate && format(selectedDate, "PPPP", { locale: es })}
          </p>
          <p className="text-slate-700 mb-2">
            <strong>Hora:</strong> {selectedTime}
          </p>
          <p className="text-slate-700">
            <strong>Tipo:</strong> {consultationTypes.find(t => t.value === consultationType)?.label}
          </p>
        </div>
        <p className="text-slate-600 mb-6">
          Recibirás un email de confirmación con todos los detalles de tu cita. 
          El Dr. Bernal se pondrá en contacto contigo 24 horas antes de la consulta.
        </p>
        <Button onClick={resetForm} className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
          Agendar Nueva Cita
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl mr-4">
          <CalendarLucide className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Agendar Consulta</h3>
          <p className="text-slate-600">Selecciona fecha, hora y completa tus datos</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Calendar Section */}
          <div className="space-y-4">
            <Label className="text-base font-semibold text-slate-800">
              Seleccionar Fecha
            </Label>
            <div className="border border-slate-200 rounded-xl p-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => 
                  date < new Date() || 
                  date.getDay() === 0 || 
                  date.getDay() === 5 ||
                  date.getDay() === 6
                }
                className="rounded-md"
              />
            </div>
            <p className="text-sm text-slate-500">
              * Disponible Lunes a Jueves. No se atiende fines de semana.
            </p>
          </div>

          {/* Time and Type Selection */}
          <div className="space-y-6">
            {/* Time Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-slate-800">
                Seleccionar Hora
              </Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Elige un horario" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Consultation Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-slate-800">
                Tipo de Consulta
              </Label>
              <Select value={consultationType} onValueChange={setConsultationType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona el tipo de consulta" />
                </SelectTrigger>
                <SelectContent>
                  {consultationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Patient Information */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-800">
                Información del Paciente
              </Label>
              
              <div className="space-y-3">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    type="tel"
                    placeholder="Número de teléfono"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Textarea
                    placeholder="Describe brevemente tu consulta o síntomas (opcional)"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="pl-10 min-h-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary and Submit */}
        {selectedDate && selectedTime && consultationType && (
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl">
            <h4 className="font-semibold text-slate-800 mb-3">Resumen de la Cita:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-600">Fecha:</p>
                <p className="font-medium text-slate-800">
                  {format(selectedDate, "PPPP", { locale: es })}
                </p>
              </div>
              <div>
                <p className="text-slate-600">Hora:</p>
                <p className="font-medium text-slate-800">{selectedTime}</p>
              </div>
              <div>
                <p className="text-slate-600">Tipo:</p>
                <p className="font-medium text-slate-800">
                  {consultationTypes.find(t => t.value === consultationType)?.label}
                </p>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          disabled={!selectedDate || !selectedTime || !consultationType || !formData.name || !formData.email || !formData.phone}
        >
          <CalendarIcon className="w-5 h-5 mr-2" />
          Confirmar Cita
        </Button>
      </form>
    </div>
  );
}