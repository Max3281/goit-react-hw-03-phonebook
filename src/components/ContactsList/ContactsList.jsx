import PropTypes from 'prop-types';

const ContactsList = ({ data, onDeleteContact }) => {
  // console.log(data);
  return (
    <div>
      {data.length === 0 || (
        <ul>
          {data.map(({ id, name, number }) => {
            return (
              <li key={id} className="contact-unit">
                <p>
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => onDeleteContact(id)}
                  className="delete-contact"
                >
                  Удалить контакт
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;

ContactsList.protoTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
