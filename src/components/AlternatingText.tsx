import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span<{ color: string }>
    `color: ${(props) => props.color};`;

interface AlternatingTextProps {
    text: string;
    colors: string[];
}

const AlternatingText: React.FC<AlternatingTextProps> = ({ text, colors }) => {
    const alternatingLetters = text.split('').map((letter, index) => (
        <StyledSpan key={index} color={colors[index % colors.length]}>
            {letter}
        </StyledSpan>
  ));

  return <span className="alternating">{alternatingLetters}</span>;
};

export default AlternatingText;