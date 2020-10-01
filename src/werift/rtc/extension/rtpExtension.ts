import { RTCRtpHeaderExtensionParameters } from "../media/parameters";

export const RTP_EXTENSION_URI = {
  sdesMid: "urn:ietf:params:rtp-hdrext:sdes:mid",
  sdesRTPStreamID: "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id",
  transportWideCC:
    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01",
  absSendTime: "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time",
} as const;

export function useSdesMid(id = 1) {
  return new RTCRtpHeaderExtensionParameters({
    id,
    uri: RTP_EXTENSION_URI.sdesMid,
  });
}

export function useSdesRTPStreamID(id = 2) {
  return new RTCRtpHeaderExtensionParameters({
    id,
    uri: RTP_EXTENSION_URI.sdesRTPStreamID,
  });
}

export function useTransportWideCC(id = 3) {
  return new RTCRtpHeaderExtensionParameters({
    id,
    uri: RTP_EXTENSION_URI.transportWideCC,
  });
}

export function useAbsSendTime(id = 4) {
  return new RTCRtpHeaderExtensionParameters({
    id,
    uri: RTP_EXTENSION_URI.absSendTime,
  });
}
