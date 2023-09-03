var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSpring' )
  var i613 = data
  i612.spring = i613[0]
  i612.damper = i613[1]
  i612.targetPosition = i613[2]
  return i612
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointMotor' )
  var i615 = data
  i614.m_TargetVelocity = i615[0]
  i614.m_Force = i615[1]
  i614.m_FreeSpin = i615[2]
  return i614
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointLimits' )
  var i617 = data
  i616.m_Min = i617[0]
  i616.m_Max = i617[1]
  i616.m_Bounciness = i617[2]
  i616.m_BounceMinVelocity = i617[3]
  i616.m_ContactDistance = i617[4]
  i616.minBounce = i617[5]
  i616.maxBounce = i617[6]
  return i616
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointDrive' )
  var i619 = data
  i618.m_PositionSpring = i619[0]
  i618.m_PositionDamper = i619[1]
  i618.m_MaximumForce = i619[2]
  return i618
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i621 = data
  i620.m_Spring = i621[0]
  i620.m_Damper = i621[1]
  return i620
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i623 = data
  i622.m_Limit = i623[0]
  i622.m_Bounciness = i623[1]
  i622.m_ContactDistance = i623[2]
  return i622
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i625 = data
  i624.m_ExtremumSlip = i625[0]
  i624.m_ExtremumValue = i625[1]
  i624.m_AsymptoteSlip = i625[2]
  i624.m_AsymptoteValue = i625[3]
  i624.m_Stiffness = i625[4]
  return i624
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i627 = data
  i626.m_LowerAngle = i627[0]
  i626.m_UpperAngle = i627[1]
  return i626
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i629 = data
  i628.m_MotorSpeed = i629[0]
  i628.m_MaximumMotorTorque = i629[1]
  return i628
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i631 = data
  i630.m_DampingRatio = i631[0]
  i630.m_Frequency = i631[1]
  i630.m_Angle = i631[2]
  return i630
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i633 = data
  i632.m_LowerTranslation = i633[0]
  i632.m_UpperTranslation = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i634 = root || new pc.UnityMaterial()
  var i635 = data
  i634.name = i635[0]
  request.r(i635[1], i635[2], 0, i634, 'shader')
  i634.renderQueue = i635[3]
  i634.enableInstancing = !!i635[4]
  var i637 = i635[5]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i637[i + 0]) );
  }
  i634.floatParameters = i636
  var i639 = i635[6]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i639[i + 0]) );
  }
  i634.colorParameters = i638
  var i641 = i635[7]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i641[i + 0]) );
  }
  i634.vectorParameters = i640
  var i643 = i635[8]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i643[i + 0]) );
  }
  i634.textureParameters = i642
  var i645 = i635[9]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i645[i + 0]) );
  }
  i634.materialFlags = i644
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i649 = data
  i648.name = i649[0]
  i648.value = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = new pc.Color(i653[1], i653[2], i653[3], i653[4])
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = new pc.Vec4( i657[1], i657[2], i657[3], i657[4] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i661 = data
  i660.name = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'value')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i665 = data
  i664.name = i665[0]
  i664.enabled = !!i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i667 = data
  i666.name = i667[0]
  i666.width = i667[1]
  i666.height = i667[2]
  i666.mipmapCount = i667[3]
  i666.anisoLevel = i667[4]
  i666.filterMode = i667[5]
  i666.hdr = !!i667[6]
  i666.format = i667[7]
  i666.wrapMode = i667[8]
  i666.alphaIsTransparency = !!i667[9]
  i666.alphaSource = i667[10]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i669 = data
  i668.name = i669[0]
  i668.atlasId = i669[1]
  i668.mipmapCount = i669[2]
  i668.hdr = !!i669[3]
  i668.size = i669[4]
  i668.anisoLevel = i669[5]
  i668.filterMode = i669[6]
  i668.wrapMode = i669[7]
  var i671 = i669[8]
  var i670 = []
  for(var i = 0; i < i671.length; i += 4) {
    i670.push( UnityEngine.Rect.MinMaxRect(i671[i + 0], i671[i + 1], i671[i + 2], i671[i + 3]) );
  }
  i668.rects = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i675 = data
  i674.name = i675[0]
  i674.index = i675[1]
  i674.startup = !!i675[2]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i677 = data
  i676.position = new pc.Vec3( i677[0], i677[1], i677[2] )
  i676.scale = new pc.Vec3( i677[3], i677[4], i677[5] )
  i676.rotation = new pc.Quat(i677[6], i677[7], i677[8], i677[9])
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.aspect = i679[1]
  i678.orthographic = !!i679[2]
  i678.orthographicSize = i679[3]
  i678.backgroundColor = new pc.Color(i679[4], i679[5], i679[6], i679[7])
  i678.nearClipPlane = i679[8]
  i678.farClipPlane = i679[9]
  i678.fieldOfView = i679[10]
  i678.depth = i679[11]
  i678.clearFlags = i679[12]
  i678.cullingMask = i679[13]
  i678.rect = i679[14]
  request.r(i679[15], i679[16], 0, i678, 'targetTexture')
  i678.usePhysicalProperties = !!i679[17]
  i678.focalLength = i679[18]
  i678.sensorSize = new pc.Vec2( i679[19], i679[20] )
  i678.lensShift = new pc.Vec2( i679[21], i679[22] )
  i678.gateFit = i679[23]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i681 = data
  i680.name = i681[0]
  i680.tagId = i681[1]
  i680.enabled = !!i681[2]
  i680.isStatic = !!i681[3]
  i680.layer = i681[4]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.type = i683[1]
  i682.color = new pc.Color(i683[2], i683[3], i683[4], i683[5])
  i682.cullingMask = i683[6]
  i682.intensity = i683[7]
  i682.range = i683[8]
  i682.spotAngle = i683[9]
  i682.shadows = i683[10]
  i682.shadowNormalBias = i683[11]
  i682.shadowBias = i683[12]
  i682.shadowStrength = i683[13]
  i682.shadowResolution = i683[14]
  i682.lightmapBakeType = i683[15]
  i682.renderMode = i683[16]
  request.r(i683[17], i683[18], 0, i682, 'cookie')
  i682.cookieSize = i683[19]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i685 = data
  i684.ambientIntensity = i685[0]
  i684.reflectionIntensity = i685[1]
  i684.ambientMode = i685[2]
  i684.ambientLight = new pc.Color(i685[3], i685[4], i685[5], i685[6])
  i684.ambientSkyColor = new pc.Color(i685[7], i685[8], i685[9], i685[10])
  i684.ambientGroundColor = new pc.Color(i685[11], i685[12], i685[13], i685[14])
  i684.ambientEquatorColor = new pc.Color(i685[15], i685[16], i685[17], i685[18])
  i684.fogColor = new pc.Color(i685[19], i685[20], i685[21], i685[22])
  i684.fogEndDistance = i685[23]
  i684.fogStartDistance = i685[24]
  i684.fogDensity = i685[25]
  i684.fog = !!i685[26]
  request.r(i685[27], i685[28], 0, i684, 'skybox')
  i684.fogMode = i685[29]
  var i687 = i685[30]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i687[i + 0]) );
  }
  i684.lightmaps = i686
  i684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i685[31], i684.lightProbes)
  i684.lightmapsMode = i685[32]
  i684.mixedBakeMode = i685[33]
  i684.environmentLightingMode = i685[34]
  i684.ambientProbe = new pc.SphericalHarmonicsL2(i685[35])
  i684.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i685[36])
  i684.useReferenceAmbientProbe = !!i685[37]
  request.r(i685[38], i685[39], 0, i684, 'customReflection')
  request.r(i685[40], i685[41], 0, i684, 'defaultReflection')
  i684.defaultReflectionMode = i685[42]
  i684.defaultReflectionResolution = i685[43]
  i684.sunLightObjectId = i685[44]
  i684.pixelLightCount = i685[45]
  i684.defaultReflectionHDR = !!i685[46]
  i684.hasLightDataAsset = !!i685[47]
  i684.hasManualGenerate = !!i685[48]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'lightmapColor')
  request.r(i691[2], i691[3], 0, i690, 'lightmapDirection')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i692 = root || new UnityEngine.LightProbes()
  var i693 = data
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i701 = data
  var i703 = i701[0]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i703.length; i += 1) {
    i702.add(i703[i + 0]);
  }
  i700.invalidShaderVariants = i702
  i700.name = i701[1]
  i700.guid = i701[2]
  var i705 = i701[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.shaderDefinedKeywords = i704
  var i707 = i701[4]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i707[i + 0]) );
  }
  i700.passes = i706
  var i709 = i701[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i709[i + 0]) );
  }
  i700.usePasses = i708
  var i711 = i701[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i711[i + 0]) );
  }
  i700.defaultParameterValues = i710
  request.r(i701[7], i701[8], 0, i700, 'unityFallbackShader')
  i700.readDepth = !!i701[9]
  i700.isCreatedByShaderGraph = !!i701[10]
  i700.usedBatchUniforms = i701[11]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i718 = root || new pc.UnityShaderPass()
  var i719 = data
  i718.id = i719[0]
  i718.subShaderIndex = i719[1]
  i718.name = i719[2]
  i718.passType = i719[3]
  i718.usePass = !!i719[4]
  i718.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[5], i718.zTest)
  i718.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[6], i718.zWrite)
  i718.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[7], i718.culling)
  i718.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i719[8], i718.blending)
  i718.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i719[9], i718.alphaBlending)
  i718.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[10], i718.colorWriteMask)
  i718.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[11], i718.offsetUnits)
  i718.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[12], i718.offsetFactor)
  i718.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[13], i718.stencilRef)
  i718.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[14], i718.stencilReadMask)
  i718.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[15], i718.stencilWriteMask)
  i718.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[16], i718.stencilOp)
  i718.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[17], i718.stencilOpFront)
  i718.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i719[18], i718.stencilOpBack)
  var i721 = i719[19]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i721[i + 0]) );
  }
  i718.tags = i720
  var i723 = i719[20]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( i723[i + 0] );
  }
  i718.passDefinedKeywords = i722
  var i725 = i719[21]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i725[i + 0]) );
  }
  i718.passDefinedKeywordGroups = i724
  var i727 = i719[22]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i727[i + 0]) );
  }
  i718.variants = i726
  var i729 = i719[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i729[i + 0]) );
  }
  i718.excludedVariants = i728
  i718.hasDepthReader = !!i719[24]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i731 = data
  i730.val = i731[0]
  i730.name = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i733 = data
  i732.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[0], i732.src)
  i732.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[1], i732.dst)
  i732.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i733[2], i732.op)
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i735 = data
  i734.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[0], i734.pass)
  i734.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[1], i734.fail)
  i734.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[2], i734.zFail)
  i734.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[3], i734.comp)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i739 = data
  i738.name = i739[0]
  i738.value = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i743 = data
  var i745 = i743[0]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( i745[i + 0] );
  }
  i742.keywords = i744
  i742.hasDiscard = !!i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i749 = data
  i748.passId = i749[0]
  i748.subShaderIndex = i749[1]
  var i751 = i749[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i748.keywords = i750
  i748.vertexProgram = i749[3]
  i748.fragmentProgram = i749[4]
  i748.readDepth = !!i749[5]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'shader')
  i754.pass = i755[2]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i759 = data
  i758.name = i759[0]
  i758.type = i759[1]
  i758.value = new pc.Vec4( i759[2], i759[3], i759[4], i759[5] )
  i758.textureValue = i759[6]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i761 = data
  var i763 = i761[0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i763[i + 0]) );
  }
  i760.files = i762
  i760.componentToPrefabIds = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i767 = data
  i766.path = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'unityObject')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i771[i + 0]) );
  }
  i768.scriptsExecutionOrder = i770
  var i773 = i769[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i773[i + 0]) );
  }
  i768.sortingLayers = i772
  var i775 = i769[2]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i775[i + 0]) );
  }
  i768.cullingLayers = i774
  i768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i769[3], i768.timeSettings)
  i768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i769[4], i768.physicsSettings)
  i768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i769[5], i768.physics2DSettings)
  i768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i769[6], i768.qualitySettings)
  i768.enableRealtimeShadows = !!i769[7]
  i768.enableAutoInstancing = !!i769[8]
  i768.enableDynamicBatching = !!i769[9]
  i768.lightmapEncodingQuality = i769[10]
  i768.desiredColorSpace = i769[11]
  var i777 = i769[12]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i768.allTags = i776
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i781 = data
  i780.name = i781[0]
  i780.value = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i785 = data
  i784.id = i785[0]
  i784.name = i785[1]
  i784.value = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i791 = data
  i790.fixedDeltaTime = i791[0]
  i790.maximumDeltaTime = i791[1]
  i790.timeScale = i791[2]
  i790.maximumParticleTimestep = i791[3]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i793 = data
  i792.gravity = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.defaultSolverIterations = i793[3]
  i792.bounceThreshold = i793[4]
  i792.autoSyncTransforms = !!i793[5]
  i792.autoSimulation = !!i793[6]
  var i795 = i793[7]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i795[i + 0]) );
  }
  i792.collisionMatrix = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.layerId = i799[1]
  i798.otherLayerId = i799[2]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'material')
  i800.gravity = new pc.Vec2( i801[2], i801[3] )
  i800.positionIterations = i801[4]
  i800.velocityIterations = i801[5]
  i800.velocityThreshold = i801[6]
  i800.maxLinearCorrection = i801[7]
  i800.maxAngularCorrection = i801[8]
  i800.maxTranslationSpeed = i801[9]
  i800.maxRotationSpeed = i801[10]
  i800.baumgarteScale = i801[11]
  i800.baumgarteTOIScale = i801[12]
  i800.timeToSleep = i801[13]
  i800.linearSleepTolerance = i801[14]
  i800.angularSleepTolerance = i801[15]
  i800.defaultContactOffset = i801[16]
  i800.autoSimulation = !!i801[17]
  i800.queriesHitTriggers = !!i801[18]
  i800.queriesStartInColliders = !!i801[19]
  i800.callbacksOnDisable = !!i801[20]
  i800.reuseCollisionCallbacks = !!i801[21]
  i800.autoSyncTransforms = !!i801[22]
  var i803 = i801[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i803[i + 0]) );
  }
  i800.collisionMatrix = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.layerId = i807[1]
  i806.otherLayerId = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[i + 0]) );
  }
  i808.qualityLevels = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.names = i812
  i808.shadows = i809[2]
  i808.anisotropicFiltering = i809[3]
  i808.antiAliasing = i809[4]
  i808.lodBias = i809[5]
  i808.shadowCascades = i809[6]
  i808.shadowDistance = i809[7]
  i808.shadowmaskMode = i809[8]
  i808.shadowProjection = i809[9]
  i808.shadowResolution = i809[10]
  i808.softParticles = !!i809[11]
  i808.softVegetation = !!i809[12]
  i808.activeColorSpace = i809[13]
  i808.desiredColorSpace = i809[14]
  i808.masterTextureLimit = i809[15]
  i808.maxQueuedFrames = i809[16]
  i808.particleRaycastBudget = i809[17]
  i808.pixelLightCount = i809[18]
  i808.realtimeReflectionProbes = !!i809[19]
  i808.shadowCascade2Split = i809[20]
  i808.shadowCascade4Split = new pc.Vec3( i809[21], i809[22], i809[23] )
  i808.streamingMipmapsActive = !!i809[24]
  i808.vSyncCount = i809[25]
  i808.asyncUploadBufferSize = i809[26]
  i808.asyncUploadTimeSlice = i809[27]
  i808.billboardsFaceCameraPosition = !!i809[28]
  i808.shadowNearPlaneOffset = i809[29]
  i808.streamingMipmapsMemoryBudget = i809[30]
  i808.maximumLODLevel = i809[31]
  i808.streamingMipmapsAddAllCameras = !!i809[32]
  i808.streamingMipmapsMaxLevelReduction = i809[33]
  i808.streamingMipmapsRenderersPerFrame = i809[34]
  i808.resolutionScalingFixedDPIFactor = i809[35]
  i808.streamingMipmapsMaxFileIORequests = i809[36]
  i808.currentQualityLevel = i809[37]
  return i808
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"7":[8],"9":[8],"10":[8],"11":[8],"12":[8],"13":[8],"14":[15],"16":[2],"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[18],"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[26],"33":[26],"34":[26],"35":[26],"36":[26],"37":[26],"38":[26],"39":[2],"40":[41],"42":[43],"44":[43],"45":[46],"47":[46],"48":[41,46],"49":[46,50],"51":[46],"52":[50,46],"53":[41],"54":[50,46],"55":[46],"56":[57],"58":[46],"59":[46],"60":[45],"61":[50,46],"62":[46],"63":[45],"64":[46],"65":[46],"66":[46],"67":[46],"68":[46],"69":[46],"70":[46],"71":[46],"72":[46],"73":[50,46],"74":[46],"75":[46],"76":[46],"77":[46],"78":[50,46],"79":[46],"80":[81],"82":[81],"83":[81],"84":[81],"85":[2],"86":[2],"87":[57],"88":[57]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Material","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.24f1";

Deserializers.productName = "lunatutoo";

Deserializers.lunaInitializationTime = "08/31/2023 19:05:11";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "new-concept";

Deserializers.lunaAppID = "18022";

Deserializers.projectId = "9936c67fc0daaa74680ba28fd991c293";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1676";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2537";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.lunatutoo";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "5b3d0a70-0c38-4512-acaa-b6976425f70d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

