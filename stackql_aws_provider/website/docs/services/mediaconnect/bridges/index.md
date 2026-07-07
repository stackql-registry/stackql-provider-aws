--- 
title: bridges
hide_title: false
hide_table_of_contents: false
keywords:
  - bridges
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

Creates, updates, deletes, gets or lists a <code>bridges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bridges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.bridges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bridge"
    values={[
        { label: 'describe_bridge', value: 'describe_bridge' },
        { label: 'list_bridges', value: 'list_bridges' }
    ]}
>
<TabItem value="describe_bridge">

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
    <td><CopyableCode code="BridgeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="BridgeMessages" /></td>
    <td><code>array</code></td>
    <td>Messages with details about the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="BridgeState" /></td>
    <td><code>string</code></td>
    <td>The state of the bridge. (CREATING, STANDBY, STARTING, DEPLOYING, ACTIVE, STOPPING, DELETING, DELETED, START_FAILED, START_PENDING, STOP_FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="EgressGatewayBridge" /></td>
    <td><code>object</code></td>
    <td>An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.</td>
</tr>
<tr>
    <td><CopyableCode code="IngressGatewayBridge" /></td>
    <td><code>object</code></td>
    <td>An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="Outputs" /></td>
    <td><code>array</code></td>
    <td>The outputs on this bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacementArn" /></td>
    <td><code>string</code></td>
    <td>The placement Amazon Resource Number (ARN) of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceFailoverConfig" /></td>
    <td><code>object</code></td>
    <td>The settings for source failover.</td>
</tr>
<tr>
    <td><CopyableCode code="Sources" /></td>
    <td><code>array</code></td>
    <td>The sources on this bridge.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bridges">

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
    <td><CopyableCode code="BridgeArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="BridgeState" /></td>
    <td><code>string</code></td>
    <td>The state of the bridge. (CREATING, STANDBY, STARTING, DEPLOYING, ACTIVE, STOPPING, DELETING, DELETED, START_FAILED, START_PENDING, STOP_FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="BridgeType" /></td>
    <td><code>string</code></td>
    <td>The type of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the bridge.</td>
</tr>
<tr>
    <td><CopyableCode code="PlacementArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the gateway associated with the bridge.</td>
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
    <td><a href="#describe_bridge"><CopyableCode code="describe_bridge" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the details of a bridge.</td>
</tr>
<tr>
    <td><a href="#list_bridges"><CopyableCode code="list_bridges" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filterArn"><code>filterArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a list of bridges that are associated with this account and an optionally specified Amazon Resource Name (ARN). This request returns a paginated result.</td>
</tr>
<tr>
    <td><a href="#create_bridge"><CopyableCode code="create_bridge" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlacementArn"><code>PlacementArn</code></a></td>
    <td></td>
    <td>Creates a new bridge. The request must include one source.</td>
</tr>
<tr>
    <td><a href="#remove_bridge_output"><CopyableCode code="remove_bridge_output" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-output_name"><code>output_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an output from a bridge.</td>
</tr>
<tr>
    <td><a href="#remove_bridge_source"><CopyableCode code="remove_bridge_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-source_name"><code>source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a source from a bridge.</td>
</tr>
<tr>
    <td><a href="#update_bridge_state"><CopyableCode code="update_bridge_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DesiredState"><code>DesiredState</code></a></td>
    <td></td>
    <td>Updates the bridge state.</td>
</tr>
<tr>
    <td><a href="#update_bridge"><CopyableCode code="update_bridge" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the bridge.</td>
</tr>
<tr>
    <td><a href="#delete_bridge"><CopyableCode code="delete_bridge" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a bridge. Before you can delete a bridge, you must stop the bridge.</td>
</tr>
<tr>
    <td><a href="#add_bridge_outputs"><CopyableCode code="add_bridge_outputs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds outputs to an existing bridge.</td>
</tr>
<tr>
    <td><a href="#add_bridge_sources"><CopyableCode code="add_bridge_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds sources to an existing bridge.</td>
</tr>
<tr>
    <td><a href="#update_bridge_output"><CopyableCode code="update_bridge_output" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-output_name"><code>output_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing bridge output.</td>
</tr>
<tr>
    <td><a href="#update_bridge_source"><CopyableCode code="update_bridge_source" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bridge_arn"><code>bridge_arn</code></a>, <a href="#parameter-source_name"><code>source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing bridge source.</td>
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
<tr id="parameter-bridge_arn">
    <td><CopyableCode code="bridge_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the bridge that you want to update.</td>
</tr>
<tr id="parameter-output_name">
    <td><CopyableCode code="output_name" /></td>
    <td><code>string</code></td>
    <td>Tname of the output that you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_name">
    <td><CopyableCode code="source_name" /></td>
    <td><code>string</code></td>
    <td>The name of the source that you want to update.</td>
</tr>
<tr id="parameter-filterArn">
    <td><CopyableCode code="filterArn" /></td>
    <td><code>string</code></td>
    <td>Filter the list results to display only the bridges associated with the selected ARN.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListBridges request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the batch of results that you want to see. For example, you submit a ListBridges request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListBridges request a second time and specify the NextToken value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bridge"
    values={[
        { label: 'describe_bridge', value: 'describe_bridge' },
        { label: 'list_bridges', value: 'list_bridges' }
    ]}
>
<TabItem value="describe_bridge">

Displays the details of a bridge.

```sql
SELECT
BridgeArn,
BridgeMessages,
BridgeState,
EgressGatewayBridge,
IngressGatewayBridge,
Name,
Outputs,
PlacementArn,
SourceFailoverConfig,
Sources
FROM aws.mediaconnect.bridges
WHERE bridge_arn = '{{ bridge_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bridges">

Displays a list of bridges that are associated with this account and an optionally specified Amazon Resource Name (ARN). This request returns a paginated result.

```sql
SELECT
BridgeArn,
BridgeState,
BridgeType,
Name,
PlacementArn
FROM aws.mediaconnect.bridges
WHERE region = '{{ region }}' -- required
AND filterArn = '{{ filterArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bridge"
    values={[
        { label: 'create_bridge', value: 'create_bridge' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bridge">

Creates a new bridge. The request must include one source.

```sql
INSERT INTO aws.mediaconnect.bridges (
EgressGatewayBridge,
IngressGatewayBridge,
Name,
Outputs,
PlacementArn,
SourceFailoverConfig,
Sources,
region
)
SELECT 
'{{ EgressGatewayBridge }}',
'{{ IngressGatewayBridge }}',
'{{ Name }}',
'{{ Outputs }}',
'{{ PlacementArn }}' /* required */,
'{{ SourceFailoverConfig }}',
'{{ Sources }}',
'{{ region }}'
RETURNING
Bridge
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bridges
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bridges resource.
    - name: EgressGatewayBridge
      description: |
        Create a bridge with the egress bridge type. An egress bridge is a cloud-to-ground bridge. The content comes from an existing MediaConnect flow and is delivered to your premises.
      value:
        MaxBitrate: {{ MaxBitrate }}
    - name: IngressGatewayBridge
      description: |
        Create a bridge with the ingress bridge type. An ingress bridge is a ground-to-cloud bridge. The content originates at your premises and is delivered to the cloud.
      value:
        MaxBitrate: {{ MaxBitrate }}
        MaxOutputs: {{ MaxOutputs }}
    - name: Name
      value: "{{ Name }}"
    - name: Outputs
      value:
        - NetworkOutput:
            IpAddress: "{{ IpAddress }}"
            Name: "{{ Name }}"
            NetworkName: "{{ NetworkName }}"
            Port: {{ Port }}
            Protocol: "{{ Protocol }}"
            Ttl: {{ Ttl }}
    - name: PlacementArn
      value: "{{ PlacementArn }}"
    - name: SourceFailoverConfig
      description: |
        The settings for source failover.
      value:
        FailoverMode: "{{ FailoverMode }}"
        RecoveryWindow: {{ RecoveryWindow }}
        SourcePriority:
          PrimarySource: "{{ PrimarySource }}"
        State: "{{ State }}"
    - name: Sources
      value:
        - FlowSource:
            FlowArn: "{{ FlowArn }}"
            FlowVpcInterfaceAttachment:
              VpcInterfaceName: "{{ VpcInterfaceName }}"
            Name: "{{ Name }}"
          NetworkSource:
            MulticastIp: "{{ MulticastIp }}"
            MulticastSourceSettings:
              MulticastSourceIp: "{{ MulticastSourceIp }}"
            Name: "{{ Name }}"
            NetworkName: "{{ NetworkName }}"
            Port: {{ Port }}
            Protocol: "{{ Protocol }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_bridge_output"
    values={[
        { label: 'remove_bridge_output', value: 'remove_bridge_output' },
        { label: 'remove_bridge_source', value: 'remove_bridge_source' },
        { label: 'update_bridge_state', value: 'update_bridge_state' },
        { label: 'update_bridge', value: 'update_bridge' }
    ]}
>
<TabItem value="remove_bridge_output">

Removes an output from a bridge.

```sql
UPDATE aws.mediaconnect.bridges
SET 
-- No updatable properties
WHERE 
bridge_arn = '{{ bridge_arn }}' --required
AND output_name = '{{ output_name }}' --required
AND region = '{{ region }}' --required
RETURNING
BridgeArn,
OutputName;
```
</TabItem>
<TabItem value="remove_bridge_source">

Removes a source from a bridge.

```sql
UPDATE aws.mediaconnect.bridges
SET 
-- No updatable properties
WHERE 
bridge_arn = '{{ bridge_arn }}' --required
AND source_name = '{{ source_name }}' --required
AND region = '{{ region }}' --required
RETURNING
BridgeArn,
SourceName;
```
</TabItem>
<TabItem value="update_bridge_state">

Updates the bridge state.

```sql
UPDATE aws.mediaconnect.bridges
SET 
DesiredState = '{{ DesiredState }}'
WHERE 
bridge_arn = '{{ bridge_arn }}' --required
AND region = '{{ region }}' --required
AND DesiredState = '{{ DesiredState }}' --required
RETURNING
BridgeArn,
DesiredState;
```
</TabItem>
<TabItem value="update_bridge">

Updates the bridge.

```sql
UPDATE aws.mediaconnect.bridges
SET 
EgressGatewayBridge = '{{ EgressGatewayBridge }}',
IngressGatewayBridge = '{{ IngressGatewayBridge }}',
SourceFailoverConfig = '{{ SourceFailoverConfig }}'
WHERE 
bridge_arn = '{{ bridge_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
Bridge;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bridge"
    values={[
        { label: 'delete_bridge', value: 'delete_bridge' }
    ]}
>
<TabItem value="delete_bridge">

Deletes a bridge. Before you can delete a bridge, you must stop the bridge.

```sql
DELETE FROM aws.mediaconnect.bridges
WHERE bridge_arn = '{{ bridge_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_bridge_outputs"
    values={[
        { label: 'add_bridge_outputs', value: 'add_bridge_outputs' },
        { label: 'add_bridge_sources', value: 'add_bridge_sources' },
        { label: 'update_bridge_output', value: 'update_bridge_output' },
        { label: 'update_bridge_source', value: 'update_bridge_source' }
    ]}
>
<TabItem value="add_bridge_outputs">

Adds outputs to an existing bridge.

```sql
EXEC aws.mediaconnect.bridges.add_bridge_outputs 
@bridge_arn='{{ bridge_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Outputs": "{{ Outputs }}"
}'
;
```
</TabItem>
<TabItem value="add_bridge_sources">

Adds sources to an existing bridge.

```sql
EXEC aws.mediaconnect.bridges.add_bridge_sources 
@bridge_arn='{{ bridge_arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Sources": "{{ Sources }}"
}'
;
```
</TabItem>
<TabItem value="update_bridge_output">

Updates an existing bridge output.

```sql
EXEC aws.mediaconnect.bridges.update_bridge_output 
@bridge_arn='{{ bridge_arn }}' --required, 
@output_name='{{ output_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"NetworkOutput": "{{ NetworkOutput }}"
}'
;
```
</TabItem>
<TabItem value="update_bridge_source">

Updates an existing bridge source.

```sql
EXEC aws.mediaconnect.bridges.update_bridge_source 
@bridge_arn='{{ bridge_arn }}' --required, 
@source_name='{{ source_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"FlowSource": "{{ FlowSource }}", 
"NetworkSource": "{{ NetworkSource }}"
}'
;
```
</TabItem>
</Tabs>
