--- 
title: configs
hide_title: false
hide_table_of_contents: false
keywords:
  - configs
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' },
        { label: 'list_configs', value: 'list_configs' }
    ]}
>
<TabItem value="get_config">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of a Config.</td>
</tr>
<tr>
    <td><CopyableCode code="configArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a Config (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:config/&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)&#123;0,4&#125;/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(/.&#123;1,256&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configData" /></td>
    <td><code>object</code></td>
    <td>Object containing the parameters of a Config. See the subtype definitions for what each type of Config contains.</td>
</tr>
<tr>
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>UUID of a Config.</td>
</tr>
<tr>
    <td><CopyableCode code="configType" /></td>
    <td><code>string</code></td>
    <td>Type of a Config. (antenna-downlink, antenna-downlink-demod-decode, tracking, dataflow-endpoint, antenna-uplink, uplink-echo, s3-recording, telemetry-sink)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a Config.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configs">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of a Config.</td>
</tr>
<tr>
    <td><CopyableCode code="configArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a Config. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:config/&#91;a-z0-9&#93;+(-&#91;a-z0-9&#93;+)&#123;0,4&#125;/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(/.&#123;1,256&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configId" /></td>
    <td><code>string</code></td>
    <td>UUID of a Config.</td>
</tr>
<tr>
    <td><CopyableCode code="configType" /></td>
    <td><code>string</code></td>
    <td>Type of a Config. (antenna-downlink, antenna-downlink-demod-decode, tracking, dataflow-endpoint, antenna-uplink, uplink-echo, s3-recording, telemetry-sink)</td>
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
    <td><a href="#get_config"><CopyableCode code="get_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a>, <a href="#parameter-config_type"><code>config_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Config information. Only one Config response can be returned.</td>
</tr>
<tr>
    <td><a href="#list_configs"><CopyableCode code="list_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Config objects.</td>
</tr>
<tr>
    <td><a href="#create_config"><CopyableCode code="create_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configData"><code>configData</code></a></td>
    <td></td>
    <td>Creates a Config with the specified configData parameters. Only one type of configData can be specified.</td>
</tr>
<tr>
    <td><a href="#update_config"><CopyableCode code="update_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a>, <a href="#parameter-config_type"><code>config_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-configData"><code>configData</code></a></td>
    <td></td>
    <td>Updates the Config used when scheduling contacts. Updating a Config will not update the execution parameters for existing future contacts scheduled with this Config.</td>
</tr>
<tr>
    <td><a href="#delete_config"><CopyableCode code="delete_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-config_id"><code>config_id</code></a>, <a href="#parameter-config_type"><code>config_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Config.</td>
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
<tr id="parameter-config_id">
    <td><CopyableCode code="config_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a Config.</td>
</tr>
<tr id="parameter-config_type">
    <td><CopyableCode code="config_type" /></td>
    <td><code>string</code></td>
    <td>Type of a Config.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of Configs returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListConfigs call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_config"
    values={[
        { label: 'get_config', value: 'get_config' },
        { label: 'list_configs', value: 'list_configs' }
    ]}
>
<TabItem value="get_config">

Returns Config information. Only one Config response can be returned.

```sql
SELECT
name,
configArn,
configData,
configId,
configType,
tags
FROM aws.groundstation.configs
WHERE config_id = '{{ config_id }}' -- required
AND config_type = '{{ config_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configs">

Returns a list of Config objects.

```sql
SELECT
name,
configArn,
configId,
configType
FROM aws.groundstation.configs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_config"
    values={[
        { label: 'create_config', value: 'create_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_config">

Creates a Config with the specified configData parameters. Only one type of configData can be specified.

```sql
INSERT INTO aws.groundstation.configs (
name,
configData,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ configData }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
configArn,
configId,
configType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configs resource.
    - name: name
      value: "{{ name }}"
    - name: configData
      description: |
        Object containing the parameters of a Config. See the subtype definitions for what each type of Config contains.
      value:
        antennaDownlinkConfig:
          spectrumConfig:
            centerFrequency:
              value: {{ value }}
              units: "{{ units }}"
            bandwidth:
              value: {{ value }}
              units: "{{ units }}"
            polarization: "{{ polarization }}"
        trackingConfig:
          autotrack: "{{ autotrack }}"
        dataflowEndpointConfig:
          dataflowEndpointName: "{{ dataflowEndpointName }}"
          dataflowEndpointRegion: "{{ dataflowEndpointRegion }}"
        antennaDownlinkDemodDecodeConfig:
          spectrumConfig:
            centerFrequency:
              value: {{ value }}
              units: "{{ units }}"
            bandwidth:
              value: {{ value }}
              units: "{{ units }}"
            polarization: "{{ polarization }}"
          demodulationConfig:
            unvalidatedJSON: "{{ unvalidatedJSON }}"
          decodeConfig:
            unvalidatedJSON: "{{ unvalidatedJSON }}"
        antennaUplinkConfig:
          transmitDisabled: {{ transmitDisabled }}
          spectrumConfig:
            centerFrequency:
              value: {{ value }}
              units: "{{ units }}"
            polarization: "{{ polarization }}"
          targetEirp:
            value: {{ value }}
            units: "{{ units }}"
        uplinkEchoConfig:
          enabled: {{ enabled }}
          antennaUplinkConfigArn: "{{ antennaUplinkConfigArn }}"
        s3RecordingConfig:
          bucketArn: "{{ bucketArn }}"
          roleArn: "{{ roleArn }}"
          prefix: "{{ prefix }}"
        telemetrySinkConfig:
          telemetrySinkType: "{{ telemetrySinkType }}"
          telemetrySinkData:
            kinesisDataStreamData:
              kinesisRoleArn: "{{ kinesisRoleArn }}"
              kinesisDataStreamArn: "{{ kinesisDataStreamArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_config"
    values={[
        { label: 'update_config', value: 'update_config' }
    ]}
>
<TabItem value="update_config">

Updates the Config used when scheduling contacts. Updating a Config will not update the execution parameters for existing future contacts scheduled with this Config.

```sql
UPDATE aws.groundstation.configs
SET 
name = '{{ name }}',
configData = '{{ configData }}'
WHERE 
config_id = '{{ config_id }}' --required
AND config_type = '{{ config_type }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND configData = '{{ configData }}' --required
RETURNING
configArn,
configId,
configType;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_config"
    values={[
        { label: 'delete_config', value: 'delete_config' }
    ]}
>
<TabItem value="delete_config">

Deletes a Config.

```sql
DELETE FROM aws.groundstation.configs
WHERE config_id = '{{ config_id }}' --required
AND config_type = '{{ config_type }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
