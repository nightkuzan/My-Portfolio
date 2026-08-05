import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing'
import { lite } from './quality'

/**
 * Post chain.
 *
 * Bloom is doing the heavy lifting: the sun disc, the specular path across
 * the water and the star field are all sub-pixel bright spots, and without
 * a bloom they read as hard little dots instead of light. Threshold is set
 * high on purpose — bleeding the midtones is what makes a scene look like a
 * screensaver. At 0.62 it was catching lit fur and washing the otters out
 * to a flat tan.
 *
 * The grain is not decoration either: large flat gradients — sky, deep
 * water — band visibly on 8-bit displays, and a little noise hides it.
 *
 * Skipped entirely on low-power devices, where a full-screen blur chain
 * costs more than everything else in the frame put together.
 */
export default function Post() {
  if (lite) return null

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.7}
        luminanceThreshold={0.88}
        luminanceSmoothing={0.22}
        kernelSize={KernelSize.LARGE}
        mipmapBlur
      />
      <Vignette offset={0.28} darkness={0.62} blendFunction={BlendFunction.NORMAL} />
      <Noise opacity={0.035} blendFunction={BlendFunction.OVERLAY} />
    </EffectComposer>
  )
}
