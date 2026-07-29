--- 
title: multicast_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - multicast_groups
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

Creates, updates, deletes, gets or lists a <code>multicast_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multicast_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.multicast_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multicast_group"
    values={[
        { label: 'get_multicast_group', value: 'get_multicast_group' },
        { label: 'list_multicast_groups', value: 'list_multicast_groups' }
    ]}
>
<TabItem value="get_multicast_group">

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
    <td>The arn of the multicast group.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the multicast group.</td>
</tr>
<tr>
    <td><CopyableCode code="lo_ra_wan" /></td>
    <td><code>object</code></td>
    <td>The LoRaWAN information that is to be returned from getting multicast group information.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the multicast group.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the multicast group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_multicast_groups">

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
    <td><CopyableCode code="multicast_group_list" /></td>
    <td><code>array</code></td>
    <td>List of multicast groups.</td>
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
    <td><a href="#get_multicast_group"><CopyableCode code="get_multicast_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a multicast group.</td>
</tr>
<tr>
    <td><a href="#list_multicast_groups"><CopyableCode code="list_multicast_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the multicast groups registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_multicast_group"><CopyableCode code="create_multicast_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LoRaWAN"><code>LoRaWAN</code></a></td>
    <td></td>
    <td>Creates a multicast group.</td>
</tr>
<tr>
    <td><a href="#associate_wireless_device_with_multicast_group"><CopyableCode code="associate_wireless_device_with_multicast_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WirelessDeviceId"><code>WirelessDeviceId</code></a></td>
    <td></td>
    <td>Associates a wireless device with a multicast group.</td>
</tr>
<tr>
    <td><a href="#disassociate_wireless_device_from_multicast_group"><CopyableCode code="disassociate_wireless_device_from_multicast_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-wireless_device_id"><code>wireless_device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a wireless device from a multicast group.</td>
</tr>
<tr>
    <td><a href="#update_multicast_group"><CopyableCode code="update_multicast_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a multicast group session.</td>
</tr>
<tr>
    <td><a href="#delete_multicast_group"><CopyableCode code="delete_multicast_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a multicast group if it is not in use by a FUOTA task.</td>
</tr>
<tr>
    <td><a href="#cancel_multicast_group_session"><CopyableCode code="cancel_multicast_group_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an existing multicast group session.</td>
</tr>
<tr>
    <td><a href="#start_multicast_group_session"><CopyableCode code="start_multicast_group_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LoRaWAN"><code>LoRaWAN</code></a></td>
    <td></td>
    <td>Starts a multicast group session.</td>
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
    defaultValue="get_multicast_group"
    values={[
        { label: 'get_multicast_group', value: 'get_multicast_group' },
        { label: 'list_multicast_groups', value: 'list_multicast_groups' }
    ]}
>
<TabItem value="get_multicast_group">

Gets information about a multicast group.

```sql
SELECT
arn,
created_at,
description,
id,
lo_ra_wan,
name,
status
FROM aws.iotwireless.multicast_groups
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_multicast_groups">

Lists the multicast groups registered to your AWS account.

```sql
SELECT
multicast_group_list,
next_token
FROM aws.iotwireless.multicast_groups
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multicast_group"
    values={[
        { label: 'create_multicast_group', value: 'create_multicast_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multicast_group">

Creates a multicast group.

```sql
INSERT INTO aws.iotwireless.multicast_groups (
Name,
Description,
ClientRequestToken,
LoRaWAN,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ ClientRequestToken }}',
'{{ LoRaWAN }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multicast_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multicast_groups resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the multicast group.
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
        The LoRaWAN information that is to be used with the multicast group.
      value:
        RfRegion: "{{ RfRegion }}"
        DlClass: "{{ DlClass }}"
        ParticipatingGateways:
          GatewayList:
            - "{{ GatewayList }}"
          TransmissionInterval: {{ TransmissionInterval }}
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_wireless_device_with_multicast_group"
    values={[
        { label: 'associate_wireless_device_with_multicast_group', value: 'associate_wireless_device_with_multicast_group' },
        { label: 'disassociate_wireless_device_from_multicast_group', value: 'disassociate_wireless_device_from_multicast_group' },
        { label: 'update_multicast_group', value: 'update_multicast_group' }
    ]}
>
<TabItem value="associate_wireless_device_with_multicast_group">

Associates a wireless device with a multicast group.

```sql
UPDATE aws.iotwireless.multicast_groups
SET 
WirelessDeviceId = '{{ WirelessDeviceId }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND WirelessDeviceId = '{{ WirelessDeviceId }}' --required;
```
</TabItem>
<TabItem value="disassociate_wireless_device_from_multicast_group">

Disassociates a wireless device from a multicast group.

```sql
UPDATE aws.iotwireless.multicast_groups
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND wireless_device_id = '{{ wireless_device_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_multicast_group">

Updates properties of a multicast group session.

```sql
UPDATE aws.iotwireless.multicast_groups
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
LoRaWAN = '{{ LoRaWAN }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multicast_group"
    values={[
        { label: 'delete_multicast_group', value: 'delete_multicast_group' }
    ]}
>
<TabItem value="delete_multicast_group">

Deletes a multicast group if it is not in use by a FUOTA task.

```sql
DELETE FROM aws.iotwireless.multicast_groups
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_multicast_group_session"
    values={[
        { label: 'cancel_multicast_group_session', value: 'cancel_multicast_group_session' },
        { label: 'start_multicast_group_session', value: 'start_multicast_group_session' }
    ]}
>
<TabItem value="cancel_multicast_group_session">

Cancels an existing multicast group session.

```sql
EXEC aws.iotwireless.multicast_groups.cancel_multicast_group_session 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_multicast_group_session">

Starts a multicast group session.

```sql
EXEC aws.iotwireless.multicast_groups.start_multicast_group_session 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"LoRaWAN": "{{ LoRaWAN }}"
}'
;
```
</TabItem>
</Tabs>
