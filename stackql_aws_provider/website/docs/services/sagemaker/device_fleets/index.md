--- 
title: device_fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - device_fleets
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>device_fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.device_fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_device_fleet"
    values={[
        { label: 'describe_device_fleet', value: 'describe_device_fleet' },
        { label: 'list_device_fleets', value: 'list_device_fleets' }
    ]}
>
<TabItem value="describe_device_fleet">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the device fleet was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the fleet. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.,;:! &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetArn" /></td>
    <td><code>string</code></td>
    <td>The The Amazon Resource Name (ARN) of the fleet. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:device-fleet/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetName" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IotRoleAlias" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) alias created in Amazon Web Services Internet of Things (IoT). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:rolealias/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the device fleet was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration for storing sampled data.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_device_fleets">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the device fleet was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the device fleet. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:device-fleet/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetName" /></td>
    <td><code>string</code></td>
    <td>Name of the device fleet. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the device fleet was last updated.</td>
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
    <td><a href="#describe_device_fleet"><CopyableCode code="describe_device_fleet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A description of the fleet the device belongs to.</td>
</tr>
<tr>
    <td><a href="#list_device_fleets"><CopyableCode code="list_device_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of devices in the fleet.</td>
</tr>
<tr>
    <td><a href="#create_device_fleet"><CopyableCode code="create_device_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceFleetName"><code>DeviceFleetName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Creates a device fleet.</td>
</tr>
<tr>
    <td><a href="#update_device_fleet"><CopyableCode code="update_device_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceFleetName"><code>DeviceFleetName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>Updates a fleet of devices.</td>
</tr>
<tr>
    <td><a href="#delete_device_fleet"><CopyableCode code="delete_device_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a fleet.</td>
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
    defaultValue="describe_device_fleet"
    values={[
        { label: 'describe_device_fleet', value: 'describe_device_fleet' },
        { label: 'list_device_fleets', value: 'list_device_fleets' }
    ]}
>
<TabItem value="describe_device_fleet">

A description of the fleet the device belongs to.

```sql
SELECT
CreationTime,
Description,
DeviceFleetArn,
DeviceFleetName,
IotRoleAlias,
LastModifiedTime,
OutputConfig,
RoleArn
FROM aws.sagemaker.device_fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_device_fleets">

Returns a list of devices in the fleet.

```sql
SELECT
CreationTime,
DeviceFleetArn,
DeviceFleetName,
LastModifiedTime
FROM aws.sagemaker.device_fleets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_device_fleet"
    values={[
        { label: 'create_device_fleet', value: 'create_device_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_device_fleet">

Creates a device fleet.

```sql
INSERT INTO aws.sagemaker.device_fleets (
DeviceFleetName,
RoleArn,
Description,
OutputConfig,
Tags,
EnableIotRoleAlias,
region
)
SELECT 
'{{ DeviceFleetName }}' /* required */,
'{{ RoleArn }}',
'{{ Description }}',
'{{ OutputConfig }}' /* required */,
'{{ Tags }}',
{{ EnableIotRoleAlias }},
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: device_fleets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the device_fleets resource.
    - name: DeviceFleetName
      value: "{{ DeviceFleetName }}"
      description: |
        The name of the fleet that the device belongs to.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) that has access to Amazon Web Services Internet of Things (IoT).
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the fleet.
    - name: OutputConfig
      description: |
        The output configuration for storing sample data collected by the fleet.
      value:
        S3OutputLocation: "{{ S3OutputLocation }}"
        KmsKeyId: "{{ KmsKeyId }}"
        PresetDeploymentType: "{{ PresetDeploymentType }}"
        PresetDeploymentConfig: "{{ PresetDeploymentConfig }}"
    - name: Tags
      description: |
        Creates tags for the specified fleet.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: EnableIotRoleAlias
      value: {{ EnableIotRoleAlias }}
      description: |
        Whether to create an Amazon Web Services IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}". For example, if your device fleet is called "demo-fleet", the name of the role alias will be "SageMakerEdge-demo-fleet".
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device_fleet"
    values={[
        { label: 'update_device_fleet', value: 'update_device_fleet' }
    ]}
>
<TabItem value="update_device_fleet">

Updates a fleet of devices.

```sql
UPDATE aws.sagemaker.device_fleets
SET 
DeviceFleetName = '{{ DeviceFleetName }}',
RoleArn = '{{ RoleArn }}',
Description = '{{ Description }}',
OutputConfig = '{{ OutputConfig }}',
EnableIotRoleAlias = {{ EnableIotRoleAlias }}
WHERE 
region = '{{ region }}' --required
AND DeviceFleetName = '{{ DeviceFleetName }}' --required
AND OutputConfig = '{{ OutputConfig }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_device_fleet"
    values={[
        { label: 'delete_device_fleet', value: 'delete_device_fleet' }
    ]}
>
<TabItem value="delete_device_fleet">

Deletes a fleet.

```sql
DELETE FROM aws.sagemaker.device_fleets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
