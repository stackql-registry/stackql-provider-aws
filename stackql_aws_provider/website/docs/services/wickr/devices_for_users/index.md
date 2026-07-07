--- 
title: devices_for_users
hide_title: false
hide_table_of_contents: false
keywords:
  - devices_for_users
  - wickr
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

Creates, updates, deletes, gets or lists a <code>devices_for_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices_for_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.devices_for_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_devices_for_user"
    values={[
        { label: 'list_devices_for_user', value: 'list_devices_for_user' }
    ]}
>
<TabItem value="list_devices_for_user">

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
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique application ID for the Wickr app on this device. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the device first appeared in the Wickr database. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastLogin" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the device last successfully logged into Wickr. This is also used to determine SSO idle time. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="statusText" /></td>
    <td><code>string</code></td>
    <td>The current status of the device, either 'Active' or 'Reset' depending on whether the device is currently active or has been marked for reset. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="suspend" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the device is suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The operating system of the device (e.g., 'MacOSX', 'Windows', 'iOS', 'Android'). (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_devices_for_user"><CopyableCode code="list_devices_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a></td>
    <td>Retrieves a paginated list of devices associated with a specific user in a Wickr network. This operation returns information about all devices where the user has logged into Wickr.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network containing the user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user whose devices will be listed.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of devices to return in a single page. Valid range is 1-100. Default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</td>
</tr>
<tr id="parameter-sortDirection">
    <td><CopyableCode code="sortDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</td>
</tr>
<tr id="parameter-sortFields">
    <td><CopyableCode code="sortFields" /></td>
    <td><code>string</code></td>
    <td>The fields to sort devices by. Multiple fields can be specified by separating them with '+'. Accepted values include 'lastlogin', 'type', 'suspend', and 'created'.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_devices_for_user"
    values={[
        { label: 'list_devices_for_user', value: 'list_devices_for_user' }
    ]}
>
<TabItem value="list_devices_for_user">

Retrieves a paginated list of devices associated with a specific user in a Wickr network. This operation returns information about all devices where the user has logged into Wickr.

```sql
SELECT
appId,
created,
lastLogin,
statusText,
suspend,
type_
FROM aws.wickr.devices_for_users
WHERE network_id = '{{ network_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
;
```
</TabItem>
</Tabs>
