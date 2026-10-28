import { X } from 'lucide-react'
import { getImage, formatId } from '../utils/participantes'
import '../css/fazenda.css'


function Participantcard({ participante, onVotar,}) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="compare-modal" onClick={(e) => e.stopPropagation()}>
        <button className="compare-close" onClick={onClose} title="Fechar">
          <X size={20} />
        </button>

        <h2 className="compare-title">Votação</h2>

        <div className="compare-header">
          <div className="compare-card">
            <span className="compare-id">{formatId(participante.id)}</span>
            <img src={getImage(participante.id)} alt={participante.name} />
            <h3>{participante.name}</h3>
          </div>

          <div className="compare-card">
            <span className="compare-id">{formatId(participante.id)}</span>
            <img src={getImage(participante.id)} alt={participante.name} />
            <h3>{participante.name}</h3>
          </div>
        </div>
        </div>
      </div>
  )
}

export default pages
