--- 
title: campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - campaigns
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_campaign"
    values={[
        { label: 'get_campaign', value: 'get_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="get_campaign">

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
    <td>The name of the campaign. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the campaign. (pattern: &lt;code&gt;arn:aws:iotfleetwise:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:campaign/&#91;a-zA-Z\d\-_:&#93;&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collection_scheme" /></td>
    <td><code>object</code></td>
    <td>Information about the data collection scheme associated with the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="compression" /></td>
    <td><code>string</code></td>
    <td>Whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If OFF is specified, the signals aren't compressed. If it's not specified, SNAPPY is used. (OFF, SNAPPY)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the campaign was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="data_destination_configs" /></td>
    <td><code>array</code></td>
    <td>The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream. MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with your devices. Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.</td>
</tr>
<tr>
    <td><CopyableCode code="data_extra_dimensions" /></td>
    <td><code>array</code></td>
    <td>A list of vehicle attributes associated with the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="data_partitions" /></td>
    <td><code>array</code></td>
    <td>The data partitions associated with the signals collected from the vehicle.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the campaign. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="diagnostics_mode" /></td>
    <td><code>string</code></td>
    <td>Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. (OFF, SEND_ACTIVE_DTCS)</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data won't be collected after the campaign expires.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the campaign was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="post_trigger_collection_duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>How long (in seconds) to collect raw data after a triggering event initiates the collection.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a signal catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="signals_to_collect" /></td>
    <td><code>array</code></td>
    <td>Information about a list of signals to collect data on.</td>
</tr>
<tr>
    <td><CopyableCode code="signals_to_fetch" /></td>
    <td><code>array</code></td>
    <td>Information about a list of signals to fetch data from.</td>
</tr>
<tr>
    <td><CopyableCode code="spooling_mode" /></td>
    <td><code>string</code></td>
    <td>Whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise. (OFF, TO_DISK)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in milliseconds, to deliver a campaign after it was approved.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the campaign. The status can be one of: CREATING, WAITING_FOR_APPROVAL, RUNNING, and SUSPENDED. (CREATING, WAITING_FOR_APPROVAL, RUNNING, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the vehicle or the fleet targeted by the campaign.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_campaigns">

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
    <td>The name of a campaign. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a campaign. (pattern: &lt;code&gt;arn:aws:iotfleetwise:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:campaign/&#91;a-zA-Z\d\-_:&#93;&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the campaign was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the campaign. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the campaign was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="signal_catalog_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signal catalog associated with the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of a campaign. The status can be one of the following: CREATING - Amazon Web Services IoT FleetWise is processing your request to create the campaign. WAITING_FOR_APPROVAL - After a campaign is created, it enters the WAITING_FOR_APPROVAL state. To allow Amazon Web Services IoT FleetWise to deploy the campaign to the target vehicle or fleet, use the API operation to approve the campaign. RUNNING - The campaign is active. SUSPENDED - The campaign is suspended. To resume the campaign, use the API operation. (CREATING, WAITING_FOR_APPROVAL, RUNNING, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="target_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a vehicle or fleet to which the campaign is deployed.</td>
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
    <td><a href="#get_campaign"><CopyableCode code="get_campaign" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a campaign. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_campaigns"><CopyableCode code="list_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about created campaigns. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_campaign"><CopyableCode code="create_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-signalCatalogArn"><code>signalCatalogArn</code></a>, <a href="#parameter-targetArn"><code>targetArn</code></a>, <a href="#parameter-collectionScheme"><code>collectionScheme</code></a></td>
    <td></td>
    <td>Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, Amazon Web Services IoT FleetWise automatically deploys them to vehicles. For more information, see Collect and transfer data with campaigns in the Amazon Web Services IoT FleetWise Developer Guide. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_campaign"><CopyableCode code="update_campaign" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates a campaign.</td>
</tr>
<tr>
    <td><a href="#delete_campaign"><CopyableCode code="delete_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data collection campaign. Deleting a campaign suspends all data collection and removes it from any vehicles.</td>
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
    defaultValue="get_campaign"
    values={[
        { label: 'get_campaign', value: 'get_campaign' },
        { label: 'list_campaigns', value: 'list_campaigns' }
    ]}
>
<TabItem value="get_campaign">

Retrieves information about a campaign. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
SELECT
name,
arn,
collection_scheme,
compression,
creation_time,
data_destination_configs,
data_extra_dimensions,
data_partitions,
description,
diagnostics_mode,
expiry_time,
last_modification_time,
post_trigger_collection_duration,
priority,
signal_catalog_arn,
signals_to_collect,
signals_to_fetch,
spooling_mode,
start_time,
status,
target_arn
FROM aws.iotfleetwise.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_campaigns">

Lists information about created campaigns. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
name,
arn,
creation_time,
description,
last_modification_time,
signal_catalog_arn,
status,
target_arn
FROM aws.iotfleetwise.campaigns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_campaign"
    values={[
        { label: 'create_campaign', value: 'create_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_campaign">

Creates an orchestration of data collection rules. The Amazon Web Services IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, Amazon Web Services IoT FleetWise automatically deploys them to vehicles. For more information, see Collect and transfer data with campaigns in the Amazon Web Services IoT FleetWise Developer Guide. Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see Amazon Web Services Region and feature availability in the Amazon Web Services IoT FleetWise Developer Guide.

```sql
INSERT INTO aws.iotfleetwise.campaigns (
name,
description,
signalCatalogArn,
targetArn,
startTime,
expiryTime,
postTriggerCollectionDuration,
diagnosticsMode,
spoolingMode,
compression,
priority,
signalsToCollect,
collectionScheme,
dataExtraDimensions,
tags,
dataDestinationConfigs,
dataPartitions,
signalsToFetch,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ signalCatalogArn }}' /* required */,
'{{ targetArn }}' /* required */,
'{{ startTime }}',
'{{ expiryTime }}',
{{ postTriggerCollectionDuration }},
'{{ diagnosticsMode }}',
'{{ spoolingMode }}',
'{{ compression }}',
{{ priority }},
'{{ signalsToCollect }}',
'{{ collectionScheme }}' /* required */,
'{{ dataExtraDimensions }}',
'{{ tags }}',
'{{ dataDestinationConfigs }}',
'{{ dataPartitions }}',
'{{ signalsToFetch }}',
'{{ region }}'
RETURNING
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: campaigns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the campaigns resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the campaign to create.
    - name: description
      value: "{{ description }}"
      description: |
        An optional description of the campaign to help identify its purpose.
    - name: signalCatalogArn
      value: "{{ signalCatalogArn }}"
      description: |
        The Amazon Resource Name (ARN) of the signal catalog to associate with the campaign.
    - name: targetArn
      value: "{{ targetArn }}"
      description: |
        The ARN of the vehicle or fleet to deploy a campaign to.
    - name: startTime
      value: "{{ startTime }}"
      description: |
        The time, in milliseconds, to deliver a campaign after it was approved. If it's not specified, 0 is used. Default: 0
    - name: expiryTime
      value: "{{ expiryTime }}"
      description: |
        The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data isn't collected after the campaign expires. Default: 253402214400 (December 31, 9999, 00:00:00 UTC)
    - name: postTriggerCollectionDuration
      value: {{ postTriggerCollectionDuration }}
      description: |
        How long (in milliseconds) to collect raw data after a triggering event initiates the collection. If it's not specified, 0 is used. Default: 0
    - name: diagnosticsMode
      value: "{{ diagnosticsMode }}"
      description: |
        Option for a vehicle to send diagnostic trouble codes to Amazon Web Services IoT FleetWise. If you want to send diagnostic trouble codes, use SEND_ACTIVE_DTCS. If it's not specified, OFF is used. Default: OFF
      valid_values: ['OFF', 'SEND_ACTIVE_DTCS']
    - name: spoolingMode
      value: "{{ spoolingMode }}"
      description: |
        Determines whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to Amazon Web Services IoT FleetWise. If you want to store collected data when a vehicle loses connection with the cloud, use TO_DISK. If it's not specified, OFF is used. Default: OFF
      valid_values: ['OFF', 'TO_DISK']
    - name: compression
      value: "{{ compression }}"
      description: |
        Determines whether to compress signals before transmitting data to Amazon Web Services IoT FleetWise. If you don't want to compress the signals, use OFF. If it's not specified, SNAPPY is used. Default: SNAPPY
      valid_values: ['OFF', 'SNAPPY']
    - name: priority
      value: {{ priority }}
      description: |
        A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns. If it's not specified, 0 is used. Default: 0
    - name: signalsToCollect
      description: |
        A list of information about signals to collect. If you upload a signal as a condition in a data partition for a campaign, then those same signals must be included in signalsToCollect.
      value:
        - name: "{{ name }}"
          maxSampleCount: {{ maxSampleCount }}
          minimumSamplingIntervalMs: {{ minimumSamplingIntervalMs }}
          dataPartitionId: "{{ dataPartitionId }}"
    - name: collectionScheme
      description: |
        The data collection scheme associated with the campaign. You can specify a scheme that collects data based on time or an event.
      value:
        timeBasedCollectionScheme:
          periodMs: {{ periodMs }}
        conditionBasedCollectionScheme:
          expression: "{{ expression }}"
          minimumTriggerIntervalMs: {{ minimumTriggerIntervalMs }}
          triggerMode: "{{ triggerMode }}"
          conditionLanguageVersion: {{ conditionLanguageVersion }}
    - name: dataExtraDimensions
      value:
        - "{{ dataExtraDimensions }}"
      description: |
        A list of vehicle attributes to associate with a campaign. Enrich the data with specified vehicle attributes. For example, add make and model to the campaign, and Amazon Web Services IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against make and model. Default: An empty array
    - name: tags
      description: |
        Metadata that can be used to manage the campaign.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: dataDestinationConfigs
      description: |
        The destination where the campaign sends data. You can send data to an MQTT topic, or store it in Amazon S3 or Amazon Timestream. MQTT is the publish/subscribe messaging protocol used by Amazon Web Services IoT to communicate with your devices. Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. Amazon Web Services IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple Amazon Web Services IoT FleetWise servers for redundancy and high availability. You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.
      value:
        - s3Config:
            bucketArn: "{{ bucketArn }}"
            dataFormat: "{{ dataFormat }}"
            storageCompressionFormat: "{{ storageCompressionFormat }}"
            prefix: "{{ prefix }}"
          timestreamConfig:
            timestreamTableArn: "{{ timestreamTableArn }}"
            executionRoleArn: "{{ executionRoleArn }}"
          mqttTopicConfig:
            mqttTopicArn: "{{ mqttTopicArn }}"
            executionRoleArn: "{{ executionRoleArn }}"
    - name: dataPartitions
      description: |
        The data partitions associated with the signals collected from the vehicle.
      value:
        - id: "{{ id }}"
          storageOptions:
            maximumSize:
              unit: "{{ unit }}"
              value: {{ value }}
            storageLocation: "{{ storageLocation }}"
            minimumTimeToLive:
              unit: "{{ unit }}"
              value: {{ value }}
          uploadOptions:
            expression: "{{ expression }}"
            conditionLanguageVersion: {{ conditionLanguageVersion }}
    - name: signalsToFetch
      description: |
        A list of information about signals to fetch.
      value:
        - fullyQualifiedName: "{{ fullyQualifiedName }}"
          signalFetchConfig:
            timeBased:
              executionFrequencyMs: {{ executionFrequencyMs }}
            conditionBased:
              conditionExpression: "{{ conditionExpression }}"
              triggerMode: "{{ triggerMode }}"
          conditionLanguageVersion: {{ conditionLanguageVersion }}
          actions: "{{ actions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_campaign"
    values={[
        { label: 'update_campaign', value: 'update_campaign' }
    ]}
>
<TabItem value="update_campaign">

Updates a campaign.

```sql
UPDATE aws.iotfleetwise.campaigns
SET 
name = '{{ name }}',
description = '{{ description }}',
dataExtraDimensions = '{{ dataExtraDimensions }}',
action = '{{ action }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND action = '{{ action }}' --required
RETURNING
name,
arn,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_campaign"
    values={[
        { label: 'delete_campaign', value: 'delete_campaign' }
    ]}
>
<TabItem value="delete_campaign">

Deletes a data collection campaign. Deleting a campaign suspends all data collection and removes it from any vehicles.

```sql
DELETE FROM aws.iotfleetwise.campaigns
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
