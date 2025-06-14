import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  X,
  AlertCircle,
  Star,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "../lib/utils";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"
];

interface ReservedAppointment {
  date: string;
  time: string;
  id: string;
}

export function ProfessionalCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [reservedAppointments, setReservedAppointments] = useState<ReservedAppointment[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isWeekend, setIsWeekend] = useState(false);
  const [lastReservation, setLastReservation] = useState<ReservedAppointment | null>(null);

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    
    setSelectedDate(date);
    const dayOfWeek = date.getDay();
    
    // Check if it's weekend (Saturday = 6, Sunday = 0)
    if (dayOfWeek === 0 || dayOfWeek === 6 || dayOfWeek === 5) {
      setIsWeekend(true);
      setIsModalOpen(true);
    } else {
      setIsWeekend(false);
      setIsModalOpen(true);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleReservation = () => {
    if (selectedDate && selectedTime) {
      const dateString = format(selectedDate, "yyyy-MM-dd");
      const newReservation: ReservedAppointment = {
        date: dateString,
        time: selectedTime,
        id: `${dateString}-${selectedTime}-${Date.now()}`
      };
      
      setReservedAppointments(prev => [...prev, newReservation]);
      setLastReservation(newReservation);
      setIsModalOpen(false);
      setShowSuccessMessage(true);
      setSelectedTime("");
      
      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
        setLastReservation(null);
      }, 4000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTime("");
    setSelectedDate(undefined);
  };

  const closeSuccessModal = () => {
    setShowSuccessMessage(false);
    setLastReservation(null);
  };

  const isTimeReserved = (date: Date, time: string) => {
    const dateString = format(date, "yyyy-MM-dd");
    return reservedAppointments.some(appointment => 
      appointment.date === dateString && appointment.time === time
    );
  };

  const getReservedTimesForDate = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    return reservedAppointments
      .filter(appointment => appointment.date === dateString)
      .map(appointment => appointment.time);
  };

  const hasReservationsOnDate = (date: Date) => {
    const dateString = format(date, "yyyy-MM-dd");
    return reservedAppointments.some(appointment => appointment.date === dateString);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Success Modal - Reduced Size */}
      <Dialog open={showSuccessMessage} onOpenChange={setShowSuccessMessage}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center space-x-2 text-xl">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-emerald-600">¡Cita Reservada!</span>
            </DialogTitle>
          </DialogHeader>

          <div className="py-4 text-center space-y-4">
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-5 h-5 text-emerald-500 mr-2" />
                <h3 className="text-lg font-bold text-slate-800">Detalles de tu Reserva</h3>
                <Star className="w-5 h-5 text-emerald-500 ml-2" />
              </div>
              
              {lastReservation && (
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-slate-600 text-xs mb-1">Fecha:</p>
                    <p className="text-lg font-bold text-slate-800">
                      {format(new Date(lastReservation.date), "PPPP", { locale: es })}
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-slate-600 text-xs mb-1">Horario:</p>
                    <p className="text-xl font-bold text-emerald-600">
                      {lastReservation.time}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2 text-sm">Información Importante:</h4>
              <ul className="text-blue-700 text-xs space-y-1 text-left">
                <li>• Recibirás confirmación por email</li>
                <li>• Te contactaremos 24h antes</li>
                <li>• Llega 15 min antes de la cita</li>
              </ul>
            </div>

            <Button 
              onClick={closeSuccessModal}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 w-full"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Entendido
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-xl">
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Calendario de Citas</h3>
              <p className="text-emerald-100">Selecciona una fecha para agendar tu consulta</p>
            </div>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-6 bg-gradient-to-br from-slate-50 to-white">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date()}
                  className="rounded-md"
                  modifiers={{
                    hasReservations: (date) => hasReservationsOnDate(date)
                  }}
                  modifiersStyles={{
                    hasReservations: {
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
                      fontWeight: 'bold',
                      border: '2px solid #f59e0b'
                    }
                  }}
                />
              </div>
              
              {/* Legend */}
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-3">Leyenda:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                    <span className="text-slate-600">Fecha disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-amber-300 rounded border-2 border-amber-500"></div>
                    <span className="text-slate-600">Fecha con citas reservadas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                    <span className="text-slate-600">Fecha no disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reserved Appointments */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-800">Citas Reservadas</h4>
              
              {reservedAppointments.length === 0 ? (
                <div className="bg-slate-50 p-6 rounded-xl text-center">
                  <CalendarIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600">No tienes citas reservadas</p>
                  <p className="text-sm text-slate-500">Selecciona una fecha en el calendario para agendar</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {reservedAppointments
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.time.localeCompare(b.time))
                    .map((appointment) => (
                    <div key={appointment.id} className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-xl border border-emerald-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-emerald-500 p-2 rounded-lg">
                            <Clock className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {format(new Date(appointment.date), "PPPP", { locale: es })}
                            </p>
                            <p className="text-emerald-600 font-medium text-lg">{appointment.time}</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Time Selection Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              {isWeekend ? (
                <>
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <span>Fin de Semana</span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5 text-emerald-500" />
                  <span>Seleccionar Horario</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className="py-4">
            {selectedDate && (
              <p className="text-center text-slate-600 mb-4">
                {format(selectedDate, "PPPP", { locale: es })}
              </p>
            )}

            {isWeekend ? (
              <div className="text-center space-y-4">
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-amber-800 mb-2">No hay horarios disponibles</h3>
                  <p className="text-amber-700 text-sm">
                    Los jueves y fines de semana no hay consultas disponibles. 
                    Por favor selecciona un día de lunes a jueves.
                  </p>
                </div>
                <Button onClick={closeModal} variant="outline" className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  Cerrar
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 text-center">
                  Horarios disponibles de 9:00 AM a 3:00 PM
                </p>
                
                {selectedDate && getReservedTimesForDate(selectedDate).length > 0 && (
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800 font-medium mb-1">Horarios ya reservados:</p>
                    <p className="text-sm text-amber-700">
                      {getReservedTimesForDate(selectedDate).join(", ")}
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                  {timeSlots.map((time) => {
                    const isReserved = selectedDate && isTimeReserved(selectedDate, time);
                    const isSelected = selectedTime === time;
                    
                    return (
                      <Button
                        key={time}
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        onClick={() => !isReserved && handleTimeSelect(time)}
                        disabled={isReserved}
                        className={cn(
                          "transition-all duration-200",
                          isReserved 
                            ? "bg-red-500 text-white cursor-not-allowed opacity-75 hover:bg-red-500" 
                            : isSelected 
                              ? "bg-emerald-500 hover:bg-emerald-600 text-white" 
                              : "hover:bg-emerald-50 hover:border-emerald-300"
                        )}
                      >
                        {time}
                        {isReserved && <X className="w-3 h-3 ml-1" />}
                      </Button>
                    );
                  })}
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button 
                    onClick={closeModal} 
                    variant="outline" 
                    className="flex-1"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleReservation}
                    disabled={!selectedTime}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Reservar
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}