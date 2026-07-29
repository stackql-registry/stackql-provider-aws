--- 
title: wireless_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_devices
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

Creates, updates, deletes, gets or lists a <code>wireless_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_device"
    values={[
        { label: 'get_wireless_device', value: 'get_wireless_device' },
        { label: 'list_wireless_devices', value: 'list_wireless_devices' }
    ]}
>
<TabItem value="get_wireless_device">

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
    <td>The Amazon Resource Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the new resource.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_name" /></td>
    <td><code>string</code></td>
    <td>The name of the destination to which the device is assigned. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the wireless device.</td>
</tr>
<tr>
    <td><CopyableCode code="lo_ra_wan" /></td>
    <td><code>object</code></td>
    <td>LoRaWAN object for create functions.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="positioning" /></td>
    <td><code>string</code></td>
    <td>The integration status of the Device Location feature for LoRaWAN and Sidewalk devices. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="sidewalk" /></td>
    <td><code>object</code></td>
    <td>Sidewalk device object.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing associated with the wireless device.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing associated with the wireless device. The value is empty if a thing isn't associated with the device.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The wireless device type. (Sidewalk, LoRaWAN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_wireless_devices">

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
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="wireless_device_list" /></td>
    <td><code>array</code></td>
    <td>The ID of the wireless device.</td>
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
    <td><a href="#get_wireless_device"><CopyableCode code="get_wireless_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-identifierType"><code>identifierType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a wireless device.</td>
</tr>
<tr>
    <td><a href="#list_wireless_devices"><CopyableCode code="list_wireless_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-destinationName"><code>destinationName</code></a>, <a href="#parameter-deviceProfileId"><code>deviceProfileId</code></a>, <a href="#parameter-serviceProfileId"><code>serviceProfileId</code></a>, <a href="#parameter-wirelessDeviceType"><code>wirelessDeviceType</code></a>, <a href="#parameter-fuotaTaskId"><code>fuotaTaskId</code></a>, <a href="#parameter-multicastGroupId"><code>multicastGroupId</code></a></td>
    <td>Lists the wireless devices registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_wireless_device"><CopyableCode code="create_wireless_device" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationName"><code>DestinationName</code></a></td>
    <td></td>
    <td>Provisions a wireless device.</td>
</tr>
<tr>
    <td><a href="#associate_wireless_device_with_thing"><CopyableCode code="associate_wireless_device_with_thing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ThingArn"><code>ThingArn</code></a></td>
    <td></td>
    <td>Associates a wireless device with a thing.</td>
</tr>
<tr>
    <td><a href="#update_wireless_device"><CopyableCode code="update_wireless_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a wireless device.</td>
</tr>
<tr>
    <td><a href="#delete_wireless_device"><CopyableCode code="delete_wireless_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a wireless device.</td>
</tr>
<tr>
    <td><a href="#deregister_wireless_device"><CopyableCode code="deregister_wireless_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-WirelessDeviceType"><code>WirelessDeviceType</code></a></td>
    <td>Deregister a wireless device from AWS IoT Wireless.</td>
</tr>
<tr>
    <td><a href="#disassociate_wireless_device_from_thing"><CopyableCode code="disassociate_wireless_device_from_thing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a wireless device from its currently associated thing.</td>
</tr>
<tr>
    <td><a href="#start_wireless_device_import_task"><CopyableCode code="start_wireless_device_import_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationName"><code>DestinationName</code></a></td>
    <td></td>
    <td>Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.</td>
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
    <td>The ID of the resource to update.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the wireless device to deregister from AWS IoT Wireless.</td>
</tr>
<tr id="parameter-identifierType">
    <td><CopyableCode code="identifierType" /></td>
    <td><code>string</code></td>
    <td>The type of identifier used in identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-WirelessDeviceType">
    <td><CopyableCode code="WirelessDeviceType" /></td>
    <td><code>string</code></td>
    <td>The type of wireless device to deregister from AWS IoT Wireless, which can be LoRaWAN or Sidewalk.</td>
</tr>
<tr id="parameter-destinationName">
    <td><CopyableCode code="destinationName" /></td>
    <td><code>string</code></td>
    <td>A filter to list only the wireless devices that use as uplink destination.</td>
</tr>
<tr id="parameter-deviceProfileId">
    <td><CopyableCode code="deviceProfileId" /></td>
    <td><code>string</code></td>
    <td>A filter to list only the wireless devices that use this device profile.</td>
</tr>
<tr id="parameter-fuotaTaskId">
    <td><CopyableCode code="fuotaTaskId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-multicastGroupId">
    <td><CopyableCode code="multicastGroupId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-serviceProfileId">
    <td><CopyableCode code="serviceProfileId" /></td>
    <td><code>string</code></td>
    <td>A filter to list only the wireless devices that use this service profile.</td>
</tr>
<tr id="parameter-wirelessDeviceType">
    <td><CopyableCode code="wirelessDeviceType" /></td>
    <td><code>string</code></td>
    <td>A filter to list only the wireless devices that use this wireless device type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_wireless_device"
    values={[
        { label: 'get_wireless_device', value: 'get_wireless_device' },
        { label: 'list_wireless_devices', value: 'list_wireless_devices' }
    ]}
>
<TabItem value="get_wireless_device">

Gets information about a wireless device.

```sql
SELECT
arn,
description,
destination_name,
id,
lo_ra_wan,
name,
positioning,
sidewalk,
thing_arn,
thing_name,
type
FROM aws.iotwireless.wireless_devices
WHERE identifier = '{{ identifier }}' -- required
AND identifierType = '{{ identifierType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_wireless_devices">

Lists the wireless devices registered to your AWS account.

```sql
SELECT
next_token,
wireless_device_list
FROM aws.iotwireless.wireless_devices
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND destinationName = '{{ destinationName }}'
AND deviceProfileId = '{{ deviceProfileId }}'
AND serviceProfileId = '{{ serviceProfileId }}'
AND wirelessDeviceType = '{{ wirelessDeviceType }}'
AND fuotaTaskId = '{{ fuotaTaskId }}'
AND multicastGroupId = '{{ multicastGroupId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_wireless_device"
    values={[
        { label: 'create_wireless_device', value: 'create_wireless_device' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_wireless_device">

Provisions a wireless device.

```sql
INSERT INTO aws.iotwireless.wireless_devices (
Type,
Name,
Description,
DestinationName,
ClientRequestToken,
LoRaWAN,
Tags,
Positioning,
Sidewalk,
region
)
SELECT 
'{{ Type }}',
'{{ Name }}',
'{{ Description }}',
'{{ DestinationName }}' /* required */,
'{{ ClientRequestToken }}',
'{{ LoRaWAN }}',
'{{ Tags }}',
'{{ Positioning }}',
'{{ Sidewalk }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: wireless_devices
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the wireless_devices resource.
    - name: Type
      value: "{{ Type }}"
      valid_values: ['Sidewalk', 'LoRaWAN']
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new resource.
    - name: DestinationName
      value: "{{ DestinationName }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
    - name: LoRaWAN
      description: |
        LoRaWAN object for create functions.
      value:
        DevEui: "{{ DevEui }}"
        DeviceProfileId: "{{ DeviceProfileId }}"
        ServiceProfileId: "{{ ServiceProfileId }}"
        OtaaV1_1:
          AppKey: "{{ AppKey }}"
          NwkKey: "{{ NwkKey }}"
          JoinEui: "{{ JoinEui }}"
        OtaaV1_0_x:
          AppKey: "{{ AppKey }}"
          AppEui: "{{ AppEui }}"
          JoinEui: "{{ JoinEui }}"
          GenAppKey: "{{ GenAppKey }}"
        AbpV1_1:
          DevAddr: "{{ DevAddr }}"
          SessionKeys:
            FNwkSIntKey: "{{ FNwkSIntKey }}"
            SNwkSIntKey: "{{ SNwkSIntKey }}"
            NwkSEncKey: "{{ NwkSEncKey }}"
            AppSKey: "{{ AppSKey }}"
          FCntStart: {{ FCntStart }}
        AbpV1_0_x:
          DevAddr: "{{ DevAddr }}"
          SessionKeys:
            NwkSKey: "{{ NwkSKey }}"
            AppSKey: "{{ AppSKey }}"
          FCntStart: {{ FCntStart }}
        FPorts:
          Fuota: {{ Fuota }}
          Multicast: {{ Multicast }}
          ClockSync: {{ ClockSync }}
          Positioning:
            ClockSync: {{ ClockSync }}
            Stream: {{ Stream }}
            Gnss: {{ Gnss }}
          Applications:
            - FPort: {{ FPort }}
              Type: "{{ Type }}"
              DestinationName: "{{ DestinationName }}"
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Positioning
      value: "{{ Positioning }}"
      valid_values: ['Enabled', 'Disabled']
    - name: Sidewalk
      description: |
        Sidewalk object for creating a wireless device.
      value:
        DeviceProfileId: "{{ DeviceProfileId }}"
        Positioning:
          DestinationName: "{{ DestinationName }}"
        SidewalkManufacturingSn: "{{ SidewalkManufacturingSn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_wireless_device_with_thing"
    values={[
        { label: 'associate_wireless_device_with_thing', value: 'associate_wireless_device_with_thing' },
        { label: 'update_wireless_device', value: 'update_wireless_device' }
    ]}
>
<TabItem value="associate_wireless_device_with_thing">

Associates a wireless device with a thing.

```sql
UPDATE aws.iotwireless.wireless_devices
SET 
ThingArn = '{{ ThingArn }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND ThingArn = '{{ ThingArn }}' --required;
```
</TabItem>
<TabItem value="update_wireless_device">

Updates properties of a wireless device.

```sql
UPDATE aws.iotwireless.wireless_devices
SET 
DestinationName = '{{ DestinationName }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
LoRaWAN = '{{ LoRaWAN }}',
Positioning = '{{ Positioning }}',
Sidewalk = '{{ Sidewalk }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_wireless_device"
    values={[
        { label: 'delete_wireless_device', value: 'delete_wireless_device' },
        { label: 'deregister_wireless_device', value: 'deregister_wireless_device' }
    ]}
>
<TabItem value="delete_wireless_device">

Deletes a wireless device.

```sql
DELETE FROM aws.iotwireless.wireless_devices
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="deregister_wireless_device">

Deregister a wireless device from AWS IoT Wireless.

```sql
DELETE FROM aws.iotwireless.wireless_devices
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND WirelessDeviceType = '{{ WirelessDeviceType }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_wireless_device_from_thing"
    values={[
        { label: 'disassociate_wireless_device_from_thing', value: 'disassociate_wireless_device_from_thing' },
        { label: 'start_wireless_device_import_task', value: 'start_wireless_device_import_task' }
    ]}
>
<TabItem value="disassociate_wireless_device_from_thing">

Disassociates a wireless device from its currently associated thing.

```sql
EXEC aws.iotwireless.wireless_devices.disassociate_wireless_device_from_thing 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_wireless_device_import_task">

Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.

```sql
EXEC aws.iotwireless.wireless_devices.start_wireless_device_import_task 
@region='{{ region }}' --required 
@@json=
'{
"DestinationName": "{{ DestinationName }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"Tags": "{{ Tags }}", 
"Positioning": "{{ Positioning }}", 
"Sidewalk": "{{ Sidewalk }}"
}'
;
```
</TabItem>
</Tabs>
