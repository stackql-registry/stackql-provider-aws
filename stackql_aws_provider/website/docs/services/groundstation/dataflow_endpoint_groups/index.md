--- 
title: dataflow_endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataflow_endpoint_groups
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

Creates, updates, deletes, gets or lists a <code>dataflow_endpoint_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataflow_endpoint_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.dataflow_endpoint_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dataflow_endpoint_group"
    values={[
        { label: 'get_dataflow_endpoint_group', value: 'get_dataflow_endpoint_group' },
        { label: 'list_dataflow_endpoint_groups', value: 'list_dataflow_endpoint_groups' }
    ]}
>
<TabItem value="get_dataflow_endpoint_group">

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
    <td><CopyableCode code="contactPostPassDurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.</td>
</tr>
<tr>
    <td><CopyableCode code="contactPrePassDurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.</td>
</tr>
<tr>
    <td><CopyableCode code="dataflowEndpointGroupArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a dataflow endpoint group. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:dataflow-endpoint-group/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataflowEndpointGroupId" /></td>
    <td><code>string</code></td>
    <td>UUID of a dataflow endpoint group. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpointsDetails" /></td>
    <td><code>array</code></td>
    <td>Details of a dataflow endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a dataflow endpoint group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataflow_endpoint_groups">

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
    <td><CopyableCode code="dataflowEndpointGroupArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a dataflow endpoint group. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:dataflow-endpoint-group/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataflowEndpointGroupId" /></td>
    <td><code>string</code></td>
    <td>UUID of a dataflow endpoint group. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_dataflow_endpoint_group"><CopyableCode code="get_dataflow_endpoint_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataflow_endpoint_group_id"><code>dataflow_endpoint_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the dataflow endpoint group.</td>
</tr>
<tr>
    <td><a href="#list_dataflow_endpoint_groups"><CopyableCode code="list_dataflow_endpoint_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of DataflowEndpoint groups.</td>
</tr>
<tr>
    <td><a href="#create_dataflow_endpoint_group"><CopyableCode code="create_dataflow_endpoint_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointDetails"><code>endpointDetails</code></a></td>
    <td></td>
    <td>Creates a DataflowEndpoint group containing the specified list of DataflowEndpoint objects. The name field in each endpoint is used in your mission profile DataflowEndpointConfig to specify which endpoints to use during a contact. When a contact uses multiple DataflowEndpointConfig objects, each Config must match a DataflowEndpoint in the same group.</td>
</tr>
<tr>
    <td><a href="#create_dataflow_endpoint_group_v2"><CopyableCode code="create_dataflow_endpoint_group_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpoints"><code>endpoints</code></a></td>
    <td></td>
    <td>Creates a DataflowEndpoint group containing the specified list of Ground Station Agent based endpoints. The name field in each endpoint is used in your mission profile DataflowEndpointConfig to specify which endpoints to use during a contact. When a contact uses multiple DataflowEndpointConfig objects, each Config must match a DataflowEndpoint in the same group.</td>
</tr>
<tr>
    <td><a href="#delete_dataflow_endpoint_group"><CopyableCode code="delete_dataflow_endpoint_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataflow_endpoint_group_id"><code>dataflow_endpoint_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataflow endpoint group.</td>
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
<tr id="parameter-dataflow_endpoint_group_id">
    <td><CopyableCode code="dataflow_endpoint_group_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a dataflow endpoint group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of dataflow endpoint groups returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListDataflowEndpointGroups call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dataflow_endpoint_group"
    values={[
        { label: 'get_dataflow_endpoint_group', value: 'get_dataflow_endpoint_group' },
        { label: 'list_dataflow_endpoint_groups', value: 'list_dataflow_endpoint_groups' }
    ]}
>
<TabItem value="get_dataflow_endpoint_group">

Returns the dataflow endpoint group.

```sql
SELECT
contactPostPassDurationSeconds,
contactPrePassDurationSeconds,
dataflowEndpointGroupArn,
dataflowEndpointGroupId,
endpointsDetails,
tags
FROM aws.groundstation.dataflow_endpoint_groups
WHERE dataflow_endpoint_group_id = '{{ dataflow_endpoint_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataflow_endpoint_groups">

Returns a list of DataflowEndpoint groups.

```sql
SELECT
dataflowEndpointGroupArn,
dataflowEndpointGroupId
FROM aws.groundstation.dataflow_endpoint_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataflow_endpoint_group"
    values={[
        { label: 'create_dataflow_endpoint_group', value: 'create_dataflow_endpoint_group' },
        { label: 'create_dataflow_endpoint_group_v2', value: 'create_dataflow_endpoint_group_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataflow_endpoint_group">

Creates a DataflowEndpoint group containing the specified list of DataflowEndpoint objects. The name field in each endpoint is used in your mission profile DataflowEndpointConfig to specify which endpoints to use during a contact. When a contact uses multiple DataflowEndpointConfig objects, each Config must match a DataflowEndpoint in the same group.

```sql
INSERT INTO aws.groundstation.dataflow_endpoint_groups (
endpointDetails,
tags,
contactPrePassDurationSeconds,
contactPostPassDurationSeconds,
region
)
SELECT 
'{{ endpointDetails }}' /* required */,
'{{ tags }}',
{{ contactPrePassDurationSeconds }},
{{ contactPostPassDurationSeconds }},
'{{ region }}'
RETURNING
dataflowEndpointGroupId
;
```
</TabItem>
<TabItem value="create_dataflow_endpoint_group_v2">

Creates a DataflowEndpoint group containing the specified list of Ground Station Agent based endpoints. The name field in each endpoint is used in your mission profile DataflowEndpointConfig to specify which endpoints to use during a contact. When a contact uses multiple DataflowEndpointConfig objects, each Config must match a DataflowEndpoint in the same group.

```sql
INSERT INTO aws.groundstation.dataflow_endpoint_groups (
endpoints,
contactPrePassDurationSeconds,
contactPostPassDurationSeconds,
tags,
region
)
SELECT 
'{{ endpoints }}' /* required */,
{{ contactPrePassDurationSeconds }},
{{ contactPostPassDurationSeconds }},
'{{ tags }}',
'{{ region }}'
RETURNING
dataflowEndpointGroupId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataflow_endpoint_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataflow_endpoint_groups resource.
    - name: endpointDetails
      value:
        - securityDetails:
            subnetIds:
              - "{{ subnetIds }}"
            securityGroupIds:
              - "{{ securityGroupIds }}"
            roleArn: "{{ roleArn }}"
          endpoint:
            name: "{{ name }}"
            address:
              name: "{{ name }}"
              port: {{ port }}
            status: "{{ status }}"
            mtu: {{ mtu }}
          awsGroundStationAgentEndpoint:
            name: "{{ name }}"
            egressAddress:
              socketAddress:
                name: "{{ name }}"
                port: {{ port }}
              mtu: {{ mtu }}
            ingressAddress:
              socketAddress:
                name: "{{ name }}"
                portRange:
                  minimum_: {{ minimum_ }}
                  maximum_: {{ maximum_ }}
              mtu: {{ mtu }}
            agentStatus: "{{ agentStatus }}"
            auditResults: "{{ auditResults }}"
          uplinkAwsGroundStationAgentEndpoint:
            name: "{{ name }}"
            dataflowDetails:
              agentConnectionDetails:
                ingressAddressAndPort:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
                agentIpAndPortAddress:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
            agentStatus: "{{ agentStatus }}"
            auditResults: "{{ auditResults }}"
          downlinkAwsGroundStationAgentEndpoint:
            name: "{{ name }}"
            dataflowDetails:
              agentConnectionDetails:
                agentIpAndPortAddress:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
                egressAddressAndPort:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
            agentStatus: "{{ agentStatus }}"
            auditResults: "{{ auditResults }}"
          healthStatus: "{{ healthStatus }}"
          healthReasons: "{{ healthReasons }}"
    - name: tags
      value: "{{ tags }}"
    - name: contactPrePassDurationSeconds
      value: {{ contactPrePassDurationSeconds }}
    - name: contactPostPassDurationSeconds
      value: {{ contactPostPassDurationSeconds }}
    - name: endpoints
      value:
        - uplinkAwsGroundStationAgentEndpoint:
            name: "{{ name }}"
            dataflowDetails:
              agentConnectionDetails:
                ingressAddressAndPort:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
                agentIpAndPortAddress:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
          downlinkAwsGroundStationAgentEndpoint:
            name: "{{ name }}"
            dataflowDetails:
              agentConnectionDetails:
                agentIpAndPortAddress:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
                egressAddressAndPort:
                  socketAddress: "{{ socketAddress }}"
                  mtu: {{ mtu }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataflow_endpoint_group"
    values={[
        { label: 'delete_dataflow_endpoint_group', value: 'delete_dataflow_endpoint_group' }
    ]}
>
<TabItem value="delete_dataflow_endpoint_group">

Deletes a dataflow endpoint group.

```sql
DELETE FROM aws.groundstation.dataflow_endpoint_groups
WHERE dataflow_endpoint_group_id = '{{ dataflow_endpoint_group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
