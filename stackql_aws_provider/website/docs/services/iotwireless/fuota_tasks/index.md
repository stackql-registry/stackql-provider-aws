--- 
title: fuota_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - fuota_tasks
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>fuota_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fuota_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.fuota_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fuota_task"
    values={[
        { label: 'get_fuota_task', value: 'get_fuota_task' },
        { label: 'list_fuota_tasks', value: 'list_fuota_tasks' }
    ]}
>
<TabItem value="get_fuota_task">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The arn of a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Created at timestamp for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="descriptor" /></td>
    <td><code>string</code></td>
    <td>The descriptor is the metadata about the file that is transferred to the device using FUOTA, such as the software version. It is a binary field encoded in base64. (pattern: &lt;code&gt;^(?:&#91;A-Za-z0-9+/&#93;&#123;4&#125;)*(?:&#91;A-Za-z0-9+/&#93;&#123;2&#125;==|&#91;A-Za-z0-9+/&#93;&#123;3&#125;=)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firmware_update_image" /></td>
    <td><code>string</code></td>
    <td>The S3 URI points to a firmware update image that is to be used with a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="firmware_update_role" /></td>
    <td><code>string</code></td>
    <td>The firmware update role that is to be used with a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="fragment_interval_ms" /></td>
    <td><code>integer</code></td>
    <td>The interval for sending fragments in milliseconds, rounded to the nearest second. This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="fragment_size_bytes" /></td>
    <td><code>integer</code></td>
    <td>The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="lo_ra_wan" /></td>
    <td><code>object</code></td>
    <td>The LoRaWAN information returned from getting a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a FUOTA task.</td>
</tr>
<tr>
    <td><CopyableCode code="redundancy_percent" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with RedundancyPercent set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a FUOTA task. (Pending, FuotaSession_Waiting, In_FuotaSession, FuotaDone, Delete_Waiting)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fuota_tasks">

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
    <td><CopyableCode code="fuota_task_list" /></td>
    <td><code>array</code></td>
    <td>Lists the FUOTA tasks registered to your AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
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
    <td><a href="#get_fuota_task"><CopyableCode code="get_fuota_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#list_fuota_tasks"><CopyableCode code="list_fuota_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the FUOTA tasks registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_fuota_task"><CopyableCode code="create_fuota_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirmwareUpdateImage"><code>FirmwareUpdateImage</code></a>, <a href="#parameter-FirmwareUpdateRole"><code>FirmwareUpdateRole</code></a></td>
    <td></td>
    <td>Creates a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#associate_multicast_group_with_fuota_task"><CopyableCode code="associate_multicast_group_with_fuota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MulticastGroupId"><code>MulticastGroupId</code></a></td>
    <td></td>
    <td>Associate a multicast group with a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#associate_wireless_device_with_fuota_task"><CopyableCode code="associate_wireless_device_with_fuota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WirelessDeviceId"><code>WirelessDeviceId</code></a></td>
    <td></td>
    <td>Associate a wireless device with a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#disassociate_multicast_group_from_fuota_task"><CopyableCode code="disassociate_multicast_group_from_fuota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-multicast_group_id"><code>multicast_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a multicast group from a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#disassociate_wireless_device_from_fuota_task"><CopyableCode code="disassociate_wireless_device_from_fuota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-wireless_device_id"><code>wireless_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a wireless device from a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#update_fuota_task"><CopyableCode code="update_fuota_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#delete_fuota_task"><CopyableCode code="delete_fuota_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a FUOTA task.</td>
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
    <td></td>
</tr>
<tr id="parameter-multicast_group_id">
    <td><CopyableCode code="multicast_group_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-wireless_device_id">
    <td><CopyableCode code="wireless_device_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fuota_task"
    values={[
        { label: 'get_fuota_task', value: 'get_fuota_task' },
        { label: 'list_fuota_tasks', value: 'list_fuota_tasks' }
    ]}
>
<TabItem value="get_fuota_task">

Gets information about a FUOTA task.

```sql
SELECT
arn,
created_at,
description,
descriptor,
firmware_update_image,
firmware_update_role,
fragment_interval_ms,
fragment_size_bytes,
id,
lo_ra_wan,
name,
redundancy_percent,
status
FROM aws.iotwireless.fuota_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fuota_tasks">

Lists the FUOTA tasks registered to your AWS account.

```sql
SELECT
fuota_task_list,
next_token
FROM aws.iotwireless.fuota_tasks
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fuota_task"
    values={[
        { label: 'create_fuota_task', value: 'create_fuota_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fuota_task">

Creates a FUOTA task.

```sql
INSERT INTO aws.iotwireless.fuota_tasks (
Name,
Description,
ClientRequestToken,
LoRaWAN,
FirmwareUpdateImage,
FirmwareUpdateRole,
Tags,
RedundancyPercent,
FragmentSizeBytes,
FragmentIntervalMS,
Descriptor,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ClientRequestToken }}',
'{{ LoRaWAN }}',
'{{ FirmwareUpdateImage }}' /* required */,
'{{ FirmwareUpdateRole }}' /* required */,
'{{ Tags }}',
{{ RedundancyPercent }},
{{ FragmentSizeBytes }},
{{ FragmentIntervalMS }},
'{{ Descriptor }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fuota_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fuota_tasks resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of a FUOTA task.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new resource.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
    - name: LoRaWAN
      description: |
        The LoRaWAN information used with a FUOTA task.
      value:
        RfRegion: "{{ RfRegion }}"
    - name: FirmwareUpdateImage
      value: "{{ FirmwareUpdateImage }}"
      description: |
        The S3 URI points to a firmware update image that is to be used with a FUOTA task.
    - name: FirmwareUpdateRole
      value: "{{ FirmwareUpdateRole }}"
      description: |
        The firmware update role that is to be used with a FUOTA task.
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: RedundancyPercent
      value: {{ RedundancyPercent }}
      description: |
        The percentage of the added fragments that are redundant. For example, if the size of the firmware image file is 100 bytes and the fragment size is 10 bytes, with RedundancyPercent set to 50(%), the final number of encoded fragments is (100 / 10) + (100 / 10 * 50%) = 15.
    - name: FragmentSizeBytes
      value: {{ FragmentSizeBytes }}
      description: |
        The size of each fragment in bytes. This parameter is supported only for FUOTA tasks with multicast groups.
    - name: FragmentIntervalMS
      value: {{ FragmentIntervalMS }}
      description: |
        The interval for sending fragments in milliseconds, rounded to the nearest second. This interval only determines the timing for when the Cloud sends down the fragments to yor device. There can be a delay for when your device will receive these fragments. This delay depends on the device's class and the communication delay with the cloud.
    - name: Descriptor
      value: "{{ Descriptor }}"
      description: |
        The descriptor is the metadata about the file that is transferred to the device using FUOTA, such as the software version. It is a binary field encoded in base64.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_multicast_group_with_fuota_task"
    values={[
        { label: 'associate_multicast_group_with_fuota_task', value: 'associate_multicast_group_with_fuota_task' },
        { label: 'associate_wireless_device_with_fuota_task', value: 'associate_wireless_device_with_fuota_task' },
        { label: 'disassociate_multicast_group_from_fuota_task', value: 'disassociate_multicast_group_from_fuota_task' },
        { label: 'disassociate_wireless_device_from_fuota_task', value: 'disassociate_wireless_device_from_fuota_task' },
        { label: 'update_fuota_task', value: 'update_fuota_task' }
    ]}
>
<TabItem value="associate_multicast_group_with_fuota_task">

Associate a multicast group with a FUOTA task.

```sql
UPDATE aws.iotwireless.fuota_tasks
SET 
MulticastGroupId = '{{ MulticastGroupId }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND MulticastGroupId = '{{ MulticastGroupId }}' --required;
```
</TabItem>
<TabItem value="associate_wireless_device_with_fuota_task">

Associate a wireless device with a FUOTA task.

```sql
UPDATE aws.iotwireless.fuota_tasks
SET 
WirelessDeviceId = '{{ WirelessDeviceId }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND WirelessDeviceId = '{{ WirelessDeviceId }}' --required;
```
</TabItem>
<TabItem value="disassociate_multicast_group_from_fuota_task">

Disassociates a multicast group from a FUOTA task.

```sql
UPDATE aws.iotwireless.fuota_tasks
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND multicast_group_id = '{{ multicast_group_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="disassociate_wireless_device_from_fuota_task">

Disassociates a wireless device from a FUOTA task.

```sql
UPDATE aws.iotwireless.fuota_tasks
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND wireless_device_id = '{{ wireless_device_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_fuota_task">

Updates properties of a FUOTA task.

```sql
UPDATE aws.iotwireless.fuota_tasks
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
LoRaWAN = '{{ LoRaWAN }}',
FirmwareUpdateImage = '{{ FirmwareUpdateImage }}',
FirmwareUpdateRole = '{{ FirmwareUpdateRole }}',
RedundancyPercent = {{ RedundancyPercent }},
FragmentSizeBytes = {{ FragmentSizeBytes }},
FragmentIntervalMS = {{ FragmentIntervalMS }},
Descriptor = '{{ Descriptor }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fuota_task"
    values={[
        { label: 'delete_fuota_task', value: 'delete_fuota_task' }
    ]}
>
<TabItem value="delete_fuota_task">

Deletes a FUOTA task.

```sql
DELETE FROM aws.iotwireless.fuota_tasks
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
