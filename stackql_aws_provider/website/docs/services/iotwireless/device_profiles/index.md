--- 
title: device_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - device_profiles
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

Creates, updates, deletes, gets or lists a <code>device_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.device_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_profile"
    values={[
        { label: 'get_device_profile', value: 'get_device_profile' },
        { label: 'list_device_profiles', value: 'list_device_profiles' }
    ]}
>
<TabItem value="get_device_profile">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device profile.</td>
</tr>
<tr>
    <td><CopyableCode code="lo_ra_wan" /></td>
    <td><code>object</code></td>
    <td>LoRaWANDeviceProfile object.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="sidewalk" /></td>
    <td><code>object</code></td>
    <td>Information about the Sidewalk parameters in the device profile.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_device_profiles">

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
    <td><CopyableCode code="device_profile_list" /></td>
    <td><code>array</code></td>
    <td>The list of device profiles.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
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
    <td><a href="#get_device_profile"><CopyableCode code="get_device_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a device profile.</td>
</tr>
<tr>
    <td><a href="#list_device_profiles"><CopyableCode code="list_device_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-deviceProfileType"><code>deviceProfileType</code></a></td>
    <td>Lists the device profiles registered to your AWS account.</td>
</tr>
<tr>
    <td><a href="#create_device_profile"><CopyableCode code="create_device_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new device profile.</td>
</tr>
<tr>
    <td><a href="#delete_device_profile"><CopyableCode code="delete_device_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a device profile.</td>
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
    <td>The ID of the resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deviceProfileType">
    <td><CopyableCode code="deviceProfileType" /></td>
    <td><code>string</code></td>
    <td>A filter to list only device profiles that use this type, which can be LoRaWAN or Sidewalk.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
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
    defaultValue="get_device_profile"
    values={[
        { label: 'get_device_profile', value: 'get_device_profile' },
        { label: 'list_device_profiles', value: 'list_device_profiles' }
    ]}
>
<TabItem value="get_device_profile">

Gets information about a device profile.

```sql
SELECT
arn,
id,
lo_ra_wan,
name,
sidewalk
FROM aws.iotwireless.device_profiles
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_device_profiles">

Lists the device profiles registered to your AWS account.

```sql
SELECT
device_profile_list,
next_token
FROM aws.iotwireless.device_profiles
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND deviceProfileType = '{{ deviceProfileType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_device_profile"
    values={[
        { label: 'create_device_profile', value: 'create_device_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_device_profile">

Creates a new device profile.

```sql
INSERT INTO aws.iotwireless.device_profiles (
Name,
LoRaWAN,
Tags,
ClientRequestToken,
Sidewalk,
region
)
SELECT 
'{{ Name }}',
'{{ LoRaWAN }}',
'{{ Tags }}',
'{{ ClientRequestToken }}',
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
- name: device_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the device_profiles resource.
    - name: Name
      value: "{{ Name }}"
    - name: LoRaWAN
      description: |
        LoRaWANDeviceProfile object.
      value:
        SupportsClassB: {{ SupportsClassB }}
        ClassBTimeout: {{ ClassBTimeout }}
        PingSlotPeriod: {{ PingSlotPeriod }}
        PingSlotDr: {{ PingSlotDr }}
        PingSlotFreq: {{ PingSlotFreq }}
        SupportsClassC: {{ SupportsClassC }}
        ClassCTimeout: {{ ClassCTimeout }}
        MacVersion: "{{ MacVersion }}"
        RegParamsRevision: "{{ RegParamsRevision }}"
        RxDelay1: {{ RxDelay1 }}
        RxDrOffset1: {{ RxDrOffset1 }}
        RxDataRate2: {{ RxDataRate2 }}
        RxFreq2: {{ RxFreq2 }}
        FactoryPresetFreqsList:
          - {{ FactoryPresetFreqsList }}
        MaxEirp: {{ MaxEirp }}
        MaxDutyCycle: {{ MaxDutyCycle }}
        RfRegion: "{{ RfRegion }}"
        SupportsJoin: {{ SupportsJoin }}
        Supports32BitFCnt: {{ Supports32BitFCnt }}
    - name: Tags
      description: |
        The tag to attach to the specified resource. Tags are metadata that you can use to manage a resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Each resource must have a unique client request token. The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you try to create a new resource using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, AWS SDKs will automatically generate a unique client request. For more information about idempotency, see Ensuring idempotency in Amazon EC2 API requests.
    - name: Sidewalk
      value: "{{ Sidewalk }}"
      description: |
        Sidewalk object for creating a device profile.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_device_profile"
    values={[
        { label: 'delete_device_profile', value: 'delete_device_profile' }
    ]}
>
<TabItem value="delete_device_profile">

Deletes a device profile.

```sql
DELETE FROM aws.iotwireless.device_profiles
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
