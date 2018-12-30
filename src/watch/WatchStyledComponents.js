import styled from 'styled-components';

const clip = 'polygon(0 5%, 5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%)'

export const Strap = styled.div`
  clip-path: ${clip};
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 100px;
`;

export const Hand = styled.div`
  width: ${p => (p.type === 'seconds' ? 2 : 5)}px;
  height: ${p => (p.type ? 40 : 20)}px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: bottom;
  transform: translate(-50%, -100%) rotate(${p => p.value}deg);
`;

export const Bezel = styled.div`
  background: silver;
  height: 60%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  clip-path: ${clip};
  width: 102%;
`;
export const Screen = styled.div`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  width: 90%;
  background: #000;
  color: #fff;
`;

export const Face = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Value = styled.div`
  font-size: ${p => (p.small ? 2 : 3)}rem;
  line-height: ${p => (p.small ? 2 : 3)}rem;
  text-transform: uppercase;
  text-align: center;
  opacity: ${p => (p.opaque ? 0.5 : 1)};
`;

export const Day = styled.div`
  text-transform: uppercase;
  text-align: center;
`;