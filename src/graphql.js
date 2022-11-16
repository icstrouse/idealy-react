import { gql } from '@apollo/client';


// IDEAS
export const ADD_IDEA = gql`
  mutation AddIdea($text: String, $createdDate: String, $createdPlace: [Float], $type: String, $tags: [String], $isPublic: Boolean, $archived: Boolean) {
    addIdea(text: $text, createdTime: $createdDate, createdPlace: $createdPlace, type: $type, tags: $tags, public: $isPublic, archived: $archived) {
      _id
      text
      type
      tags
      archived
      public
      createdTime
      createdPlace
    }
  }
`;

export const GET_IDEAS = gql`
  query Ideas {
    ideas {
      _id
      text
      type
      tags
      public
      archived
      createdTime
      createdPlace
    }
  }
`;

// REFACTOR THIS TO ADD THOT NESTING LEVELS BASED ON VALUE FOR IDEA REC
export const GET_IDEA = gql`
  query Idea($id: ID) {
    idea(_id: $id) {
      _id
      text
      type
      tags
      public
      archived
      createdTime
      createdPlace
      thots {
        _id
        ideaId
        parent
        text
        format
        createdTime
        children {
          _id
          ideaId
          parent
          text
          format
          createdTime
          children {
            _id
            ideaId
            parent
            text
            format
            createdTime
          }
        }
      }
    }
  }
`;

export const UPDATE_IDEA_TEXT = gql`
  mutation UpdateIdeaText($text: String, $id: ID) {
    updateIdea(text: $text, _id: $id) {
      _id
      text
    }
  }
`;

export const UPDATE_TITLE = gql`
  mutation UpdateTitle($title: String, $id: ID) {
    updateIdea(title: $title, _id: $id) {
      _id
      title
    }
  }
`;

export const UPDATE_DESCRIPTION = gql`
  mutation UpdateDescription($description: String, $id: ID) {
    updateIdea(description: $description, _id: $id) {
      _id
      description
    }
  }
`;

export const UPDATE_TYPE = gql`
  mutation UpdateType($id: ID, $type: String) {
    updateIdea(_id: $id, type: $type) {
      _id
      type
    }
  }
`;

export const UPDATE_PUBLIC = gql`
  mutation UpdateIsPublic($id: ID, $isPublic: Boolean) {
    updateIdea(_id: $id, public: $isPublic) {
      _id
      public
    }
  }
`;

export const UPDATE_ARCHIVED = gql`
  mutation UpdateArchived($id: ID, $archived: Boolean) {
    updateIdea(_id: $id, archived: $archived) {
      _id
      archived
    }
  }
`;


// THOTS 
export const ADD_THOT = gql`
  mutation AddThot($text: String!, $ideaId: Int!, $parent: ID, $format: String) {
    addThot(text: $text, ideaId: $ideaId, parent: $parent, format: $format) {
      _id
    }
  }
`;

export const UPDATE_THOT_TEXT = gql`
  mutation UpdateThotText($id: ID, $text: String) {
    updateThot(_id: $id, text: $text) {
      _id
      text
    }
  }
`;