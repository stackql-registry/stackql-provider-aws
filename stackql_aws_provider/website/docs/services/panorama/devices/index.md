--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - panorama
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_device"
    values={[
        { label: 'describe_device', value: 'describe_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="describe_device">

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
    <td><CopyableCode code="AlternateSoftwares" /></td>
    <td><code>array</code></td>
    <td>Beta software releases available for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The device's ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="Brand" /></td>
    <td><code>string</code></td>
    <td>The device's maker. (AWS_PANORAMA, LENOVO)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the device was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentNetworkingStatus" /></td>
    <td><code>object</code></td>
    <td>The device's networking status.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentSoftware" /></td>
    <td><code>string</code></td>
    <td>The device's current software version.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The device's description. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceAggregatedStatus" /></td>
    <td><code>string</code></td>
    <td>A device's aggregated status. Including the device's connection status, provisioning status, and lease status. (ERROR, AWAITING_PROVISIONING, PENDING, FAILED, DELETING, ONLINE, OFFLINE, LEASE_EXPIRED, UPDATE_NEEDED, REBOOTING)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceConnectionStatus" /></td>
    <td><code>string</code></td>
    <td>The device's connection status. (ONLINE, OFFLINE, AWAITING_CREDENTIALS, NOT_AVAILABLE, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceId" /></td>
    <td><code>string</code></td>
    <td>The device's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LatestAlternateSoftware" /></td>
    <td><code>string</code></td>
    <td>The most recent beta software release.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeviceJob" /></td>
    <td><code>object</code></td>
    <td>A device's latest job. Includes the target image version, and the job status.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestSoftware" /></td>
    <td><code>string</code></td>
    <td>The latest software version available for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="LeaseExpirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The device's lease expiration time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The device's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The device's networking configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ProvisioningStatus" /></td>
    <td><code>string</code></td>
    <td>The device's provisioning status. (AWAITING_PROVISIONING, PENDING, SUCCEEDED, FAILED, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The device's serial number. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The device's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The device's type. (PANORAMA_APPLIANCE_DEVELOPER_KIT, PANORAMA_APPLIANCE)</td>
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
    <td><CopyableCode code="Devices" /></td>
    <td><code>array</code></td>
    <td>A list of devices.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_device"><CopyableCode code="describe_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a device.</td>
</tr>
<tr>
    <td><a href="#list_devices"><CopyableCode code="list_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeviceAggregatedStatusFilter"><code>DeviceAggregatedStatusFilter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NameFilter"><code>NameFilter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SortBy"><code>SortBy</code></a>, <a href="#parameter-SortOrder"><code>SortOrder</code></a></td>
    <td>Returns a list of devices.</td>
</tr>
<tr>
    <td><a href="#create_job_for_devices"><CopyableCode code="create_job_for_devices" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceIds"><code>DeviceIds</code></a>, <a href="#parameter-JobType"><code>JobType</code></a></td>
    <td></td>
    <td>Creates a job to run on a device. A job can update a device's software or reboot it.</td>
</tr>
<tr>
    <td><a href="#update_device_metadata"><CopyableCode code="update_device_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a device's metadata.</td>
</tr>
<tr>
    <td><a href="#provision_device"><CopyableCode code="provision_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a provisioning certificate that is valid for 5 minutes. Name the configuration archive certificates-omni_device-name.zip and transfer it to the device within 5 minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.</td>
</tr>
<tr>
    <td><a href="#delete_device"><CopyableCode code="delete_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a device.</td>
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
<tr id="parameter-device_id">
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The device's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DeviceAggregatedStatusFilter">
    <td><CopyableCode code="DeviceAggregatedStatusFilter" /></td>
    <td><code>string</code></td>
    <td>Filter based on a device's status.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of devices to return in one page of results.</td>
</tr>
<tr id="parameter-NameFilter">
    <td><CopyableCode code="NameFilter" /></td>
    <td><code>string</code></td>
    <td>Filter based on device's name. Prefixes supported.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-SortBy">
    <td><CopyableCode code="SortBy" /></td>
    <td><code>string</code></td>
    <td>The target column to be sorted on. Default column sort is CREATED_TIME.</td>
</tr>
<tr id="parameter-SortOrder">
    <td><CopyableCode code="SortOrder" /></td>
    <td><code>string</code></td>
    <td>The sorting order for the returned list. SortOrder is DESCENDING by default based on CREATED_TIME. Otherwise, SortOrder is ASCENDING.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_device"
    values={[
        { label: 'describe_device', value: 'describe_device' },
        { label: 'list_devices', value: 'list_devices' }
    ]}
>
<TabItem value="describe_device">

Returns information about a device.

```sql
SELECT
AlternateSoftwares,
Arn,
Brand,
CreatedTime,
CurrentNetworkingStatus,
CurrentSoftware,
Description,
DeviceAggregatedStatus,
DeviceConnectionStatus,
DeviceId,
LatestAlternateSoftware,
LatestDeviceJob,
LatestSoftware,
LeaseExpirationTime,
Name,
NetworkingConfiguration,
ProvisioningStatus,
SerialNumber,
Tags,
Type
FROM aws.panorama.devices
WHERE device_id = '{{ device_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_devices">

Returns a list of devices.

```sql
SELECT
Devices,
NextToken
FROM aws.panorama.devices
WHERE region = '{{ region }}' -- required
AND DeviceAggregatedStatusFilter = '{{ DeviceAggregatedStatusFilter }}'
AND MaxResults = '{{ MaxResults }}'
AND NameFilter = '{{ NameFilter }}'
AND NextToken = '{{ NextToken }}'
AND SortBy = '{{ SortBy }}'
AND SortOrder = '{{ SortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job_for_devices"
    values={[
        { label: 'create_job_for_devices', value: 'create_job_for_devices' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job_for_devices">

Creates a job to run on a device. A job can update a device's software or reboot it.

```sql
INSERT INTO aws.panorama.devices (
DeviceIds,
DeviceJobConfig,
JobType,
region
)
SELECT 
'{{ DeviceIds }}' /* required */,
'{{ DeviceJobConfig }}',
'{{ JobType }}' /* required */,
'{{ region }}'
RETURNING
Jobs
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: devices
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the devices resource.
    - name: DeviceIds
      value:
        - "{{ DeviceIds }}"
    - name: DeviceJobConfig
      description: |
        A job's configuration.
      value:
        OTAJobConfig:
          AllowMajorVersionUpdate: {{ AllowMajorVersionUpdate }}
          ImageVersion: "{{ ImageVersion }}"
    - name: JobType
      value: "{{ JobType }}"
      valid_values: ['OTA', 'REBOOT']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device_metadata"
    values={[
        { label: 'update_device_metadata', value: 'update_device_metadata' },
        { label: 'provision_device', value: 'provision_device' }
    ]}
>
<TabItem value="update_device_metadata">

Updates a device's metadata.

```sql
UPDATE aws.panorama.devices
SET 
Description = '{{ Description }}'
WHERE 
device_id = '{{ device_id }}' --required
AND region = '{{ region }}' --required
RETURNING
DeviceId;
```
</TabItem>
<TabItem value="provision_device">

Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a provisioning certificate that is valid for 5 minutes. Name the configuration archive certificates-omni_device-name.zip and transfer it to the device within 5 minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.

```sql
UPDATE aws.panorama.devices
SET 
Description = '{{ Description }}',
Name = '{{ Name }}',
NetworkingConfiguration = '{{ NetworkingConfiguration }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn,
Certificates,
DeviceId,
IotThingName,
Status;
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

Deletes a device.

```sql
DELETE FROM aws.panorama.devices
WHERE device_id = '{{ device_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
