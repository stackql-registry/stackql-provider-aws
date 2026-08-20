--- 
title: router_outputs
hide_title: false
hide_table_of_contents: false
keywords:
  - router_outputs
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

Creates, updates, deletes, gets or lists a <code>router_outputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_outputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.router_outputs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_router_output"
    values={[
        { label: 'batch_get_router_output', value: 'batch_get_router_output' },
        { label: 'get_router_output', value: 'get_router_output' },
        { label: 'list_router_outputs', value: 'list_router_outputs' }
    ]}
>
<TabItem value="batch_get_router_output">

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
    <td>An array of errors that occurred when retrieving the requested router outputs.</td>
</tr>
<tr>
    <td><CopyableCode code="router_outputs" /></td>
    <td><code>array</code></td>
    <td>An array of router outputs that were successfully retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_router_output">

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
    <td>The Amazon Resource Name (ARN) of the router output. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerOutput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for a router output.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router output was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fabric_configuration" /></td>
    <td><code>object</code></td>
    <td>The fabric configuration settings for the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>The IP address of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_configuration" /></td>
    <td><code>object</code></td>
    <td>The maintenance configuration settings applied to this router output.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The current maintenance schedule details for this router output.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance schedule currently in effect for this router output. (WINDOW)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance configuration applied to this router output. (PREFERRED_DAY_TIME, DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_bitrate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum bitrate for the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>array</code></td>
    <td>The messages associated with the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="output_type" /></td>
    <td><code>string</code></td>
    <td>The type of the router output. (STANDARD, MEDIACONNECT_FLOW, MEDIALIVE_INPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the router output is located.</td>
</tr>
<tr>
    <td><CopyableCode code="routed_input_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router input associated with the output. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerInput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the association between the router output and its input. (ROUTED, ROUTING, UNROUTED)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_scope" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the router output is configured for Regional or global routing. (REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The overall state of the router output. (CREATING, STANDBY, STARTING, ACTIVE, STOPPING, DELETING, UPDATING, ERROR, RECOVERING, MIGRATING)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_details" /></td>
    <td><code>object</code></td>
    <td>Information about the router output's stream, including connection state and destination details. The specific details provided vary based on the router output type.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs that can be used to tag and organize this router output.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The tier level of the router output. (OUTPUT_100, OUTPUT_50, OUTPUT_20)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router output was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_router_outputs">

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
    <td>The Amazon Resource Name (ARN) of the router output. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerOutput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router output was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule" /></td>
    <td><code>object</code></td>
    <td>The details of the maintenance schedule for the listed router output.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_schedule_type" /></td>
    <td><code>string</code></td>
    <td>The type of maintenance schedule currently associated with the listed router output. (WINDOW)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_bitrate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum bitrate of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="message_count" /></td>
    <td><code>integer</code></td>
    <td>The number of messages associated with the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the router output.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the network interface associated with the router output. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerNetworkInterface:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="output_type" /></td>
    <td><code>string</code></td>
    <td>The type of the router output. (STANDARD, MEDIACONNECT_FLOW, MEDIALIVE_INPUT)</td>
</tr>
<tr>
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The AAmazon Web Services Region where the router output is located.</td>
</tr>
<tr>
    <td><CopyableCode code="routed_input_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the router input associated with the output. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerInput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the association between the router output and its input. (ROUTED, ROUTING, UNROUTED)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_scope" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the router output is configured for Regional or global routing. (REGIONAL, GLOBAL)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The overall state of the router output. (CREATING, STANDBY, STARTING, ACTIVE, STOPPING, DELETING, UPDATING, ERROR, RECOVERING, MIGRATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the router output was last updated.</td>
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
    <td><a href="#batch_get_router_output"><CopyableCode code="batch_get_router_output" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arns"><code>arns</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about multiple router outputs in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#get_router_output"><CopyableCode code="get_router_output" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific router output in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#list_router_outputs"><CopyableCode code="list_router_outputs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of router outputs in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#create_router_output"><CopyableCode code="create_router_output" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a>, <a href="#parameter-MaximumBitrate"><code>MaximumBitrate</code></a>, <a href="#parameter-RoutingScope"><code>RoutingScope</code></a>, <a href="#parameter-Tier"><code>Tier</code></a></td>
    <td></td>
    <td>Creates a new router output in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#update_router_output"><CopyableCode code="update_router_output" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing router output in AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#delete_router_output"><CopyableCode code="delete_router_output" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a router output from AWS Elemental MediaConnect.</td>
</tr>
<tr>
    <td><a href="#take_router_input"><CopyableCode code="take_router_input" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-router_output_arn"><code>router_output_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a router input with a router output in AWS Elemental MediaConnect.</td>
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
    <td>The Amazon Resource Name (ARN) of the router output that you want to delete.</td>
</tr>
<tr id="parameter-arns">
    <td><CopyableCode code="arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the router outputs you want to retrieve information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-router_output_arn">
    <td><CopyableCode code="router_output_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router output that you want to associate with a router input.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of router outputs to return in the response.</td>
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
    defaultValue="batch_get_router_output"
    values={[
        { label: 'batch_get_router_output', value: 'batch_get_router_output' },
        { label: 'get_router_output', value: 'get_router_output' },
        { label: 'list_router_outputs', value: 'list_router_outputs' }
    ]}
>
<TabItem value="batch_get_router_output">

Retrieves information about multiple router outputs in AWS Elemental MediaConnect.

```sql
SELECT
errors,
router_outputs
FROM aws.mediaconnect.router_outputs
WHERE arns = '{{ arns }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_router_output">

Retrieves information about a specific router output in AWS Elemental MediaConnect.

```sql
SELECT
arn,
availability_zone,
configuration,
created_at,
fabric_configuration,
id,
ip_address,
maintenance_configuration,
maintenance_schedule,
maintenance_schedule_type,
maintenance_type,
maximum_bitrate,
messages,
name,
output_type,
region_name,
routed_input_arn,
routed_state,
routing_scope,
state,
stream_details,
tags,
tier,
updated_at
FROM aws.mediaconnect.router_outputs
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_router_outputs">

Retrieves a list of router outputs in AWS Elemental MediaConnect.

```sql
SELECT
arn,
availability_zone,
created_at,
id,
maintenance_schedule,
maintenance_schedule_type,
maximum_bitrate,
message_count,
name,
network_interface_arn,
output_type,
region_name,
routed_input_arn,
routed_state,
routing_scope,
state,
updated_at
FROM aws.mediaconnect.router_outputs
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_router_output"
    values={[
        { label: 'create_router_output', value: 'create_router_output' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_router_output">

Creates a new router output in AWS Elemental MediaConnect.

```sql
INSERT INTO aws.mediaconnect.router_outputs (
Name,
Configuration,
MaximumBitrate,
RoutingScope,
Tier,
RegionName,
AvailabilityZone,
MaintenanceConfiguration,
Tags,
FabricConfiguration,
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
'{{ MaintenanceConfiguration }}',
'{{ Tags }}',
'{{ FabricConfiguration }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
router_output
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: router_outputs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the router_outputs resource.
    - name: Name
      value: "{{ Name }}"
    - name: Configuration
      description: |
        The configuration settings for a router output.
      value:
        Standard:
          NetworkInterfaceArn: "{{ NetworkInterfaceArn }}"
          ProtocolConfiguration:
            Rist:
              DestinationAddress: "{{ DestinationAddress }}"
              DestinationPort: {{ DestinationPort }}
            SrtListener:
              Port: {{ Port }}
              MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
              EncryptionConfiguration:
                EncryptionKey: "{{ EncryptionKey }}"
            SrtCaller:
              DestinationAddress: "{{ DestinationAddress }}"
              DestinationPort: {{ DestinationPort }}
              MinimumLatencyMilliseconds: {{ MinimumLatencyMilliseconds }}
              StreamId: "{{ StreamId }}"
              EncryptionConfiguration:
                EncryptionKey: "{{ EncryptionKey }}"
            Rtp:
              DestinationAddress: "{{ DestinationAddress }}"
              DestinationPort: {{ DestinationPort }}
              ForwardErrorCorrection: "{{ ForwardErrorCorrection }}"
          Protocol: "{{ Protocol }}"
        MediaConnectFlow:
          FlowArn: "{{ FlowArn }}"
          FlowSourceArn: "{{ FlowSourceArn }}"
          DestinationTransitEncryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
        MediaLiveInput:
          MediaLiveInputArn: "{{ MediaLiveInputArn }}"
          MediaLivePipelineId: "{{ MediaLivePipelineId }}"
          DestinationTransitEncryption:
            EncryptionKeyType: "{{ EncryptionKeyType }}"
            EncryptionKeyConfiguration:
              SecretsManager:
                SecretArn: "{{ SecretArn }}"
                RoleArn: "{{ RoleArn }}"
              Automatic: "{{ Automatic }}"
    - name: MaximumBitrate
      value: {{ MaximumBitrate }}
    - name: RoutingScope
      value: "{{ RoutingScope }}"
      valid_values: ['REGIONAL', 'GLOBAL']
    - name: Tier
      value: "{{ Tier }}"
      valid_values: ['OUTPUT_100', 'OUTPUT_50', 'OUTPUT_20']
    - name: RegionName
      value: "{{ RegionName }}"
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
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
    - name: FabricConfiguration
      description: |
        The fabric configuration settings for the router output.
      value:
        RecoveryLatencyMode: "{{ RecoveryLatencyMode }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_router_output"
    values={[
        { label: 'update_router_output', value: 'update_router_output' }
    ]}
>
<TabItem value="update_router_output">

Updates the configuration of an existing router output in AWS Elemental MediaConnect.

```sql
UPDATE aws.mediaconnect.router_outputs
SET 
Name = '{{ Name }}',
Configuration = '{{ Configuration }}',
MaximumBitrate = {{ MaximumBitrate }},
RoutingScope = '{{ RoutingScope }}',
Tier = '{{ Tier }}',
MaintenanceConfiguration = '{{ MaintenanceConfiguration }}',
FabricConfiguration = '{{ FabricConfiguration }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
RETURNING
router_output;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_router_output"
    values={[
        { label: 'delete_router_output', value: 'delete_router_output' }
    ]}
>
<TabItem value="delete_router_output">

Deletes a router output from AWS Elemental MediaConnect.

```sql
DELETE FROM aws.mediaconnect.router_outputs
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="take_router_input"
    values={[
        { label: 'take_router_input', value: 'take_router_input' }
    ]}
>
<TabItem value="take_router_input">

Associates a router input with a router output in AWS Elemental MediaConnect.

```sql
EXEC aws.mediaconnect.router_outputs.take_router_input 
@router_output_arn='{{ router_output_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"RouterInputArn": "{{ RouterInputArn }}"
}'
;
```
</TabItem>
</Tabs>
