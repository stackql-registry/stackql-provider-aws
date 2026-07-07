--- 
title: traffic_mirror_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_filters
  - ec2
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

Creates, updates, deletes, gets or lists a <code>traffic_mirror_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_mirror_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.traffic_mirror_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_mirror_filters"
    values={[
        { label: 'describe_traffic_mirror_filters', value: 'describe_traffic_mirror_filters' }
    ]}
>
<TabItem value="describe_traffic_mirror_filters">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressFilterRules" /></td>
    <td><code>string</code></td>
    <td>Information about the egress rules that are associated with the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="IngressFilterRules" /></td>
    <td><code>string</code></td>
    <td>Information about the ingress rules that are associated with the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkServices" /></td>
    <td><code>string</code></td>
    <td>The network service traffic that is associated with the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
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
    <td><a href="#describe_traffic_mirror_filters"><CopyableCode code="describe_traffic_mirror_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes one or more Traffic Mirror filters.</td>
</tr>
<tr>
    <td><a href="#create_traffic_mirror_filter"><CopyableCode code="create_traffic_mirror_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a Traffic Mirror filter. A Traffic Mirror filter is a set of rules that defines the traffic to mirror. By default, no traffic is mirrored. To mirror traffic, use CreateTrafficMirrorFilterRule to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored. You can also use ModifyTrafficMirrorFilterNetworkServices to mirror supported network services.</td>
</tr>
<tr>
    <td><a href="#modify_traffic_mirror_filter_network_services"><CopyableCode code="modify_traffic_mirror_filter_network_services" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AddNetworkService"><code>AddNetworkService</code></a>, <a href="#parameter-RemoveNetworkService"><code>RemoveNetworkService</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Allows or restricts mirroring network services. By default, Amazon DNS network services are not eligible for Traffic Mirror. Use AddNetworkServices to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored. When you no longer want to mirror network services, use RemoveNetworkServices to remove the network services from the Traffic Mirror filter.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_mirror_filter"><CopyableCode code="delete_traffic_mirror_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Traffic Mirror filter. You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</td>
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
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddNetworkService">
    <td><CopyableCode code="AddNetworkService" /></td>
    <td><code>array</code></td>
    <td>The network service, for example Amazon DNS, that you want to mirror.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the Traffic Mirror filter.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: description: The Traffic Mirror filter description. traffic-mirror-filter-id: The ID of the Traffic Mirror filter.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-RemoveNetworkService">
    <td><CopyableCode code="RemoveNetworkService" /></td>
    <td><code>array</code></td>
    <td>The network service, for example Amazon DNS, that you no longer want to mirror.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to a Traffic Mirror filter.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>array</code></td>
    <td>The ID of the Traffic Mirror filter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_mirror_filters"
    values={[
        { label: 'describe_traffic_mirror_filters', value: 'describe_traffic_mirror_filters' }
    ]}
>
<TabItem value="describe_traffic_mirror_filters">

Describes one or more Traffic Mirror filters.

```sql
SELECT
Description,
EgressFilterRules,
IngressFilterRules,
NetworkServices,
Tags,
TrafficMirrorFilterId
FROM aws.ec2.traffic_mirror_filters
WHERE region = '{{ region }}' -- required
AND TrafficMirrorFilterId = '{{ TrafficMirrorFilterId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_mirror_filter"
    values={[
        { label: 'create_traffic_mirror_filter', value: 'create_traffic_mirror_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_mirror_filter">

Creates a Traffic Mirror filter. A Traffic Mirror filter is a set of rules that defines the traffic to mirror. By default, no traffic is mirrored. To mirror traffic, use CreateTrafficMirrorFilterRule to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored. You can also use ModifyTrafficMirrorFilterNetworkServices to mirror supported network services.

```sql
INSERT INTO aws.ec2.traffic_mirror_filters (
region,
Description,
TagSpecification,
DryRun,
ClientToken
)
SELECT 
'{{ region }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ ClientToken }}'
RETURNING
Description,
EgressFilterRules,
IngressFilterRules,
NetworkServices,
Tags,
TrafficMirrorFilterId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_mirror_filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_mirror_filters resource.
    - name: Description
      value: "{{ Description }}"
      description: The description of the Traffic Mirror filter.
      description: The description of the Traffic Mirror filter.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to a Traffic Mirror filter.
      description: The tags to assign to a Traffic Mirror filter.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_traffic_mirror_filter_network_services"
    values={[
        { label: 'modify_traffic_mirror_filter_network_services', value: 'modify_traffic_mirror_filter_network_services' }
    ]}
>
<TabItem value="modify_traffic_mirror_filter_network_services">

Allows or restricts mirroring network services. By default, Amazon DNS network services are not eligible for Traffic Mirror. Use AddNetworkServices to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored. When you no longer want to mirror network services, use RemoveNetworkServices to remove the network services from the Traffic Mirror filter.

```sql
UPDATE aws.ec2.traffic_mirror_filters
SET 
-- No updatable properties
WHERE 
TrafficMirrorFilterId = '{{ TrafficMirrorFilterId }}' --required
AND region = '{{ region }}' --required
AND AddNetworkService = '{{ AddNetworkService}}'
AND RemoveNetworkService = '{{ RemoveNetworkService}}'
AND DryRun = {{ DryRun}}
RETURNING
Description,
EgressFilterRules,
IngressFilterRules,
NetworkServices,
Tags,
TrafficMirrorFilterId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_mirror_filter"
    values={[
        { label: 'delete_traffic_mirror_filter', value: 'delete_traffic_mirror_filter' }
    ]}
>
<TabItem value="delete_traffic_mirror_filter">

Deletes the specified Traffic Mirror filter. You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.

```sql
DELETE FROM aws.ec2.traffic_mirror_filters
WHERE TrafficMirrorFilterId = '{{ TrafficMirrorFilterId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
