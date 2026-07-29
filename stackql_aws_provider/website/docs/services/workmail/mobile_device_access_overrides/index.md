--- 
title: mobile_device_access_overrides
hide_title: false
hide_table_of_contents: false
keywords:
  - mobile_device_access_overrides
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mobile_device_access_overrides</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mobile_device_access_overrides" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mobile_device_access_overrides" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mobile_device_access_override"
    values={[
        { label: 'get_mobile_device_access_override', value: 'get_mobile_device_access_override' },
        { label: 'list_mobile_device_access_overrides', value: 'list_mobile_device_access_overrides' }
    ]}
>
<TabItem value="get_mobile_device_access_override">

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
    <td><CopyableCode code="date_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the override was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the description was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the override. (pattern: &lt;code&gt;&#91;\S\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The device to which the access override applies. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="effect" /></td>
    <td><code>string</code></td>
    <td>The effect of the override, ALLOW or DENY. (ALLOW, DENY)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The WorkMail user to which the access override applies.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mobile_device_access_overrides">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. The value is “null” when there are no more results to return. (pattern: &lt;code&gt;&#91;\S\s&#93;*|&#91;a-zA-Z0-9/+=&#93;&#123;1,1024&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>array</code></td>
    <td>The list of mobile device access overrides that exist for the specified WorkMail organization and user.</td>
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
    <td><a href="#get_mobile_device_access_override"><CopyableCode code="get_mobile_device_access_override" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the mobile device access override for the given WorkMail organization, user, and device.</td>
</tr>
<tr>
    <td><a href="#list_mobile_device_access_overrides"><CopyableCode code="list_mobile_device_access_overrides" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.</td>
</tr>
<tr>
    <td><a href="#put_mobile_device_access_override"><CopyableCode code="put_mobile_device_access_override" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a></td>
    <td></td>
    <td>Creates or updates a mobile device access override for the given WorkMail organization, user, and device.</td>
</tr>
<tr>
    <td><a href="#delete_mobile_device_access_override"><CopyableCode code="delete_mobile_device_access_override" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the mobile device access override for the given WorkMail organization, user, and device. Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_mobile_device_access_override"
    values={[
        { label: 'get_mobile_device_access_override', value: 'get_mobile_device_access_override' },
        { label: 'list_mobile_device_access_overrides', value: 'list_mobile_device_access_overrides' }
    ]}
>
<TabItem value="get_mobile_device_access_override">

Gets the mobile device access override for the given WorkMail organization, user, and device.

```sql
SELECT
date_created,
date_modified,
description,
device_id,
effect,
user_id
FROM aws.workmail.mobile_device_access_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mobile_device_access_overrides">

Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device.

```sql
SELECT
next_token,
overrides
FROM aws.workmail.mobile_device_access_overrides
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_mobile_device_access_override"
    values={[
        { label: 'put_mobile_device_access_override', value: 'put_mobile_device_access_override' }
    ]}
>
<TabItem value="put_mobile_device_access_override">

Creates or updates a mobile device access override for the given WorkMail organization, user, and device.

```sql
REPLACE aws.workmail.mobile_device_access_overrides
SET 
OrganizationId = '{{ OrganizationId }}',
UserId = '{{ UserId }}',
DeviceId = '{{ DeviceId }}',
Effect = '{{ Effect }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND UserId = '{{ UserId }}' --required
AND DeviceId = '{{ DeviceId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mobile_device_access_override"
    values={[
        { label: 'delete_mobile_device_access_override', value: 'delete_mobile_device_access_override' }
    ]}
>
<TabItem value="delete_mobile_device_access_override">

Deletes the mobile device access override for the given WorkMail organization, user, and device. Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.

```sql
DELETE FROM aws.workmail.mobile_device_access_overrides
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
