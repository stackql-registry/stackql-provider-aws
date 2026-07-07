--- 
title: targets
hide_title: false
hide_table_of_contents: false
keywords:
  - targets
  - vpc_lattice
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

Creates, updates, deletes, gets or lists a <code>targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.vpc_lattice.targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_targets"
    values={[
        { label: 'list_targets', value: 'list_targets' }
    ]}
>
<TabItem value="list_targets">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target. If the target group type is INSTANCE, this is an instance ID. If the target group type is IP, this is an IP address. If the target group type is LAMBDA, this is the ARN of a Lambda function. If the target type is ALB, this is the ARN of an Application Load Balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port on which the target is listening.</td>
</tr>
<tr>
    <td><CopyableCode code="reasonCode" /></td>
    <td><code>string</code></td>
    <td>The code for why the target status is what it is.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the target. DRAINING: The target is being deregistered. No new connections are sent to this target while current connections are being drained. The default draining time is 1 minute. UNAVAILABLE: Health checks are unavailable for the target group. HEALTHY: The target is healthy. UNHEALTHY: The target is unhealthy. INITIAL: Initial health checks on the target are being performed. UNUSED: Target group is not used in a service. (DRAINING, UNAVAILABLE, HEALTHY, UNHEALTHY, INITIAL, UNUSED)</td>
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
    <td><a href="#list_targets"><CopyableCode code="list_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target.</td>
</tr>
<tr>
    <td><a href="#register_targets"><CopyableCode code="register_targets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.</td>
</tr>
<tr>
    <td><a href="#deregister_targets"><CopyableCode code="deregister_targets" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-target_group_identifier"><code>target_group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters the specified targets from the specified target group.</td>
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
<tr id="parameter-target_group_identifier">
    <td><CopyableCode code="target_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the target group.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_targets"
    values={[
        { label: 'list_targets', value: 'list_targets' }
    ]}
>
<TabItem value="list_targets">

Lists the targets for the target group. By default, all targets are included. You can use this API to check the health status of targets. You can also ﬁlter the results by target.

```sql
SELECT
id,
port,
reasonCode,
status
FROM aws.vpc_lattice.targets
WHERE target_group_identifier = '{{ target_group_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_targets"
    values={[
        { label: 'register_targets', value: 'register_targets' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_targets">

Registers the targets with the target group. If it's a Lambda target, you can only have one target in a target group.

```sql
INSERT INTO aws.vpc_lattice.targets (
targets,
target_group_identifier,
region
)
SELECT 
'{{ targets }}' /* required */,
'{{ target_group_identifier }}',
'{{ region }}'
RETURNING
successful,
unsuccessful
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: targets
  props:
    - name: target_group_identifier
      value: "{{ target_group_identifier }}"
      description: Required parameter for the targets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the targets resource.
    - name: targets
      value:
        - id: "{{ id }}"
          port: {{ port }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_targets"
    values={[
        { label: 'deregister_targets', value: 'deregister_targets' }
    ]}
>
<TabItem value="deregister_targets">

Deregisters the specified targets from the specified target group.

```sql
DELETE FROM aws.vpc_lattice.targets
WHERE target_group_identifier = '{{ target_group_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
