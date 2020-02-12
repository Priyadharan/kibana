<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-public](./kibana-plugin-public.md) &gt; [UiSettingsParams](./kibana-plugin-public.uisettingsparams.md)

## UiSettingsParams interface

UiSettings parameters defined by the plugins.

<b>Signature:</b>

```typescript
export interface UiSettingsParams 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [category](./kibana-plugin-public.uisettingsparams.category.md) | <code>string[]</code> | used to group the configured setting in the UI |
|  [deprecation](./kibana-plugin-public.uisettingsparams.deprecation.md) | <code>DeprecationSettings</code> | optional deprecation information. Used to generate a deprecation warning. |
|  [description](./kibana-plugin-public.uisettingsparams.description.md) | <code>string</code> | description provided to a user in UI |
|  [name](./kibana-plugin-public.uisettingsparams.name.md) | <code>string</code> | title in the UI |
|  [optionLabels](./kibana-plugin-public.uisettingsparams.optionlabels.md) | <code>Record&lt;string, string&gt;</code> | text labels for 'select' type UI element |
|  [options](./kibana-plugin-public.uisettingsparams.options.md) | <code>string[]</code> | array of permitted values for this setting |
|  [readonly](./kibana-plugin-public.uisettingsparams.readonly.md) | <code>boolean</code> | a flag indicating that value cannot be changed |
|  [requiresPageReload](./kibana-plugin-public.uisettingsparams.requirespagereload.md) | <code>boolean</code> | a flag indicating whether new value applying requires page reloading |
|  [type](./kibana-plugin-public.uisettingsparams.type.md) | <code>UiSettingsType</code> | defines a type of UI element [UiSettingsType](./kibana-plugin-public.uisettingstype.md) |
|  [validation](./kibana-plugin-public.uisettingsparams.validation.md) | <code>ImageValidation &#124; StringValidation</code> |  |
|  [value](./kibana-plugin-public.uisettingsparams.value.md) | <code>SavedObjectAttribute</code> | default value to fall back to if a user doesn't provide any |
