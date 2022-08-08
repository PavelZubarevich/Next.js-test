import { noveltyLabel } from '../../../locale/ru'

const NewBadge = () => {
  return (
    <>
      <div className='newBadge'>{noveltyLabel}</div>
      <style jsx>
        {`
          .newBadge {
            width: max-content;
            padding: 6px 10px;
            font-weight: 700;
            font-size: 10px;
            line-height: 140%;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            background: #44C477;
            border-radius: 26px;
          }
        `}
      </style>
    </>
  )
}

export default NewBadge