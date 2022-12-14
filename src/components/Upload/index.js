import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles.js";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage type="default">Arraste arquivos aqui ðï¸</UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">Arquivo nÃ£o suportado ð</UploadMessage>
      );
    }

    return (
      <UploadMessage type="success">Solte os arquivos aqui ðï¸</UploadMessage>
    );
  };

  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
