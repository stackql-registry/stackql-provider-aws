--- 
title: router_inputs
hide_title: false
hide_table_of_contents: false
keywords:
  - router_inputs
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>router_inputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_inputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.router_inputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_router_input"
    values={[
        { label: 'batch_get_router_input', value: 'batch_get_router_input' },
        { label: 'get_router_input', value: 'get_router_input' },
        { label: 'list_router_inputs', value: 'list_router_inputs' }
    ]}
>
<TabItem value="batch_get_router_input">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of errors that occurred when retrieving the requested router inputs.</td>
</tr>
<tr>
    <td><CopyableCode code="router_inputs" /></td>
    <td><code>array</code></td>
    <td>An array of router inputs that were successfully retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_router_input">

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
    <td>The Amazon Resource Name (ARN) of the router input. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerInput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for a router input.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router input was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="input_type" /></td>
    <td><code>string</code></td>
    <td>The type of the router input. (STANDARD, FAILOVER, MERGE, MEDIACONNECT_FLOW, MEDIALIVE_CHANNEL)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_configuration" /></td>
    <td><code>object</code></td>
    <td>The maintenance configuration settings applied to this router input.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The current maintenance schedule details for this router input.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance schedule currently in effect for this router input. (WINDOW)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance configuration applied to this router input. (PREFERRED_DAY_TIME, DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_bitrate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum bitrate for the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_routed_outputs" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of outputs that can be simultaneously routed to this input.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>The messages associated with the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the router input is located.</td>
</tr>
<tr>
    <td><CopyableCode code="routed_outputs" /></td>
    <td><code>integer</code></td>
    <td>The number of router outputs associated with the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_scope" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the router input is configured for Regional or global routing. (REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the router input. (CREATING, STANDBY, STARTING, ACTIVE, STOPPING, DELETING, UPDATING, ERROR, RECOVERING, MIGRATING)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_details" /></td>
    <td><code>object</code></td>
    <td>Configuration details for the router input stream.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs that can be used to tag and organize this router input.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The tier level of the router input. (INPUT_100, INPUT_50, INPUT_20)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_encryption" /></td>
    <td><code>object</code></td>
    <td>The transit encryption settings for a router input.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router input was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_router_inputs">

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
    <td>The Amazon Resource Name (ARN) of the router input. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerInput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router input was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="input_type" /></td>
    <td><code>string</code></td>
    <td>The type of the router input. (STANDARD, FAILOVER, MERGE, MEDIACONNECT_FLOW, MEDIALIVE_CHANNEL)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The details of the maintenance schedule for the listed router input.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance schedule currently associated with the listed router input. (WINDOW)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_bitrate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum bitrate of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="message_count" /></td>
    <td><code>integer</code></td>
    <td>The number of messages associated with the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network interface associated with the router input. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerNetworkInterface:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the router input is located.</td>
</tr>
<tr>
    <td><CopyableCode code="routed_outputs" /></td>
    <td><code>integer</code></td>
    <td>The number of router outputs that are associated with this router input.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_scope" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the router input is configured for Regional or global routing. (REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The overall state of the router input. (CREATING, STANDBY, STARTING, ACTIVE, STOPPING, DELETING, UPDATING, ERROR, RECOVERING, MIGRATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router input was last updated.</td>
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
    <td><a href="#batch_get_router_input"><CopyableCode code="batch_get_router_input" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arns"><code>arns</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about multiple router inputs in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#get_router_input"><CopyableCode code="get_router_input" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific router input in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#list_router_inputs"><CopyableCode code="list_router_inputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of router inputs in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#create_router_input"><CopyableCode code="create_router_input" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a>, <a href="#parameter-MaximumBitrate"><code>MaximumBitrate</code></a>, <a href="#parameter-RoutingScope"><code>RoutingScope</code></a>, <a href="#parameter-Tier"><code>Tier</code></a></td>
    <td></td>
    <td>Creates a new router input in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#update_router_input"><CopyableCode code="update_router_input" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing router input in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#delete_router_input"><CopyableCode code="delete_router_input" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a router input from AWS Elemental MediaConnect.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router input that you want to delete.</td>
</tr>
<tr id="parameter-arns">
    <td><CopyableCode code="arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the router inputs you want to retrieve information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of router inputs to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_router_input"
    values={[
        { label: 'batch_get_router_input', value: 'batch_get_router_input' },
        { label: 'get_router_input', value: 'get_router_input' },
        { label: 'list_router_inputs', value: 'list_router_inputs' }
    ]}
>
<TabItem value="batch_get_router_input">

Retrieves information about multiple router inputs in AWS Elemental MediaConnect.

```sql
SELECT
errors,
router_inputs
FROM aws.mediaconnect.router_inputs
WHERE arns = '{{ arns }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_router_input">

Retrieves information about a specific router input in AWS Elemental MediaConnect.

```sql
SELECT
arn,
availability_zone,
configuration,
created_at,
id,
input_type,
ip_address,
maintenance_configuration,
maintenance_schedule,
maintenance_schedule_type,
maintenance_type,
maximum_bitrate,
maximum_routed_outputs,
messages,
name,
region_name,
routed_outputs,
routing_scope,
state,
stream_details,
tags,
tier,
transit_encryption,
updated_at
FROM aws.mediaconnect.router_inputs
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_router_inputs">

Retrieves a list of router inputs in AWS Elemental MediaConnect.

```sql
SELECT
arn,
availability_zone,
created_at,
id,
input_type,
maintenance_schedule,
maintenance_schedule_type,
maximum_bitrate,
message_count,
name,
network_interface_arn,
region_name,
routed_outputs,
routing_scope,
state,
updated_at
FROM aws.mediaconnect.router_inputs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_router_input"
    values={[
        { label: 'create_router_input', value: 'create_router_input' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_router_input">

Creates a new router input in AWS Elemental MediaConnect.

```sql
INSERT INTO aws.mediaconnect.router_inputs (
Name,
Configuration,
MaximumBitrate,
RoutingScope,
Tier,
RegionName,
AvailabilityZone,
TransitEncryption,
MaintenanceConfiguration,
Tags,
ClientToken,
region
)
SELECT 
'{{ Name }}',
'{{ Configuration }}' /* required */,
{{ MaximumBitrate }} /* required */,
'{{ RoutingScope }}' /* required */,
'{{ Tier }}' /* required */,
'{{ RegionName }}',
'{{ AvailabilityZone }}',
'{{ TransitEncryption }}',
'{{ MaintenanceConfiguration }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
router_input
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: router_inputs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the router_inputs resource.
    - name: Name
      value: "{{ Name }}"
    - name: Configuration
      description: |
        The configuration settings for a router input.
      value:
        Standard:
          NetworkInterfaceArn: "{{ NetworkInterfaceArn }}"
          ProtocolConfiguration:
            Rist:
              Port: {{ Port }}
              RecoveryLatencyMilliseconds: {{ RecoveryLatencyMilliseconds }}
            SrtListener:
              Port: {{ Port }}
              MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
              DecryptionConfiguration:
                EncryptionKey: "{{ EncryptionKey }}"
            SrtCaller:
              SourceAddress: "{{ SourceAddress }}"
              SourcePort: {{ SourcePort }}
              MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
              StreamId: "{{ StreamId }}"
              DecryptionConfiguration:
                EncryptionKey: "{{ EncryptionKey }}"
            Rtp:
              Port: {{ Port }}
              ForwardErrorCorrection: "{{ ForwardErrorCorrection }}"
          Protocol: "{{ Protocol }}"
        MediaLiveChannel:
          MediaLiveChannelArn: "{{ MediaLiveChannelArn }}"
          MediaLivePipelineId: "{{ MediaLivePipelineId }}"
          MediaLiveChannelOutputName: "{{ MediaLiveChannelOutputName }}"
          SourceTransitDecryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
        Failover:
          NetworkInterfaceArn: "{{ NetworkInterfaceArn }}"
          ProtocolConfigurations:
            - Rist:
                Port: {{ Port }}
                RecoveryLatencyMilliseconds: {{ RecoveryLatencyMilliseconds }}
              SrtListener:
                Port: {{ Port }}
                MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
                DecryptionConfiguration:
                  EncryptionKey: "{{ EncryptionKey }}"
              SrtCaller:
                SourceAddress: "{{ SourceAddress }}"
                SourcePort: {{ SourcePort }}
                MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
                StreamId: "{{ StreamId }}"
                DecryptionConfiguration:
                  EncryptionKey: "{{ EncryptionKey }}"
              Rtp:
                Port: {{ Port }}
                ForwardErrorCorrection: "{{ ForwardErrorCorrection }}"
          SourcePriorityMode: "{{ SourcePriorityMode }}"
          PrimarySourceIndex: {{ PrimarySourceIndex }}
        MediaConnectFlow:
          FlowArn: "{{ FlowArn }}"
          FlowOutputArn: "{{ FlowOutputArn }}"
          SourceTransitDecryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
        Merge:
          NetworkInterfaceArn: "{{ NetworkInterfaceArn }}"
          ProtocolConfigurations:
            - Rtp:
                Port: {{ Port }}
                ForwardErrorCorrection: "{{ ForwardErrorCorrection }}"
              Rist:
                Port: {{ Port }}
                RecoveryLatencyMilliseconds: {{ RecoveryLatencyMilliseconds }}
          MergeRecoveryWindowMilliseconds: {{ MergeRecoveryWindowMilliseconds }}
    - name: MaximumBitrate
      value: {{ MaximumBitrate }}
    - name: RoutingScope
      value: "{{ RoutingScope }}"
      valid_values: ['REGIONAL', 'GLOBAL']
    - name: Tier
      value: "{{ Tier }}"
      valid_values: ['INPUT_100', 'INPUT_50', 'INPUT_20']
    - name: RegionName
      value: "{{ RegionName }}"
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
    - name: TransitEncryption
      description: |
        The transit encryption settings for a router input.
      value:
        EncryptionKeyType: "{{ EncryptionKeyType }}"
        EncryptionKeyConfiguration:
          SecretsManager:
            SecretArn: "{{ SecretArn }}"
            RoleArn: "{{ RoleArn }}"
          Automatic: "{{ Automatic }}"
    - name: MaintenanceConfiguration
      description: |
        The configuration settings for maintenance operations, including preferred maintenance windows and schedules.
      value:
        PreferredDayTime:
          Day: "{{ Day }}"
          Time: "{{ Time }}"
        Default: "{{ Default }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_router_input"
    values={[
        { label: 'update_router_input', value: 'update_router_input' }
    ]}
>
<TabItem value="update_router_input">

Updates the configuration of an existing router input in AWS Elemental MediaConnect.

```sql
UPDATE aws.mediaconnect.router_inputs
SET 
Name = '{{ Name }}',
Configuration = '{{ Configuration }}',
MaximumBitrate = {{ MaximumBitrate }},
RoutingScope = '{{ RoutingScope }}',
Tier = '{{ Tier }}',
TransitEncryption = '{{ TransitEncryption }}',
MaintenanceConfiguration = '{{ MaintenanceConfiguration }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
router_input;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_router_input"
    values={[
        { label: 'delete_router_input', value: 'delete_router_input' }
    ]}
>
<TabItem value="delete_router_input">

Deletes a router input from AWS Elemental MediaConnect.

```sql
DELETE FROM aws.mediaconnect.router_inputs
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
