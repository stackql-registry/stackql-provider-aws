--- 
title: baidu_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - baidu_channels
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

Creates, updates, deletes, gets or lists a <code>baidu_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="baidu_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.baidu_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_baidu_channel"
    values={[
        { label: 'get_baidu_channel', value: 'get_baidu_channel' }
    ]}
>
<TabItem value="get_baidu_channel">

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
    <td>The unique identifier for the application that the Baidu channel applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the Baidu channel was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Credential" /></td>
    <td><code>string</code></td>
    <td>The API key that you received from the Baidu Cloud Push service to communicate with the service.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the Baidu channel is enabled for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="HasCredential" /></td>
    <td><code>boolean</code></td>
    <td>(Not used) This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="IsArchived" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the Baidu channel is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last modified the Baidu channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the Baidu channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the Baidu channel.</td>
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
    <td><a href="#get_baidu_channel"><CopyableCode code="get_baidu_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of the Baidu channel for an application.</td>
</tr>
<tr>
    <td><a href="#update_baidu_channel"><CopyableCode code="update_baidu_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaiduChannelRequest"><code>BaiduChannelRequest</code></a></td>
    <td></td>
    <td>Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.</td>
</tr>
<tr>
    <td><a href="#delete_baidu_channel"><CopyableCode code="delete_baidu_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the Baidu channel for an application and deletes any existing settings for the channel.</td>
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
    defaultValue="get_baidu_channel"
    values={[
        { label: 'get_baidu_channel', value: 'get_baidu_channel' }
    ]}
>
<TabItem value="get_baidu_channel">

Retrieves information about the status and settings of the Baidu channel for an application.

```sql
SELECT
ApplicationId,
CreationDate,
Credential,
Enabled,
HasCredential,
Id,
IsArchived,
LastModifiedBy,
LastModifiedDate,
Platform,
Version
FROM aws.pinpoint.baidu_channels
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_baidu_channel"
    values={[
        { label: 'update_baidu_channel', value: 'update_baidu_channel' }
    ]}
>
<TabItem value="update_baidu_channel">

Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.

```sql
UPDATE aws.pinpoint.baidu_channels
SET 
BaiduChannelRequest = '{{ BaiduChannelRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND BaiduChannelRequest = '{{ BaiduChannelRequest }}' --required
RETURNING
BaiduChannelResponse;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_baidu_channel"
    values={[
        { label: 'delete_baidu_channel', value: 'delete_baidu_channel' }
    ]}
>
<TabItem value="delete_baidu_channel">

Disables the Baidu channel for an application and deletes any existing settings for the channel.

```sql
DELETE FROM aws.pinpoint.baidu_channels
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
