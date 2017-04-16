'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    nama_event: {
      type: DataTypes.STRING,
      validate: {
        isNotNull: (value, next) => {
          if (value == "") {
            return next('Nama event tidak boleh kosong!');
          }else {
            next();
          }
        }
      }
    },
    tgl_event: {
      type: DataTypes.STRING,
      validate: {
        isNotNull: (value, next) => {
          if (value == "") {
            return next('Tanggal event tidak boleh kosong!');
          }else {
            next();
          }
        }
      }
    },
    judul_event: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next) {
          Event.find({
              where: {judul_event: value},
              attributes: ['id']
          }).done(function(exist) {
              if (exist){
                return next('Judul Event tidak boleh sama!');
              }else if (value == "") {
                return next('Judul Event tidak boleh kosong!');
              } else {
                next();
              }
          });
        }
      }
    },
    email_event_organizer: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: {
          msg: "Format email salah!"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};
