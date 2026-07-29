--- 
title: application_instance_node_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - application_instance_node_instances
  - panorama
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

Creates, updates, deletes, gets or lists an <code>application_instance_node_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_instance_node_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.application_instance_node_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_application_instance_node_instances"
    values={[
        { label: 'list_application_instance_node_instances', value: 'list_application_instance_node_instances' }
    ]}
>
<TabItem value="list_application_instance_node_instances">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="node_instances" /></td>
    <td><code>array</code></td>
    <td>A list of node instances.</td>
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
    <td><a href="#list_application_instance_node_instances"><CopyableCode code="list_application_instance_node_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_instance_id"><code>application_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of application node instances.</td>
</tr>
<tr>
    <td><a href="#signal_application_instance_node_instances"><CopyableCode code="signal_application_instance_node_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application_instance_id"><code>application_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NodeSignals"><code>NodeSignals</code></a></td>
    <td></td>
    <td>Signal camera nodes to stop or resume.</td>
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
<tr id="parameter-application_instance_id">
    <td><CopyableCode code="application_instance_id" /></td>
    <td><code>string</code></td>
    <td>An application instance ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of node instances to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_application_instance_node_instances"
    values={[
        { label: 'list_application_instance_node_instances', value: 'list_application_instance_node_instances' }
    ]}
>
<TabItem value="list_application_instance_node_instances">

Returns a list of application node instances.

```sql
SELECT
next_token,
node_instances
FROM aws.panorama.application_instance_node_instances
WHERE application_instance_id = '{{ application_instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="signal_application_instance_node_instances"
    values={[
        { label: 'signal_application_instance_node_instances', value: 'signal_application_instance_node_instances' }
    ]}
>
<TabItem value="signal_application_instance_node_instances">

Signal camera nodes to stop or resume.

```sql
EXEC aws.panorama.application_instance_node_instances.signal_application_instance_node_instances 
@application_instance_id='{{ application_instance_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"NodeSignals": "{{ NodeSignals }}"
}'
;
```
</TabItem>
</Tabs>
