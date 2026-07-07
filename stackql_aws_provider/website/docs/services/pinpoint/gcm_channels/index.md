--- 
title: gcm_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - gcm_channels
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>gcm_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gcm_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.gcm_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gcm_channel"
    values={[
        { label: 'get_gcm_channel', value: 'get_gcm_channel' }
    ]}
>
<TabItem value="get_gcm_channel">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the GCM channel applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the GCM channel was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Credential" /></td>
    <td><code>string</code></td>
    <td>The Web API Key, also referred to as an API_KEY or server key, that you received from Google to communicate with Google services.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultAuthenticationMethod" /></td>
    <td><code>string</code></td>
    <td>The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the GCM channel is enabled for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="HasCredential" /></td>
    <td><code>boolean</code></td>
    <td>(Not used) This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="HasFcmServiceCredentials" /></td>
    <td><code>boolean</code></td>
    <td>Returns true if the JSON file provided by Google during registration process was used in the ServiceJson field of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="IsArchived" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the GCM channel is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last modified the GCM channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the GCM channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the GCM channel.</td>
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
    <td><a href="#get_gcm_channel"><CopyableCode code="get_gcm_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of the GCM channel for an application.</td>
</tr>
<tr>
    <td><a href="#update_gcm_channel"><CopyableCode code="update_gcm_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GCMChannelRequest"><code>GCMChannelRequest</code></a></td>
    <td></td>
    <td>Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.</td>
</tr>
<tr>
    <td><a href="#delete_gcm_channel"><CopyableCode code="delete_gcm_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the GCM channel for an application and deletes any existing settings for the channel.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_gcm_channel"
    values={[
        { label: 'get_gcm_channel', value: 'get_gcm_channel' }
    ]}
>
<TabItem value="get_gcm_channel">

Retrieves information about the status and settings of the GCM channel for an application.

```sql
SELECT
ApplicationId,
CreationDate,
Credential,
DefaultAuthenticationMethod,
Enabled,
HasCredential,
HasFcmServiceCredentials,
Id,
IsArchived,
LastModifiedBy,
LastModifiedDate,
Platform,
Version
FROM aws.pinpoint.gcm_channels
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_gcm_channel"
    values={[
        { label: 'update_gcm_channel', value: 'update_gcm_channel' }
    ]}
>
<TabItem value="update_gcm_channel">

Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.

```sql
UPDATE aws.pinpoint.gcm_channels
SET 
GCMChannelRequest = '{{ GCMChannelRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND GCMChannelRequest = '{{ GCMChannelRequest }}' --required
RETURNING
GCMChannelResponse;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gcm_channel"
    values={[
        { label: 'delete_gcm_channel', value: 'delete_gcm_channel' }
    ]}
>
<TabItem value="delete_gcm_channel">

Disables the GCM channel for an application and deletes any existing settings for the channel.

```sql
DELETE FROM aws.pinpoint.gcm_channels
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
