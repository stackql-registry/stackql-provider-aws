--- 
title: user_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - user_settings
  - workspaces_web
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>user_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.user_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_settings"
    values={[
        { label: 'get_user_settings', value: 'get_user_settings' },
        { label: 'list_user_settings', value: 'list_user_settings' }
    ]}
>
<TabItem value="get_user_settings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="additionalEncryptionContext" /></td>
    <td><code>object</code></td>
    <td>The additional encryption context of the user settings.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedPortalArns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this user settings is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="brandingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The branding configuration output that customizes the appearance of the web portal for end users.</td>
</tr>
<tr>
    <td><CopyableCode code="cookieSynchronizationConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.</td>
</tr>
<tr>
    <td><CopyableCode code="copyAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can copy text from the streaming session to the local device. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedKey" /></td>
    <td><code>string</code></td>
    <td>The customer managed key used to encrypt sensitive information in the user settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deepLinkAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can use deep links that open automatically when connecting to a session. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="disconnectTimeoutInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that a streaming session remains active after users disconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="downloadAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can download files from the streaming session to the local device. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="idleDisconnectTimeoutInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the disconnect timeout interval begins.</td>
</tr>
<tr>
    <td><CopyableCode code="pasteAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can paste text from the local device to the streaming session. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="printAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can print to the local device. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="toolbarConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.</td>
</tr>
<tr>
    <td><CopyableCode code="uploadAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can upload files from the local device to the streaming session. (Disabled, Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="userSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="webAuthnAllowed" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user can use WebAuthn redirection for passwordless login to websites within the streaming session. (Disabled, Enabled)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_settings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userSettings" /></td>
    <td><code>array</code></td>
    <td>The user settings.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_user_settings"><CopyableCode code="get_user_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_settings_arn"><code>user_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets user settings.</td>
</tr>
<tr>
    <td><a href="#list_user_settings"><CopyableCode code="list_user_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of user settings.</td>
</tr>
<tr>
    <td><a href="#create_user_settings"><CopyableCode code="create_user_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-copyAllowed"><code>copyAllowed</code></a>, <a href="#parameter-pasteAllowed"><code>pasteAllowed</code></a>, <a href="#parameter-downloadAllowed"><code>downloadAllowed</code></a>, <a href="#parameter-uploadAllowed"><code>uploadAllowed</code></a>, <a href="#parameter-printAllowed"><code>printAllowed</code></a></td>
    <td></td>
    <td>Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.</td>
</tr>
<tr>
    <td><a href="#associate_user_settings"><CopyableCode code="associate_user_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-userSettingsArn"><code>userSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a user settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_user_settings"><CopyableCode code="disassociate_user_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates user settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_user_settings"><CopyableCode code="update_user_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_settings_arn"><code>user_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the user settings.</td>
</tr>
<tr>
    <td><a href="#delete_user_settings"><CopyableCode code="delete_user_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_settings_arn"><code>user_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes user settings.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-userSettingsArn">
    <td><CopyableCode code="userSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user settings.</td>
</tr>
<tr id="parameter-user_settings_arn">
    <td><CopyableCode code="user_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user settings.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_settings"
    values={[
        { label: 'get_user_settings', value: 'get_user_settings' },
        { label: 'list_user_settings', value: 'list_user_settings' }
    ]}
>
<TabItem value="get_user_settings">

Gets user settings.

```sql
SELECT
additionalEncryptionContext,
associatedPortalArns,
brandingConfiguration,
cookieSynchronizationConfiguration,
copyAllowed,
customerManagedKey,
deepLinkAllowed,
disconnectTimeoutInMinutes,
downloadAllowed,
idleDisconnectTimeoutInMinutes,
pasteAllowed,
printAllowed,
toolbarConfiguration,
uploadAllowed,
userSettingsArn,
webAuthnAllowed
FROM aws.workspaces_web.user_settings
WHERE user_settings_arn = '{{ user_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_settings">

Retrieves a list of user settings.

```sql
SELECT
nextToken,
userSettings
FROM aws.workspaces_web.user_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_settings"
    values={[
        { label: 'create_user_settings', value: 'create_user_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_settings">

Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.

```sql
INSERT INTO aws.workspaces_web.user_settings (
copyAllowed,
pasteAllowed,
downloadAllowed,
uploadAllowed,
printAllowed,
tags,
disconnectTimeoutInMinutes,
idleDisconnectTimeoutInMinutes,
clientToken,
cookieSynchronizationConfiguration,
customerManagedKey,
additionalEncryptionContext,
deepLinkAllowed,
toolbarConfiguration,
brandingConfigurationInput,
webAuthnAllowed,
region
)
SELECT 
'{{ copyAllowed }}' /* required */,
'{{ pasteAllowed }}' /* required */,
'{{ downloadAllowed }}' /* required */,
'{{ uploadAllowed }}' /* required */,
'{{ printAllowed }}' /* required */,
'{{ tags }}',
{{ disconnectTimeoutInMinutes }},
{{ idleDisconnectTimeoutInMinutes }},
'{{ clientToken }}',
'{{ cookieSynchronizationConfiguration }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ deepLinkAllowed }}',
'{{ toolbarConfiguration }}',
'{{ brandingConfigurationInput }}',
'{{ webAuthnAllowed }}',
'{{ region }}'
RETURNING
userSettingsArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_settings resource.
    - name: copyAllowed
      value: "{{ copyAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: pasteAllowed
      value: "{{ pasteAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: downloadAllowed
      value: "{{ downloadAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: uploadAllowed
      value: "{{ uploadAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: printAllowed
      value: "{{ printAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: disconnectTimeoutInMinutes
      value: {{ disconnectTimeoutInMinutes }}
    - name: idleDisconnectTimeoutInMinutes
      value: {{ idleDisconnectTimeoutInMinutes }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: cookieSynchronizationConfiguration
      description: |
        The configuration that specifies which cookies should be synchronized from the end user's local browser to the remote browser.
      value:
        allowlist:
          - domain: "{{ domain }}"
            name: "{{ name }}"
            path: "{{ path }}"
        blocklist:
          - domain: "{{ domain }}"
            name: "{{ name }}"
            path: "{{ path }}"
    - name: customerManagedKey
      value: "{{ customerManagedKey }}"
    - name: additionalEncryptionContext
      value: "{{ additionalEncryptionContext }}"
    - name: deepLinkAllowed
      value: "{{ deepLinkAllowed }}"
      valid_values: ['Disabled', 'Enabled']
    - name: toolbarConfiguration
      description: |
        The configuration of the toolbar. This allows administrators to select the toolbar type and visual mode, set maximum display resolution for sessions, and choose which items are visible to end users during their sessions. If administrators do not modify these settings, end users retain control over their toolbar preferences.
      value:
        toolbarType: "{{ toolbarType }}"
        visualMode: "{{ visualMode }}"
        hiddenToolbarItems:
          - "{{ hiddenToolbarItems }}"
        maxDisplayResolution: "{{ maxDisplayResolution }}"
    - name: brandingConfigurationInput
      description: |
        The input configuration for creating branding settings.
      value:
        logo:
          blob: "{{ blob }}"
          s3Uri: "{{ s3Uri }}"
        wallpaper:
          blob: "{{ blob }}"
          s3Uri: "{{ s3Uri }}"
        favicon:
          blob: "{{ blob }}"
          s3Uri: "{{ s3Uri }}"
        localizedStrings: "{{ localizedStrings }}"
        colorTheme: "{{ colorTheme }}"
        termsOfService: "{{ termsOfService }}"
    - name: webAuthnAllowed
      value: "{{ webAuthnAllowed }}"
      valid_values: ['Disabled', 'Enabled']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_user_settings"
    values={[
        { label: 'associate_user_settings', value: 'associate_user_settings' },
        { label: 'disassociate_user_settings', value: 'disassociate_user_settings' },
        { label: 'update_user_settings', value: 'update_user_settings' }
    ]}
>
<TabItem value="associate_user_settings">

Associates a user settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.user_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND userSettingsArn = '{{ userSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
portalArn,
userSettingsArn;
```
</TabItem>
<TabItem value="disassociate_user_settings">

Disassociates user settings from a web portal.

```sql
UPDATE aws.workspaces_web.user_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_user_settings">

Updates the user settings.

```sql
UPDATE aws.workspaces_web.user_settings
SET 
copyAllowed = '{{ copyAllowed }}',
pasteAllowed = '{{ pasteAllowed }}',
downloadAllowed = '{{ downloadAllowed }}',
uploadAllowed = '{{ uploadAllowed }}',
printAllowed = '{{ printAllowed }}',
disconnectTimeoutInMinutes = {{ disconnectTimeoutInMinutes }},
idleDisconnectTimeoutInMinutes = {{ idleDisconnectTimeoutInMinutes }},
clientToken = '{{ clientToken }}',
cookieSynchronizationConfiguration = '{{ cookieSynchronizationConfiguration }}',
deepLinkAllowed = '{{ deepLinkAllowed }}',
toolbarConfiguration = '{{ toolbarConfiguration }}',
brandingConfigurationInput = '{{ brandingConfigurationInput }}',
webAuthnAllowed = '{{ webAuthnAllowed }}'
WHERE 
user_settings_arn = '{{ user_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
userSettings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_settings"
    values={[
        { label: 'delete_user_settings', value: 'delete_user_settings' }
    ]}
>
<TabItem value="delete_user_settings">

Deletes user settings.

```sql
DELETE FROM aws.workspaces_web.user_settings
WHERE user_settings_arn = '{{ user_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
