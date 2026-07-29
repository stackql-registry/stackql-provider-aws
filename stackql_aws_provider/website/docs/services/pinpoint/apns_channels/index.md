--- 
title: apns_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - apns_channels
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

Creates, updates, deletes, gets or lists an <code>apns_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apns_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.apns_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_apns_channel"
    values={[
        { label: 'get_apns_channel', value: 'get_apns_channel' }
    ]}
>
<TabItem value="get_apns_channel">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the APNs channel applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the APNs channel was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="default_authentication_method" /></td>
    <td><code>string</code></td>
    <td>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the APNs channel is enabled for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="has_credential" /></td>
    <td><code>boolean</code></td>
    <td>(Not used) This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="has_token_key" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="is_archived" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the APNs channel is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The user who last modified the APNs channel.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the APNs channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the APNs channel.</td>
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
    <td><a href="#get_apns_channel"><CopyableCode code="get_apns_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of the APNs channel for an application.</td>
</tr>
<tr>
    <td><a href="#update_apns_channel"><CopyableCode code="update_apns_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-APNSChannelRequest"><code>APNSChannelRequest</code></a></td>
    <td></td>
    <td>Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.</td>
</tr>
<tr>
    <td><a href="#delete_apns_channel"><CopyableCode code="delete_apns_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the APNs channel for an application and deletes any existing settings for the channel.</td>
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
    defaultValue="get_apns_channel"
    values={[
        { label: 'get_apns_channel', value: 'get_apns_channel' }
    ]}
>
<TabItem value="get_apns_channel">

Retrieves information about the status and settings of the APNs channel for an application.

```sql
SELECT
application_id,
creation_date,
default_authentication_method,
enabled,
has_credential,
has_token_key,
id,
is_archived,
last_modified_by,
last_modified_date,
platform,
version
FROM aws.pinpoint.apns_channels
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_apns_channel"
    values={[
        { label: 'update_apns_channel', value: 'update_apns_channel' }
    ]}
>
<TabItem value="update_apns_channel">

Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.

```sql
UPDATE aws.pinpoint.apns_channels
SET 
APNSChannelRequest = '{{ APNSChannelRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND APNSChannelRequest = '{{ APNSChannelRequest }}' --required
RETURNING
apns_channel_response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_apns_channel"
    values={[
        { label: 'delete_apns_channel', value: 'delete_apns_channel' }
    ]}
>
<TabItem value="delete_apns_channel">

Disables the APNs channel for an application and deletes any existing settings for the channel.

```sql
DELETE FROM aws.pinpoint.apns_channels
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
