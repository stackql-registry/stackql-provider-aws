--- 
title: portals
hide_title: false
hide_table_of_contents: false
keywords:
  - portals
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

Creates, updates, deletes, gets or lists a <code>portals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.portals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portal"
    values={[
        { label: 'get_portal', value: 'get_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="get_portal">

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
    <td>The additional encryption context of the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="authenticationType" /></td>
    <td><code>string</code></td>
    <td>The type of authentication integration points used when signing into the web portal. Defaults to Standard. Standard web portals are authenticated directly through your identity provider. You need to call CreateIdentityProvider to integrate your identity provider with your web portal. User and group access to your web portal is controlled through your identity provider. IAM Identity Center web portals are authenticated through IAM Identity Center. Identity sources (including external identity provider integration), plus user and group access to your web portal, can be configured in the IAM Identity Center. (Standard, IAM_Identity_Center)</td>
</tr>
<tr>
    <td><CopyableCode code="browserSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the browser settings that is associated with this web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browserType" /></td>
    <td><code>string</code></td>
    <td>The browser that users see when using a streaming session. (Chrome)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the web portal.</td>
</tr>
<tr>
    <td><CopyableCode code="customerManagedKey" /></td>
    <td><code>string</code></td>
    <td>The customer managed key used to encrypt sensitive information in the portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataProtectionSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data protection settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the web portal. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The type and resources of the underlying instance. (standard.regular, standard.large, standard.xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="ipAccessSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IP access settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="maxConcurrentSessions" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of concurrent sessions for the portal.</td>
</tr>
<tr>
    <td><CopyableCode code="networkSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network settings that is associated with the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portalCustomDomain" /></td>
    <td><code>string</code></td>
    <td>The custom domain of the web portal that users access in order to start streaming sessions. (pattern: &lt;code&gt;(|&#91;a-zA-Z0-9&#93;?((?!-)(&#91;A-Za-z0-9-&#93;*&#91;A-Za-z0-9&#93;)\.)+&#91;a-zA-Z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portalEndpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint URL of the web portal that users access in order to start streaming sessions. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;(?:&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?\.)+&#91;a-z0-9&#93;&#91;a-z0-9-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portalStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the web portal. (Incomplete, Pending, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="rendererType" /></td>
    <td><code>string</code></td>
    <td>The renderer that is used in streaming sessions. (AppStream)</td>
</tr>
<tr>
    <td><CopyableCode code="sessionLoggerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the session logger that is assocaited with the portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>A message that explains why the web portal is in its current status. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trustStoreArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trust store that is associated with the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userAccessLoggingSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user access logging settings that is associated with the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user settings that is associated with the web portal. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_portals">

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
    <td><CopyableCode code="portals" /></td>
    <td><code>array</code></td>
    <td>The portals in the list.</td>
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
    <td><a href="#get_portal"><CopyableCode code="get_portal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the web portal.</td>
</tr>
<tr>
    <td><a href="#list_portals"><CopyableCode code="list_portals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list or web portals.</td>
</tr>
<tr>
    <td><a href="#create_portal"><CopyableCode code="create_portal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a web portal.</td>
</tr>
<tr>
    <td><a href="#update_portal"><CopyableCode code="update_portal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a web portal.</td>
</tr>
<tr>
    <td><a href="#delete_portal"><CopyableCode code="delete_portal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a web portal.</td>
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
    defaultValue="get_portal"
    values={[
        { label: 'get_portal', value: 'get_portal' },
        { label: 'list_portals', value: 'list_portals' }
    ]}
>
<TabItem value="get_portal">

Gets the web portal.

```sql
SELECT
additionalEncryptionContext,
authenticationType,
browserSettingsArn,
browserType,
creationDate,
customerManagedKey,
dataProtectionSettingsArn,
displayName,
instanceType,
ipAccessSettingsArn,
maxConcurrentSessions,
networkSettingsArn,
portalArn,
portalCustomDomain,
portalEndpoint,
portalStatus,
rendererType,
sessionLoggerArn,
statusReason,
trustStoreArn,
userAccessLoggingSettingsArn,
userSettingsArn
FROM aws.workspaces_web.portals
WHERE portal_arn = '{{ portal_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_portals">

Retrieves a list or web portals.

```sql
SELECT
nextToken,
portals
FROM aws.workspaces_web.portals
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portal"
    values={[
        { label: 'create_portal', value: 'create_portal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portal">

Creates a web portal.

```sql
INSERT INTO aws.workspaces_web.portals (
displayName,
tags,
customerManagedKey,
additionalEncryptionContext,
clientToken,
authenticationType,
instanceType,
maxConcurrentSessions,
portalCustomDomain,
region
)
SELECT 
'{{ displayName }}',
'{{ tags }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ clientToken }}',
'{{ authenticationType }}',
'{{ instanceType }}',
{{ maxConcurrentSessions }},
'{{ portalCustomDomain }}',
'{{ region }}'
RETURNING
portalArn,
portalEndpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portals
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portals resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: customerManagedKey
      value: "{{ customerManagedKey }}"
    - name: additionalEncryptionContext
      value: "{{ additionalEncryptionContext }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: authenticationType
      value: "{{ authenticationType }}"
      valid_values: ['Standard', 'IAM_Identity_Center']
    - name: instanceType
      value: "{{ instanceType }}"
      valid_values: ['standard.regular', 'standard.large', 'standard.xlarge']
    - name: maxConcurrentSessions
      value: {{ maxConcurrentSessions }}
    - name: portalCustomDomain
      value: "{{ portalCustomDomain }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_portal"
    values={[
        { label: 'update_portal', value: 'update_portal' }
    ]}
>
<TabItem value="update_portal">

Updates a web portal.

```sql
UPDATE aws.workspaces_web.portals
SET 
displayName = '{{ displayName }}',
authenticationType = '{{ authenticationType }}',
instanceType = '{{ instanceType }}',
maxConcurrentSessions = {{ maxConcurrentSessions }},
portalCustomDomain = '{{ portalCustomDomain }}'
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
portal;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portal"
    values={[
        { label: 'delete_portal', value: 'delete_portal' }
    ]}
>
<TabItem value="delete_portal">

Deletes a web portal.

```sql
DELETE FROM aws.workspaces_web.portals
WHERE portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
