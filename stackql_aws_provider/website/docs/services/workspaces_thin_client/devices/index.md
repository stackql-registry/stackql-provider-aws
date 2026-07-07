--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - workspaces_thin_client
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_thin_client.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;24&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the device. (pattern: &lt;code&gt;$|^&#91;0-9\p&#123;IsAlphabetic&#125;+:,.@'" -&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currentSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set currently installed on the device. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="currentSoftwareSetVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the software set currently installed on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="desiredSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set which the device has been set to. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment the device is associated with. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the device. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastConnectedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent session on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPostureAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent check-in of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUserId" /></td>
    <td><code>string</code></td>
    <td>The user ID of the most recent session on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The model number of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set that is pending to be installed on the device. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the software set that is pending to be installed on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The hardware serial number of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetComplianceStatus" /></td>
    <td><code>string</code></td>
    <td>Describes if the software currently installed on the device is a supported version. (NONE, COMPLIANT, NOT_COMPLIANT)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateSchedule" /></td>
    <td><code>string</code></td>
    <td>An option to define if software updates should be applied within a maintenance window. (USE_MAINTENANCE_WINDOW, APPLY_IMMEDIATELY)</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>Describes if the device has a supported version of software installed. (AVAILABLE, IN_PROGRESS, UP_TO_DATE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device. (REGISTERED, DEREGISTERING, DEREGISTERED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_devices">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;24&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the device. (pattern: &lt;code&gt;$|^&#91;0-9\p&#123;IsAlphabetic&#125;+:,.@'" -&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:&#91;a-zA-Z0-9\-\/\._&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was created.</td>
</tr>
<tr>
    <td><CopyableCode code="currentSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set currently installed on the device. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desiredSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set which the device has been set to. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment the device is associated with. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastConnectedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent session on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPostureAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent check-in of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUserId" /></td>
    <td><code>string</code></td>
    <td>The user ID of the most recent session on the device.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The model number of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="pendingSoftwareSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the software set that is pending to be installed on the device. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,9&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serialNumber" /></td>
    <td><code>string</code></td>
    <td>The hardware serial number of the device.</td>
</tr>
<tr>
    <td><CopyableCode code="softwareSetUpdateSchedule" /></td>
    <td><code>string</code></td>
    <td>An option to define if software updates should be applied within a maintenance window. (USE_MAINTENANCE_WINDOW, APPLY_IMMEDIATELY)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device. (REGISTERED, DEREGISTERING, DEREGISTERED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device was updated.</td>
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
    <td><a href="#get_device"><CopyableCode code="get_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information for a thin client device.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of thin client devices.</td>
</tr>
<tr>
    <td><a href="#update_device"><CopyableCode code="update_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a thin client device.</td>
</tr>
<tr>
    <td><a href="#delete_device"><CopyableCode code="delete_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a thin client device.</td>
</tr>
<tr>
    <td><a href="#deregister_device"><CopyableCode code="deregister_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a thin client device.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device to deregister.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_device"
    values={[
        { label: 'get_device', value: 'get_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="get_device">

Returns information for a thin client device.

```sql
SELECT
id,
name,
arn,
createdAt,
currentSoftwareSetId,
currentSoftwareSetVersion,
desiredSoftwareSetId,
environmentId,
kmsKeyArn,
lastConnectedAt,
lastPostureAt,
lastUserId,
model,
pendingSoftwareSetId,
pendingSoftwareSetVersion,
serialNumber,
softwareSetComplianceStatus,
softwareSetUpdateSchedule,
softwareSetUpdateStatus,
status,
updatedAt
FROM aws.workspaces_thin_client.devices
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

Returns a list of thin client devices.

```sql
SELECT
id,
name,
arn,
createdAt,
currentSoftwareSetId,
desiredSoftwareSetId,
environmentId,
lastConnectedAt,
lastPostureAt,
lastUserId,
model,
pendingSoftwareSetId,
serialNumber,
softwareSetUpdateSchedule,
status,
updatedAt
FROM aws.workspaces_thin_client.devices
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device"
    values={[
        { label: 'update_device', value: 'update_device' }
    ]}
>
<TabItem value="update_device">

Updates a thin client device.

```sql
UPDATE aws.workspaces_thin_client.devices
SET 
name = '{{ name }}',
desiredSoftwareSetId = '{{ desiredSoftwareSetId }}',
softwareSetUpdateSchedule = '{{ softwareSetUpdateSchedule }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
device;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_device"
    values={[
        { label: 'delete_device', value: 'delete_device' }
    ]}
>
<TabItem value="delete_device">

Deletes a thin client device.

```sql
DELETE FROM aws.workspaces_thin_client.devices
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deregister_device"
    values={[
        { label: 'deregister_device', value: 'deregister_device' }
    ]}
>
<TabItem value="deregister_device">

Deregisters a thin client device.

```sql
EXEC aws.workspaces_thin_client.devices.deregister_device 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"targetDeviceStatus": "{{ targetDeviceStatus }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
