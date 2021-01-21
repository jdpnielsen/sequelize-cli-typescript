import { Sequelize, Model, DataTypes } from 'sequelize';

<%
  function getType(dataType) {
    dataType = dataType.toLowerCase();

    if ( ['tinyint', 'smallint', 'mediumint', 'integer', 'bigint', 'float', 'double', 'decimal', 'real'].indexOf(dataType) !== -1 ) {
      return 'number;';
    }

    if ( ['char', 'string', 'text', 'blob'].indexOf(dataType) !== -1 ) {
      return 'string;';
    }

    if ( ['date'].indexOf(dataType) !== -1 ) {
      return 'Date;';
    }

    if ( ['dateonly', 'time', 'now', 'json', 'jsonb'].indexOf(dataType) !== -1 ) {
      return 'string;  // actually a ' + dataType + ' column';
    }

    if ( ['enum'].indexOf(dataType) !== -1 ) {
      return "string;  // replace with 'validValue1' | 'validValue2', ...";
    }

    if ( ['boolean'].indexOf(dataType) !== -1 ) {
      return 'boolean;';
    }

    if ( ['uuid', 'uuidv1', 'uuidv4'].indexOf(dataType) !== -1 ) {
      return 'string;';
    }

    return dataType;
  }
%>

export interface <%= name[0].toUpperCase() + name.substr(1) %>Attributes {
  <% attributes.forEach(function(attribute) {
  %><%= attribute.fieldName %>?: <%= getType(attribute.dataType) %>
  <%
  }) %>
}

export interface <%= name[0].toUpperCase() + name.substr(1) %>Instance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  <% attributes.forEach(function(attribute) {
  %><%= attribute.fieldName %>: <%= getType(attribute.dataType) %>
  <%
  }) %>
}

export default (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  class <%= name[0].toUpperCase() + name.substr(1) %> extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models: {[key: string]: Model}) {
      // define association here
    }
  }

  <%= name[0].toUpperCase() + name.substr(1) %>.init({
    <% attributes.forEach(function(attribute, index) { %>
      <%= attribute.fieldName %>: dataTypes.<%= attribute.dataFunction ? `${attribute.dataFunction.toUpperCase()}(dataTypes.${attribute.dataType.toUpperCase()})` : attribute.dataValues ? `${attribute.dataType.toUpperCase()}(${attribute.dataValues})` : attribute.dataType.toUpperCase() %>
      <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
    <% }) %>
  }, {
    sequelize,
    modelName: '<%= name %>',
    <%= underscored ? 'underscored: true,' : '' %>
  })

  return <%= name[0].toUpperCase() + name.substr(1) %>
}
